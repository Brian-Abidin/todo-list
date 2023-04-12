import { allProjects } from "./domElements";

export default function projectDone(id) {
  const idNum = id.slice(-1);
  const projectName = document.getElementById(`title${idNum}`);
  const projectNum = Number(idNum) - 1;
  if (projectName.style.textDecoration === "line-through") {
    projectName.style.textDecoration = "";
    allProjects[projectNum].done = "no";
    window.localStorage.setItem("projects", JSON.stringify(allProjects));
  } else {
    projectName.style.textDecoration = "line-through";
    allProjects[projectNum].done = "yes";
    window.localStorage.setItem("projects", JSON.stringify(allProjects));
  }
}
