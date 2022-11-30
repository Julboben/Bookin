import "./TheHeader.css";
import bookinLogo from "./bookin-logo.svg";
import ProfileHeader from "./ProfileHeader";
import { Link } from "react-router-dom";

export default function TheHeader({ title, username }) {

  return (
    <header>
      <div className="row" style={{alignItems:"flex-end"}}>
        <div className="column">
          <span style={{ textAlign: "left" }}>
            <h1>{title}</h1>
          </span>
        </div>
        <div className="column">
          {/* Conditional rendering. Trueish or falseish */}
          <Link to={username ? "/home" : "/"}>
            <img src={bookinLogo} width="80px" alt="Bookin logo" />
          </Link>
        </div>
        <div className="column">
          {username && <ProfileHeader username={username} />}
        </div>
      </div>
    </header>
  );
}
