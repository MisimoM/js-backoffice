'use server'

import getTokenFromCookie from "@/utils/auth";

export default async function getAdminById(adminId: string) {
  try {
    const accessToken = await getTokenFromCookie();
    const res = await fetch(`http://localhost:5116/api/admin/${adminId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch administrator: ${res.statusText}`);
    }

    const admin = await res.json();
    return admin;

  } catch (error) {
    console.error('Error fetching administrator:', error);
    throw error;
  }
}