import { Avatar, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AvatarName({ firstname }) {
  /* const navigate = useNavigate(); */

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        className="clickable"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        style={{
          justifyContent: "start",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {/* <img className="profile-pic" src={profilepic} width="30px" alt="Avatar" /> */}
        <Avatar
          sx={{ width: 34, height: 34, backgroundColor: "var(--dark-color)" }}
          alt={firstname}
          src="/broken-image.jpg"
        />
        <span style={{ paddingLeft: "10px" }} className="username">
          {firstname}
        </span>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "var(--dark-color)" }}
          to="/settings"
        >
          <MenuItem
            onClick={handleClose}
            style={{ fontFamily: "var(--primary-font)" }}
          >
            Indstillinger
          </MenuItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "var(--dark-color)" }}>
          {" "}
          <MenuItem
            onClick={handleClose}
            style={{
              fontFamily: "var(--primary-font)",
            }}
          >
            Log ud
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
}
