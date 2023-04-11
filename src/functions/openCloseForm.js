import { btnSubmit, formPopup, formContainer } from "./domElements";

export function openForm() {
  formPopup.style.display = "block";
  formContainer.style.display = "block";
  console.log(btnSubmit.type);
}

export default function closeTheForm() {
  formPopup.style.display = "none";
  formContainer.style.display = "none";
}
