import productModel from '@/app/model/product'
import mongo from '@/app/dbConfig/mongodb'

import { NextResponse } from "next/server"

export  async  function POST(req,res){

     try {
        const data= await req.json()
        console.log(data)

       const{imgname,name,cmp,mdl,prc}=data

       const productData=await productModel.create({
         imgname,name,cmp,mdl,prc
       })

        return NextResponse.json({message:"server is safee"},{productData})
     } catch (error) {
        return NextResponse.json({errro:"error in server please checck immediately"})
     }
}

 export async function GET(req,res) {
     
      try {
         
        mongo()
         const data=await productModel.find()
         console.log(data)

         return NextResponse.json({data})
         
      } catch (error) {
        return NextResponse.json({error:'server is in danger'})
      }
 }