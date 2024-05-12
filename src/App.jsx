import "./App.css";
import "./fonts.css";
import TheHeader from "./components/TheHeader.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OverviewPage from "./pages/OverviewPage";
import NoMatch from "./pages/NoMatch";
import BookingPage from "./pages/BookingPage";
import { useState } from "react";
import SettingsPage from "./pages/SettingsPage";
import Footer from "./components/Footer";
import languageTranslate from "./components/languageTranslate.json";
import AlertComponenet from "./components/PositionedSnackbar";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function App() {
  // Title
  const [title, setTitle] = useState("");

  // Bookings
  const [bookings, setBookings] = useState([]);

  // ActiveUser
  const [activeUser, setActiveUser] = useState({});

  // Snackbar
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState(null);
  const [snackbarSeverity, setSnackbarSeverity] = useState(null);

  // setBookings values
  const [choosenDate, setChoosenDate] = useState("");
  const [choosenTime, setChoosenTime] = useState("");
  const [choosenRoom, setChoosenRoom] = useState("");

  // useState for editing bookings
  const [editBooking, setEditBooking] = useState(false);
  const [editBookingId, setEditBookingId] = useState("");

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  // CSStransisition
  // Error with CSStransition: findDOMNode is deprecated in StrictMode!
  const location = useLocation();

  return (
    <div>
      <div className="wrapper">
        <TheHeader title={title} firstname={activeUser.firstname} />
        <main>
          <div className={`content ${activeUser.darkmode ? "darkmode" : ""}`}>
            <SwitchTransition>
              <CSSTransition
                key={location.pathname}
                timeout={110}
                classNames="page"
                unmountOnExit
              >
                <Routes location={location}>
                  <Route
                    index
                    element={
                      <LoginPage
                        title="Log ind"
                        setTitle={setTitle}
                        setActiveUser={setActiveUser}
                        setIsSnackbarOpen={setIsSnackbarOpen}
                        setSnackMessage={setSnackMessage}
                        setSnackbarSeverity={setSnackbarSeverity}
                      />
                    }
                  />
                  <Route
                    path="/"
                    element={
                      <BookingPage
                        setBookings={setBookings}
                        title={
                          activeUser.lang
                            ? languageTranslate["NEW-BOOKING"].dk
                            : languageTranslate["NEW-BOOKING"].eng
                        }
                        setTitle={setTitle}
                        activeUser={activeUser}
                        setIsSnackbarOpen={setIsSnackbarOpen}
                        setSnackMessage={setSnackMessage}
                        setSnackbarSeverity={setSnackbarSeverity}
                        choosenDate={choosenDate}
                        choosenRoom={choosenRoom}
                        choosenTime={choosenTime}
                        setChoosenDate={setChoosenDate}
                        setChoosenRoom={setChoosenRoom}
                        setChoosenTime={setChoosenTime}
                        editBooking={editBooking}
                        setEditBooking={setEditBooking}
                        editBookingId={editBookingId}
                      />
                    }
                  />
                  <Route
                    path="/home"
                    element={
                      <HomePage
                        title={
                          activeUser.lang
                            ? languageTranslate["HOME"].dk
                            : languageTranslate["HOME"].eng
                        }
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
                        title={
                          activeUser.lang
                            ? languageTranslate["OVERVIEW"].dk
                            : languageTranslate["OVERVIEW"].eng
                        }
                        setTitle={setTitle}
                        activeUser={activeUser}
                        setIsSnackbarOpen={setIsSnackbarOpen}
                        setSnackMessage={setSnackMessage}
                        setSnackbarSeverity={setSnackbarSeverity}
                        setChoosenDate={setChoosenDate}
                        setChoosenRoom={setChoosenRoom}
                        setChoosenTime={setChoosenTime}
                        setEditBooking={setEditBooking}
                        setEditBookingId={setEditBookingId}
                      />
                    }
                  />

                  <Route
                    path="/settings"
                    element={
                      <SettingsPage
                        title={
                          activeUser.lang
                            ? languageTranslate["YOUR-SETTINGS"].dk
                            : languageTranslate["YOUR-SETTINGS"].eng
                        }
                        // title={languageTranslate["YOUR-SETTINGS"].dk}
                        setTitle={setTitle}
                        activeUser={activeUser}
                        setActiveUser={setActiveUser}
                        setIsSnackbarOpen={setIsSnackbarOpen}
                        setSnackMessage={setSnackMessage}
                        setSnackbarSeverity={setSnackbarSeverity}
                      />
                    }
                  />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </main>
        <Footer />
      </div>
      <AlertComponenet
        message={snackMessage}
        severity={snackbarSeverity}
        open={isSnackbarOpen}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
