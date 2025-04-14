import productModel from '@/app/model/product';
import mongodb from '@/app/dbConfig/mongodb';
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        await mongodb();
        
        // Extract the name from the request body
        const { name } = await req.json();
        console.log(name);

        // Find the product by name
        const product = await productModel.find({
            name: { $regex: name, $options: 'i' } // Case-insensitive search
        });
        console.log(product);

        // Return the found product(s)
        return NextResponse.json({ products: product });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: 'Server is in danger' });
    }
}