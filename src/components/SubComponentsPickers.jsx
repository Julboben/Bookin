import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

export default function SubComponentsPickers({ setChoosenDate }) {
  const [date, setDate] = React.useState(dayjs());

  React.useEffect(() => {
    setChoosenDate(dayjs().format("YYYY-MM-DD"));
    /* console.log(dayjs().format('YYYY-MM-DD')) */
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker
        date={date}
        shouldDisableDate={isWeekend}
        onChange={(newDate) => {
          setDate(newDate);
          setChoosenDate(newDate.toISOString().split("T")[0]);

          /* console.log(newDate); */
        }}
      />
    </LocalizationProvider>
  );
}
