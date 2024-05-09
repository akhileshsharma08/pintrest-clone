



// / pages/api/userPosts/[id].js

import connectMongoDb from '@/app/db/connection';
import Post from '@/app/model/postModel'; 
import { NextResponse } from 'next/server';



export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDb();
    const userPosts = await Post.find({ userId: id });    
    console.log("userPosts from database:", userPosts);
    if (!userPosts || userPosts.length === 0) {
        return NextResponse.json({ message: 'No userPosts found', status: 404 });
    }
    return NextResponse.json({ userPosts, status: 200 });
} catch (error) {
    console.error('Error while fetching posts:', error);
    return NextResponse.json({ message: 'Internal Server Error', status: 500 });
}
}
