import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
       <nav className='flex justify-evenly bg-sky-950 h-15 items-center text-white'>
        <h1>The World</h1>
        <ul className='flex gap-10 justify-center items-center text-white'>
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            {/* <li><Link href='contact'>Contact</Link></li> */}
            <li><Link href='login'>Login</Link></li>
            <li><Link href='search'>Search</Link></li>
         
            
        
        </ul>
       </nav>
    </>
  )
}
