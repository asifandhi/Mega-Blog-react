import React ,{useState} from 'react'
import authService from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button,Input ,Logo} from './index'
import { useDispatch } from 'react-redux'
import {useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register,handleSubmit} = useForm();
    const [error,setError] = useState("")

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if(userData) dispatch(login(userData));
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className=" border border-1  rounded flex items-center justify-center min-h-screen bg-gray-600">
            <div className='mx-auto w-full max-w-lg bg-black rounded-2xl p-10 shadow-xl border border-white'>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-white">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-gray-300">
                    Already have an account?&nbsp;
                    <Link to="/login" className="font-semibold text-gray-100 hover:text-amber-400 transition-colors duration-200">
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", { required: true })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                        />
                        <Button type="submit"   className="w-full py-3 text-white bg-gray-500 hover:bg-white hover:text-black transition-colors duration-200">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup