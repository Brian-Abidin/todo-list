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
