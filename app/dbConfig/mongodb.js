
import mongoose from 'mongoose'
 import React from 'react'

 const MONGO='mongodb://localhost:27017/SixthTask'
 
 export default  async function mongodb() {
   return mongoose.connect(MONGO).then(()=>{
        console.log('DB connected Successfully')
   })
 }
 