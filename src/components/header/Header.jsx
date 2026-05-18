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
   <header className='py-3 shadow-lg  py-3 shadow-sm bg-black border-b border-gray-200'>
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
                     className='inline-block bg-gray-700 text-white border border-gray-100 px-4 py-1.5 rounded-full font-medium hover:bg-gray-400 hover:text-black transition-all duration-200 ml-2 text-sm'
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
