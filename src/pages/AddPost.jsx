import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost