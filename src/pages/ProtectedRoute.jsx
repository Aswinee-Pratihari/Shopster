import React from 'react'
import useAuth from '../utils/useAuth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({children}) => {
  const navigate=useNavigate()
  const user = useSelector((state) => state.user)
    const {currentUser}=useAuth()
    console.log(user)
  return user?children:navigate("/login")
  
}

export default ProtectedRoute
