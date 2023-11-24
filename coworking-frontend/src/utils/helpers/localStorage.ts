import { AuthenticatedUser, Credentials } from "../types/types";
const bcrypt = require('bcryptjs')

const USER_STORAGE_KEY = '@LS_COWORKING_USER';

export const saveUserLocalStorage = async (user: AuthenticatedUser | null) => {
    
    const stringifiedUser = JSON.stringify(user)
    localStorage.setItem(USER_STORAGE_KEY, stringifiedUser)
}

export const getUserLocalStorage = async () => {
    const user = localStorage.getItem(USER_STORAGE_KEY)
    
    return user ? JSON.parse(user) : 'NO USER'
}
