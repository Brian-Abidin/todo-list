import {
  allProjects,
  contentLeft,
  contentRight,
  rightDelete,
  rightEdit,
  displayTags
} from "./domElements";
import createTags from "./createTags";
import displayOnly from "./displayOnly";
import checkPriority from "./checkPriority";

export default function displayProject(name, urgency, date) {
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
    priority.style.backgroundColor = "yellow";
  } else if (urgency === "high") {
    priority.style.backgroundColor = "red";
  }

  showProject.setAttribute("id", `project${projectOrder}`);
  projectBtn.setAttribute("id", projectOrder);
  title.setAttribute("id", `title${projectOrder}`);
  dueDate.setAttribute("id", `date${projectOrder}`);
  priority.setAttribute("id", `priority${projectOrder}`);

  contentLeft.appendChild(showProject);
  showProject.appendChild(priority);
  showProject.appendChild(title);
  showProject.appendChild(dueDate);
  showProject.appendChild(projectBtn);

  title.textContent = name;
  dueDate.textContent = date;
  projectBtn.textContent = ">";

  (function checkDislay() {
    if (allProjects.length !== 0) {
      projectBtn.addEventListener("click", (e) => {
        const thisProject = allProjects[Number(e.target.id) - 1];
        contentRight.style.display = "block";
        rightDelete.setAttribute("id", e.target.id);
        rightEdit.setAttribute("id", e.target.id);
        while (displayTags.firstChild) {
          displayTags.removeChild(displayTags.firstChild);
        }
        console.log(thisProject);
        console.log(allProjects);
        createTags(thisProject.tags);
        displayOnly(
          thisProject.name,
          thisProject.description,
          thisProject.priority,
          thisProject.dueDate,
          thisProject.time
        );
        checkPriority(thisProject.priority);
      });
    }
  })();
}
