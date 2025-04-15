'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
 
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'

export default function page() {
      
    const router = useRouter()
      const[email,setEmail]=useState('')
      const[password,setPassword]=useState('')


      async function loginData(){
           
          let api='http://localhost:3000/api/admin'

          await axios.post(api,{email:email,password:password}).then((res)=>{
            console.log(res.data.admin)
            localStorage.setItem('name',res.data.admin.name)
            localStorage.setItem('email',res.data.admin.email)
            localStorage.setItem('id',res.data.admin._id)
            router.push('/contact')
          })
      }

  return (
    <div>
      <Navbar/>
      <Link href='login'></Link>
      
      <div className='flex flex-col justify-center items-center w-60 m-auto p-8 bg-white rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Log In</h2>
      <p className='block mb-2 text-gray-700' > Email: </p><input type='email' className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500' value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
      <p className='block mb-2 text-gray-700' > Password: </p><input type='password' className='mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
 
       <button  className='bg-indigo-950 rounded text-white px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-200'  onClick={loginData}>Log In</button>
       </div>
    </div>
  )
}
