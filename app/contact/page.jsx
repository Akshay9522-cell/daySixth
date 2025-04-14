'use client'
import Link from 'next/link'
import React from 'react'

export default function contact() {
  return (
    <div>
      
      <Link href='contact'></Link>
      <div>
     <h1 className='text-2xl font-bold text-center text-gray-800'>Welcome🙏: <span className='text-blue-500 font-semibold'>{localStorage.getItem('name')}</span></h1>
      </div>

       <div className='w-60 h-80 bg-indigo-950 p-4 rounded-lg shadow-lg'>
        <ul className='text-white space-y-2'>
          <li><Link href='product'>Product</Link></li>
          <li><Link href='display'>Display</Link></li>
         
        </ul>
       </div>
    

    </div>
  )
}
