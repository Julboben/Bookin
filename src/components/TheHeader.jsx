import "./TheHeader.css";
import bookinLogo from "./bookin-logo.svg";
import AvatarName from "./AvatarName";
import { Link } from "react-router-dom";

export default function TheHeader({ title, firstname }) {

  return (
    <header>
      <div className="row" style={{ alignItems: "flex-end" }}>
        <div className="column capitalize">
          {firstname && <AvatarName firstname={firstname} />}
        </div>
        <div className="column">
          {/* Conditional rendering. Trueish or falseish */}
          <Link to={firstname ? "/home" : "/"}>
            <img src={bookinLogo} width="80px" alt="Bookin logo" />
          </Link>
        </div>
        <div className="column">
          <span style={{ textAlign: "right" }}>
            <h1>{title}</h1>
          </span>
        </div>
      </div>
    </header>
  );
}
