import { Link, Route, Routes } from "react-router-dom";

import BookingOverview from "./BookingOverview.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import HomePage from "./HomePage.jsx";

export default function MainContent() {
    const buttons = [
        { buttonText: "Home", route: "/" },
    ];
    return (
        <div className="container">
            <nav>
                {buttons.map((button) => (
                    <Link key={button.buttonText} to={button.route}>
                        {button.buttonText}
                    </Link>
                ))}
            </nav>
            <Routes>
                <Route path="/homepage" element={<HomePage title="HomePage" />} exact />
                <Route path="/homepage" element={<HomePage title="HomePage" />} exact />
            </Routes>
        </div>
    );
};