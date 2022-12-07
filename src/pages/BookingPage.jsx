import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import BasicSelect from "../components/BasicSelect";
import BookinButton from "../components/BookinButton";
import IconHelp from "../components/IconHelp";
import AlertComponenet from "../components/PositionedSnackbar";
import SubComponentsPickers from "../components/SubComponentsPickers";
import TimeButton from "../components/TimeButton";
import dingSfx from "../assets/ding.mp3";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Avatar, Tooltip } from "@mui/material";

export default function BookingPage({ title, setTitle, setBookings, activeUser }) {
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
    "https://bookin-89f49-default-rtdb.europe-west1.firebasedatabase.app";

  const [choosenDate, setChoosenDate] = useState("");
  const [choosenTime, setChoosenTime] = useState("");
  const [choosenRoom, setChoosenRoom] = useState("");
  const [play] = useSound(dingSfx);

  const validateExistingBooking = async () => {
    // Starte med at kigge på alle de eksisterende.
    // bookings.filter()
    const response = await fetch(url + "/bookings" + ".json");
    const body = await response.json();
    /* console.log(body) */
    const bookingArray = Object.values(body);
    /* console.log(bookingArray) */

    const matchingBookings = bookingArray.filter( booking => {
      return (booking.date === choosenDate) &&
      (booking.room === choosenRoom) &&
      (booking.time === choosenTime)
    })

    return (matchingBookings.length > 0)    

  };

  const handleClick = async () => {
    /* Add username to this at some point */
    /* Makes an object with the choosen options */
    let booking = {
      date: choosenDate,
      time: choosenTime,
      room: choosenRoom,
    };

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
      if  ( await validateExistingBooking(booking)) {
        setIsSnackbarOpen(true);
        setSnackMessage(
          "Lokalet på dette dato og tidspunkt er desværre allerede booket."
        );
        setSnackbarSeverity("error");
      } else {
        /* Plays useSound */
        if (activeUser.sound === true) {
          play();
        }
        const response = await fetch(url + "/bookings" + ".json", {
          method: "POST",
          body: JSON.stringify(booking),
        });
        const result = response.json();
        /* console.log(result); */
        booking.id = result.name;
        booking.key = result.name;
        /* console.log("Document written with ID: ", booking.id); */
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
            <h4 className="choose-title">
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
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <h4 className="choose-title">
                Ledige lokaler
              </h4>
              <Tooltip title={<IconHelp />}>
                <Avatar
                  sx={{
                    bgcolor: "var(--success-color)",
                    width: 24,
                    height: 24,
                    cursor: "help",
                  }}
                >
                  <QuestionMarkIcon sx={{ fontSize: 16 }} />
                </Avatar>
              </Tooltip>
            </div>
            <BasicSelect setChoosenRoom={setChoosenRoom} label="Vælg lokale" />
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
          title="Fortryd"
        />
      </div>
    </>
  );
}
