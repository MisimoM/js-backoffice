import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    const authCookie = cookies().get('Authorization')

    if (!authCookie) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/administrators",
        "/administrators/(.*)",
        "/users",
        "/users/(.*)",
        "/newsletters",
        "/newsletters/(.*)",
        "/courses",
        "/courses/(.*)"
    ]
}

