import { allProjects } from "./domElements";

export default function createProject(name, desc, urgency, date, time) {
  const project = {
    type: "project",
    name,
    description: desc,
    priority: urgency,
    dueDate: date,
    time,
    tags: [],
    tasks: []
  };
  allProjects.push(project);
  console.log(allProjects);
}
