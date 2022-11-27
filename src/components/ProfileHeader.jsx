import { useNavigate } from "react-router-dom";
import profilepic from "./profilepic.jpg"

export default function ProfileHeader( {username} ) {

    const navigate = useNavigate();

    return (
        <div className="clickable" onClick={() => navigate("/settings")} style={{justifyContent:"end" ,display:"flex", alignItems:"center"}}>
            <span style={{paddingRight:"10px"}} className="username">{username}</span>
            <img className="profile-pic" src={profilepic} width="30px" alt="Avatar" />
        </div>
    );
};