'use server'
import getTokenFromCookie from "@/utils/auth";

export default async function deleteAdministrator(adminId: string) {
    
    try {
      const accessToken = await getTokenFromCookie();
      console.log("button pressed")
      const res = await fetch(`http://localhost:5116/api/admin?userId=${adminId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      });
      console.log("fetch sent")
      console.log(res.status)
      console.log(res)
      if (!res.ok) {
        throw new Error('Failed to delete administrator');
      }
  
      console.log('Administrator deleted successfully');
    
    } catch (error) {
      console.error('Error deleting administrator:', error);
    }
}