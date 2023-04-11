import { btnSubmit, formPopup, formContainer } from "./domElements";

export function openForm() {
  btnSubmit.type = "submit";
  formPopup.style.display = "block";
  formContainer.style.display = "block";
}

export default function closeTheForm() {
  formPopup.style.display = "none";
  formContainer.style.display = "none";
}
