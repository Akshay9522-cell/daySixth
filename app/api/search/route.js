
import mongo from '@/app/model/product'
import productModel from '@/app/model/product'
import { NextResponse } from "next/server"
export async function POST(req,res) {
    

     try {
        mongo()
        const {cmp}=await req.json()
        console.log(cmp)

      const product=await productModel.find({
        cmp: { $regex: cmp, $options: 'i' } // Case-insensitive search
      })
     console.log(product)
        return NextResponse.json({product})
     } catch (error) {
        return NextResponse.json({error:'error'})
     }
}