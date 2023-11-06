import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { AuthenticatedUser, Credentials } from "../types/types";
import { createUser, loginUser, logoutUser } from "../helpers/apiCalls";
import { getUserLocalStorage, saveUserLocalStorage } from "../helpers/localStorage";
const bcrypt = require('bcryptjs')

type UserContextType = {
    user: AuthenticatedUser | null
    error: string | null
    login: (credentials: Credentials) => void
    logout: (user: AuthenticatedUser) => void
    registerAndLogin: (credentials: Credentials) => void
    clearError: () => void
    //autoLogin: () => void
}

const defaultState: UserContextType = {
    user: null,
    error: null,
    login: (credentials) => {},
    logout: (user) => {},
    registerAndLogin: (credentials) => {},
    clearError: () => {},
    //autoLogin: () => {}
}

const UserContext = createContext<UserContextType>(defaultState)

const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<AuthenticatedUser | null>(defaultState.user)
    const [error, setError] = useState<string | null>(defaultState.error)
    
    /* useEffect(() => {
        if(!user){
            try {
                const autoLogin = async () => {
                    const hashedUser = await getUserLocalStorage()
                    const _user = ???
                    await login(_user)
                }
                loginSavedUser()
            } catch (error) {
                console.log('Could not log in saved user')
            }
        }
    }, [user]) */

    const login = async (credentials: Credentials) => {
        const response = await loginUser(credentials)
            if(response.token){
                setUser(response)
                saveUserLocalStorage(credentials)
                return
            }
            setError(response.message)
    }

    const registerAndLogin = async (credentials: Credentials) => {
            const response = await createUser(credentials)
            if(response.token){
                setUser(response)
                return
            }
            setError(response.message)
    }
    
    const logout = async (user: AuthenticatedUser) => {
        await logoutUser(user)
        setUser(null)
    }

    const clearError = () => {
        setError('')
    }


    return(
        <UserContext.Provider value={{ user, error, login, logout, registerAndLogin, clearError}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    const user = useContext(UserContext)
    return user
}

export {
    UserProvider,
    useUser
}