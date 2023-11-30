import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='h-[90vh] flex items-center justify-center flex-col space-y-4 text-center px-4 '>
        <h1 className='text-5xl font-semibold text-black'>I Have bad
          news for you &#128543;</h1>

        <p className='tex-sm text-black font-medium'>The page you are looking
          For might be remove or is
          temporary unavaible !</p>
        <Link to="/" >
          <button style={{ transition: 'background 1s' }} className='px-4 py-2 hover:bg-black rounded-md hover:text-white text-black border-2 font-medium cursor-pointer'>Go home</button>
        </Link>
      </div>
  )
}

export default NotFound