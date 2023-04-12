"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["addvalue"],{

/***/ "./src/functions/addValue.js":
/*!***********************************!*\
  !*** ./src/functions/addValue.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addValues)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/functions/createProject.js");




function addValues() {
  const taskValue = document.getElementById("task-name").value;
  //   const tagValue = document.getElementById("add-tag").value;
  let urgency = "";
  const descriptionValue = document.getElementById("description").value;
  const dateValue = document.getElementById("due-date").value;
  const tagValue = document.getElementById("add-tag").value;
  let timeValue = document.getElementById("due-time").value;

  // fomatting time value
  const combinedDate = `${dateValue} ${timeValue}`;
  console.log(combinedDate);
  const timeFormatted = new Date(combinedDate);
  const newTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(timeFormatted, "h:mm a");
  console.log(newTime);

  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.low.checked) {
    urgency = "low";
  } else if (_domElements__WEBPACK_IMPORTED_MODULE_0__.medium.checked) {
    urgency = "medium";
  } else if (_domElements__WEBPACK_IMPORTED_MODULE_0__.high.checked) {
    urgency = "high";
  }

  if (timeValue === "") {
    timeValue = "No Time";
  }

  console.log(
    taskValue,
    descriptionValue,
    urgency,
    dateValue,
    newTime,
    tagValue
  );
  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.btnSubmit.type === "submit") {
    (0,_createProject__WEBPACK_IMPORTED_MODULE_1__["default"])(
      taskValue,
      descriptionValue,
      urgency,
      dateValue,
      newTime,
      tagValue
    );
  } else {
    console.log("updating project info");
  }
}


/***/ }),

/***/ "./src/functions/checkPriority.js":
/*!****************************************!*\
  !*** ./src/functions/checkPriority.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkPriority)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");


function checkPriority(urgency) {
  if (urgency === "low") {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.rightPriority.style.backgroundColor = "green";
  } else if (urgency === "medium") {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.rightPriority.style.backgroundColor = "yellow";
  } else if (urgency === "high") {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.rightPriority.style.backgroundColor = "red";
  }
}


/***/ }),

/***/ "./src/functions/createProject.js":
/*!****************************************!*\
  !*** ./src/functions/createProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject */ "./src/functions/displayProject.js");





function createProject(name, desc, urgency, date, time, tag) {
  const projectOrder = _domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects.length;
  const newDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date);
  const dateFormatted = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__["default"])(newDate, "M/dd/yy");
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
    tasks: []
  };
  _domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects.push(project);
  (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__["default"])(project.name, project.priority, project.dueDate);
  console.log(_domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects);
}


/***/ }),

/***/ "./src/functions/createTags.js":
/*!*************************************!*\
  !*** ./src/functions/createTags.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTags)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");


function createTags(tags) {
  if (tags === "") {
    // do nothing
  } else {
    const tag = document.createElement("div");
    const tagName = document.createElement("div");
    const removeTag = document.createElement("button");

    tag.classList.add("tag1");
    tagName.classList.add("tag-name");
    removeTag.classList.add("remove-tag");

    _domElements__WEBPACK_IMPORTED_MODULE_0__.displayTags.appendChild(tag);
    tag.appendChild(tagName);
    tag.appendChild(removeTag);

    tagName.textContent = tags;
    removeTag.textContent = "-";
  }
}


/***/ }),

/***/ "./src/functions/displayOnly.js":
/*!**************************************!*\
  !*** ./src/functions/displayOnly.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayOnly)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");


function displayOnly(name, desc, urgency, date, time) {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.displayTaskName.textContent = name;
  _domElements__WEBPACK_IMPORTED_MODULE_0__.priorityLevel.textContent = urgency;
  _domElements__WEBPACK_IMPORTED_MODULE_0__.rightDescription.textContent = desc;
  console.log(date);
  _domElements__WEBPACK_IMPORTED_MODULE_0__.dueDateText.textContent = date;
  _domElements__WEBPACK_IMPORTED_MODULE_0__.dueTimeText.textContent = time;
}


/***/ }),

/***/ "./src/functions/displayProject.js":
/*!*****************************************!*\
  !*** ./src/functions/displayProject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");
/* harmony import */ var _createTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTags */ "./src/functions/createTags.js");
/* harmony import */ var _displayOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayOnly */ "./src/functions/displayOnly.js");
/* harmony import */ var _checkPriority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkPriority */ "./src/functions/checkPriority.js");





function displayProject(name, urgency, date) {
  const projectOrder = _domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects.length;
  const showProject = document.createElement("div");
  const priority = document.createElement("div");
  const title = document.createElement("div");
  const dueDate = document.createElement("div");
  const projectBtn = document.createElement("button");

  showProject.classList.add("project");
  priority.classList.add("project-priority");
  title.classList.add("project-title");
  dueDate.classList.add("project-duedate");
  projectBtn.classList.add("project-button");

  if (urgency === "low") {
    priority.style.backgroundColor = "green";
  } else if (urgency === "medium") {
    priority.style.backgroundColor = "yellow";
  } else if (urgency === "high") {
    priority.style.backgroundColor = "red";
  }

  showProject.setAttribute("id", `project${projectOrder}`);
  projectBtn.setAttribute("id", projectOrder);
  title.setAttribute("id", `title${projectOrder}`);
  dueDate.setAttribute("id", `date${projectOrder}`);
  priority.setAttribute("id", `priority${projectOrder}`);

  _domElements__WEBPACK_IMPORTED_MODULE_0__.contentLeft.appendChild(showProject);
  showProject.appendChild(priority);
  showProject.appendChild(title);
  showProject.appendChild(dueDate);
  showProject.appendChild(projectBtn);

  title.textContent = name;
  dueDate.textContent = date;
  projectBtn.textContent = ">";

  (function checkDislay() {
    if (_domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects.length !== 0) {
      projectBtn.addEventListener("click", (e) => {
        const thisProject = _domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects[Number(e.target.id) - 1];
        _domElements__WEBPACK_IMPORTED_MODULE_0__.contentRight.style.display = "block";
        _domElements__WEBPACK_IMPORTED_MODULE_0__.rightDelete.setAttribute("id", e.target.id);
        _domElements__WEBPACK_IMPORTED_MODULE_0__.rightEdit.setAttribute("id", e.target.id);
        while (_domElements__WEBPACK_IMPORTED_MODULE_0__.displayTags.firstChild) {
          _domElements__WEBPACK_IMPORTED_MODULE_0__.displayTags.removeChild(_domElements__WEBPACK_IMPORTED_MODULE_0__.displayTags.firstChild);
        }
        console.log(thisProject);
        console.log(_domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects);
        (0,_createTags__WEBPACK_IMPORTED_MODULE_1__["default"])(thisProject.tags);
        (0,_displayOnly__WEBPACK_IMPORTED_MODULE_2__["default"])(
          thisProject.name,
          thisProject.description,
          thisProject.priority,
          thisProject.dueDate,
          thisProject.time
        );
        (0,_checkPriority__WEBPACK_IMPORTED_MODULE_3__["default"])(thisProject.priority);
      });
    }
  })();
}


/***/ }),

/***/ "./src/functions/domElements.js":
/*!**************************************!*\
  !*** ./src/functions/domElements.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addChecklist": () => (/* binding */ addChecklist),
/* harmony export */   "addNotes": () => (/* binding */ addNotes),
/* harmony export */   "addTag": () => (/* binding */ addTag),
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "bottomHeader": () => (/* binding */ bottomHeader),
/* harmony export */   "bottomTitle": () => (/* binding */ bottomTitle),
/* harmony export */   "btnSubmit": () => (/* binding */ btnSubmit),
/* harmony export */   "buttonContainer": () => (/* binding */ buttonContainer),
/* harmony export */   "closeSign": () => (/* binding */ closeSign),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "contentBottom": () => (/* binding */ contentBottom),
/* harmony export */   "contentLeft": () => (/* binding */ contentLeft),
/* harmony export */   "contentRight": () => (/* binding */ contentRight),
/* harmony export */   "contentTop": () => (/* binding */ contentTop),
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "dateText": () => (/* binding */ dateText),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "descriptionText": () => (/* binding */ descriptionText),
/* harmony export */   "displayTags": () => (/* binding */ displayTags),
/* harmony export */   "displayTaskName": () => (/* binding */ displayTaskName),
/* harmony export */   "dueDate": () => (/* binding */ dueDate),
/* harmony export */   "dueDateText": () => (/* binding */ dueDateText),
/* harmony export */   "dueTime": () => (/* binding */ dueTime),
/* harmony export */   "dueTimeText": () => (/* binding */ dueTimeText),
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "formBottom": () => (/* binding */ formBottom),
/* harmony export */   "formClose": () => (/* binding */ formClose),
/* harmony export */   "formContainer": () => (/* binding */ formContainer),
/* harmony export */   "formContent": () => (/* binding */ formContent),
/* harmony export */   "formLeft": () => (/* binding */ formLeft),
/* harmony export */   "formPopup": () => (/* binding */ formPopup),
/* harmony export */   "formRight": () => (/* binding */ formRight),
/* harmony export */   "greeting": () => (/* binding */ greeting),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "headerTitle": () => (/* binding */ headerTitle),
/* harmony export */   "high": () => (/* binding */ high),
/* harmony export */   "low": () => (/* binding */ low),
/* harmony export */   "medium": () => (/* binding */ medium),
/* harmony export */   "priorityLevel": () => (/* binding */ priorityLevel),
/* harmony export */   "priorityText": () => (/* binding */ priorityText),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectDueDate": () => (/* binding */ projectDueDate),
/* harmony export */   "projectPriority": () => (/* binding */ projectPriority),
/* harmony export */   "projectShow": () => (/* binding */ projectShow),
/* harmony export */   "projectTitle": () => (/* binding */ projectTitle),
/* harmony export */   "rightContainer": () => (/* binding */ rightContainer),
/* harmony export */   "rightDate": () => (/* binding */ rightDate),
/* harmony export */   "rightDelete": () => (/* binding */ rightDelete),
/* harmony export */   "rightDescription": () => (/* binding */ rightDescription),
/* harmony export */   "rightEdit": () => (/* binding */ rightEdit),
/* harmony export */   "rightHeader": () => (/* binding */ rightHeader),
/* harmony export */   "rightPriority": () => (/* binding */ rightPriority),
/* harmony export */   "rightTags": () => (/* binding */ rightTags),
/* harmony export */   "rightTask": () => (/* binding */ rightTask),
/* harmony export */   "tagContainer": () => (/* binding */ tagContainer),
/* harmony export */   "taskName": () => (/* binding */ taskName),
/* harmony export */   "timeText": () => (/* binding */ timeText),
/* harmony export */   "weather": () => (/* binding */ weather),
/* harmony export */   "weatherIcon": () => (/* binding */ weatherIcon),
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
// Constants
const wrapper = document.getElementById("wrapper");
const header = document.getElementById("header");

const form = document.querySelector("form");
const formPopup = document.getElementById("form-popup");
const formContainer = document.getElementById("form-container");
const buttonContainer = document.getElementById("button-container");
const formClose = document.getElementById("form-close");
const closeSign = document.getElementById("close-sign");
const btnSubmit = document.getElementById("btn-submit");
const formContent = document.getElementById("form-content");
const taskName = document.getElementById("task-name");
const formBottom = document.getElementById("form-bottom");
const formLeft = document.getElementById("form-left");
const tagContainer = document.getElementById("tag-container");
// const btnTag = document.getElementById("btn-tag");
const addTag = document.getElementById("add-tag");
const description = document.getElementById("description");
const formRight = document.getElementById("form-right");
const dueDate = document.getElementById("due-date");
const dueTime = document.getElementById("due-time");
const low = document.getElementById("low");
const medium = document.getElementById("medium");
const high = document.getElementById("high");

const headerTitle = document.getElementById("header-title");
const content = document.getElementById("content");
const contentTop = document.getElementById("content-top");
const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const greeting = document.getElementById("greeting");

const contentBottom = document.getElementById("content-bottom");
const contentLeft = document.getElementById("content-left");
const bottomHeader = document.getElementById("bottom-header");
const bottomTitle = document.getElementById("bottom-title");
const createForm = document.getElementById("create-form");
const project = document.getElementById("project");
const projectPriority = document.getElementById("project-priority");
const projectTitle = document.getElementById("project-title");
const projectDueDate = document.getElementById("project-duedate");
const projectShow = document.getElementById("project-show");

const contentRight = document.getElementById("content-right");
const rightContainer = document.getElementById("right-container");
const rightHeader = document.getElementById("right-header");
const rightDelete = document.getElementById("right-delete");
const rightEdit = document.getElementById("right-edit");
const rightTask = document.getElementById("right-task");
const displayTaskName = document.getElementById("display-task-name");
const rightPriority = document.getElementById("right-priority");
const priorityText = document.getElementById("priority-text");
const priorityLevel = document.getElementById("priority-level");
const rightTags = document.getElementById("right-tags");
const displayTags = document.getElementById("display-tags");

const rightDate = document.getElementById("right-date");
const dateText = document.getElementById("date-text");
const dueDateText = document.getElementById("due-date-text");
const timeText = document.getElementById("time-text");
const dueTimeText = document.getElementById("due-time-text");
const rightDescription = document.getElementById("right-description");
const descriptionText = document.getElementById("description-text");

const addNotes = document.getElementById("add-notes");
const addChecklist = document.getElementById("add-checklist");

const footer = document.getElementById("footer");
const allProjects = [];




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/functions/addValue.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBZ0VFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGRWYWx1ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2NoZWNrUHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlVGFncy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2Rpc3BsYXlPbmx5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9kb21FbGVtZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGJ0blN1Ym1pdCwgaGlnaCwgbG93LCBtZWRpdW0gfSBmcm9tIFwiLi9kb21FbGVtZW50c1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRWYWx1ZXMoKSB7XG4gIGNvbnN0IHRhc2tWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlO1xuICAvLyAgIGNvbnN0IHRhZ1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFnXCIpLnZhbHVlO1xuICBsZXQgdXJnZW5jeSA9IFwiXCI7XG4gIGNvbnN0IGRlc2NyaXB0aW9uVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBkYXRlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlXCIpLnZhbHVlO1xuICBjb25zdCB0YWdWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhZ1wiKS52YWx1ZTtcbiAgbGV0IHRpbWVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLXRpbWVcIikudmFsdWU7XG5cbiAgLy8gZm9tYXR0aW5nIHRpbWUgdmFsdWVcbiAgY29uc3QgY29tYmluZWREYXRlID0gYCR7ZGF0ZVZhbHVlfSAke3RpbWVWYWx1ZX1gO1xuICBjb25zb2xlLmxvZyhjb21iaW5lZERhdGUpO1xuICBjb25zdCB0aW1lRm9ybWF0dGVkID0gbmV3IERhdGUoY29tYmluZWREYXRlKTtcbiAgY29uc3QgbmV3VGltZSA9IGZvcm1hdCh0aW1lRm9ybWF0dGVkLCBcImg6bW0gYVwiKTtcbiAgY29uc29sZS5sb2cobmV3VGltZSk7XG5cbiAgaWYgKGxvdy5jaGVja2VkKSB7XG4gICAgdXJnZW5jeSA9IFwibG93XCI7XG4gIH0gZWxzZSBpZiAobWVkaXVtLmNoZWNrZWQpIHtcbiAgICB1cmdlbmN5ID0gXCJtZWRpdW1cIjtcbiAgfSBlbHNlIGlmIChoaWdoLmNoZWNrZWQpIHtcbiAgICB1cmdlbmN5ID0gXCJoaWdoXCI7XG4gIH1cblxuICBpZiAodGltZVZhbHVlID09PSBcIlwiKSB7XG4gICAgdGltZVZhbHVlID0gXCJObyBUaW1lXCI7XG4gIH1cblxuICBjb25zb2xlLmxvZyhcbiAgICB0YXNrVmFsdWUsXG4gICAgZGVzY3JpcHRpb25WYWx1ZSxcbiAgICB1cmdlbmN5LFxuICAgIGRhdGVWYWx1ZSxcbiAgICBuZXdUaW1lLFxuICAgIHRhZ1ZhbHVlXG4gICk7XG4gIGlmIChidG5TdWJtaXQudHlwZSA9PT0gXCJzdWJtaXRcIikge1xuICAgIGNyZWF0ZVByb2plY3QoXG4gICAgICB0YXNrVmFsdWUsXG4gICAgICBkZXNjcmlwdGlvblZhbHVlLFxuICAgICAgdXJnZW5jeSxcbiAgICAgIGRhdGVWYWx1ZSxcbiAgICAgIG5ld1RpbWUsXG4gICAgICB0YWdWYWx1ZVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGluZyBwcm9qZWN0IGluZm9cIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IHJpZ2h0UHJpb3JpdHkgfSBmcm9tIFwiLi9kb21FbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1ByaW9yaXR5KHVyZ2VuY3kpIHtcbiAgaWYgKHVyZ2VuY3kgPT09IFwibG93XCIpIHtcbiAgICByaWdodFByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgfSBlbHNlIGlmICh1cmdlbmN5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgcmlnaHRQcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICB9IGVsc2UgaWYgKHVyZ2VuY3kgPT09IFwiaGlnaFwiKSB7XG4gICAgcmlnaHRQcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL2RvbUVsZW1lbnRzXCI7XG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSBcIi4vZGlzcGxheVByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lLCBkZXNjLCB1cmdlbmN5LCBkYXRlLCB0aW1lLCB0YWcpIHtcbiAgY29uc3QgcHJvamVjdE9yZGVyID0gYWxsUHJvamVjdHMubGVuZ3RoO1xuICBjb25zdCBuZXdEYXRlID0gcGFyc2VJU08oZGF0ZSk7XG4gIGNvbnN0IGRhdGVGb3JtYXR0ZWQgPSBmb3JtYXQobmV3RGF0ZSwgXCJNL2RkL3l5XCIpO1xuICBjb25zb2xlLmxvZyhkYXRlRm9ybWF0dGVkKTtcblxuICBjb25zdCBwcm9qZWN0ID0ge1xuICAgIHR5cGU6IFwicHJvamVjdFwiLFxuICAgIGlkOiBwcm9qZWN0T3JkZXIsXG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICBwcmlvcml0eTogdXJnZW5jeSxcbiAgICBkdWVEYXRlOiBkYXRlRm9ybWF0dGVkLFxuICAgIHRpbWUsXG4gICAgdGFnczogdGFnLFxuICAgIHRhc2tzOiBbXVxuICB9O1xuICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICBkaXNwbGF5UHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QucHJpb3JpdHksIHByb2plY3QuZHVlRGF0ZSk7XG4gIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbn1cbiIsImltcG9ydCB7IGRpc3BsYXlUYWdzIH0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFncyh0YWdzKSB7XG4gIGlmICh0YWdzID09PSBcIlwiKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFnTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcmVtb3ZlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHRhZy5jbGFzc0xpc3QuYWRkKFwidGFnMVwiKTtcbiAgICB0YWdOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YWctbmFtZVwiKTtcbiAgICByZW1vdmVUYWcuY2xhc3NMaXN0LmFkZChcInJlbW92ZS10YWdcIik7XG5cbiAgICBkaXNwbGF5VGFncy5hcHBlbmRDaGlsZCh0YWcpO1xuICAgIHRhZy5hcHBlbmRDaGlsZCh0YWdOYW1lKTtcbiAgICB0YWcuYXBwZW5kQ2hpbGQocmVtb3ZlVGFnKTtcblxuICAgIHRhZ05hbWUudGV4dENvbnRlbnQgPSB0YWdzO1xuICAgIHJlbW92ZVRhZy50ZXh0Q29udGVudCA9IFwiLVwiO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBkaXNwbGF5VGFza05hbWUsXG4gIHByaW9yaXR5TGV2ZWwsXG4gIHJpZ2h0RGVzY3JpcHRpb24sXG4gIGR1ZURhdGVUZXh0LFxuICBkdWVUaW1lVGV4dFxufSBmcm9tIFwiLi9kb21FbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5T25seShuYW1lLCBkZXNjLCB1cmdlbmN5LCBkYXRlLCB0aW1lKSB7XG4gIGRpc3BsYXlUYXNrTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHByaW9yaXR5TGV2ZWwudGV4dENvbnRlbnQgPSB1cmdlbmN5O1xuICByaWdodERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcbiAgY29uc29sZS5sb2coZGF0ZSk7XG4gIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gZGF0ZTtcbiAgZHVlVGltZVRleHQudGV4dENvbnRlbnQgPSB0aW1lO1xufVxuIiwiaW1wb3J0IHtcbiAgYWxsUHJvamVjdHMsXG4gIGNvbnRlbnRMZWZ0LFxuICBjb250ZW50UmlnaHQsXG4gIHJpZ2h0RGVsZXRlLFxuICByaWdodEVkaXQsXG4gIGRpc3BsYXlUYWdzXG59IGZyb20gXCIuL2RvbUVsZW1lbnRzXCI7XG5pbXBvcnQgY3JlYXRlVGFncyBmcm9tIFwiLi9jcmVhdGVUYWdzXCI7XG5pbXBvcnQgZGlzcGxheU9ubHkgZnJvbSBcIi4vZGlzcGxheU9ubHlcIjtcbmltcG9ydCBjaGVja1ByaW9yaXR5IGZyb20gXCIuL2NoZWNrUHJpb3JpdHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVByb2plY3QobmFtZSwgdXJnZW5jeSwgZGF0ZSkge1xuICBjb25zdCBwcm9qZWN0T3JkZXIgPSBhbGxQcm9qZWN0cy5sZW5ndGg7XG4gIGNvbnN0IHNob3dQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBzaG93UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcHJpb3JpdHlcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWR1ZWRhdGVcIik7XG4gIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnV0dG9uXCIpO1xuXG4gIGlmICh1cmdlbmN5ID09PSBcImxvd1wiKSB7XG4gICAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICB9IGVsc2UgaWYgKHVyZ2VuY3kgPT09IFwibWVkaXVtXCIpIHtcbiAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICB9IGVsc2UgaWYgKHVyZ2VuY3kgPT09IFwiaGlnaFwiKSB7XG4gICAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgfVxuXG4gIHNob3dQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGBwcm9qZWN0JHtwcm9qZWN0T3JkZXJ9YCk7XG4gIHByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdE9yZGVyKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRpdGxlJHtwcm9qZWN0T3JkZXJ9YCk7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRhdGUke3Byb2plY3RPcmRlcn1gKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHByaW9yaXR5JHtwcm9qZWN0T3JkZXJ9YCk7XG5cbiAgY29udGVudExlZnQuYXBwZW5kQ2hpbGQoc2hvd1Byb2plY3QpO1xuICBzaG93UHJvamVjdC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIHNob3dQcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgc2hvd1Byb2plY3QuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIHNob3dQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xuXG4gIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XG4gIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIj5cIjtcblxuICAoZnVuY3Rpb24gY2hlY2tEaXNsYXkoKSB7XG4gICAgaWYgKGFsbFByb2plY3RzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGhpc1Byb2plY3QgPSBhbGxQcm9qZWN0c1tOdW1iZXIoZS50YXJnZXQuaWQpIC0gMV07XG4gICAgICAgIGNvbnRlbnRSaWdodC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICByaWdodERlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlLnRhcmdldC5pZCk7XG4gICAgICAgIHJpZ2h0RWRpdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlLnRhcmdldC5pZCk7XG4gICAgICAgIHdoaWxlIChkaXNwbGF5VGFncy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgZGlzcGxheVRhZ3MucmVtb3ZlQ2hpbGQoZGlzcGxheVRhZ3MuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpc1Byb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgICAgIGNyZWF0ZVRhZ3ModGhpc1Byb2plY3QudGFncyk7XG4gICAgICAgIGRpc3BsYXlPbmx5KFxuICAgICAgICAgIHRoaXNQcm9qZWN0Lm5hbWUsXG4gICAgICAgICAgdGhpc1Byb2plY3QuZGVzY3JpcHRpb24sXG4gICAgICAgICAgdGhpc1Byb2plY3QucHJpb3JpdHksXG4gICAgICAgICAgdGhpc1Byb2plY3QuZHVlRGF0ZSxcbiAgICAgICAgICB0aGlzUHJvamVjdC50aW1lXG4gICAgICAgICk7XG4gICAgICAgIGNoZWNrUHJpb3JpdHkodGhpc1Byb2plY3QucHJpb3JpdHkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xufVxuIiwiLy8gQ29uc3RhbnRzXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3cmFwcGVyXCIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IGZvcm1Qb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1wb3B1cFwiKTtcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY29udGFpbmVyXCIpO1xuY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuY29uc3QgZm9ybUNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWNsb3NlXCIpO1xuY29uc3QgY2xvc2VTaWduID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1zaWduXCIpO1xuY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc3VibWl0XCIpO1xuY29uc3QgZm9ybUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY29udGVudFwiKTtcbmNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIik7XG5jb25zdCBmb3JtQm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWJvdHRvbVwiKTtcbmNvbnN0IGZvcm1MZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWxlZnRcIik7XG5jb25zdCB0YWdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhZy1jb250YWluZXJcIik7XG4vLyBjb25zdCBidG5UYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi10YWdcIik7XG5jb25zdCBhZGRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YWdcIik7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG5jb25zdCBmb3JtUmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tcmlnaHRcIik7XG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKTtcbmNvbnN0IGR1ZVRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS10aW1lXCIpO1xuY29uc3QgbG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3dcIik7XG5jb25zdCBtZWRpdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lZGl1bVwiKTtcbmNvbnN0IGhpZ2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIik7XG5cbmNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItdGl0bGVcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgY29udGVudFRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC10b3BcIik7XG5jb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyXCIpO1xuY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaWNvblwiKTtcbmNvbnN0IGdyZWV0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmVldGluZ1wiKTtcblxuY29uc3QgY29udGVudEJvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1ib3R0b21cIik7XG5jb25zdCBjb250ZW50TGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1sZWZ0XCIpO1xuY29uc3QgYm90dG9tSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3R0b20taGVhZGVyXCIpO1xuY29uc3QgYm90dG9tVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbS10aXRsZVwiKTtcbmNvbnN0IGNyZWF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1mb3JtXCIpO1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1wcmlvcml0eVwiKTtcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKTtcbmNvbnN0IHByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWR1ZWRhdGVcIik7XG5jb25zdCBwcm9qZWN0U2hvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1zaG93XCIpO1xuXG5jb25zdCBjb250ZW50UmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtcmlnaHRcIik7XG5jb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtY29udGFpbmVyXCIpO1xuY29uc3QgcmlnaHRIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWhlYWRlclwiKTtcbmNvbnN0IHJpZ2h0RGVsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1kZWxldGVcIik7XG5jb25zdCByaWdodEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWVkaXRcIik7XG5jb25zdCByaWdodFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LXRhc2tcIik7XG5jb25zdCBkaXNwbGF5VGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktdGFzay1uYW1lXCIpO1xuY29uc3QgcmlnaHRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtcHJpb3JpdHlcIik7XG5jb25zdCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LXRleHRcIik7XG5jb25zdCBwcmlvcml0eUxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1sZXZlbFwiKTtcbmNvbnN0IHJpZ2h0VGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtdGFnc1wiKTtcbmNvbnN0IGRpc3BsYXlUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5LXRhZ3NcIik7XG5cbmNvbnN0IHJpZ2h0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtZGF0ZVwiKTtcbmNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLXRleHRcIik7XG5jb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGUtdGV4dFwiKTtcbmNvbnN0IHRpbWVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lLXRleHRcIik7XG5jb25zdCBkdWVUaW1lVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLXRpbWUtdGV4dFwiKTtcbmNvbnN0IHJpZ2h0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi10ZXh0XCIpO1xuXG5jb25zdCBhZGROb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLW5vdGVzXCIpO1xuY29uc3QgYWRkQ2hlY2tsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtY2hlY2tsaXN0XCIpO1xuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKTtcbmNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbmV4cG9ydCB7XG4gIHdyYXBwZXIsXG4gIGhlYWRlcixcbiAgZm9ybSxcbiAgZm9ybVBvcHVwLFxuICBmb3JtQ29udGFpbmVyLFxuICBidXR0b25Db250YWluZXIsXG4gIGZvcm1DbG9zZSxcbiAgY2xvc2VTaWduLFxuICBidG5TdWJtaXQsXG4gIGZvcm1Db250ZW50LFxuICB0YXNrTmFtZSxcbiAgZm9ybUJvdHRvbSxcbiAgZm9ybUxlZnQsXG4gIHRhZ0NvbnRhaW5lcixcbiAgYWRkVGFnLFxuICBkZXNjcmlwdGlvbixcbiAgZm9ybVJpZ2h0LFxuICBkdWVEYXRlLFxuICBkdWVUaW1lLFxuICBsb3csXG4gIG1lZGl1bSxcbiAgaGlnaCxcbiAgaGVhZGVyVGl0bGUsXG4gIGNvbnRlbnQsXG4gIGNvbnRlbnRUb3AsXG4gIHdlYXRoZXIsXG4gIHdlYXRoZXJJY29uLFxuICBncmVldGluZyxcbiAgY29udGVudEJvdHRvbSxcbiAgY29udGVudExlZnQsXG4gIGJvdHRvbUhlYWRlcixcbiAgYm90dG9tVGl0bGUsXG4gIGNyZWF0ZUZvcm0sXG4gIHByb2plY3QsXG4gIHByb2plY3RQcmlvcml0eSxcbiAgcHJvamVjdFRpdGxlLFxuICBwcm9qZWN0RHVlRGF0ZSxcbiAgcHJvamVjdFNob3csXG4gIGNvbnRlbnRSaWdodCxcbiAgcmlnaHRDb250YWluZXIsXG4gIHJpZ2h0SGVhZGVyLFxuICByaWdodERlbGV0ZSxcbiAgcmlnaHRFZGl0LFxuICByaWdodFRhc2ssXG4gIGRpc3BsYXlUYXNrTmFtZSxcbiAgcmlnaHRQcmlvcml0eSxcbiAgcHJpb3JpdHlUZXh0LFxuICBwcmlvcml0eUxldmVsLFxuICByaWdodFRhZ3MsXG4gIGRpc3BsYXlUYWdzLFxuICByaWdodERhdGUsXG4gIGRhdGVUZXh0LFxuICBkdWVEYXRlVGV4dCxcbiAgdGltZVRleHQsXG4gIGR1ZVRpbWVUZXh0LFxuICByaWdodERlc2NyaXB0aW9uLFxuICBkZXNjcmlwdGlvblRleHQsXG4gIGFkZE5vdGVzLFxuICBhZGRDaGVja2xpc3QsXG4gIGZvb3RlcixcbiAgYWxsUHJvamVjdHNcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=