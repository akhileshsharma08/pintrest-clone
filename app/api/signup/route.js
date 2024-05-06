import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import connectMongoDb from '@/app/db/connection';
import User from '@/app/model/user';

export async function POST(request) {
    try {
        const { username, email, password,dob } = await request.json();
        await connectMongoDb();
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ message: "Email already exists", status: 400 });
        }
        const hashedPassword = await hash(password, 10);
        // Save user data to MongoDB
        const newUser = await User.create({ username, email, password: hashedPassword,dob });
        // Generate a JWT token with user ID
        const token = sign({ userId: newUser._id }, process.env.NEXTAUTH_SECRET, {
            expiresIn: '1h',
        });
        return NextResponse.json({ message: 'User created', token, status: 201 });
    } catch (error) {
        console.error('Error during user registration:', error);
        return NextResponse.json({ message: 'Internal Server Error', status: 500 });
    }
}
