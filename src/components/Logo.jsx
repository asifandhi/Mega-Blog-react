import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div style={{ width }} className='text-white font-extrabold text-2xl tracking-wide'>
      MegaBlog
    </div>
  )
}

export default Logo