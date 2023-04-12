import { rightPriority } from "./domElements";

export default function checkPriority(urgency) {
  if (urgency === "low") {
    rightPriority.style.backgroundColor = "green";
  } else if (urgency === "medium") {
    rightPriority.style.backgroundColor = "yellow";
  } else if (urgency === "high") {
    rightPriority.style.backgroundColor = "red";
  }
}
