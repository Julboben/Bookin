import MultiActionAreaCard from "../components/MultiActionAreaCard";
import Greeting from "../components/Greeting";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useEffect } from "react";
import thumbnailOverview from "../assets/thumbnailOverview.png";
import thumbnnailBooking from "../assets/thumbnailBooking.png";
import thumbnailSettings from "../assets/thumbnailSettings.png";
import flag from "../assets/flag.svg";
import setting from "../assets/setting.svg";
import calendar from "../assets/calendar.svg";
import { Skeleton } from "@mui/material";

export default function HomePage({ setTitle, title, username }) {
  useEffect(() => {
    setTitle(title);
  }, []);

  return (
    <>
      <h2 className="page-subtitle">
        <Greeting username={username} />
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          alignContent: "center",
        }}
        className="inner-content"
      >
        <MultiActionAreaCard
          backgroundColor="var(--secondary-color)"
          link="/overview"
          title="Aktuelle bookninger"
          alt="aktuelle bookninger"
          img={flag}
          textColor="var(--dark-color)"
        />
        <MultiActionAreaCard
          backgroundColor="var(--primary-color)"
          link="/booking"
          title="Ny booking"
          alt="ny bookning"
          img={calendar}
          textColor="var(--dark-color)"
        />
        <MultiActionAreaCard
          backgroundColor="var(--dark-color)"
          link="/settings"
          title="Dine Indstillinger"
          alt="ny bookning"
          img={setting}
          textColor="var(--light-color)"
        />
      </div>
    </>
  );
}
