'use server'

import { cookies } from "next/headers";

type ActionTypes = {
    success: boolean,
    error?: string | undefined
}


export default async function signInActions(currentState: any, formData: FormData) : Promise<ActionTypes> {
    const email = formData.get('email')
    const password = formData.get('password')
    
    const signInFormData = {email, password}

    try {
        const res = await fetch('http://localhost:5116/login', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(signInFormData)
        })

        if (res.status === 200) {
            const result = await res.json()

            cookies().set('Authorization', result.accessToken, {
                secure: true,
                httpOnly: true,
                expires: new Date(Date.now() + result.expiresIn * 1000),
                path: "/",
                sameSite: 'strict'
            })

            cookies().set('RefreshToken', result.refreshToken, {
                secure: true,
                httpOnly: true,
                expires: new Date(Date.now() + result.expiresIn * 1000),
                path: "/",
                sameSite: 'strict'
            })

            return {success: true}
        } else {
            const result = await res.json()
            return {success: false, error: result.error}
        }
    }
    catch {
        return {success: false, error: "Unable to sign in right now. Try again later"}
    }
}