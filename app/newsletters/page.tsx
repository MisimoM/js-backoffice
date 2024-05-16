import ProfileSideBar from "../components/profile/ProfileSideBar";
import ListContainer from "../components/global/list/ListContainer";
import ListRow from "../components/global/list/ListRow";

import "./newsletters.css";

export default function Newsletters() {
    return (
      <main>
        <section className="newsletters">
            <div className="container">
                <ProfileSideBar />
                <ListContainer title="Newsletters" listTitle={["Email", "Subscribed"]}>
                    <ListRow listRowProps={["marko@email.com", "Yes"]} />
                    <ListRow listRowProps={["marko@email.com", "Yes"]} />
                    <ListRow listRowProps={["marko@email.com", "Yes"]} />
                </ListContainer>
            </div>
        </section>
      </main>
    );
  }