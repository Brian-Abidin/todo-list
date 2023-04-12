import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import {
  allProjects,
  displayTags,
  low,
  medium,
  high,
  form
} from "./domElements";
import displayOnly from "./displayOnly";
import closeTheForm from "./openCloseForm";
import createTags from "./createTags";
import checkPriority from "./checkPriority";

export default function updateProjectInfo(index) {
  const arrayId = Number(index) - 1;
  console.log(arrayId);
  const thisProject = allProjects[arrayId];
  let time = document.getElementById("due-time").value;
  const date = document.getElementById("due-date").value;
  const name = document.getElementById("task-name").value;
  const description = document.getElementById("description").value;
  const tag = document.getElementById("add-tag").value;

  console.log(tag);
  console.log(thisProject);
  console.log(time);
  console.log(date);

  const combinedDate = `${date} ${time}`;
  const timeFormatted = new Date(combinedDate);
  console.log(timeFormatted);
  const newTime = format(timeFormatted, "h:mm a");

  const newDate = parseISO(date);
  const dateFormatted = format(newDate, "M/dd/yy");

  thisProject.tags = "";
  while (displayTags.firstChild) {
    displayTags.removeChild(displayTags.firstChild);
  }

  thisProject.name = name;
  thisProject.dueDate = dateFormatted;
  thisProject.time = newTime;
  thisProject.description = description;

  if (low.checked) {
    thisProject.priority = "low";
    document.getElementById(`priority${index}`).style.backgroundColor = "green";
  } else if (medium.checked) {
    thisProject.priority = "medium";
    document.getElementById(`priority${index}`).style.backgroundColor =
      "yellow";
  } else if (high.checked) {
    thisProject.priority = "high";
    document.getElementById(`priority${index}`).style.backgroundColor = "red";
  }

  const urgency = thisProject.priority;
  thisProject.tags = tag;
  createTags(thisProject.tags);

  document.getElementById(`title${index}`).textContent = thisProject.name;
  document.getElementById(`date${index}`).textContent = dateFormatted;

  if (time === "") {
    time = "No Time";
  }

  displayOnly(name, description, urgency, dateFormatted, newTime);
  checkPriority(urgency);
  closeTheForm();
  form.reset();
}
