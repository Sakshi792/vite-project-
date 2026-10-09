import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 p-20'>  
            <form className='flex flex-col items-center justify-center ' >
                <input required className='' type="email"  placeholder='Email '/>
                <input required type='password' placeholder='Password'/>
                <button className='rounded-full' >Log In</button>
            </form>
        </div>

    </div>
  )
}

export default Login

