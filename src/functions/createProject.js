import { parseISO } from "date-fns";
import format from "date-fns/format";
import { allProjects, contentLeft } from "./domElements";

function displayProject(name, urgency, date) {
  const projectOrder = allProjects.length;
  const showProject = document.createElement("div");
  const priority = document.createElement("div");
  const title = document.createElement("div");
  const dueDate = document.createElement("div");
  const projectBtn = document.createElement("button");

  showProject.classList.add("project");
  priority.classList.add("project-priority");
  title.classList.add("project-title");
  dueDate.classList.add("project-duedate");
  projectBtn.classList.add("project-button");

  if (urgency === "low") {
    priority.style.backgroundColor = "green";
  } else if (urgency === "medium") {
    priority.style.backgroundColor = "orange";
  } else if (urgency === "high") {
    priority.style.backgroundColor = "red";
  }

  showProject.setAttribute("id", projectOrder);

  contentLeft.appendChild(showProject);
  showProject.appendChild(priority);
  showProject.appendChild(title);
  showProject.appendChild(dueDate);
  showProject.appendChild(projectBtn);

  title.textContent = name;
  dueDate.textContent = date;
  projectBtn.textContent = ">";
}

export default function createProject(name, desc, urgency, date, time) {
  const newDate = parseISO(date);
  const dateFormatted = format(newDate, "M/dd/yy");
  console.log(dateFormatted);

  const project = {
    type: "project",
    name,
    description: desc,
    priority: urgency,
    dueDate: dateFormatted,
    time,
    tags: [],
    tasks: []
  };
  allProjects.push(project);
  displayProject(project.name, project.priority, project.dueDate);
  console.log(allProjects);
}
