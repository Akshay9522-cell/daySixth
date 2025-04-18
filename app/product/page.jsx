'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import  {useRouter}  from 'next/navigation';
import { FaBars } from "react-icons/fa";

export default function Product() {
          
     const[inp,setInp]=useState({})
     const[selectfile,setSelectfile]=useState('')
      
     function handleInp(e){
          let name=e.target.name
          let value=e.target.value

          setInp(values=>({...values,[name]:value}))
     }
       
     const handleFileChange=async(e)=>{
        
        setSelectfile(e.target.files[0])
        console.log(selectfile)
   }

      async function productData(){
         
       
           let formData= new FormData()

           for(const e in inp){
              formData.append(e,inp[e])
           }
           formData.append('file',selectfile)
           formData.append('upload_preset','akshay_a')
           formData.append('clou_name','dwa4fqbao')
           const api='https://api.cloudinary.com/v1_1/dwa4fqbao/image/upload'
    
           const res=await axios.post(api,formData)
           console.log(res.data.url)

           let api1='http://localhost:3000/api/product'
           
           await axios.post(api1,{imgname:res.data.url,...inp}).then((res)=>{
            console.log(res.data)
            alert('data added')
          })
          console.log(inp)
    
      }
       const router=useRouter()
         const [isSidebarOpen, setIsSidebarOpen] = useState(false);
         
         function logOut(){
             localStorage.clear()
             router.push('/login')
             alert('logout successfully')
      
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
<div>

      </div>
         <div  className='w-60 h-80 bg-indigo-950 p-4 rounded-lg shadow-lg'>
        <ul className='text-white space-y-2'>
          <li><Link href='product'>Product</Link></li>
          <li><Link href='display'>Display</Link></li>
          <li><Link href='contact'>Home</Link></li>
        
        </ul>
       </div> 
       <div className="max-w-md m-auto p-6  relative bottom-80 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Product Information</h2>
    
    <label className="block mb-2 text-gray-700">
        Product:
        <input 
            type='text' 
            name='name' 
            onChange={handleInp} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        />
    </label>

    <label className="block mb-2 text-gray-700">
        Company:
        <input 
            type='text' 
            name='cmp' 
            onChange={handleInp} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        />
    </label>

    <label className="block mb-2 text-gray-700">
        Model:
        <input 
            type='text' 
            name='mdl' 
            onChange={handleInp} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        />
    </label>

    <label className="block mb-2 text-gray-700">
        Price:
        <input 
            type='number' 
            name='prc' 
            onChange={handleInp} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        />
    </label>

    <label className="block mb-2 text-gray-700">
        File:
        <input 
            type='file' 
            onChange={handleFileChange} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        />
    </label>


         <button className='bg-indigo-950 rounded text-white px-4 py-2' onClick={productData} >Add PRoduct</button>
      </div>
    </>
  )
}
