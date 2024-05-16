import getTokenFromCookie from "@/utils/auth";

export default async function getAdministrators(setAdministrators: (data: any[]) => void){
    try {
      const accessToken = await getTokenFromCookie();
      const res = await fetch('http://localhost:5116/api/admin', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await res.json();
      setAdministrators(data);
    } catch (error) {
      console.error('Error fetching administrators:', error);
    }
};



