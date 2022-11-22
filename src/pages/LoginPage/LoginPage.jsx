/* This is a page! */
import './LoginPage.css';
import Button from "../../components/Button"
import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
/*   const handleClick = async () => {
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

  } */
  return (
    <div>
      <h1>
        Velkommen
      </h1>
      <LoginForm />
      {/*       <Button primary title="Mere booking" />
      <Button secondary title="Ny booking" onClick={handleClick}/> */}
    </div>
  )
};