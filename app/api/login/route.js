// pages/api/login.js
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connectMongoDb from '@/app/db/connection';
import User from '@/app/model/user';
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
    try {
      const { email, password } = await request.json();
      if (!email || !password) {
        return NextResponse.json({ message: 'All fields are required!' }, { status: 400 });
      }
      // Connect to MongoDB
      await connectMongoDb();
      // Find user by email in the database
      const user = await User.findOne({ email });
  
      // Check if the user exists
      if (!user) {
        return NextResponse.json({ message: 'User not found', status: 404 });
      }
  
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await compare(password, user.password);
  
      if (passwordMatch) {
        // Generate a JWT token with user ID
        const token = sign({ userId: user._id }, process.env.NEXTAUTH_SECRET, {
          expiresIn: '1H',
        });
  // ----------------------------
        // Set the token in localStorage
        // return NextResponse.json(
        //   { message: 'Login successful', status: 200, token },
        
        //   { headers: { 'Set-Cookie': `token=${token}; path=/; HttpOnly` } }
        // );
        // ------------------
        const response = NextResponse.json({
          message: 'Login successful',
          success: true,
          userId: user._id 
        });
        response.cookies.set("token", token, {
          httpOnly: true, 
          
      })
      return response;
      } else {
        return NextResponse.json({ message: 'Invalid email or password', status: 401 });
      }
    } catch (error) {
      console.error('Something went wrong :', error);
      return NextResponse.json({ message: 'Internal Server Error', status: 500 });
    }
  }
  
