import React, {useState, useEffect} from 'react'
import { Container, Postcard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) setPosts(posts.documents)
        })
    }, [])

    return (
        <div className='w-full py-8 min-h-screen bg-gray-600'>
            <Container>
                <h1 className='text-3xl font-bold text-white mb-6'>All Posts</h1>
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

export default AllPosts