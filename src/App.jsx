import "./App.css";
import "./fonts.css";
import TheHeader from "./components/TheHeader.jsx";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OverviewPage from "./pages/OverviewPage";
import NoMatch from "./pages/NoMatch";
import BookingPage from "./pages/BookingPage";
import { useEffect, useState } from "react";
import SettingsPage from "./pages/SettingsPage";
import Footer from "./components/Footer";

function App() {
  const [title, setTitle] = useState("");
  const [bookings, setBookings] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeUser, setActiveUser] = useState({});

  return (
    <div>
      <div className="wrapper">
        <TheHeader title={title} firstname={activeUser.firstname} />
        <main>
          <div className="content">
            <Routes>
              <Route
                path="/bookin"
                element={
                  <LoginPage
                    title="Log ind"
                    setTitle={setTitle}
                    setActiveUser={setActiveUser}
                  />
                }
              />
              <Route
                path="/home"
                element={
                  <HomePage
                    title="Hjem"
                    setTitle={setTitle}
                    firstname={activeUser.firstname}
                  />
                }
              />
              <Route
                path="/overview"
                element={
                  <OverviewPage
                    bookings={bookings} setBookings={setBookings}
                    title="Aktuelle Bookninger"
                    setTitle={setTitle}
                  />
                }
              />
              <Route
                path="/booking"
                element={
                  <BookingPage
                    setBookings={setBookings}
                    title="Ny booking"
                    setTitle={setTitle}
                  />
                }
              />
              <Route
                path="/settings"
                element={
                  <SettingsPage
                    title="Dine indstillinger"
                    setTitle={setTitle}
                    activeUser={activeUser}
                    setActiveUser={setActiveUser}
                  />
                }
              />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
