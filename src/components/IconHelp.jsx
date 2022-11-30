import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import WindowIcon from '@mui/icons-material/Window';
import AirplayIcon from '@mui/icons-material/Airplay';

export default function IconHelp() {
  return (
    <>
      <div className="icon-help-component">
        <div className="help-box"><PeopleAltIcon fontSize="10" className="help-icon" /><span className="help-text">Antal personer</span></div>
        <div className="help-box"><NightlightRoundIcon fontSize="10" className="help-icon" /><span className="help-text">Mørklægning</span></div>
        <div className="help-box"><WindowIcon fontSize="10" className="help-icon" /><span className="help-text">Vindue</span></div>
        <div className="help-box"><AirplayIcon fontSize="10" className="help-icon" /><span className="help-text">Projector</span></div>
      </div>
    </>
  );
}
