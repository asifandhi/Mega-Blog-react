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
    <button className='inline-block bg-gray-700 text-white border border-gray-100 px-4 py-1.5 rounded-full font-medium hover:bg-gray-400 hover:text-black transition-all duration-200 ml-2 text-sm' onClick={LogoutHandler}>Logout</button>
    
  )
}

export default Logout
