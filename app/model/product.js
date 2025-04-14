import mongoose  from "mongoose";


const productSchema=new mongoose.Schema({

    imgname: String,
    name: String,
    cmp: String,
    mdl: String,
    prc: String
})

export default mongoose.models.product || mongoose.model('product',productSchema)