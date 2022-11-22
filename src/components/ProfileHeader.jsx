import profilepic from "./profilepic.jpg"


export default function ProfileHeader() {
    return (
        <div>
            <img style={{borderRadius: "50px"}} src={profilepic} width="20px" alt="Avatar" />
            <span>Bruger</span>
        </div>
    );
};