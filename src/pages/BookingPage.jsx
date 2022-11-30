import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicSelect from "../components/BasicSelect";
import BookinButton from "../components/BookinButton";
import IconHelp from "../components/IconHelp";
import AlertComponenet from "../components/PositionedSnackbar";
import SubComponentsPickers from "../components/SubComponentsPickers";
import TimeButton from "../components/TimeButton";

export default function BookingPage({ title, setTitle, setBookings }) {
  /* Sets title */
  useEffect(() => {
    setTitle(title);
  }, []);

  /* Snackbar */
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState(null);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  const navigate = useNavigate();
  const url =
    "https://bookin-89f49-default-rtdb.europe-west1.firebasedatabase.app/bookings.json";

  const [choosenDate, setChoosenDate] = useState("");
  const [choosenTime, setChoosenTime] = useState("");
  const [choosenRoom, setChoosenRoom] = useState("");

  const handleClick = async () => {
    /* Add username to this at some point */
    /* Makes an object with the choosen options */
    let booking = { date: choosenDate, time: choosenTime, room: choosenRoom };
    /* console.log(booking); */

    /* Check if everything is filled out */
    if (choosenDate === "" || choosenTime === "" || choosenRoom === "") {
      setIsSnackbarOpen(true);
      setSnackbarSeverity("info");
      if (choosenTime === "" && choosenRoom !== "") {
        setSnackMessage("Vælg venligst et tidspunkt.");
      } else if (choosenRoom === "" && choosenTime !== "") {
        setSnackMessage("Vælg venligst et lokale.");
      } else {
        setSnackMessage("Vælg venligst både et tidspunkt og lokale.");
      }
    } else {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(booking),
      });
      const result = response.json();
      /* console.log(result) */
      booking.id = result.name;
      setBookings((previousValue) => {
        return [...previousValue, booking];
      });
      setIsSnackbarOpen(true);
      setSnackMessage(
        "Din bookning er bekræftet. Du viderestilles til dine bookninger."
      );
      setSnackbarSeverity("success");

      const delayInMilliseconds = 1000;
      setTimeout(function () {
        navigate("/overview");
      }, delayInMilliseconds);
    }
  };

  return (
    <>
      <div className="row">
        <div className="column">
          <SubComponentsPickers setChoosenDate={setChoosenDate} />
          {/* <StaticDatePickerLandscape /> */}
        </div>
        <div className="column">
          <div>
            <h4 style={{ textAlign: "left", marginBottom: "40px" }}>
              Tidsinterval
            </h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TimeButton
                title="08.30 - 12.00"
                value="0800-1200"
                setChoosenTime={setChoosenTime}
              ></TimeButton>
              <TimeButton
                title="12.30 - 16.00"
                value="1230-1600"
                setChoosenTime={setChoosenTime}
              ></TimeButton>
              <TimeButton
                title="16.00 - 21.00"
                value="1600-2100"
                setChoosenTime={setChoosenTime}
              ></TimeButton>
            </div>
          </div>
          <div>
            <h4 style={{ textAlign: "left", margin: "40px 0px" }}>
              Ledige lokaler
            </h4>
            <IconHelp />
            <BasicSelect
              setChoosenRoom={setChoosenRoom}
              label="Lokale"
              room1="Lokale CL-154"
              room2="Lokale CL-201"
              room3="Lokale CL-204"
              room4="Lokale CL-311"
            />
          </div>
        </div>
      </div>
      <AlertComponenet
        message={snackMessage}
        severity={snackbarSeverity}
        open={isSnackbarOpen}
        handleClose={handleClose}
      />
      <div className="button-bottom">
        <BookinButton onClick={handleClick} primary title="Bekræft" />
        <BookinButton
          onClick={() => navigate("/home")}
          secondary
          title="Hjem"
        />
      </div>
    </>
  );
}
