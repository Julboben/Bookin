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
      <div style={{display:"flex", flexFlow:"column wrap", alignSelf:"center" }}>
      <SettingsToggle title="Sprog" subTitle="Dansk / Engelsk" rightValue="DK" leftValue="ENG" />
      <SettingsToggle title="Lyde" subTitle="Afspil lyd ved bookning" rightValue="ON" leftValue="OFF" />
      <SettingsToggle title="E-mail kvittering" subTitle="Modtag en e-mail kvittering ved bookning" rightValue="ON" leftValue="OFF" />
      <SettingsToggle title="Dark mode" subTitle="Slå dark mode til eller fra" rightValue="ON" leftValue="OFF" />
      </div>
      <div className="button-bottom">
        <BookinButton
          onClick={() => navigate("/home")}
          secondary
          title="Hjem"
        />
      </div>
    </>
  );
}
