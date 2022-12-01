import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function ProfileHeader( {username} ) {

    const navigate = useNavigate();

    return (
        <div className="clickable" onClick={() => navigate("/settings")} style={{justifyContent:"start", display:"inline-flex", alignItems:"center"}}>
            {/* <img className="profile-pic" src={profilepic} width="30px" alt="Avatar" /> */}
            <Avatar sx={{ width: 34, height: 34, backgroundColor:"var(--dark-color)" }} alt={username} src="/broken-image.jpg" />
            <span style={{paddingLeft:"10px"}} className="username">{username}</span>
        </div>
    );
};