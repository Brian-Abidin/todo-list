import addValues from "./addValue";
import { form } from "./domElements";
import closeTheForm from "./openCloseForm";

function submitForm(event) {
  console.log("This is working");
  event.preventDefault();
  addValues();
  form.reset();
  closeTheForm();
}

form.addEventListener("submit", submitForm);
