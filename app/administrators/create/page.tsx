'use client'

import Button from "@/app/components/global/button/Button";
import FormGroup from "@/app/components/global/form/FormGroup";
import ProfileSideBar from "@/app/components/profile/ProfileSideBar";
import { useRouter } from 'next/navigation';

import createAdmin from '@/services/adminService/createAdmin';

export default function CreateAdministrators() {
    const router = useRouter();

    const handleCreate = async (createAdminData: any) => {
        try {
            await createAdmin(createAdminData);
            router.push("/administrators");
        } catch (error) {
            console.error("Failed to create admin", error);
        }
    };

    return (
        <main>
            <section className='admin-details'>
                <div className="container">
                    <ProfileSideBar />
                    <div className="details-container">
                        <h1>Create Administrator</h1>
                        <div className="form-holder">
                            <form className='details-form' onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const createAdminData = {
                                    firstName: form.firstName.value,
                                    lastName: form.lastName.value,
                                    email: form.email.value,
                                    password: form.password.value,
                                    role: form.roles.value
                                };
                                handleCreate(createAdminData);
                            }}>
                                <FormGroup title="First name" placeholder="First name" name='firstName' />
                                <FormGroup title="Last name" placeholder="Last name" name='lastName' />
                                <FormGroup title="Email" placeholder="Email" name='email' />
                                <FormGroup title="Password" placeholder="Password" type="password" name='password' />
                                <FormGroup title="Role - (Administrator - Manager - Staff)" placeholder="Select role" name='roles' />
                                <div className="button-holder">
                                    <Button className='btn-create' title='Create' type='submit' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}