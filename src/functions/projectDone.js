export default function projectDone(id) {
  const idNum = id.slice(-1);
  const projectName = document.getElementById(`project${idNum}`);
  if (projectName.style.textDecoration === "line-through") {
    projectName.style.textDecoration = "";
  } else {
    projectName.style.textDecoration = "line-through";
  }
}
