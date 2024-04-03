import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {API_URL} from '@/config/index.js'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)


    // Register User

    const register = async (user) => {
        console.log(user)
    }

    //Login User 
    const login = async ({email, password}) => {
        console.log(user)
    }
    //Logout User
    const logout = async () => {
        console.log('user has logged out')
    }

    //Check if user is logged in
    const checkUser = async (user) => {
        console.log('user Check')
    }

    return (
        <AuthContext.Provider  value={{user, error, register, login, logout, checkUser}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext