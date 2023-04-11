import {
  btnSubmit,
  formPopup,
  formContainer,
  createForm,
  formClose
} from "./domElements";

export function openForm() {
  // btnSubmit.type = "submit";
  formPopup.style.display = "block";
  formContainer.style.display = "block";
  console.log(btnSubmit.type);
}

export default function closeTheForm() {
  formPopup.style.display = "none";
  formContainer.style.display = "none";
}

formClose.addEventListener("click", closeTheForm);
createForm.addEventListener("click", openForm);
