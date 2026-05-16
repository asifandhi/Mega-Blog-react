import React  , {useId }from 'react'

const Input = React.forwardRef(
    function Input (
        {
            label,
            type = "text",
            className = "",
            ...props
        },
        ref
    ){
        const id = useId();
        return (
            <div className='w-full '>
            {
                label &&
                <label className='inline-block mb-1 pl-1 font-semibold text-purple-700' htmlFor={id} >
                    {label}
                </label>
            }
            <input type={type}
            className={`px-4 py-2.5 rounded-xl bg-purple-50 text-gray-800 outline-none focus:bg-white focus:ring-2 focus:ring-purple-400 duration-200 border border-purple-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />         
            </div>
        )
    }
)

export default Input
