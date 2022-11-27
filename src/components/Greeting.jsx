import React, { useState, useEffect } from "react";
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';

const morning = <WbTwilightIcon style={{color: "var(--secondary-color)"}} />;
const noon = <LightModeIcon style={{color: "var(--secondary-color)"}} />;
const afternoon = <WbSunnyIcon style={{color: "var(--secondary-color)"}} />;
const night = <NightlightIcon style={{color: "var(--secondary-color)"}} />;

export default function Greeting() {
  const [helloText, setHelloText] = useState("");
  const [helloTextColor, setHelloTextColor] = useState("");
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
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
  return <><span style={{paddingRight:"10px"}}>{emoji}</span><span>{helloText}</span></>;
}
