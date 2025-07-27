// context/AuthContext.js
import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  const [error, setError] = useState(null)

  const register = async (userData) => {
    console.log('register user:', userData)
  }

  const login = async ({ email, password }) => {
    console.log('login user:', email, password)
  }

  const logout = async () => {
    console.log('logout')
  }

  const checkUser = async () => {
    console.log('check user')
  }

  return (
    <AuthContext.Provider
      value={{ user, token, error, register, login, logout, checkUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default UserProvider
