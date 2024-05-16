'use server'

import { cookies } from "next/headers";

export default async function logout() {
    cookies().delete('Authorization');
    cookies().delete('RefreshToken');
    return null;
}