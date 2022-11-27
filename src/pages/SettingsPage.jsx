import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookinButton from "../components/BookinButton";
import BookinSwitch from "../components/BookinSwitch";

/* Settings Page */

export default function SettingsPage({ title, setTitle }) {
  /* Sets the title */
  useEffect(() => {
    setTitle(title);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <ul>
        <li>
          Lyd<BookinSwitch />
        </li>
      </ul>
      
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
