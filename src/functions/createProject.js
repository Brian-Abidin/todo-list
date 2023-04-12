import { parseISO } from "date-fns";
import format from "date-fns/format";
import { allProjects } from "./domElements";
import displayProject from "./displayProject";

export default function createProject(name, desc, urgency, date, time, tag) {
  const projectOrder = allProjects.length;
  const newDate = parseISO(date);
  const dateFormatted = format(newDate, "M/dd/yy");
  console.log(dateFormatted);

  const project = {
    type: "project",
    id: projectOrder,
    name,
    description: desc,
    priority: urgency,
    dueDate: dateFormatted,
    time,
    tags: tag,
    tasks: [],
    done: "no"
  };
  allProjects.push(project);
  displayProject(project.name, project.priority, project.dueDate);
  console.log(allProjects);
}

export function getProjects(name, desc, urgency, date, time, tag, done) {
  const projectOrder = allProjects.length;
  const project = {
    type: "project",
    id: projectOrder,
    name,
    description: desc,
    priority: urgency,
    dueDate: date,
    time,
    tags: tag,
    tasks: [],
    done
  };
  allProjects.push(project);
  displayProject(project.name, project.priority, project.dueDate);
}
