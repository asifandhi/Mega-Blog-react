import React from 'react'
 

import Container from '../container/Container.jsx'
import Logo from '../Logo.jsx'
import Logout from '../header/Logout.jsx'
import { Link ,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {

   const authStatus = useSelector((state) => state.auth.status)
   const navigate = useNavigate();

   const navItem = [
      {
         name : "Home",
         slug : "/",
         active : true
      },
      {
         name: "Login",
         slug: "/login",
         active: !authStatus,
      },
      {
         name: "Signup",
         slug: "/signup",
         active: !authStatus,
      },
      {
         name: "All Posts",
         slug: "/all-posts",
         active: authStatus,
      },
      {
         name: "Add Post",
         slug: "/add-post",
         active: authStatus,
      }
   ]

return (
   <header className='py-3 shadow-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>


          <ul className='flex ml-auto'>
            {navItem.map((item)=>
            item.active ? (
               <li key = {item.name} >
                  
                  <button
                     className='inline-block bg-white/20 text-white border border-white/40 px-5 py-1.5 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 ml-2'
                     onClick={() => {navigate(item.slug)}} 
                     >{item.name}</button>
               </li>
            ) : null
            )}
            
            {authStatus && (
               <li>
                  <Logout/>
               </li>
            )} 
             
            
          </ul>
        </nav>
        </Container>
    </header>

)
 
}

export default Header
