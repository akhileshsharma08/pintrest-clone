

import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';


export async function POST(req) {
    try {
        const data = await req.formData();
        const file = data.get('file');
        // console.log(file)
        if (!file) {
            return NextResponse.json({ message: 'No image found', success: false });
        }

        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/assets/uploads/${file.name}`; 

        await writeFile(path, buffer);

        return NextResponse.json({ message: 'File uploaded', success: true });
    } catch (error) {
        console.error('Error during file upload:', error);
        return NextResponse.json({ message: 'Internal server error', success: false });
    }
}
