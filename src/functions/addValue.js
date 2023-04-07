import { high, low, medium } from "./domElements";
import createProject from "./createProject";

export default function addValues() {
  const taskValue = document.getElementById("task-name").value;
  //   const tagValue = document.getElementById("add-tag").value;
  let urgency = "";
  const descriptionValue = document.getElementById("description").value;
  const dateValue = document.getElementById("due-date").value;
  const timeValue = document.getElementById("due-time").value;
  if (low.checked) {
    urgency = "low";
  } else if (medium.checked) {
    urgency = "medium";
  } else if (high.checked) {
    urgency = "high";
  }
  console.log(taskValue, descriptionValue, urgency, dateValue, timeValue);
  createProject(taskValue, descriptionValue, urgency, dateValue, timeValue);
}
