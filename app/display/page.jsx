'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import  {useRouter}  from 'next/navigation';

export default function Display() { 

   const router=useRouter()       
      const[show,setShow]=useState([])
      
        async function loadData() {
               
            let api='http://localhost:3000/api/product'

            await axios.get(api).then((res)=>{
                console.log(res.data.data)
                setShow(res.data.data)


            })
        }
   
        function logOut(){
          localStorage.clear()
          router.push('/login')
   
      }
        let len=show.length
        localStorage.setItem('len',len)

        useEffect(()=>{
            loadData()
        },[])

        let res=show.map((e)=>{
            return(
                <>
                 <tr>
                    <td>{e.name}</td>
                    <td>{e.cmp}</td>
                    <td>{e.mdl}</td>
                    <td>{e.prc}</td>
                    <td><img src={e.imgname}  width={300} /></td>
                 </tr>
                </>
            )
        })

  return (
        
     
    
    
    <div>
        


            <div className="flex items-center justify-between p-4 bg-gray-800">
                 <div className="flex items-center">
                   <FaBars className="text-white text-3xl ml-2"  />
                   <h1 className="text-white text-xl ml-2">Dashboard</h1>
                 </div>
                 <h1 className='text-2xl font-bold text-center text-white'>Welcome🙏: <span className='text-blue-500 font-semibold'>{localStorage.getItem('name')}</span></h1>
                 {/*    */}
                 <button className="text-white text-2xl cursor-pointer" onClick={logOut}>Logout</button>
               </div>

               <div  className='w-60 h-80 bg-indigo-950 p-4 rounded-lg shadow-lg'>
        <ul className='text-white space-y-2'>
          <li><Link href='product'>Product</Link></li>
          <li><Link href='display'>Display</Link></li>
          <li><Link href='contact'>Home</Link></li>
        
        </ul>
       </div> 
      
      <div className="flex flex-col md:flex-row gap-6 justify-center items-start relative bottom-81">
  <table className="min-w-[350px] border border-gray-300 rounded-lg shadow-md overflow-hidden">
    <thead className="bg-indigo-950 text-white">
      <tr>
        <th className="px-4 py-2">Product Name</th>
        <th className="px-4 py-2">Product Company</th>
        <th className="px-4 py-2">Product Model</th>
        <th className="px-4 py-2">Product Price</th>
        <th className="px-4 py-2">Product Image</th>
      </tr>
    </thead>
    <tbody className="bg-white text-gray-800">
      
      {res}
    </tbody>
  </table>
  </div>

    </div>
  )
}
