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
    <button className='inline-block bg-white/20 text-white border border-white/40 px-5 py-1.5 rounded-full font-semibold hover:bg-red-400 hover:text-white transition-all duration-200 ml-2' onClick={LogoutHandler}>Logout</button>
    
  )
}

export default Logout
