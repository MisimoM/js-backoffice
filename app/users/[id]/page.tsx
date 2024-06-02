'use client'

import Button from "@/app/components/global/button/Button";
import FormGroup from "@/app/components/global/form/FormGroup";
import ProfileSideBar from "@/app/components/profile/ProfileSideBar"
import getUserById from "@/services/userService/getUserById";
import { useEffect, useState } from "react";

import "./user-details.css";

export default function UserDetails({ params }: {
    params: { id: string}
}) {

    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdmin = async () => {
        try {
            const adminData = await getUserById(params.id);
            setUser(adminData);
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
            <section className="user-details">
                <div className="container">
                    <ProfileSideBar />
                    <div className="details-container">
                        <h1>User details</h1>
                        <div className="form-holder">
                            <form className='details-form' onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const updatedUserData = {
                                    firstName: form.firstName.value,
                                    lastName: form.lastName.value,
                                    email: form.email.value,
                                    phone: form.phone.value,
                                    bio: form.bio.value
                                };
                        
                                // handleUpdate(updatedAdminData);
                            }}>
                                <FormGroup title="First name" defaultValue={user.firstName} name='firstName' />
                                <FormGroup title="Last name" defaultValue={user.lastName} name='lastName' />
                                <FormGroup title="Email" defaultValue={user.email} name='email' />
                                <FormGroup title="Phone" defaultValue={user.phone} name='phone' />
                                <FormGroup title="Bio" defaultValue={user.bio} textarea={true} name='bio' />
                                <div className="button-holder">
                                    <Button className='btn-update' title='Update' type='submit' />
                                    <Button className='btn-delete' title='Delete' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}