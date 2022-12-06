import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export default function MaxPeopleIcon( {maxRoom} ) {
  return (
    <span style={{ backgroundColor: "transparent" }}>
      <PeopleAltIcon fontSize="10" className="help-icon" /><span style={{ fontSize:"10px" }}>{maxRoom}</span>
    </span>
  );
}
