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
  /* Changes the title in header */
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [bookings, setBookings] = useState([]);

  return (
    <div>
      <div className="wrapper">
        <TheHeader title={title} username={username} />
        <main>
          <div className="content">
            <Routes>
              <Route
                path="/bookin"
                element={
                  <LoginPage
                    title="Log ind"
                    setTitle={setTitle}
                    setUsername={setUsername}
                  />
                }
              />
              <Route
                path="/home"
                element={
                  <HomePage
                    title="Hjem"
                    setTitle={setTitle}
                    username={username}
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
