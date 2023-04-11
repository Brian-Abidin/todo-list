import addValues from "./addValue";
import { form } from "./domElements";
import closeTheForm from "./openCloseForm";

export default function submitForm(event) {
  console.log("This is working");
  event.preventDefault();
  addValues();
  form.reset();
  closeTheForm();
}
