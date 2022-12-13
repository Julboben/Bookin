import React, { useState, useLayoutEffect } from "react";
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Avatar } from "@mui/material";

const morning = <WbTwilightIcon />;
const noon = <LightModeIcon />;
const afternoon = <WbSunnyIcon />;
const night = <NightlightIcon />;

export default function Greeting( {firstname} ) {
  const [helloText, setHelloText] = useState("");
  const [emoji, setEmoji] = useState("");

  /* useLayoutEffect only runs on initial render */
  useLayoutEffect(() => {
    const date = new Date();
    const currentHour = date.getHours();
    /*       console.log(currentHour) */
    if (currentHour < 9) {
      setHelloText("God morgen");
      setEmoji(morning);
    } else if (currentHour >= 9 && currentHour < 12) {
      setHelloText("God formiddag");
      setEmoji(noon);
    } else if (currentHour >= 12 && currentHour < 18) {
      setHelloText("God eftermiddag");
      setEmoji(afternoon);
    } else {
      setHelloText("God aften");
      setEmoji(night);
    }
  }, []);
  return <><span style={{paddingRight:"10px"}}><Avatar sx={{ bgcolor: "var(--success-color)", width: 34, height: 34 }}>{emoji}</Avatar></span><span>{helloText},&nbsp;<span className="capitalize">{firstname}!</span></span></>;
}
