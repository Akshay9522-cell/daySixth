import { NextResponse } from "next/server"
import regisModel from '@/app/model/admin'
import mongodb from "@/app/dbConfig/mongodb"
import bcrypt from "bcryptjs";


export   async function POST(req,res){
    
    try {
      await  mongodb()
        const body=await req.json()
        console.log(body)

        const{name,email,password}=body

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser=await regisModel.create({
            name,
            email,
            password:hash
        })
        return NextResponse.json({newUser})
    } catch (error) {
        return NextResponse.json({error:"some thing went wrong"})
    }
}