'use client'
import { useEffect, useState } from "react";

import ProfileSideBar from "../components/profile/ProfileSideBar";
import ListContainer from "../components/global/list/ListContainer";
import ListRow from "../components/global/list/ListRow";
import Button from "../components/global/button/Button";

import getAdministrators from "@/services/adminService/getAdmins";
import deleteAdministrator from "@/services/adminService/deleteAdmins";

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

    return (
      <main>
        <section className="administrators">
            <div className="container">
                <ProfileSideBar />
                <ListContainer title="Administrators" listTitle={["Name", "Role"]}>
                    {administrators.map((admin) => (
                      <div key={admin.id}>
                        <ListRow listRowProps={[admin.firstName, admin.id]} link={`/administrators/${admin.id}`} />
                        <Button className="btn-delete" title="delete" onClick={() => handleDelete(admin.id)} />
                      </div>
                     ))}
                </ListContainer>
            </div>
        </section>
      </main>
    );
}