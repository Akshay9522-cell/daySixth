'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import  {useRouter}  from 'next/navigation';
import MyLineChart from '../components/MyLineChart';
import MyBarChart from '../components/MyBarChart';
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 



export default function contact() {

  const { setTheme } = useTheme()
   
   const router=useRouter()
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   
   function logOut(){
       localStorage.clear()
       router.push('/login')

   }
   const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
       <>
    <div className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center">
        <FaBars className="text-white text-3xl ml-2" onClick={toggleSidebar} />
        <h1 className="text-white text-xl ml-2">Dashboard</h1>
      </div>
      <h1 className='text-2xl font-bold text-center text-white'>Welcome🙏: <span className='text-blue-500 font-semibold'>{localStorage.getItem('name')}</span></h1>
      {/*    */}
      <button className="text-white text-2xl cursor-pointer" onClick={logOut}>Logout</button>
    </div>
     
    <div > 
      <Link href='contact'></Link>
       
          
          <div  className={`fixed top-16 left-0 h-full w-60 bg-indigo-950 p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
      {isSidebarOpen && (
          <div >
            <ul className='text-white space-y-2 relative top-10  text-2xl'>
              <li><Link href='product'>Product</Link></li>
              <li><Link href='display'>Display</Link></li>

            </ul>
          </div>
        )}

        
         <div className='relative flex md:flex-col'>
        <div className='h-20 w-50 bg-pink-100 absolute left-80  p-4 backdrop-blur-lg border border-pink-500 rounded-lg '> <h1 className='font-serif text-xl'>Total Products</h1> <h2 className='text-2xl font-extrabold'>{localStorage.getItem('len')}</h2></div>
        <div className='h-20 w-50 border border-yellow-500 bg-yellow-100 p-4 absolute left-120 '> <h1 className='font-serif text-xl' >Sold</h1> <h2 className='text-2xl font-extrabold' >00</h2></div>
        <div className='h-20 w-50 border border-blue-500 bg-blue-100 absolute p-4 left-160 '><h1 className='font-serif text-xl' >Unsold</h1> <h2 className='text-2xl font-extrabold' >00</h2></div>
        <div className='h-20 w-50 border border-orange-500 bg-orange-100 absolute left-210 p-4 '><h1 className='font-serif text-xl' >Tracked</h1><h2 className='text-2xl font-extrabold' >00</h2> </div>
        </div>
        <div className='relative ' >
       <div className='absolute left-70 top-20 w-4xl  flex'>
       <MyLineChart/>
       <MyBarChart/>
       </div>
      </div>
        </div>

       
    

    </div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-10" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
        <h1 className='text-black'>Light</h1>  
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  

    
    </>
  )
}
