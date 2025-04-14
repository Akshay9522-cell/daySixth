'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Display() { 
         
      const[show,setShow]=useState([])
      
        async function loadData() {
               
            let api='http://localhost:3000/api/product'

            await axios.get(api).then((res)=>{
                console.log(res.data.data)
                setShow(res.data.data)

            })
        }

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

<div className='w-60 h-80 bg-indigo-950'>
        <ul className='text-white'>
          <li><Link href='product'>Product</Link></li>
          <li><Link href='display'>Display</Link></li>
        
        </ul>
       </div> 
      <Link href='display'>Display</Link>
           
           <table className='border'>
            <tr>
                <th>Product Name</th>
                <th>Product Company</th>
                <th>Product Model</th>
                <th>Product Price</th>
                <th>Product Image</th>
            </tr>
            {res}
           </table>

    </div>
  )
}
