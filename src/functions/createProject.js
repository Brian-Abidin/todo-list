import { parseISO } from "date-fns";
import format from "date-fns/format";
import {
  allProjects,
  contentLeft,
  contentRight,
  displayTags,
  displayTaskName,
  dueDateText,
  dueTimeText,
  priorityLevel,
  rightDelete,
  rightDescription
} from "./domElements";

// function addingTag() {
//   const tagValue = document.getElementById("add-tag").value;
//   document.getElementById("add-tag").value = "";
//   console.log("working Tag");
//   return {
//     tagValue
//   };
// }

// btnTag.addEventListener("click", addingTag());

// function displayProjectRight(name, desc, urgency, date, time, tags) {
//   displayTaskName.textContent = name;
//   priorityLevel.textContent = urgency;
//   rightDescription.textContent = desc;
//   dueDateText.textContent = date;
//   dueTimeText.textContent = time;

//   // const tag = document.createElement("div");
//   // const tagName = document.createElement("div");
//   // const removeTag = document.createElement("button");

//   // tag.classList.add("tag1");
//   // tagName.classList.add("tag-name");
//   // removeTag.classList.add("remove-tag");

//   // displayTags.appendChild(tag);
//   // tag.appendChild(tagName);
//   // tag.appendChild(removeTag);

//   // tagName.textContent = tags;
//   // removeTag.textContent = "-";
// }

function createTags(tags) {
  for (let i = 0; i < tags.length; i += 1) {
    const tag = document.createElement("div");
    const tagName = document.createElement("div");
    const removeTag = document.createElement("button");

    tag.classList.add("tag1");
    tagName.classList.add("tag-name");
    removeTag.classList.add("remove-tag");

    displayTags.appendChild(tag);
    tag.appendChild(tagName);
    tag.appendChild(removeTag);

    tagName.textContent = tags[i];
    removeTag.textContent = "-";
  }
}

function displayOnly(name, desc, urgency, date, time) {
  displayTaskName.textContent = name;
  priorityLevel.textContent = urgency;
  rightDescription.textContent = desc;
  dueDateText.textContent = date;
  dueTimeText.textContent = time;

  // const tag = document.createElement("div");
  // const tagName = document.createElement("div");
  // const removeTag = document.createElement("button");

  // tag.classList.add("tag1");
  // tagName.classList.add("tag-name");
  // removeTag.classList.add("remove-tag");

  // displayTags.appendChild(tag);
  // tag.appendChild(tagName);
  // tag.appendChild(removeTag);

  // removeTag.textContent = "-";
}

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

  showProject.setAttribute("id", `project${projectOrder}`);
  projectBtn.setAttribute("id", projectOrder);

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
        const thisProject = allProjects[e.target.id - 1];
        contentRight.style.display = "block";
        rightDelete.setAttribute("id", projectOrder);
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
          thisProject.date,
          thisProject.time
          // thisProject.tags
        );
      });
    }
  })();
}

export default function createProject(name, desc, urgency, date, time) {
  const projectOrder = allProjects.length;
  const newDate = parseISO(date);
  const dateFormatted = format(newDate, "M/dd/yy");
  const tagValue = document.getElementById("add-tag").value;
  console.log(dateFormatted);

  const project = {
    type: "project",
    id: projectOrder,
    name,
    description: desc,
    priority: urgency,
    dueDate: dateFormatted,
    time,
    tags: tagValue,
    tasks: []
  };
  // displayProjectRight(
  //   project.name,
  //   project.description,
  //   project.priority,
  //   project.dueDate,
  //   project.time,
  //   tagValue
  // );
  allProjects.push(project);
  displayProject(project.name, project.priority, project.dueDate);
  console.log(allProjects);
}

(function checkDelete() {
  rightDelete.addEventListener("click", (e) => {
    console.log(e.target.id);
    const projectId = e.target.id;
    const element = document.getElementById(`project${projectId}`);
    const arrayIndex = allProjects.indexOf(projectId);
    element.remove();
    allProjects.splice(arrayIndex, 1);
    contentRight.style.display = "none";
  });
})();
