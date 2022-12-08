import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import useSound from "use-sound";
import deleteSfx from "../assets/delete.mp3";

export default function YourBookingBox({
  id,
  date,
  time,
  room,
  activeUser,
  setIsSnackbarOpen,
  setSnackMessage,
  setSnackbarSeverity
}) {
  const url =
    "https://bookin-89f49-default-rtdb.europe-west1.firebasedatabase.app/bookings";

  const [play] = useSound(deleteSfx);
  /* Snackbar */

  const handleDelete = async () => {
    /* setDelete(event.target.value); */
    const response = await fetch(url + "/" + id + ".json", {
      method: "DELETE",
    });
    /* console.log(response); */
    if (response.status === 200) {
      if (activeUser.sound === true) {
        play();
      }
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
    setSnackMessage(
      "Du kan desværre ikke ændre på din bookning på nuværende tidspunkt."
    );
    setSnackbarSeverity("warning");
  };

  const roomFormat = room.substring(3, 4) + "." + room.substring(4);
  const timeFormat =
    time.substring(0, 2) + ":" + time.substring(2, 7) + ":" + time.substring(7);

  return (
    <>
      <div className="your-booking-box" key={id} id={id} date={date}>
        <span>
          {date}&nbsp;Lokale&nbsp;{roomFormat}&nbsp;-&nbsp;Kl.&nbsp;
          {timeFormat}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Tooltip title="Rediger">
            <EditIcon
              className="clickable"
              fontSize="medium"
              onClick={handleEdit}
            />
          </Tooltip>
          <Tooltip title="Slet">
            <DeleteForeverIcon
              className="clickable"
              id={id}
              style={{ marginLeft: "5px", color: "#F89B30" }}
              fontSize="medium"
              onClick={handleDelete}
            />
          </Tooltip>
        </div>
      </div>
    </>
  );
}
