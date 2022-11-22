import BookingOverview from "./BookingOverview.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";

export default function MainContent(props) {
    return (
        <div className="container">
            <LoginPage />
            {/* Find a way to define which page is shown! */}
            {/* <BookingOverview /> */}
        </div>
    );
};