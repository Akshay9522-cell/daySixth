'use client'

import axios from 'axios'
import { Link } from 'lucide-react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { z } from 'zod'; // Import Zod
import { useForm } from 'react-hook-form'; // Import react-hook-form
import { zodResolver } from '@hookform/resolvers/zod'; // Import zodResolver
import { useRouter } from 'next/navigation'
// Define the Zod schema
const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function Register() {

    const router=useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema), // Use Zod for validation
    });

    async function onSubmit(data) {
        let api = 'http://localhost:3000/api/register';

        try {
            const res = await axios.post(api, data);
            console.log(res.data);
            alert("Registration successful");
            router.push('/login')
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Registration failed");
        }
    }

    return (
        <div>
            <Navbar />
            <Link href='regis'></Link>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            {...register("name")} // Register the input with react-hook-form
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            {...register("email")} // Register the input with react-hook-form
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            {...register("password")} // Register the input with react-hook-form
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit" // Change to submit type
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register here
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}