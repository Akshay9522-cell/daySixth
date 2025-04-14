import mongoose from 'mongoose'

const adminSchema= new mongoose.Schema({

    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    
})

 export default mongoose.models.admin || mongoose.model('admin',adminSchema)
