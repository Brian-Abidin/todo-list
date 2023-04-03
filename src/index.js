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

function createObject(name, desc, urgency) {
  const task = {
    title: name,
    description: desc,
    priority: urgency
  };
  return {
    task
  };
}

function addTaskProperty(obj, name, value) {
  Object.defineProperty(obj, name, {
    value,
    writable: true
  });
}

const newtask = createObject("newtask", "plans out a plan", "green");
addTaskProperty(newtask, "tag", "gaming");
addTaskProperty(newtask, "tag", "sports");

console.log(newtask);
