import  adminModel from '@/app/model/admin'
import mongodb from '@/app/dbConfig/mongodb'
import { NextResponse } from 'next/server'


export  async function POST(req,res){

     try {
        mongodb();
        const data=  await req.json()
        console.log(data)
        
       const{ email,password}= data

       const admin=await adminModel.findOne({email:email})
       console.log(admin)

        // check admin is found or not

        if(!admin){
            NextResponse.status(400).send({
                succeess:false,
                message:'user not found'
            })
        }

        if(admin.password!=password){
            NextResponse.status(400).send({
                succeess:false,
                message:'pasword is invalid'
            })
        }

        return  NextResponse.json({admin})
     } catch (error) {
        console.log({error:"server is in danger"})
        
     }
}