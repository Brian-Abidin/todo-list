import { allProjects, contentRight } from "./domElements";
import updateProjectIds from "./updateProjectIds";

export default function checkDelete(e) {
  console.log(e.target.id);
  const projectId = Number(e.target.id);
  const projectIndex = projectId - 1;
  const element = document.getElementById(`project${projectId}`);
  console.log("check Delete", projectIndex);
  allProjects.splice(projectIndex, 1);
  element.remove();
  contentRight.style.display = "none";
  updateProjectIds();
}
