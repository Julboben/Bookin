import "./TheHeader.css";
import bookinLogo from "./bookin-logo.svg";
import ProfileHeader from "./ProfileHeader";
import { Link } from "react-router-dom";

export default function TheHeader() {
    return (
        <header>
            <div>
                <ProfileHeader />
            </div>
            <div>
                <Link to="/">
                    <img src={bookinLogo} width="130px" alt="Bookin logo" />
                </Link>
            </div>
            <div>
                <nav>
                    <span><h1>LOGIN</h1></span>
                </nav>
            </div>
        </header>
    );
}