import "./App.css";
import "./fonts.css";
import TheHeader from "./components/TheHeader.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OverviewPage from "./pages/OverviewPage";
import NoMatch from "./pages/NoMatch";
import BookingPage from "./pages/BookingPage";
import { useState } from "react";
import SettingsPage from "./pages/SettingsPage";
import Footer from "./components/Footer";
import languageTranslate from "./components/languageTranslate.json";

function App() {
  const [title, setTitle] = useState("");
  const [bookings, setBookings] = useState([]);
  const [activeUser, setActiveUser] = useState({});

  return (
    <div>
      <div className="wrapper">
        <TheHeader title={title} firstname={activeUser.firstname} />
        <main>
          <div className={`content ${activeUser.darkmode ? "darkmode" : ""}`}>
            <Routes>
              <Route
                index
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
                    title={activeUser.lang ? languageTranslate["HOME"].dk : languageTranslate["HOME"].eng}
                    setTitle={setTitle}
                    firstname={activeUser.firstname}
                  />
                }
              />
              <Route
                path="/overview"
                element={
                  <OverviewPage
                    bookings={bookings}
                    setBookings={setBookings}
                    // title="Aktuelle Bookninger"
                    title={activeUser.lang ? languageTranslate["OVERVIEW"].dk : languageTranslate["OVERVIEW"].eng}
                    setTitle={setTitle}
                    activeUser={activeUser}
                  />
                }
              />
              <Route
                path="/booking"
                element={
                  <BookingPage
                    setBookings={setBookings}
                    title={activeUser.lang ? languageTranslate["NEW-BOOKING"].dk : languageTranslate["NEW-BOOKING"].eng}
                    setTitle={setTitle}
                    activeUser={activeUser}
                  />
                }
              />

              <Route
                path="/settings"
                element={
                  <SettingsPage
                    title={activeUser.lang ? languageTranslate["YOUR-SETTINGS"].dk : languageTranslate["YOUR-SETTINGS"].eng}
                    // title={languageTranslate["YOUR-SETTINGS"].dk}
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
