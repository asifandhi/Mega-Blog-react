import React ,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children,authentication = true}) {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate("/login");
        }
        else if (!authentication && authStatus !== authentication){
            navigate("/");
        }
        setLoader(false);
    },[authentication,authStatus,navigate])
  return loader ? (
    <div className='flex items-center justify-center w-full h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100'>
        <p className='text-xl font-semibold text-purple-500 animate-pulse'>Loading...</p>
    </div>
) : <>{children}</>

}

 