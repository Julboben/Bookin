/* This is a page! */
import Button from "./Button"
import StaticDatePickerLandscape from './StaticDatePickerLandscape';

export default function BookingOverview() {
  return (
    <div>
      <h1>
        BookingOverview!
      </h1>
      <StaticDatePickerLandscape />
      <Button primary title="Mere booking" />
      <Button secondary title="Ny booking" />
    </div>
  )
};