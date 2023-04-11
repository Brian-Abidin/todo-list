import addValues from "./addValue";
import { form } from "./domElements";
import closeTheForm from "./openCloseForm";

function submitForm(event) {
  event.preventDefault();
  addValues();
  form.reset();
  closeTheForm();
}

form.addEventListener("submit", submitForm);
