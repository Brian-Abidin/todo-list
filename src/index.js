import { format } from "date-fns";
import {
  allProjects,
  createForm,
  formClose,
  form,
  btnSubmit,
  rightEdit,
  rightDelete
} from "./functions/domElements";
import closeTheForm, { openForm } from "./functions/openCloseForm";
import submitForm from "./functions/submitForm";
import fillInfo from "./functions/fillInfo";
import checkDelete from "./functions/checkDelete";
import updateProjectInfo from "./functions/updateProjectInfo";
import welcome from "./functions/welcome";
import loadProjects from "./functions/loadProjects";

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

const result = new Date();
const resultFormatted = format(result, "MM/dd/yyyy");
console.log(result);

window.onload = () => {
  welcome();
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");
  loadProjects(projects);
  console.log(projects);
};

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
});

rightDelete.addEventListener("click", () => {
  checkDelete();
  window.localStorage.setItem("projects", JSON.stringify(allProjects));
});

console.log(resultFormatted);
