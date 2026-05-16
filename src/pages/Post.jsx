import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config';
import {Button, Container} from '../components'
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userid === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuresimage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className='min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-10'>
            <Container>
                <div className='bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100'>
                    <div className='relative'>
                        <img
                            src={appwriteService.getFilePreview(post.featuresimage)}
                            alt={post.title}
                            className='w-full max-h-[480px] object-cover'
                        />
                        {isAuthor && (
                            <div className='absolute right-4 top-4 flex gap-2'>
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor='bg-gradient-to-r from-green-400 to-emerald-500' className='px-5 py-2 rounded-full font-bold shadow-lg'>
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor='bg-gradient-to-r from-pink-500 to-red-500' className='px-5 py-2 rounded-full font-bold shadow-lg' onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className='p-8'>
                        <h1 className='text-3xl font-bold text-purple-700 mb-6'>{post.title}</h1>
                        <div className='prose max-w-none text-gray-700 leading-relaxed'>
                            {parse(post.content)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}