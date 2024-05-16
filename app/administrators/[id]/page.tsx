'use client'

import { useEffect, useState } from 'react';
import getAdminById from '@/services/adminService/getAdminById';

export default function AdministratorDetails({ params }: {
    params: { id: string}
}) {
  const [admin, setAdmin] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const adminData = await getAdminById(params.id);
        setAdmin(adminData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      {admin && (
        <>
            <h1>{admin.firstName}</h1>
            <h2>{admin.lastName}</h2>
            <h2>{admin.email}</h2>
            <h2>{admin.role}</h2>
        </>
      )}
    </main>
  );
}