import { getProjects } from "./createProject";

export default function loadProjects(projects) {
  for (let i = 0; i < projects.length; i += 1) {
    getProjects(
      projects[i].name,
      projects[i].description,
      projects[i].priority,
      projects[i].dueDate,
      projects[i].time,
      projects[i].tags
    );
  }
}
