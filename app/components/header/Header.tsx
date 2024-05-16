'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo-light.svg";
import "./header.css";
import Button from "../global/button/Button";
import logout  from "../../../utils/logout"

export default function Header() {
    const handleLogout = async ()  => {
        await logout();
        window.location.reload();
    }

    return (
        <header>
        <div className="container">
            <Link href="/"><Image id="logo" src={logo} alt="" /></Link>
            <Button className="btn-theme" title="Log out" onClick={handleLogout} />
            </div>
    </header>
    );
  }