'use client'

import ProfileSideBar from "../components/profile/ProfileSideBar";
import ListContainer from "../components/global/list/ListContainer";
import ListRow from "../components/global/list/ListRow";

import "./users.css";
import { useEffect, useState } from "react";
import getUsers from "@/services/userService/getUsers";
import Button from "../components/global/button/Button";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers(setUsers)
  }, []);


    return (
      <main>
        <section className="users">
            <div className="container">
                <ProfileSideBar />
                <ListContainer title="Users" listTitle={["Name", "Email"]}>
                  {users.map((user) => (
                    <div key={user.id}>
                      <ListRow listRowProps={[user.firstName, user.email]} link={`/users/${user.id}`} />
                      <Button className="btn-delete" title="delete" />
                    </div>
                  ))}
                </ListContainer>
            </div>
        </section>
      </main>
    );
  }