
'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'


export default function Search() {

     const[srch,setSrch]=useState('')
     const[show,setShow]=useState([])

     const[cmpname,setCmpname]=useState('')
     const[show1,setShow1]=useState([])

            
     async function handleSrch(e) {

        
           setSrch(e.target.value)
        
        let api='http://localhost:3000/api/search'

        await axios.post(api,{cmp:srch}).then((res)=>{
          console.log(res.data.product)
          setShow(res.data.product)

        })
     }

    let ans=show.map((e)=>{

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

     async function cmpData(){

        let api='http://localhost:3000/api/cmp'

        await axios.post(api,{name:cmpname}).then((res)=>{
            
            console.log(res.data.products)
            setShow1(res.data.products)


        })
     }

     
    let res=show1.map((e)=>{

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
  

 const downloadCSV = (data) => {
  const csvRows = [];
  // Get the headers
  const headers = ['Product Name', 'Product Company', 'Product Model', 'Product Price', 'Product Image'];
  csvRows.push(headers.join(','));

  // Format the data
  data.forEach(product => {
    const row = [
      product.name,
      product.cmp,
      product.mdl,
      product.prc,
      product.imgname
    ];
    csvRows.push(row.join(','));
  });

  // Create a Blob from the CSV string
  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  // Create a link element and trigger the download
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', 'products.csv');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};


  return (

    
    <div>
      <Navbar/>
      <Link href='search'></Link>

      <h1 className="text-2xl font-bold mb-6 text-center">Search anything you want</h1>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
      <label className="text-gray-700 font-medium">Search here:</label><input type='text'   className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
      placeholder="Type to search..." value={srch} onChange={handleSrch}/>
          
          <div className='flex m-auto'>
          <label className="text-gray-700 font-medium">Search by category:</label> <input type='text'  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
      placeholder="Category name" value={cmpname} onChange={(e)=>{setCmpname(e.target.value)}} />
        
         <button className="bg-indigo-950 rounded text-white px-4 py-2 hover:bg-indigo-700 transition duration-200" onClick={cmpData} >Search here</button>
      </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
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
      {ans}
      {res}
    </tbody>
  </table>
{/* 
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
     
    </tbody>
  </table> */}
</div>
<button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => downloadCSV([...show, ...show1])} // Combine both search results
      >
        Download Products
      </button>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => downloadPDF([...show, ...show1])} // Combine both search results
      >
        Download Products as PDF
      </button>
    </div>
  )
}
