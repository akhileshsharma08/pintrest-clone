

import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import connectMongoDb from "@/app/db/connection";
import User from "@/app/model/user";


connectMongoDb();


export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}