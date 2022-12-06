/* This is a page! */
import "./LoginPage.css";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";

export default function LoginPage({ setTitle, title, setActiveUser }) {
  useEffect(() => {
    setTitle(title);
  }, []);

  return (
    <>
      <div style={{marginLeft:"auto", marginRight:"auto"}}>
        <h2>Velkommen til Bookin!</h2>
        <h4>
          Et bookingsystem udviklet specielt til dig som underviser.
        </h4>
      </div>
      <p className="page-subtitle">Log venligst ind med din skole e-mail og password.</p>
      <div className="inner-content">
        <LoginForm setActiveUser={setActiveUser} />
      </div>
    </>
  );
}
