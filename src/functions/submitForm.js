import addValues from "./addValue";
import { allProjects, form } from "./domElements";
import closeTheForm from "./openCloseForm";

export default function submitForm(event) {
  console.log("This is working");
  event.preventDefault();
  addValues();
  form.reset();
  closeTheForm();
  window.localStorage.setItem("projects", JSON.stringify(allProjects));
}
