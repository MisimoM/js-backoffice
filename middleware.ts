import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { useRouter } from 'next/router';

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
        "/users",
        "/newsletters",
        "/courses"
    ]
}

