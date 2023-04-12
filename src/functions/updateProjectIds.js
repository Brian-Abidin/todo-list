import { allProjects } from "./domElements";

export default function updateProjectIds() {
  let counter = 1;
  for (let i = 0; i < allProjects.length; i += 1) {
    const displayBtnClass = document.getElementsByClassName("project-button");
    const projectClass = document.getElementsByClassName("project");
    const titleClass = document.getElementsByClassName("project-title");
    const dateClass = document.getElementsByClassName("project-duedate");
    const priorityClass = document.getElementsByClassName("project-priority");
    const doneBtnClass = document.getElementsByClassName("finish-button");

    titleClass[i].id = `title${counter}`;
    dateClass[i].id = `date${counter}`;
    priorityClass[i].id = `priority${counter}`;
    doneBtnClass[i].id = `finish${counter}`;
    projectClass[i].id = `project${counter}`;
    console.log(projectClass[i].id);
    allProjects[i].id = i;
    displayBtnClass[i].id = counter;
    counter += 1;
    console.log(counter);
  }
}
