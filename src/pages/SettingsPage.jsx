import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookinButton from "../components/BookinButton";
import SettingsToggle from "../components/SettingsToggle";
import logout from "../logout";

/* Settings Page */

export default function SettingsPage({
  title,
  setTitle,
  activeUser,
  setActiveUser,
  setIsSnackbarOpen,
  setSnackMessage,
  setSnackbarSeverity,
}) {
  const navigate = useNavigate();

  /* Sets the title */
  useEffect(() => {
    setTitle(title);
  }, []);

  const handleLogout = () => {
    navigate("/");
    logout();
  };

  return (
    <div className="row">
      <div className="column">
        <SettingsToggle
          name="Sprog"
          id="lang"
          subTitle="Vælg mellem dansk eller engelsk."
          rightValue="DK"
          leftValue="ENG"
          activeUser={activeUser}
          checked={activeUser.lang}
          setActiveUser={setActiveUser}
          setIsSnackbarOpen={setIsSnackbarOpen}
          setSnackMessage={setSnackMessage}
          setSnackbarSeverity={setSnackbarSeverity}
        />
        <Divider />
        <SettingsToggle
          name="Lyde"
          id="sound"
          subTitle="Slå applikationslyde til eller fra."
          rightValue="TIL"
          leftValue="FRA"
          activeUser={activeUser}
          checked={activeUser.sound}
          setActiveUser={setActiveUser}
          setIsSnackbarOpen={setIsSnackbarOpen}
          setSnackMessage={setSnackMessage}
          setSnackbarSeverity={setSnackbarSeverity}
        />
        <Divider />
        <SettingsToggle
          name="E-mail kvittering"
          id="receipt"
          subTitle="Modtag en e-mail kvittering ved bookning."
          rightValue="TIL"
          leftValue="FRA"
          activeUser={activeUser}
          checked={activeUser.receipt}
          setActiveUser={setActiveUser}
          setIsSnackbarOpen={setIsSnackbarOpen}
          setSnackMessage={setSnackMessage}
          setSnackbarSeverity={setSnackbarSeverity}
        />
        <Divider />
        <SettingsToggle
          name="Dark mode"
          id="darkmode"
          subTitle="Slå dark mode til eller fra."
          rightValue="TIL"
          leftValue="FRA"
          activeUser={activeUser}
          checked={activeUser.darkmode}
          setActiveUser={setActiveUser}
          setIsSnackbarOpen={setIsSnackbarOpen}
          setSnackMessage={setSnackMessage}
          setSnackbarSeverity={setSnackbarSeverity}
        />
      </div>
      <div className="button-bottom">
        <BookinButton primary title="Log ud" onClick={handleLogout} />
        <BookinButton
          onClick={() => navigate("/home")}
          secondary
          title="Hjem"
        />
      </div>
    </div>
  );
}
