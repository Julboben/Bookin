import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useSound from "use-sound";
import dingSfx from "../assets/switch.mp3";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export default function BookinSwitch({
  leftValue,
  rightValue,
  checked,
  name,
  id,
  activeUser,
  setActiveUser,
}) {
  /* console.log(activeUser.darkmode); */

  // console.log(id, checked);
  const [isChecked, setIsChecked] = React.useState(checked);
  const [play] = useSound(dingSfx);

  const handleChange = async () => {
    // console.log(isChecked);

    setIsChecked((current) => !current);

    const url =
      "https://bookin-89f49-default-rtdb.europe-west1.firebasedatabase.app";
    const response = await fetch(
      url + "/" + "users" + "/" + activeUser.id + "/" + id + ".json",
      {
        method: "PUT",
        body: !isChecked,
      }
    );

    /* Fetches new activeUser property */
    // const userResponse = await fetch(
    //   url + "/" + "users" + "/" + activeUser.id + ".json"
    // );

    // const userResult = await userResponse.json();
    // setActiveUser(userResult);

    // console.log(response);

    if (response.status === 200) {
      // const body = await response.json();
      // console.log(body);

      // console.log(name + " er nu: " + isChecked);

      const user = { ...activeUser };
      user[id] = !isChecked;

      setActiveUser(user);
      /* Plays useSound */
      if (activeUser.sound === true) {
        play();
      }
    } else {
      console.log("Fejl!");
    }
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{leftValue}</Typography>
      <AntSwitch
        id={id}
        onChange={handleChange}
        checked={isChecked}
        inputProps={{ "aria-label": "ant design" }}
        name={name}
      />
      <Typography>{rightValue}</Typography>
    </Stack>
  );
}
