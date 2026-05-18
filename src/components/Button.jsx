import React from 'react'

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-black",
  className = "",
  ...props

}) {
  return (
    <button className={`px-5 py-2.5 rounded-full font-bold tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-lg  ${className} ${textColor} ${bgColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button
