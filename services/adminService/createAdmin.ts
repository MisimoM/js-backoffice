import getTokenFromCookie from "@/utils/auth";

export default async function createAdmin(createAdminData: any) {
    try {
        const accessToken = await getTokenFromCookie();
        const res = await fetch('http://localhost:5116/api/admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify(createAdminData)
        });

        if (!res.ok) {
            throw new Error('Failed to create administrator');
        }

        return await res.json();
    } catch (error) {
        console.error("Error creating administrator:", error);
        throw error;
    }
}