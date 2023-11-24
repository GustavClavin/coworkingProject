import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { AuthenticatedUser, Credentials } from "../types/types";
import { createUser, loginUser, logoutUser } from "../helpers/apiCalls";
import { getUserLocalStorage, saveUserLocalStorage } from "../helpers/localStorage";


type UserContextType = {
    user: AuthenticatedUser | null
    error: string | null
    login: (credentials: Credentials) => void
    logout: (user: AuthenticatedUser) => void
    registerAndLogin: (credentials: Credentials) => void
    clearError: () => void
    
}

const defaultState: UserContextType = {
    user: null,
    error: null,
    login: (credentials) => {},
    logout: (user) => {},
    registerAndLogin: (credentials) => {},
    clearError: () => {},
   
}

const UserContext = createContext<UserContextType>(defaultState)

const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<AuthenticatedUser | null>(defaultState.user)
    const [error, setError] = useState<string | null>(defaultState.error)
    
    useEffect(() => {
        if(!user){
            try {
                const autoLogin = async () => {
                    const _user = await getUserLocalStorage()
                    setUser(_user)
                }
                autoLogin()
            } catch (error) {
                console.log('Could not log in saved user')
            }
        }
    }, [user])

    const login = async (credentials: Credentials) => {
        const response = await loginUser(credentials)
            if(response.token){
                setUser(response)
                saveUserLocalStorage(response)
                
                return
            }
            setError(response.message)
    }

    const registerAndLogin = async (credentials: Credentials) => {
            const response = await createUser(credentials)
            if(response.token){
                setUser(response)
                saveUserLocalStorage(response)
                return
            }
            setError(response.message)
    }
    
    const logout = async (user: AuthenticatedUser) => {
        await logoutUser(user)
        saveUserLocalStorage(null)
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