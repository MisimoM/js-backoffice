export default async function getUsers(setUsers: (data: any[]) => void){
    try {
      const res = await fetch('http://localhost:5199/api/user', {
        method: 'GET',
        headers: {
        }
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
};