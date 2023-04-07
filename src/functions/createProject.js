import { allProjects, contentLeft } from "./domElements";

function displayProject(name, urgency, date) {
  const showProject = document.createElement("div");
  const priority = document.createElement("div");
  const title = document.createElement("div");
  const dueDate = document.createElement("div");
  const projectBtn = document.createElement("div");

  showProject.classList.add = "project";
  priority.classList.add = "project-priority";
  title.classList.add = "project-title";
  dueDate.classList.add = "project-duedate";
  projectBtn.classList.add = "project-button";

  contentLeft.appendChild(showProject);
  showProject.appendChild(priority);
  showProject.appendChild(title);
  showProject.appendChild(dueDate);
  showProject.appendChild(projectBtn);

  title.textContent = name;
  dueDate.textContent = date;
  priority.textContent = urgency;
}

export default function createProject(name, desc, urgency, date, time) {
  const project = {
    type: "project",
    name,
    description: desc,
    priority: urgency,
    dueDate: date,
    time,
    tags: [],
    tasks: []
  };
  allProjects.push(project);
  displayProject(project.name, project.priority, project.dueDate);
  console.log(allProjects);
}
