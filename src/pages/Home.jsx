import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, Postcard} from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) setPosts(posts.documents)
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className='w-full min-h-screen bg-gray-600 flex items-center justify-center'>
                <Container>
                    <div className='text-center py-20'>
                        <h1 className='text-4xl font-bold text-white'>
                            {authStatus ? '✍️ No posts yet!' : '👋 Login to read posts'}
                        </h1>
                        <p className='mt-4 text-gray-500 text-lg'>
                            {authStatus ? 'Be the first to add a post.' : 'Join us and explore amazing content.'}
                        </p>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8 min-h-screen bg-gray-700'>
            <Container>
                <h1 className='text-3xl font-bold text-white mb-6'>Latest Posts</h1>
                <div className='flex flex-wrap -mx-2'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 lg:w-1/4'>
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home