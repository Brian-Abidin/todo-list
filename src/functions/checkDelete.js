import { allProjects, contentRight, rightDelete } from "./domElements";
import updateProjectIds from "./updateProjectIds";

export default function checkDelete() {
  console.log(rightDelete.id);
  const projectId = Number(rightDelete.id);
  const projectIndex = projectId - 1;
  const element = document.getElementById(`project${projectId}`);
  console.log("check Delete", projectIndex);
  allProjects.splice(projectIndex, 1);
  element.remove();
  contentRight.style.display = "none";
  updateProjectIds();
}
