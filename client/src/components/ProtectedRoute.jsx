
import React from 'react'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = ({component : Component}) => {
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to = "/login"></Navigate>
    }

  return <Component></Component>
}

export default ProtectedRoute
