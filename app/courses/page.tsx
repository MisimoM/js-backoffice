import ProfileSideBar from "../components/profile/ProfileSideBar";
import ListContainer from "../components/global/list/ListContainer";
import ListRow from "../components/global/list/ListRow";

import "./courses.css";

export default function Courses() {
    return (
      <main>
        <section className="courses">
            <div className="container">
                <ProfileSideBar />
                <ListContainer title="Courses" listTitle={["Title"]}>
                    <ListRow listRowProps={["HTML/CSS/JS Course"]} />
                    <ListRow listRowProps={["HTML/CSS/JS Course"]} />
                    <ListRow listRowProps={["HTML/CSS/JS Course"]} />
                    <ListRow listRowProps={["HTML/CSS/JS Course"]} />
                </ListContainer>
            </div>
        </section>
      </main>
    );
  }