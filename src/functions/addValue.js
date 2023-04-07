import { low } from "./domElements";

function addValues() {
  const taskValue = document.getElementById("task-name").value;
  const tagValue = document.getElementById("add-tag").value;
  const descriptionValue = document.getElementById("description").value;
  const dateValue = document.getElementById("due-date").value;
  const timeValue = document.getElementById("due-time").value;
  if (low.checked) {
    console.log("hello world");
  }
  console.log(taskValue, tagValue, descriptionValue, dateValue, timeValue);
}
