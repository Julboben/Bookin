/* This is a page! */
import "./LoginPage.css";
import LoginForm from "../components/LoginForm";
import { useEffect, useState } from "react";

export default function LoginPage( {setTitle, title, setUsername} ) {

  useEffect(() => {
    setTitle(title)
  }, []);

  return (
    <>
      <h2 className="page-subtitle">Velkommen til Bookin</h2>
      <p className="page-subtitle">Log venligst ind med e-mail og password.</p>
      <div className="inner-content">
        <LoginForm setUsername={setUsername} />
      </div>
    </>
  );
}
