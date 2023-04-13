import { format } from "date-fns";
import { btnSubmit, high, low, medium } from "./domElements";
import createProject from "./createProject";

export default function addValues() {
  const taskValue = document.getElementById("task-name").value;
  let urgency = "";
  const descriptionValue = document.getElementById("description").value;
  const dateValue = document.getElementById("due-date").value;
  const tagValue = document.getElementById("add-tag").value;
  let timeValue = document.getElementById("due-time").value;

  // fomatting time value
  const combinedDate = `${dateValue} ${timeValue}`;
  console.log(combinedDate);
  const timeFormatted = new Date(combinedDate);
  const newTime = format(timeFormatted, "h:mm a");
  console.log(newTime);

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
    newTime,
    tagValue
  );
  if (btnSubmit.type === "submit") {
    createProject(
      taskValue,
      descriptionValue,
      urgency,
      dateValue,
      newTime,
      tagValue
    );
  } else {
    console.log("updating project info");
  }
}
