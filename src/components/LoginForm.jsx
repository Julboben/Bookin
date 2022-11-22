import { useState } from "react";
import './LoginForm.css';
import Button from "./Button";
import {
    BrowserRouter as Router,
    Link,
    useNavigate
} from "react-router-dom";


export default function LoginForm() {
    /* This is a state! */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleMail = (event) => {
        const input = event.target.value;
        setEmail(input);
    }

    const handlePass = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBgOitJoJUNdhp2g6WgAb263TodzEVwE-s",
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true,
            })
        });
        const result = response.json;
        console.log(result);

        navigate("/home");
    };

    return (
        <div className="container">
            <form action="">
                <input type="text" id="name" name="email" placeholder="E-mail" value={email} onChange={handleMail} />
                <input type="password" id="pass" name="password" placeholder="Adgangskode" value={password} onChange={handlePass} />
                <Link to="/"><span>Har du glemt dit password?</span></Link>
                <Button onClick={handleSubmit} type="submit" primary title="Log in" />

            </form>
        </div>
    )
};