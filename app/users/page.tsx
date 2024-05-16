import ProfileSideBar from "../components/profile/ProfileSideBar";
import ListContainer from "../components/global/list/ListContainer";
import ListRow from "../components/global/list/ListRow";

import "./users.css";

export default function Users() {
    return (
      <main>
        <section className="users">
            <div className="container">
                <ProfileSideBar />
                <ListContainer title="Users" listTitle={["Name", "Email"]}>
                    <ListRow listRowProps={["Marko", "marko@email.com"]} />
                    <ListRow listRowProps={["Marko", "marko@email.com"]} />
                    <ListRow listRowProps={["Marko", "marko@email.com"]} />
                </ListContainer>
            </div>
        </section>
      </main>
    );
  }