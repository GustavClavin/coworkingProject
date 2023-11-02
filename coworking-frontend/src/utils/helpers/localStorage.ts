import { Credentials } from "../types/interfaces";
const bcrypt = require('bcryptjs')

const USER_STORAGE_KEY = '@LS_WOWORKING_USER';

export const saveUserLocalStorage = async (credentials: Credentials) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(credentials.password, salt)
    const jsonUser = {email: credentials.email, password: hash}
    const stringifiedUser = JSON.stringify(jsonUser)
    localStorage.setItem(USER_STORAGE_KEY, stringifiedUser)
}

export const getUserLocalStorage = async () => {
    const hashedUser = localStorage.getItem(USER_STORAGE_KEY)
    return hashedUser ? JSON.parse(hashedUser) : null
}
