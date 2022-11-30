import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import WindowIcon from '@mui/icons-material/Window';
import AirplayIcon from '@mui/icons-material/Airplay';

export default function BasicSelect( props ) {
  const [room, setRoom] = React.useState('');

  const handleChange = (event) => {
    setRoom(event.target.value);
    props.setChoosenRoom(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={room}
          label={props.label}
          onChange={handleChange}
        >
          <MenuItem value="cl-154">{props.room1}&nbsp;<NightlightRoundIcon fontSize="10" className="help-icon" /><AirplayIcon fontSize="10" className="help-icon" /><PeopleAltIcon fontSize="10" className="help-icon" /><span className="help-text">30</span></MenuItem>
          <MenuItem value="cl-201">{props.room2}&nbsp;<AirplayIcon fontSize="10" className="help-icon" /><PeopleAltIcon fontSize="10" className="help-icon" /><span className="help-text">10</span></MenuItem>
          <MenuItem value="cl-204">{props.room3}&nbsp;<AirplayIcon fontSize="10" className="help-icon" /><WindowIcon fontSize="10" className="help-icon" /><PeopleAltIcon fontSize="10" className="help-icon" /><span className="help-text">20</span></MenuItem>
          <MenuItem value="cl-311">{props.room4}&nbsp;<WindowIcon fontSize="10" className="help-icon" /></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}