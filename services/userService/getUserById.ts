'use server'

export default async function getUserById(userId: string) {
  try {
    const res = await fetch(`http://localhost:5199/api/user/${userId}`, {
      method: 'GET',
      headers: {
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.statusText}`);
    }

    const user = await res.json();
    return user;

  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}