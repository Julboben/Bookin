import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import AlertComponenet from "./PositionedSnackbar";

export default function YourBookingBox({ id, date, time, room }) {
  const url =
    "https://bookin-89f49-default-rtdb.europe-west1.firebasedatabase.app/bookings";

  const [isError, setIsError] = useState(false);

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

  const handleDelete = async () => {
    /* setDelete(event.target.value); */
    const response = await fetch(url + "/" + id + ".json", {
      method: "DELETE",
    });
    /* console.log(response); */
    if (response.status === 200) {
      setIsSnackbarOpen(true);
      setSnackMessage("Din bookning d. " + date + " er blevet slettet.");
      setSnackbarSeverity("success");
      document.querySelector("#" + id).style.display = "none";
    } else {
      setIsSnackbarOpen(true);
      setSnackMessage("Din bookning kunne ikke slettes. Prøv igen senere.");
      setSnackbarSeverity("error");
    }
  };

  const handleEdit = () => {
    setIsSnackbarOpen(true);
    setSnackMessage("Du kan desværre ikke ændre på din bookning på nuværende tidspunkt.");
    setSnackbarSeverity("warning");
  };

  const roomFormat = room.substring(3,4) + "." + room.substring(4)
  const timeFormat = time.substring(0,2) + ":" + time.substring(2,7) + ":" + time.substring(7);

  return (
    <>
      <div className="your-booking-box" id={id} date={date}>
        <span>
          Lokale&nbsp;{roomFormat}&nbsp;-&nbsp;Kl.&nbsp;
          {timeFormat}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <EditIcon
            className="clickable"
            fontSize="small"
            onClick={handleEdit}
          />
          <RemoveCircleIcon
            className="clickable"
            id={id}
            style={{ marginLeft: "5px", color: "#F89B30" }}
            fontSize="small"
            onClick={handleDelete}
          />
        </div>
      </div>
      <AlertComponenet
        message={snackMessage}
        severity={snackbarSeverity}
        open={isSnackbarOpen}
        handleClose={handleClose}
      />
    </>
  );
}
