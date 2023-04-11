import { parseISO } from "date-fns";
import format from "date-fns/format";
import closeTheForm, { openForm } from "./openCloseForm";
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
  rightDescription,
  rightPriority,
  rightEdit,
  btnSubmit,
  createForm,
  form,
  low,
  medium,
  high
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
    if (tags[0] === "") {
      // do nothing
    } else {
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
}

function displayOnly(name, desc, urgency, date, time) {
  displayTaskName.textContent = name;
  priorityLevel.textContent = urgency;
  rightDescription.textContent = desc;
  console.log(date);
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

function checkPriority(urgency) {
  if (urgency === "low") {
    rightPriority.style.backgroundColor = "green";
  } else if (urgency === "medium") {
    rightPriority.style.backgroundColor = "yellow";
  } else if (urgency === "high") {
    rightPriority.style.backgroundColor = "red";
  }
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

export default function createProject(name, desc, urgency, date, time, tag) {
  const projectOrder = allProjects.length;
  const newDate = parseISO(date);
  const dateFormatted = format(newDate, "M/dd/yy");
  console.log(dateFormatted);

  const project = {
    type: "project",
    id: projectOrder,
    name,
    description: desc,
    priority: urgency,
    dueDate: dateFormatted,
    time,
    tags: [tag],
    tasks: []
  };
  allProjects.push(project);
  displayProject(project.name, project.priority, project.dueDate);
  console.log(allProjects);
}

function updateProjectIds() {
  let counter = 1;
  for (let i = 0; i < allProjects.length; i += 1) {
    const displayBtnClass = document.getElementsByClassName("project-button");
    const editBtns = document.getElementsByClassName("right-edit");
    const projectClass = document.getElementsByClassName("project");
    const titleClass = document.getElementsByClassName("project-title");
    const dateClass = document.getElementsByClassName("project-duedate");
    const priorityClass = document.getElementsByClassName("project-priority");

    titleClass[i].id = `title${counter}`;
    dateClass[i].id = `date${counter}`;
    priorityClass[i].id = `priority${counter}`;

    allProjects[i].id = i;
    displayBtnClass[i].id = counter;
    editBtns[i].id = counter;
    projectClass[i].id = `project${counter}`;
    counter += 1;
    console.log(counter);
  }
}

(function checkDelete() {
  rightDelete.addEventListener("click", (e) => {
    console.log(e.target.id);
    const projectId = Number(e.target.id);
    const projectIndex = projectId - 1;
    const element = document.getElementById(`project${projectId}`);
    console.log("check Delete", projectIndex);
    allProjects.splice(projectIndex, 1);
    element.remove();
    contentRight.style.display = "none";
    updateProjectIds();
  });
})();

export function fillInfo() {
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

export function updateProjectInfo(index) {
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

  thisProject.tags = [];
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
  thisProject.tags.push(tag);
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

// (function editProject() {
//   rightEdit.addEventListener("click", (e) => {
//     const editBtnId = e.target.id;
//     openForm();
//     btnSubmit.type = "button";
//     console.log(btnSubmit.type);
//     if (btnSubmit.type === "button") {
//       btnSubmit.addEventListener("click", updateProjectInfo(editBtnId));
//     } else {
//       console.log("This is a new project!");
//     }
//     console.log(editBtnId);
//   });
// })();
