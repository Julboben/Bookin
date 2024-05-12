import MultiActionAreaCard from "../components/MultiActionAreaCard";
import Greeting from "../components/Greeting";
import { useEffect } from "react";
import flag from "../assets/flag.svg";
import setting from "../assets/setting.svg";
import calendar from "../assets/calendar.svg";

export default function HomePage({ setTitle, title, firstname }) {
  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);

  return (
    <div className="row">
      <h2 className="page-subtitle">
        <Greeting firstname={firstname} />
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          alignContent: "center",
          alignSelf: "flex-start"
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
    </div>
  );
}
