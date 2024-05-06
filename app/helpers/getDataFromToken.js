import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
    try {
        const token = request.cookies?.get("token")?.value || ''; // Check for undefined cookies object
        if (!token) {
            throw new Error("Token not found in cookies");
        }
        const decodedToken = jwt.verify(token, process.env.NEXTAUTH_SECRET );
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
    }
}
