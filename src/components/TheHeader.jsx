import "./TheHeader.css";
import bookinLogo from "./bookin-logo.svg";
import AvatarName from "./AvatarName";
import { Link } from "react-router-dom";

export default function TheHeader({ title, firstname }) {
  return (
    <header className="header">
      <div className="capitalize">
        {firstname && <AvatarName firstname={firstname} />}
      </div>
      <div>
        {/* Conditional rendering. Trueish or falseish */}
        <Link className="site_icon" to={firstname ? "/home" : "/"}>
          <img src={bookinLogo} width="80px" alt="Bookin logo" />
        </Link>
      </div>
      <div>
        <span style={{ textAlign: "right" }}>
          <h1 className="page_title">{title}</h1>
        </span>
      </div>
    </header>
  );
}
