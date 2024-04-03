import { capitalizeFirstWord } from "./helperFunctions";

export const getdateInShortFormat = (presentDate) => {
  const dateObj = presentDate || new Date();
  let date = dateObj.getDate();
  let month = dateObj.getMonth();
  let day = dateObj.getDay();

  switch (day) {
    case 0:
      day = "sun";

      break;
    case 1:
      day = "mon";
      break;

    case 2:
      day = "tue";
      break;

    case 3:
      day = "wed";
      break;

    case 4:
      day = "thu";
      break;

    case 5:
      day = "fri";
      break;

    case 6:
      day = "sat";
      break;

    default:
      day = null;
      break;
  }

  switch (month) {
    case 0:
      month = "Jan";

      break;
    case 1:
      month = "feb";

      break;
    case 2:
      month = "mar";

      break;
    case 3:
      month = "apr";

      break;
    case 4:
      month = "may";

      break;
    case 5:
      month = "Jun";

      break;
    case 6:
      month = "Jul";

      break;
    case 7:
      month = "aug";

      break;
    case 8:
      month = "sep";

      break;
    case 9:
      month = "oct";

      break;
    case 10:
      month = "nov";

      break;
    case 11:
      month = "dec";

      break;

    default:
      break;
  }
  if (date >= 10) {
    date = date;
  } else {
    date = "0" + date;
  }
  day = capitalizeFirstWord(day);
  month = capitalizeFirstWord(month);
  return `${day}, ${month} ${date}`;
};

export function extractTimeHHMM(dateTimeString) {
  const timePart = dateTimeString.split(" ")[1]; // Extract the time part
  const [hours, minutes] = timePart.split(":"); // Split the time part into hours and minutes

  return `${hours}:${minutes}`; // Return hours and minutes in "HH:MM" format
}
