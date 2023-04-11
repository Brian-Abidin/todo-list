import { format } from "date-fns";
import { fillInfo, updateProjectInfo } from "./functions/createProject";
import {
  allProjects,
  greeting,
  weatherIcon,
  contentTop,
  createForm,
  formClose,
  form,
  btnSubmit,
  rightEdit
} from "./functions/domElements";
import closeTheForm, { openForm } from "./functions/openCloseForm";
import submitForm from "./functions/submitForm";

/* 
To-do list; objects that are created 
using factories or constructors/classes
properties should have at least title, description, dueDate, 
and priority.
might be good to include notes and checklist. 
    - should have projects/seperate list of todos
    - on open, default project shows with all their todos
    - users should be able to create new projects and
    chose which project their todos go into.
Seperate application logic from DOM-related stuff
    - creating new todos
    - setting todos as complete
    - changing todo priority
UI should be able to:
    - view all projects
    - view all todos in each project (ex. Title, duedate, and priorities)
    - expand a single todo to see/edit its details
    - delete a todo

- Write an array 
*/
for (let i = Array.length - 1; i < Array.length; i += 1) {
  // code here adds task to array
}

// RemoveProject Function

// create object
// export default function createProject(name, desc, urgency, date, time) {
//   const project = {
//     type: "project",
//     name,
//     description: desc,
//     priority: urgency,
//     dueDate: date,
//     time,
//     tags: [],
//     tasks: []
//   };
//   allProjects.push(project);
// }

// on click creates this object and pushes it into the array.

// add a task to project
// - add a task w/ description & due date, priority
// - add a checklist w/ due date, priority

// checks which project you are on and adds task from the project based on the array order
function addTask(title, desc) {
  const task = {
    type: "task",
    title,
    description: desc
  };
  allProjects[0].tasks.push(task);
}

function addChecklist(title) {
  const checkList = {
    type: "checklist",
    title
  };
  allProjects[0].tasks.push(checkList);
  // DOM element function that adds the checklist box
}

// function addTag(title) {
//   const tag = {
//     type: "tag",
//     title
//   };
//   // "allprojects[0]" is a place holder
//   allProjects[0].tags.push(tag);
// }

// form that can be written
// const newtask = addProject("newtask", "plans out a plan", "green", "11:59");
// addTask("Buy a House", "Get enough money to buy an entire house");
// addTask("Buy a Car", "Get enough money to buy an entire car");
// addChecklist("Open Car");
// Object.defineProperty(newtask, "tag", {
//   value: "gaming",
//   writable: false,
//   enumerable: true
// });
// addTag("work");

// addTaskProperty(newtask, "tag", "gaming");
// addTaskProperty(newtask, "tag", "sports");
// const objProps = Object.keys(newtask).length;

// console.log(Object.keys(allProjects[0]).length);

// for (const key in allProjects()[0]) {
//   console.log(key);
// }

const result = new Date();
const resultFormatted = format(result, "MM/dd/yyyy");
console.log(result);

(function welcomeIcon() {
  const currentHour = +format(new Date(), "k");
  switch (true) {
    case currentHour >= 20 || currentHour < 6:
      greeting.textContent = "Good Evening, User";
      contentTop.style.backgroundImage =
        "linear-gradient(rgb(51, 41, 41), rgb(0, 34, 128))";
      weatherIcon.src = "../src/images/moon.png";
      console.log("moon");
      break;
    case currentHour >= 6 && currentHour < 12:
      greeting.textContent = "Good Morning, User";
      weatherIcon.src = "../src/images/sun.png";
      contentTop.style.backgroundImage =
        "linear-gradient(rgb(6, 132, 235), rgb(255, 255, 255))";
      console.log("sunrise");
      break;
    case currentHour >= 12 && currentHour < 19:
      greeting.textContent = "Good Afternoon, User";
      weatherIcon.src = "../src/images/sunrise.png";
      contentTop.style.backgroundImage =
        "linear-gradient(rgb(255, 174, 0), rgb(2, 175, 255))";
      console.log("sun");
      break;
    case currentHour >= 19 && currentHour < 20:
      greeting.textContent = "Good Evening, User";
      weatherIcon.src = "../src/images/moon.png";
      contentTop.style.backgroundImage =
        "linear-gradient(rgb(51, 41, 41), rgb(0, 34, 128))";
      console.log("sunset");
      break;
    default:
      console.log("welcomeIcon function broken");
  }
})();

formClose.addEventListener("click", () => {
  closeTheForm();
});

createForm.addEventListener("click", () => {
  btnSubmit.type = "submit";
  openForm();
});

form.addEventListener("submit", submitForm);

btnSubmit.addEventListener("click", (e) => {
  if (btnSubmit.type === "button") updateProjectInfo(e.target.id);
});

rightEdit.addEventListener("click", (e) => {
  const editBtnId = e.target.id;
  console.log(editBtnId);
  btnSubmit.setAttribute("id", editBtnId);
  btnSubmit.type = "button";
  openForm();
  fillInfo();
  // console.log(btnSubmit.type);
  // console.log(editBtnId);
});

console.log(resultFormatted);
