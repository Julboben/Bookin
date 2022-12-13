/**
 * A function that transform the Firebase Object in Object structure to Objects in Array.
 *
 * OBS! This is only needed due to the way Firebase works. OBS!
 *
 * @param {Object} data
 * @returns Array
 */
export function transformToArray(data) {
  const toReturn = [];
  for (let key in data) {
    const temp = {
      ...data[key],
      id: key,
    };
    toReturn.push(temp);
  }
  return toReturn;
}

/**
 * A function which gets the bookings data from our Firebase
 *
 * @param {Object} data
 * @returns Object
 */
export async function getData({ setIsError, setBookings, setIsLoading }) {
  const url =
    "https://bookin-89f49-default-rtdb.europe-west1.firebasedatabase.app/bookings.json";
  const response = await fetch(url);
  // console.log(response);
  // return response;
  if (response.status === 200) {
    const body = await response.json();
    const asArray = transformToArray(body);
    // console.log(asArray);
    setBookings(asArray);
  } else {
    setIsError(true);
  }
  setIsLoading(false);
}
