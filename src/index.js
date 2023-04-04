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
    
*/

/*
- Write an array 

*/

for (let i = Array.length - 1; i < Array.length; i += 1) {
  // code here adds task to array
}

// create object
function addProject(name, desc, urgency, time) {
  return {
    name,
    description: desc,
    priority: urgency,
    dueDate: time,
    tags: [],
    tasks: []
  };
}

// add a task to project
// - add a task w/ description & due date, priority
// - add a checklist w/ due date, priority

function addTask(obj, title, desc) {
  const task = {
    title,
    description: desc
  };
  obj.tasks.push(task);
}

// form that can be written
const newtask = addProject("newtask", "plans out a plan", "green", "11:59");
addTask(newtask, "Buy a House", "Get enough money to buy an entire house");
addTask(newtask, "Buy a Car", "Get enough money to buy an entire car");

// Object.defineProperty(newtask, "tag", {
//   value: "gaming",
//   writable: false,
//   enumerable: true
// });

newtask.tags.push("gaming", "work", "play");

// addTaskProperty(newtask, "tag", "gaming");
// addTaskProperty(newtask, "tag", "sports");
// const objProps = Object.keys(newtask).length;

console.log(Object.keys(newtask).length);

for (const key in newtask) {
  console.log(key);
}

console.log(newtask);
