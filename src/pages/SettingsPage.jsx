import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookinButton from "../components/BookinButton";
import SettingsToggle from "../components/SettingsToggle";

/* Settings Page */

export default function SettingsPage({ title, setTitle }) {
  /* Sets the title */
  useEffect(() => {
    setTitle(title);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div style={{width:"100%"}}>
        <SettingsToggle
          title="Sprog"
          subTitle="Vælg mellem dansk eller engelsk."
          rightValue="DK"
          leftValue="ENG"
        />
        <Divider />
        <SettingsToggle
          title="Lyde"
          subTitle="Slå applikationslyde til eller fra."
          rightValue="TIL"
          leftValue="FRA"
        />
        <Divider />
        <SettingsToggle
          title="E-mail kvittering"
          subTitle="Modtag en e-mail kvittering ved bookning."
          rightValue="TIL"
          leftValue="FRA"
        />
        <Divider />
        <SettingsToggle
          title="Dark mode"
          subTitle="Slå dark mode til eller fra."
          rightValue="TIL"
          leftValue="FRA"
        />
      </div>
      <div className="button-bottom">
        <BookinButton primary title="Log ud" />
        <BookinButton
          onClick={() => navigate("/home")}
          secondary
          title="Hjem"
        />
      </div>
    </>
  );
}
