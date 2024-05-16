'use server'

import { cookies } from "next/headers";

export default async function getTokenFromCookie(): Promise<string | null> {
    const accessToken = cookies().get('Authorization')?.value;
    return accessToken || null;
}