import { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({
          userData:{
            $id: userData.$id,
            name: userData.name,
            email: userData.email,
          }
        }))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-white'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className='flex items-center justify-center w-full h-screen bg-white'>
      <p className='text-xl font-semibold text-gray-500 animate-pulse'>Loading...</p>
    </div>
  )
}

export default App