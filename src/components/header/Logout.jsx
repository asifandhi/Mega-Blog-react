import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function Logout() {
   const dispatch = useDispatch();
  const LogoutHandler = ()=>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <button className=''>Logout</button>
    
  )
}

export default Logout
