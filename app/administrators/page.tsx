'use client'
import { useEffect, useState } from "react";

import ProfileSideBar from "../components/profile/ProfileSideBar";
import ListContainer from "../components/global/list/ListContainer";
import ListRow from "../components/global/list/ListRow";
import Button from "../components/global/button/Button";

import getAdministrators from "@/services/adminService/getAdmins";
import deleteAdministrator from "@/services/adminService/deleteAdmins";
import { useRouter } from 'next/navigation';

import "./administrators.css";


export default function Administrators() {

  const [administrators, setAdministrators] = useState<any[]>([]);

  useEffect(() => {
    getAdministrators(setAdministrators)
  }, []);

  const handleDelete = async (adminId: string)  => {
    await deleteAdministrator(adminId);
    window.location.reload();
  }

  const router = useRouter();

  const handleClick = () => {
    router.push('/administrators/create');
  }

    return (
      <main>
        <section className="administrators">
            <div className="container">
                <ProfileSideBar />
                <ListContainer title="Administrators" listTitle={["Name", "Role"]} >
                    {administrators.map((admin) => (
                      <div key={admin.id}>
                        <ListRow listRowProps={[admin.firstName, admin.role]} link={`/administrators/${admin.id}`} />
                        <Button className="btn-delete" title="delete" onClick={() => handleDelete(admin.id)} />
                      </div>
                     ))}
                </ListContainer>
                <div className="btn-holder">
                  <Button className="btn-create" title="create" onClick={() => handleClick()} />
                </div>
            </div>
        </section>
      </main>
    );
}