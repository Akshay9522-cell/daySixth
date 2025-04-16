import  adminModel from '@/app/model/admin'
import mongodb from '@/app/dbConfig/mongodb'
import { NextResponse } from 'next/server'
import bcrypt from "bcryptjs";


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

        const match=bcrypt.compare(password, admin.password)
         
        if(!match){
           res.status(404).send({
               success:false,
               message:"password not  found"
           })
        }

        return  NextResponse.json({admin})
     } catch (error) {
        console.log({error:"server is in danger"})
        
     }
}