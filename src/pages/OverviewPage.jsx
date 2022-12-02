import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookinButton from "../components/BookinButton";
import SubComponentsPickers from "../components/SubComponentsPickers";
import LoadingBookin from "../components/loading-bookin.gif";
import { transformToArray } from "../firebase-utils";
import YourBookingBox from "../components/YourBookingBox";

export default function BookingOverview({
  title,
  setTitle,
  bookings,
  setBookings,
}) {
  /* Sets title in header */
  useEffect(() => {
    setTitle(title);
  }, []);

  const navigate = useNavigate();

  const url =
    "https://bookin-89f49-default-rtdb.europe-west1.firebasedatabase.app/bookings.json";
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [choosenDate, setChoosenDate] = useState("");

  useLayoutEffect(() => {
    setIsLoading(true);

    async function getData() {
      const response = await fetch(url);
      /* console.log(response); */
      if (response.status === 200) {
        const body = await response.json();
        const asArray = transformToArray(body);
        /* console.log(asArray); */
        setBookings(asArray);
      } else {
        setIsError(true);
      }
      setIsLoading(false);
    }
    /* Runs foced delay before getData */
    /* Forced delay 3 seconds */
    const delayInMilliseconds = 1000;
    setTimeout(function () {
      getData();
    }, delayInMilliseconds);
  }, []);

  return (
    <>
      {isLoading ? (
        <div style={{marginRight:"auto", marginLeft:"auto", alignSelf:"center"}}>
          <img
            style={{ margin: "auto", alignSelf: "center" }}
            width={"200px"}
            src={LoadingBookin}
          />
          <div class="loader">Loading<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>
        </div>
      ) : (
        <div className="row">
          <div className="column">
            <SubComponentsPickers setChoosenDate={setChoosenDate} />
          </div>
          <div className="column">
            <h4 className="choose-title">Mine bookninger</h4>
            {bookings.map((booking) => {
              return (
                <YourBookingBox
                  id={booking.id}
                  room={booking.room}
                  date={booking.date}
                  time={booking.time}
                />
              );
            })}
            {isError && (
              <p>
                Der er sket en uventet fejl med indlæsningen af dine bookninger.
                Prøv igen senere.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="button-bottom">
        <BookinButton
          onClick={() => navigate("/booking")}
          primary
          title="Ny booking"
        />
        <BookinButton
          onClick={() => navigate("/home")}
          secondary
          title="Hjem"
        />
      </div>
    </>
  );
}
