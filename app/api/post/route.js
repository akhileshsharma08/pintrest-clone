// api/post/post.js

import { NextResponse } from 'next/server';
import connectMongoDb from '@/app/db/connection';
import Post from '@/app/model/postModel'; 
import User from '@/app/model/user';

//====================== create a post of the user =========================== 


export async function POST(request) {
    try {
        const { title, description, tags, board, link, id, imageURL } = await request.json();
        await connectMongoDb();

        const user = await User.findOne({ _id:id });
        if (!user) {
            return NextResponse.json({ message: "User not found", status: 404 });
        }
        // Get the userId
        const userId = user._id;
     
        const newPost = await Post.create({ title, description, tags, board, link, userId, imageURL });

        return NextResponse.json({ message: 'Post created successfully', post: newPost, status: 201 });

    } catch (error) {
        console.error('Error during post creation:', error);
        return NextResponse.json({ message: 'Internal Server Error', status: 500 });
    }
}


//====================== get all posts of the user =========================== 


export async function GET(request) {
    try {
    
        await connectMongoDb();

        const allPosts = await Post.find();

        if (!allPosts || allPosts.length === 0) {
            return NextResponse.json({ message: 'No posts found', status: 404 });
        }

        return NextResponse.json({ allPosts, status: 200 });
    } catch (error) {
        console.error('Error while fetching posts:', error);
        return NextResponse.json({ message: 'Internal Server Error', status: 500 });
    }
}
