import MultiActionAreaCard from "../components/MultiActionAreaCard";
import Greeting from "../components/Greeting";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useEffect } from "react";
import thumbnailOverview from "../components/thumbnailOverview.png";
import thumbnnailBooking from "../components/thumbnailBooking.png";
import thumbnailSettings from "../components/thumbnailSettings.png";


export default function HomePage({ setTitle, title, username }) {
  
  useEffect(() => {
    setTitle(title);
  }, []);

  return (
    <>
      <h2 className="page-subtitle">
        <Greeting />, {username}! {/* <TagFacesIcon /> */}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        className="inner-content"
      >
        <MultiActionAreaCard
          link="/overview"
          title="Aktuelle bookninger"
          alt="aktuelle bookninger"
          img={thumbnailOverview}
        />
        <MultiActionAreaCard
          link="/booking"
          title="Ny booking"
          alt="ny bookning"
          img={thumbnnailBooking}
        />
        <MultiActionAreaCard
          link="/settings"
          title="Dine Indstillinger"
          alt="ny bookning"
          img={thumbnailSettings}
        />
      </div>
    </>
  );
}
