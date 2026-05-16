import React ,{useId} from 'react'

function Select({
    options,
    label,
    className='',
    ...props
},ref) {

    const id = useId();

  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='inline-block mb-1 pl-1 font-semibold text-purple-700'>
            </label>}
        <select 
        {...props} name="" id={id} ref={ref} className={`px-4 py-2.5 rounded-xl bg-purple-50 text-gray-800 outline-none focus:bg-white focus:ring-2 focus:ring-purple-400 duration-200 border border-purple-200 w-full${className}`}>
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}



        </select>
      
    </div>
  )
}

export default React.forwardRef(Select)
