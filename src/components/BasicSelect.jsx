import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import WindowIcon from "@mui/icons-material/Window";
import AirplayIcon from "@mui/icons-material/Airplay";
import { transformToArray } from "../firebase-utils";

export default function BasicSelect(props) {
  const [room, setRoom] = React.useState("");
  const [rooms, setRooms] = React.useState([]);

  const handleChange = (event) => {
    setRoom(event.target.value);
    props.setChoosenRoom(event.target.value);
  };

  React.useEffect(() => {
    async function getData() {
      const url =
        "https://bookin-89f49-default-rtdb.europe-west1.firebasedatabase.app/rooms.json";
      const response = await fetch(url);

      if (response.status === 200) {
        const body = await response.json();
        const asArray = transformToArray(body);
        /* console.log(asArray); */
        setRooms(asArray);
      }
    }
    getData();
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          MenuProps={{ PaperProps: { sx: { maxHeight: 205, overflowY:"scroll" } } }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={room}
          label={props.label}
          onChange={handleChange}
        >
          {rooms.map((room) => {
            return (
              <MenuItem key={room.id} value={room.room}>
                <span className="select-room-name">{room.room.toUpperCase()}</span>
                {room.proj && (
                  <AirplayIcon fontSize="10" className="help-icon" />
                )}
                {room.win && <WindowIcon fontSize="10" className="help-icon" />}
                {room.dark && (
                  <NightlightRoundIcon fontSize="10" className="help-icon" />
                )}
                {room.max && (
                  <>
                    <PeopleAltIcon fontSize="10" className="help-icon" />
                    <span className="help-text">{room.max}</span>
                  </>
                )}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
