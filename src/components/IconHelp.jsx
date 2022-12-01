import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import WindowIcon from "@mui/icons-material/Window";
import AirplayIcon from "@mui/icons-material/Airplay";
import { Avatar } from "@mui/material";

export default function IconHelp() {
  return (
    <>
      <div className="icon-help-component">
        <div className="help-box">
          <Avatar
            sx={{ bgcolor: "var(--success-color)", width: 24, height: 24 }}
          >
            <PeopleAltIcon sx={{ fontSize: 14 }} />
          </Avatar>
          <span className="help-text">Max antal personer</span>
        </div>
        <div className="help-box">
          <Avatar
            sx={{ bgcolor: "var(--success-color)", width: 24, height: 24 }}
          >
            <NightlightRoundIcon sx={{ fontSize: 14 }} />
          </Avatar>
          <span className="help-text">Mulighed for mørklægning</span>
        </div>
        <div className="help-box">
          <Avatar
            sx={{ bgcolor: "var(--success-color)", width: 24, height: 24 }}
          >
            <WindowIcon sx={{ fontSize: 14 }} />
          </Avatar>
          <span className="help-text">Vinduer og udluftning</span>
        </div>
        <div className="help-box">
          <Avatar
            sx={{ bgcolor: "var(--success-color)", width: 24, height: 24 }}
          >
            <AirplayIcon sx={{ fontSize: 14 }} />
          </Avatar>
          <span className="help-text">Projector / AirPlay</span>
        </div>
      </div>
    </>
  );
}
