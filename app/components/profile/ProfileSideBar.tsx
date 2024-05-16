import Link from "next/link";
import "./profileSideBar.css";

export default function ProfileSideBar() {
    return (
        <aside className="profile-sidebar">
            <div className="profile-container">
                    <div className="profile">
                        {/* <img src="images/profile-image.png" alt="" /> */}
                        <h4>John Doe</h4>
                        <h6>Administrator</h6>
                    </div>
                    <div className="nav-holder">
                        <Link href="/administrators">Administrators</Link>
                        <Link href="/users">Users</Link>
                        <Link href="/newsletters">Newsletters</Link>
                        <Link href="/courses">Courses</Link>
                        <Link href="#">Sign out</Link>
                    </div>
                </div>
        </aside>
    );
  }