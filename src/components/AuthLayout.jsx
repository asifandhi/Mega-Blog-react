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
  return loader ? <div className='flex items-center justify-center w-full h-screen'>
    <p className='text-xl text-gray-500'>Loading...</p>
    </div> : <>{children}</>

}

 