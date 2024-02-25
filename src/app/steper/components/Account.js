"use client"
import React, { useContext } from 'react'
import { StepperContext } from '../contexts/StepperContext'

const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = useContext.target;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex-1 w-full mx-2'>
          <div className='h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase'>{" "} Username</div>
          <div className='flex p-1 my-2 bg-white border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["username"] || ""}
              name="username"
              placeholder='Username'
              className='w-full p-1 px-2 text-gray-800 outline-none appearance-none'
            />
          </div>
        </div>

        <div className='flex-1 w-full mx-2'>
          <div className='h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase'>{" "} Password</div>
          <div className='flex p-1 my-2 bg-white border border-gray-200 rounded'>
            <input
              onChange={handleChange}
              value={userData["password"] || ""}
              name="password"
              placeholder='Password'
              type='password'
              className='w-full p-1 px-2 text-gray-800 outline-none appearance-none'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
