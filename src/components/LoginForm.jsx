import { useState } from "react";
import "./LoginForm.css";
import BookinButton from "./BookinButton";
import { Link, useNavigate } from "react-router-dom";
import AlertComponenet from "./PositionedSnackbar";

export default function LoginForm({ setActiveUser }) {
  /* Snackbar */
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState(null);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbarOpen(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleMail = (event) => {
    const input = event.target.value;
    setEmail(input);
  };

  const handlePass = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Check if inputs are filled out */
    if (email === "" || password === "") {
      /* Open Snackbar */
      setIsSnackbarOpen(true);
      setSnackMessage("Udfyld venligst både din e-mail og password.");
      setSnackbarSeverity("warning");
    } else {
      const url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBgOitJoJUNdhp2g6WgAb263TodzEVwE-s";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      });
      /* console.log(response); */

      /* Check if we get any reponse errors */
      if (response.status === 200) {
        const result = await response.json();
        /* console.log(result); */

        /* Fetches and sets the username */
        const userId = result.localId;
        const curl =
          "https://bookin-89f49-default-rtdb.europe-west1.firebasedatabase.app";
        const userResponse = await fetch(
          curl + "/" + "users" + "/" + userId + ".json"
        );
        /* console.log(userResponse); */
        const userResult = await userResponse.json();
        /* console.log(userResult); */

        /* You can get all user settings with userResult.property */
        setActiveUser(userResult);

        navigate("/home");
      } else {
        setIsSnackbarOpen(true);
        setSnackMessage(
          "Dit brugernavn eller password er ugyldigt. Prøv venligst igen."
        );
        setSnackbarSeverity("error");
      }
    }
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={handleMail}
        />
        <input
          type="password"
          id="pass"
          name="password"
          placeholder="Adgangskode"
          value={password}
          onChange={handlePass}
        />
        <Link className="forgot-text" to="/">
          <span>Har du glemt dit password?</span>
        </Link>
        <BookinButton
          onClick={handleSubmit}
          type="submit"
          primary
          title="Log ind"
        />
        {/*         {isError && (
          <p style={{ fontWeight: "bold" }}>
            Dit brugernavn eller password er ugyldigt.
          </p>
        )} */}
        <AlertComponenet
          message={snackMessage}
          severity={snackbarSeverity}
          open={isSnackbarOpen}
          handleClose={handleClose}
        />
      </form>
    </>
  );
}
