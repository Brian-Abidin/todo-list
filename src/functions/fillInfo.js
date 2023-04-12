import format from "date-fns/format";
import { low, medium, high } from "./domElements";

export default function fillInfo() {
  const name = document.getElementById("display-task-name").textContent;
  const priority = document.getElementById("priority-level").textContent;
  const tagName = document.getElementsByClassName("tag-name")[0].textContent;
  const date = document.getElementById("due-date-text").textContent;
  const time = document.getElementById("due-time-text").textContent;
  const description = document.getElementById("right-description").textContent;

  const combinedDate = `${date} ${time}`;
  const timeFormatted = new Date(combinedDate);
  console.log(timeFormatted);
  const newTime = format(timeFormatted, "HH:mm");
  const newDate = format(timeFormatted, "yyyy-MM-dd");

  console.log(name, priority, tagName, newDate, newTime, description);
  if (priority === "low") {
    low.checked = true;
  } else if (priority === "medium") {
    medium.checked = true;
  } else if (priority === "high") {
    high.checked = true;
  }

  document.getElementById("due-date").value = newDate;
  document.getElementById("task-name").value = name;
  document.getElementById("description").value = description;
  document.getElementById("add-tag").value = tagName;
  document.getElementById("due-time").value = newTime;
}
