import { toDate, format } from "date-fns";

/* 
To-do list; objects that are created 
using factories or constructors/classes
properties should have at least title, description, dueDate, 
and priority.
might be good to include notes and checklist. 
    - should have projects/seperate list of todos
    - on open, default project shows with all their todos
    - users should be able to create new projects and
    chose which project their todos go into.
Seperate application logic from DOM-related stuff
    - creating new todos
    - setting todos as complete
    - changing todo priority
UI should be able to:
    - view all projects
    - view all todos in each project (ex. Title, duedate, and priorities)
    - expand a single todo to see/edit its details
    - delete a todo

- Write an array 
*/

const allProjects = [];

for (let i = Array.length - 1; i < Array.length; i += 1) {
  // code here adds task to array
}

// RemoveProject Function

// create object
function createProject(name, desc, urgency, time) {
  const project = {
    type: "project",
    name,
    description: desc,
    priority: urgency,
    dueDate: time,
    tags: [],
    tasks: []
  };
  allProjects.push(project);
}

// on click creates this object and pushes it into the array.
createProject("newtask", "plans out a plan", "green", "11:59");

console.log(allProjects[0]);
console.log(allProjects);

// add a task to project
// - add a task w/ description & due date, priority
// - add a checklist w/ due date, priority

// checks which project you are on and adds task from the project based on the array order
function addTask(title, desc) {
  const task = {
    type: "task",
    title,
    description: desc
  };
  allProjects[0].tasks.push(task);
}

function addChecklist(title) {
  const checkList = {
    type: "checklist",
    title
  };
  allProjects[0].tasks.push(checkList);
  // DOM element function that adds the checklist box
}

function addTag(title) {
  const tag = {
    type: "tag",
    title
  };
  // "allprojects[0]" is a place holder
  allProjects[0].tags.push(tag);
}

// form that can be written
// const newtask = addProject("newtask", "plans out a plan", "green", "11:59");
addTask("Buy a House", "Get enough money to buy an entire house");
addTask("Buy a Car", "Get enough money to buy an entire car");
addChecklist("Open Car");
// Object.defineProperty(newtask, "tag", {
//   value: "gaming",
//   writable: false,
//   enumerable: true
// });
addTag("work");

// addTaskProperty(newtask, "tag", "gaming");
// addTaskProperty(newtask, "tag", "sports");
// const objProps = Object.keys(newtask).length;

console.log(Object.keys(allProjects[0]).length);

for (const key in allProjects[0]) {
  console.log(key);
}

const result = new Date();
const resultFormatted = format(result, "k");


(function welcomeIcon() {
  const currentHour = +format(new Date(), "k");
  switch(true) {
    case(currentHour >= 20 || currentHour < 6):
      // change dom text.content = moon
      // change dom text.content = Good Evening
      console.log("moon")
      break;
    case(currentHour >= 6 && currentHour < 12):
      // change dom text.content = sunrise
      // change dom text.content = Good Morning
       console.log("sunrise")
      break;
    case(currentHour >= 12 && currentHour < 18):
      // change dom text.content = sun
      // change dom text.content = Good Afternoon
       console.log("sun")
      break;
    case(currentHour >= 18 && currentHour < 20):
      // change dom text.conent = sunset
      // change dom text.content = Good Evening
       console.log("sunset")
      break;
    default:
      console.log("welcomeIcon function broken");
  }
}());

console.log(resultFormatted);