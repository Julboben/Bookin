import WarningIcon from "@mui/icons-material/Warning";
import { useNavigate } from "react-router-dom";

export default function NoMatch() {
  const navigate = useNavigate();

  return (
    <>
      <div className="row">
        <div className="column" style={{display:"block"}}>
          <WarningIcon style={{color:"#F89B30"}} fontSize="large" />
          <h2>404 - Siden kan ikke findes!</h2>
          <p>Ledte du efter:</p>
          <ul style={{listStyleType:"none", padding:"0", margin:"0", display:"inline-block"}}>
            <li className="link clickable" onClick={() => navigate("/home")}>
              Hjem
            </li>
            <li className="link clickable" onClick={() => navigate("/overview")}>
              Aktuelle bookninger
            </li>
            <li className="link clickable" onClick={() => navigate("/booking")}>
              Ny bookning
            </li>
            <li className="link clickable" onClick={() => navigate("/settings")}>
              Mine indstillinger
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
