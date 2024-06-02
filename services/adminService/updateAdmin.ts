'use server'
import getTokenFromCookie from "@/utils/auth";

export default async function updateAdmin(adminId: string, updatedData: any){

    try {
        const accessToken = await getTokenFromCookie();
        const res = await fetch(`http://localhost:5116/api/admin?userId=${adminId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })

        if (!res.ok) {
            throw new Error('Failed to update administrator');
        }

    }
    catch {
        return {success: false, error: "Unable to update admin right now. Try again later"}
    }
}