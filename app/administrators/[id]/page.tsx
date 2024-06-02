'use client'

import { useEffect, useState } from 'react';
import getAdminById from '@/services/adminService/getAdminById';
import ProfileSideBar from '@/app/components/profile/ProfileSideBar';
import FormGroup from '@/app/components/global/form/FormGroup';
import deleteAdministrator from "@/services/adminService/deleteAdmins";

import {useRouter} from 'next/navigation';

import './admin-details.css';
import Button from '@/app/components/global/button/Button';
import updateAdmin from '@/services/adminService/updateAdmin';

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

  const handleUpdate = async (updatedAdminData: any) => {
    try {
        await updateAdmin(admin.id, updatedAdminData);
        window.location.reload();
    } catch (error) {
    }
  };

  const router = useRouter();
  const handleDelete = async (adminId: string)  => {
    await deleteAdministrator(adminId);
    router.push("/administrators")
  }


  return (
    <main>
      <section className='admin-details'>
        <div className="container">
          <ProfileSideBar />
          <div className="details-container">
            <h1>Administrator details</h1>
            <div className="form-holder">
            <form className='details-form' onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const updatedAdminData = {
                  firstName: form.firstName.value,
                  lastName: form.lastName.value,
                  email: form.email.value,
                  role: form.roles.value
              };
          
              handleUpdate(updatedAdminData);
            }}>
                <FormGroup title="First name" defaultValue={admin.firstName} name='firstName' />
                <FormGroup title="Last name" defaultValue={admin.lastName} name='lastName' />
                <FormGroup title="Email" defaultValue={admin.email} name='email' />
                <FormGroup title="Role - (Administrator - Manager - Staff)" defaultValue={admin.role} name='roles' />
                <div className="button-holder">
                  <Button className='btn-update' title='Update' type='submit' />
                  <Button className='btn-delete' title='Delete' onClick={() => handleDelete(admin.id)} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}