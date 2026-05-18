import React from 'react'
import appwriteService from '../appwrite/config'
import {Link } from  'react-router-dom'

function Postcard({$id,title,featuresimage

}) {

    console.log("featuresimage value:", featuresimage);

  return (
    <Link to= {`/post/${$id}`}>
      <div className='w-full bg-black rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-2 text-white transition-all duration-300 border border-gray-100'>
        <div className='w-full justify-center mb-4 '>
          <img src={appwriteService.getFilePreview(featuresimage).toString()} alt={title} className='rounded-xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    
    </Link>
  )
}

export default Postcard
