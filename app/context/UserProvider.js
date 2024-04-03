import React from 'react'
import { useState, createContext } from 'react'
import axios from 'axios'


export const UserContext = createContext({})

export default function UserProvider ({children}) {
    children: React.ReactNode
    const [userState, setUserState] = useState({
        user: {}, 
        token: "",
        
    })

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    function logout() {
        console.log("logout")
    }
    function checkUser() {
        console.log('user Check')
    }

    return (
        <UserContext.Provider
            value = {{
                ...userState,
                signup,
                login

            }}
        >
            {children}

        </UserContext.Provider>
    )
}