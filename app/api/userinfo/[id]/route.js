
// / pages/api/user/[id].js

import connectMongoDb from '@/app/db/connection';
import User from '@/app/model/user'; 
import { NextResponse } from 'next/server';



export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDb();
    const user = await User.findOne({ _id: id });    
    console.log("User from database:", user);
    if (!user || user.length === 0) {
        return NextResponse.json({ message: 'No user found', status: 404 });
    }
    return NextResponse.json({ user, status: 200 });
} catch (error) {
    console.error('Error while fetching posts:', error);
    return NextResponse.json({ message: 'Internal Server Error', status: 500 });
}
}
