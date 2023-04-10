import { high, low, medium } from "./domElements";
import createProject from "./createProject";

export default function addValues() {
  const taskValue = document.getElementById("task-name").value;
  //   const tagValue = document.getElementById("add-tag").value;
  let urgency = "";
  const descriptionValue = document.getElementById("description").value;
  const dateValue = document.getElementById("due-date").value;
  const tagValue = document.getElementById("add-tag").value;
  let timeValue = document.getElementById("due-time").value;
  if (low.checked) {
    urgency = "low";
  } else if (medium.checked) {
    urgency = "medium";
  } else if (high.checked) {
    urgency = "high";
  }

  if (timeValue === "") {
    timeValue = "No Time";
  }

  console.log(
    taskValue,
    descriptionValue,
    urgency,
    dateValue,
    timeValue,
    tagValue
  );
  createProject(
    taskValue,
    descriptionValue,
    urgency,
    dateValue,
    timeValue,
    tagValue
  );
}
