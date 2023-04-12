import format from "date-fns/format";
import { weatherIcon, greeting, contentTop } from "./domElements";

export default function welcome() {
  const currentHour = +format(new Date(), "k");
  switch (true) {
    case currentHour >= 20 || currentHour < 6:
      greeting.textContent = "Good Evening, User";
      contentTop.style.backgroundImage =
        "linear-gradient(rgb(51, 41, 41), rgb(0, 34, 128))";
      weatherIcon.src = "../src/images/moon.png";
      console.log("moon");
      break;
    case currentHour >= 6 && currentHour < 12:
      greeting.textContent = "Good Morning, User";
      weatherIcon.src = "../src/images/sun.png";
      contentTop.style.backgroundImage =
        "linear-gradient(rgb(6, 132, 235), rgb(255, 255, 255))";
      console.log("sunrise");
      break;
    case currentHour >= 12 && currentHour < 19:
      greeting.textContent = "Good Afternoon, User";
      weatherIcon.src = "../src/images/sunrise.png";
      contentTop.style.backgroundImage =
        "linear-gradient(rgb(255, 174, 0), rgb(2, 175, 255))";
      console.log("sun");
      break;
    case currentHour >= 19 && currentHour < 20:
      greeting.textContent = "Good Evening, User";
      weatherIcon.src = "../src/images/moon.png";
      contentTop.style.backgroundImage =
        "linear-gradient(rgb(51, 41, 41), rgb(0, 34, 128))";
      console.log("sunset");
      break;
    default:
      console.log("welcomeIcon function broken");
  }
}
