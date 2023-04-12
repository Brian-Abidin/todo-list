import {
  displayTaskName,
  priorityLevel,
  rightDescription,
  dueDateText,
  dueTimeText
} from "./domElements";

export default function displayOnly(name, desc, urgency, date, time) {
  displayTaskName.textContent = name;
  priorityLevel.textContent = urgency;
  rightDescription.textContent = desc;
  console.log(date);
  dueDateText.textContent = date;
  dueTimeText.textContent = time;
}
