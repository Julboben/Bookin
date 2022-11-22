/* This is a page! */
import './LoginPage.css';
import Button from "../../components/Button"
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

export default function LoginPage() {
  const handleClick = async () => {
    console.log("anything?")
    const data = {
      name: "Christian"
    };
    const result = await fetch("https://bookin-89f49-default-rtdb.europe-west1.firebasedatabase.app/names.json", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    
    const res = await result.json();
    console.log(res);
     
  }
  return (
    <div>
      <h1>
        Login
      </h1>
      <Button primary title="Mere booking" />
      <Button secondary title="Ny booking" onClick={handleClick}/>

      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
    </div>
  )
};