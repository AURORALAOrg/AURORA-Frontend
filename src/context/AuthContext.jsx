"use client"

import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// API base URL
const API_BASE_URL = "https://aura-backend-888z.onrender.com/api/v1"

// Create the context with default values
const AuthContext = createContext({
  user: null,
  // isLoading: false,
  isAuthenticated: false,
  login: async () => { },
  register: async () => { },
  logout: async () => { },
  error: null,
})

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  // Login function
  const login = async (email, password) => {
    try {
      setError(null)

      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      })

      // Store token in localStorage
      if (response.data.token) {
        localStorage.setItem("authenticationToken", response.data.token)
      }

      setUser(response.data.user)
    } catch (err) {
      console.log(err)
      setError(err.response?.data?.message || "Failed to login. Please try again.")
      throw err
    } finally {
      // setIsLoading(false)
    }
  }

  // Register function
  const register = async (userData) => {
    try {
      // setIsLoading(true)
      setError(null)

      await axios.post(`${API_BASE_URL}/auth/register`, userData)
      navigate("/verify-email", { state: { email: userData.email } })
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.")
      throw err
    } finally {
      // setIsLoading(false)
    }
  }

  // Logout function
  const logout = async () => {
    try {
      // setIsLoading(true)
      localStorage.removeItem("authenticationToken")

      setUser(null)
      navigate("/login")
    } catch (err) {
      console.error("Logout failed", err)
    } finally {
      // setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        // isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

