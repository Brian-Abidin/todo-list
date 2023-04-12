"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

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

/***/ "./src/functions/checkDelete.js":
/*!**************************************!*\
  !*** ./src/functions/checkDelete.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkDelete)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");
/* harmony import */ var _updateProjectIds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateProjectIds */ "./src/functions/updateProjectIds.js");



function checkDelete() {
  console.log(_domElements__WEBPACK_IMPORTED_MODULE_0__.rightDelete.id);
  const projectId = Number(_domElements__WEBPACK_IMPORTED_MODULE_0__.rightDelete.id);
  const projectIndex = projectId - 1;
  const element = document.getElementById(`project${projectId}`);
  console.log("check Delete", projectIndex);
  _domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(projectIndex, 1);
  element.remove();
  _domElements__WEBPACK_IMPORTED_MODULE_0__.contentRight.style.display = "none";
  (0,_updateProjectIds__WEBPACK_IMPORTED_MODULE_1__["default"])();
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




/***/ }),

/***/ "./src/functions/fillInfo.js":
/*!***********************************!*\
  !*** ./src/functions/fillInfo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fillInfo)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");



function fillInfo() {
  const name = document.getElementById("display-task-name").textContent;
  const priority = document.getElementById("priority-level").textContent;
  const date = document.getElementById("due-date-text").textContent;
  const time = document.getElementById("due-time-text").textContent;
  const description = document.getElementById("right-description").textContent;
  console.log(document.getElementsByClassName("tag-name").textContent);
  let tagName;

  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.displayTags.innerHTML === "") {
    tagName = "";
  } else {
    tagName = document.getElementsByClassName("tag-name")[0].textContent;
  }

  const combinedDate = `${date} ${time}`;
  const timeFormatted = new Date(combinedDate);
  console.log(timeFormatted);
  const newTime = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(timeFormatted, "HH:mm");
  const newDate = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(timeFormatted, "yyyy-MM-dd");

  console.log(name, priority, tagName, newDate, newTime, description);
  if (priority === "low") {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.low.checked = true;
  } else if (priority === "medium") {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.medium.checked = true;
  } else if (priority === "high") {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.high.checked = true;
  }

  document.getElementById("due-date").value = newDate;
  document.getElementById("task-name").value = name;
  document.getElementById("description").value = description;
  document.getElementById("add-tag").value = tagName;
  document.getElementById("due-time").value = newTime;
}


/***/ }),

/***/ "./src/functions/openCloseForm.js":
/*!****************************************!*\
  !*** ./src/functions/openCloseForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closeTheForm),
/* harmony export */   "openForm": () => (/* binding */ openForm)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");


function openForm() {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.formPopup.style.display = "block";
  _domElements__WEBPACK_IMPORTED_MODULE_0__.formContainer.style.display = "block";
  console.log(_domElements__WEBPACK_IMPORTED_MODULE_0__.btnSubmit.type);
}

function closeTheForm() {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.formPopup.style.display = "none";
  _domElements__WEBPACK_IMPORTED_MODULE_0__.formContainer.style.display = "none";
}


/***/ }),

/***/ "./src/functions/submitForm.js":
/*!*************************************!*\
  !*** ./src/functions/submitForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ submitForm)
/* harmony export */ });
/* harmony import */ var _addValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addValue */ "./src/functions/addValue.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");
/* harmony import */ var _openCloseForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openCloseForm */ "./src/functions/openCloseForm.js");




function submitForm(event) {
  console.log("This is working");
  event.preventDefault();
  (0,_addValue__WEBPACK_IMPORTED_MODULE_0__["default"])();
  _domElements__WEBPACK_IMPORTED_MODULE_1__.form.reset();
  (0,_openCloseForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
}


/***/ }),

/***/ "./src/functions/updateProjectIds.js":
/*!*******************************************!*\
  !*** ./src/functions/updateProjectIds.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProjectIds)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");


function updateProjectIds() {
  let counter = 1;
  for (let i = 0; i < _domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i += 1) {
    const displayBtnClass = document.getElementsByClassName("project-button");
    const projectClass = document.getElementsByClassName("project");
    const titleClass = document.getElementsByClassName("project-title");
    const dateClass = document.getElementsByClassName("project-duedate");
    const priorityClass = document.getElementsByClassName("project-priority");

    titleClass[i].id = `title${counter}`;
    dateClass[i].id = `date${counter}`;
    priorityClass[i].id = `priority${counter}`;

    projectClass[i].id = `project${counter}`;
    console.log(projectClass[i].id);
    _domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].id = i;
    displayBtnClass[i].id = counter;
    counter += 1;
    console.log(counter);
  }
}


/***/ }),

/***/ "./src/functions/updateProjectInfo.js":
/*!********************************************!*\
  !*** ./src/functions/updateProjectInfo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProjectInfo)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");
/* harmony import */ var _displayOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayOnly */ "./src/functions/displayOnly.js");
/* harmony import */ var _openCloseForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openCloseForm */ "./src/functions/openCloseForm.js");
/* harmony import */ var _createTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTags */ "./src/functions/createTags.js");
/* harmony import */ var _checkPriority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkPriority */ "./src/functions/checkPriority.js");








function updateProjectInfo(index) {
  const arrayId = Number(index) - 1;
  console.log(arrayId);
  const thisProject = _domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects[arrayId];
  let time = document.getElementById("due-time").value;
  const date = document.getElementById("due-date").value;
  const name = document.getElementById("task-name").value;
  const description = document.getElementById("description").value;
  const tag = document.getElementById("add-tag").value;

  console.log(tag);
  console.log(thisProject);
  console.log(time);
  console.log(date);

  const combinedDate = `${date} ${time}`;
  const timeFormatted = new Date(combinedDate);
  console.log(timeFormatted);
  const newTime = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_5__["default"])(timeFormatted, "h:mm a");

  const newDate = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
  const dateFormatted = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_5__["default"])(newDate, "M/dd/yy");

  thisProject.tags = "";
  while (_domElements__WEBPACK_IMPORTED_MODULE_0__.displayTags.firstChild) {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.displayTags.removeChild(_domElements__WEBPACK_IMPORTED_MODULE_0__.displayTags.firstChild);
  }

  thisProject.name = name;
  thisProject.dueDate = dateFormatted;
  thisProject.time = newTime;
  thisProject.description = description;

  if (_domElements__WEBPACK_IMPORTED_MODULE_0__.low.checked) {
    thisProject.priority = "low";
    document.getElementById(`priority${index}`).style.backgroundColor = "green";
  } else if (_domElements__WEBPACK_IMPORTED_MODULE_0__.medium.checked) {
    thisProject.priority = "medium";
    document.getElementById(`priority${index}`).style.backgroundColor =
      "yellow";
  } else if (_domElements__WEBPACK_IMPORTED_MODULE_0__.high.checked) {
    thisProject.priority = "high";
    document.getElementById(`priority${index}`).style.backgroundColor = "red";
  }

  const urgency = thisProject.priority;
  thisProject.tags = tag;
  (0,_createTags__WEBPACK_IMPORTED_MODULE_3__["default"])(thisProject.tags);

  document.getElementById(`title${index}`).textContent = thisProject.name;
  document.getElementById(`date${index}`).textContent = dateFormatted;

  if (time === "") {
    time = "No Time";
  }

  (0,_displayOnly__WEBPACK_IMPORTED_MODULE_1__["default"])(name, description, urgency, dateFormatted, newTime);
  (0,_checkPriority__WEBPACK_IMPORTED_MODULE_4__["default"])(urgency);
  (0,_openCloseForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
  _domElements__WEBPACK_IMPORTED_MODULE_0__.form.reset();
}


/***/ }),

/***/ "./src/functions/welcome.js":
/*!**********************************!*\
  !*** ./src/functions/welcome.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ welcome)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/functions/domElements.js");



function welcome() {
  const currentHour = +(0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), "k");
  switch (true) {
    case currentHour >= 20 || currentHour < 6:
      _domElements__WEBPACK_IMPORTED_MODULE_0__.greeting.textContent = "Good Evening, User";
      _domElements__WEBPACK_IMPORTED_MODULE_0__.contentTop.style.backgroundImage =
        "linear-gradient(rgb(51, 41, 41), rgb(0, 34, 128))";
      _domElements__WEBPACK_IMPORTED_MODULE_0__.weatherIcon.src = "../src/images/moon.png";
      console.log("moon");
      break;
    case currentHour >= 6 && currentHour < 12:
      _domElements__WEBPACK_IMPORTED_MODULE_0__.greeting.textContent = "Good Morning, User";
      _domElements__WEBPACK_IMPORTED_MODULE_0__.weatherIcon.src = "../src/images/sun.png";
      _domElements__WEBPACK_IMPORTED_MODULE_0__.contentTop.style.backgroundImage =
        "linear-gradient(rgb(6, 132, 235), rgb(255, 255, 255))";
      console.log("sunrise");
      break;
    case currentHour >= 12 && currentHour < 19:
      _domElements__WEBPACK_IMPORTED_MODULE_0__.greeting.textContent = "Good Afternoon, User";
      _domElements__WEBPACK_IMPORTED_MODULE_0__.weatherIcon.src = "../src/images/sunrise.png";
      _domElements__WEBPACK_IMPORTED_MODULE_0__.contentTop.style.backgroundImage =
        "linear-gradient(rgb(255, 174, 0), rgb(2, 175, 255))";
      console.log("sun");
      break;
    case currentHour >= 19 && currentHour < 20:
      _domElements__WEBPACK_IMPORTED_MODULE_0__.greeting.textContent = "Good Evening, User";
      _domElements__WEBPACK_IMPORTED_MODULE_0__.weatherIcon.src = "../src/images/moon.png";
      _domElements__WEBPACK_IMPORTED_MODULE_0__.contentTop.style.backgroundImage =
        "linear-gradient(rgb(51, 41, 41), rgb(0, 34, 128))";
      console.log("sunset");
      break;
    default:
      console.log("welcomeIcon function broken");
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _functions_domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/domElements */ "./src/functions/domElements.js");
/* harmony import */ var _functions_openCloseForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/openCloseForm */ "./src/functions/openCloseForm.js");
/* harmony import */ var _functions_submitForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/submitForm */ "./src/functions/submitForm.js");
/* harmony import */ var _functions_fillInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/fillInfo */ "./src/functions/fillInfo.js");
/* harmony import */ var _functions_checkDelete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/checkDelete */ "./src/functions/checkDelete.js");
/* harmony import */ var _functions_updateProjectInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/updateProjectInfo */ "./src/functions/updateProjectInfo.js");
/* harmony import */ var _functions_welcome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/welcome */ "./src/functions/welcome.js");









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
for (let i = Array.length - 1; i < Array.length; i += 1) {
  // code here adds task to array
}

// checks which project you are on and adds task from the project based on the array order
function addTask(title, desc) {
  const task = {
    type: "task",
    title,
    description: desc
  };
  _functions_domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].tasks.push(task);
}

function addChecklist(title) {
  const checkList = {
    type: "checklist",
    title
  };
  _functions_domElements__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].tasks.push(checkList);
  // DOM element function that adds the checklist box
}

const result = new Date();
const resultFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(result, "MM/dd/yyyy");
console.log(result);

// (function welcomeIcon() {
//   const currentHour = +format(new Date(), "k");
//   switch (true) {
//     case currentHour >= 20 || currentHour < 6:
//       greeting.textContent = "Good Evening, User";
//       contentTop.style.backgroundImage =
//         "linear-gradient(rgb(51, 41, 41), rgb(0, 34, 128))";
//       weatherIcon.src = "../src/images/moon.png";
//       console.log("moon");
//       break;
//     case currentHour >= 6 && currentHour < 12:
//       greeting.textContent = "Good Morning, User";
//       weatherIcon.src = "../src/images/sun.png";
//       contentTop.style.backgroundImage =
//         "linear-gradient(rgb(6, 132, 235), rgb(255, 255, 255))";
//       console.log("sunrise");
//       break;
//     case currentHour >= 12 && currentHour < 19:
//       greeting.textContent = "Good Afternoon, User";
//       weatherIcon.src = "../src/images/sunrise.png";
//       contentTop.style.backgroundImage =
//         "linear-gradient(rgb(255, 174, 0), rgb(2, 175, 255))";
//       console.log("sun");
//       break;
//     case currentHour >= 19 && currentHour < 20:
//       greeting.textContent = "Good Evening, User";
//       weatherIcon.src = "../src/images/moon.png";
//       contentTop.style.backgroundImage =
//         "linear-gradient(rgb(51, 41, 41), rgb(0, 34, 128))";
//       console.log("sunset");
//       break;
//     default:
//       console.log("welcomeIcon function broken");
//   }
// })();

window.onload = () => {
  (0,_functions_welcome__WEBPACK_IMPORTED_MODULE_6__["default"])();
};

_functions_domElements__WEBPACK_IMPORTED_MODULE_0__.formClose.addEventListener("click", () => {
  (0,_functions_openCloseForm__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

_functions_domElements__WEBPACK_IMPORTED_MODULE_0__.createForm.addEventListener("click", () => {
  _functions_domElements__WEBPACK_IMPORTED_MODULE_0__.btnSubmit.type = "submit";
  (0,_functions_openCloseForm__WEBPACK_IMPORTED_MODULE_1__.openForm)();
});

_functions_domElements__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener("submit", _functions_submitForm__WEBPACK_IMPORTED_MODULE_2__["default"]);

_functions_domElements__WEBPACK_IMPORTED_MODULE_0__.btnSubmit.addEventListener("click", (e) => {
  if (_functions_domElements__WEBPACK_IMPORTED_MODULE_0__.btnSubmit.type === "button") (0,_functions_updateProjectInfo__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target.id);
});

_functions_domElements__WEBPACK_IMPORTED_MODULE_0__.rightEdit.addEventListener("click", (e) => {
  const editBtnId = e.target.id;
  console.log(editBtnId);
  _functions_domElements__WEBPACK_IMPORTED_MODULE_0__.btnSubmit.setAttribute("id", editBtnId);
  _functions_domElements__WEBPACK_IMPORTED_MODULE_0__.btnSubmit.type = "button";
  (0,_functions_openCloseForm__WEBPACK_IMPORTED_MODULE_1__.openForm)();
  (0,_functions_fillInfo__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

_functions_domElements__WEBPACK_IMPORTED_MODULE_0__.rightDelete.addEventListener("click", () => {
  (0,_functions_checkDelete__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

console.log(resultFormatted);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtBQUNkLENBQUM7O0FBRUQsK0VBQTJCO0FBQzNCLEVBQUUsa0VBQWM7QUFDaEIsRUFBRSxrRUFBUTtBQUNWLENBQUM7O0FBRUQseUVBQXFCLFdBQVcsNkRBQVU7O0FBRTFDLDhFQUEwQjtBQUMxQixNQUFNLGtFQUFjLGVBQWUsd0VBQWlCO0FBQ3BELENBQUM7O0FBRUQsOEVBQTBCO0FBQzFCO0FBQ0E7QUFDQSxFQUFFLDBFQUFzQjtBQUN4QixFQUFFLGtFQUFjO0FBQ2hCLEVBQUUsa0VBQVE7QUFDVixFQUFFLCtEQUFRO0FBQ1YsQ0FBQzs7QUFFRCxnRkFBNEI7QUFDNUIsRUFBRSxrRUFBVztBQUNiLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2FkZFZhbHVlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvY2hlY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jaGVja1ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZVRhZ3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9kaXNwbGF5T25seS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2Rpc3BsYXlQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9maWxsSW5mby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL29wZW5DbG9zZUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9zdWJtaXRGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvdXBkYXRlUHJvamVjdElkcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL3VwZGF0ZVByb2plY3RJbmZvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBidG5TdWJtaXQsIGhpZ2gsIGxvdywgbWVkaXVtIH0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVmFsdWVzKCkge1xuICBjb25zdCB0YXNrVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZTtcbiAgLy8gICBjb25zdCB0YWdWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhZ1wiKS52YWx1ZTtcbiAgbGV0IHVyZ2VuY3kgPSBcIlwiO1xuICBjb25zdCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgY29uc3QgZGF0ZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgY29uc3QgdGFnVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YWdcIikudmFsdWU7XG4gIGxldCB0aW1lVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS10aW1lXCIpLnZhbHVlO1xuXG4gIC8vIGZvbWF0dGluZyB0aW1lIHZhbHVlXG4gIGNvbnN0IGNvbWJpbmVkRGF0ZSA9IGAke2RhdGVWYWx1ZX0gJHt0aW1lVmFsdWV9YDtcbiAgY29uc29sZS5sb2coY29tYmluZWREYXRlKTtcbiAgY29uc3QgdGltZUZvcm1hdHRlZCA9IG5ldyBEYXRlKGNvbWJpbmVkRGF0ZSk7XG4gIGNvbnN0IG5ld1RpbWUgPSBmb3JtYXQodGltZUZvcm1hdHRlZCwgXCJoOm1tIGFcIik7XG4gIGNvbnNvbGUubG9nKG5ld1RpbWUpO1xuXG4gIGlmIChsb3cuY2hlY2tlZCkge1xuICAgIHVyZ2VuY3kgPSBcImxvd1wiO1xuICB9IGVsc2UgaWYgKG1lZGl1bS5jaGVja2VkKSB7XG4gICAgdXJnZW5jeSA9IFwibWVkaXVtXCI7XG4gIH0gZWxzZSBpZiAoaGlnaC5jaGVja2VkKSB7XG4gICAgdXJnZW5jeSA9IFwiaGlnaFwiO1xuICB9XG5cbiAgaWYgKHRpbWVWYWx1ZSA9PT0gXCJcIikge1xuICAgIHRpbWVWYWx1ZSA9IFwiTm8gVGltZVwiO1xuICB9XG5cbiAgY29uc29sZS5sb2coXG4gICAgdGFza1ZhbHVlLFxuICAgIGRlc2NyaXB0aW9uVmFsdWUsXG4gICAgdXJnZW5jeSxcbiAgICBkYXRlVmFsdWUsXG4gICAgbmV3VGltZSxcbiAgICB0YWdWYWx1ZVxuICApO1xuICBpZiAoYnRuU3VibWl0LnR5cGUgPT09IFwic3VibWl0XCIpIHtcbiAgICBjcmVhdGVQcm9qZWN0KFxuICAgICAgdGFza1ZhbHVlLFxuICAgICAgZGVzY3JpcHRpb25WYWx1ZSxcbiAgICAgIHVyZ2VuY3ksXG4gICAgICBkYXRlVmFsdWUsXG4gICAgICBuZXdUaW1lLFxuICAgICAgdGFnVmFsdWVcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwidXBkYXRpbmcgcHJvamVjdCBpbmZvXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cywgY29udGVudFJpZ2h0LCByaWdodERlbGV0ZSB9IGZyb20gXCIuL2RvbUVsZW1lbnRzXCI7XG5pbXBvcnQgdXBkYXRlUHJvamVjdElkcyBmcm9tIFwiLi91cGRhdGVQcm9qZWN0SWRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrRGVsZXRlKCkge1xuICBjb25zb2xlLmxvZyhyaWdodERlbGV0ZS5pZCk7XG4gIGNvbnN0IHByb2plY3RJZCA9IE51bWJlcihyaWdodERlbGV0ZS5pZCk7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RJZCAtIDE7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdCR7cHJvamVjdElkfWApO1xuICBjb25zb2xlLmxvZyhcImNoZWNrIERlbGV0ZVwiLCBwcm9qZWN0SW5kZXgpO1xuICBhbGxQcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgZWxlbWVudC5yZW1vdmUoKTtcbiAgY29udGVudFJpZ2h0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdXBkYXRlUHJvamVjdElkcygpO1xufVxuIiwiaW1wb3J0IHsgcmlnaHRQcmlvcml0eSB9IGZyb20gXCIuL2RvbUVsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrUHJpb3JpdHkodXJnZW5jeSkge1xuICBpZiAodXJnZW5jeSA9PT0gXCJsb3dcIikge1xuICAgIHJpZ2h0UHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICB9IGVsc2UgaWYgKHVyZ2VuY3kgPT09IFwibWVkaXVtXCIpIHtcbiAgICByaWdodFByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gIH0gZWxzZSBpZiAodXJnZW5jeSA9PT0gXCJoaWdoXCIpIHtcbiAgICByaWdodFByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcbmltcG9ydCBkaXNwbGF5UHJvamVjdCBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUsIGRlc2MsIHVyZ2VuY3ksIGRhdGUsIHRpbWUsIHRhZykge1xuICBjb25zdCBwcm9qZWN0T3JkZXIgPSBhbGxQcm9qZWN0cy5sZW5ndGg7XG4gIGNvbnN0IG5ld0RhdGUgPSBwYXJzZUlTTyhkYXRlKTtcbiAgY29uc3QgZGF0ZUZvcm1hdHRlZCA9IGZvcm1hdChuZXdEYXRlLCBcIk0vZGQveXlcIik7XG4gIGNvbnNvbGUubG9nKGRhdGVGb3JtYXR0ZWQpO1xuXG4gIGNvbnN0IHByb2plY3QgPSB7XG4gICAgdHlwZTogXCJwcm9qZWN0XCIsXG4gICAgaWQ6IHByb2plY3RPcmRlcixcbiAgICBuYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgIHByaW9yaXR5OiB1cmdlbmN5LFxuICAgIGR1ZURhdGU6IGRhdGVGb3JtYXR0ZWQsXG4gICAgdGltZSxcbiAgICB0YWdzOiB0YWcsXG4gICAgdGFza3M6IFtdXG4gIH07XG4gIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIGRpc3BsYXlQcm9qZWN0KHByb2plY3QubmFtZSwgcHJvamVjdC5wcmlvcml0eSwgcHJvamVjdC5kdWVEYXRlKTtcbiAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xufVxuIiwiaW1wb3J0IHsgZGlzcGxheVRhZ3MgfSBmcm9tIFwiLi9kb21FbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYWdzKHRhZ3MpIHtcbiAgaWYgKHRhZ3MgPT09IFwiXCIpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YWdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByZW1vdmVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgdGFnLmNsYXNzTGlzdC5hZGQoXCJ0YWcxXCIpO1xuICAgIHRhZ05hbWUuY2xhc3NMaXN0LmFkZChcInRhZy1uYW1lXCIpO1xuICAgIHJlbW92ZVRhZy5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLXRhZ1wiKTtcblxuICAgIGRpc3BsYXlUYWdzLmFwcGVuZENoaWxkKHRhZyk7XG4gICAgdGFnLmFwcGVuZENoaWxkKHRhZ05hbWUpO1xuICAgIHRhZy5hcHBlbmRDaGlsZChyZW1vdmVUYWcpO1xuXG4gICAgdGFnTmFtZS50ZXh0Q29udGVudCA9IHRhZ3M7XG4gICAgcmVtb3ZlVGFnLnRleHRDb250ZW50ID0gXCItXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGRpc3BsYXlUYXNrTmFtZSxcbiAgcHJpb3JpdHlMZXZlbCxcbiAgcmlnaHREZXNjcmlwdGlvbixcbiAgZHVlRGF0ZVRleHQsXG4gIGR1ZVRpbWVUZXh0XG59IGZyb20gXCIuL2RvbUVsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlPbmx5KG5hbWUsIGRlc2MsIHVyZ2VuY3ksIGRhdGUsIHRpbWUpIHtcbiAgZGlzcGxheVRhc2tOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgcHJpb3JpdHlMZXZlbC50ZXh0Q29udGVudCA9IHVyZ2VuY3k7XG4gIHJpZ2h0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xuICBjb25zb2xlLmxvZyhkYXRlKTtcbiAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSBkYXRlO1xuICBkdWVUaW1lVGV4dC50ZXh0Q29udGVudCA9IHRpbWU7XG59XG4iLCJpbXBvcnQge1xuICBhbGxQcm9qZWN0cyxcbiAgY29udGVudExlZnQsXG4gIGNvbnRlbnRSaWdodCxcbiAgcmlnaHREZWxldGUsXG4gIHJpZ2h0RWRpdCxcbiAgZGlzcGxheVRhZ3Ncbn0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcbmltcG9ydCBjcmVhdGVUYWdzIGZyb20gXCIuL2NyZWF0ZVRhZ3NcIjtcbmltcG9ydCBkaXNwbGF5T25seSBmcm9tIFwiLi9kaXNwbGF5T25seVwiO1xuaW1wb3J0IGNoZWNrUHJpb3JpdHkgZnJvbSBcIi4vY2hlY2tQcmlvcml0eVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdChuYW1lLCB1cmdlbmN5LCBkYXRlKSB7XG4gIGNvbnN0IHByb2plY3RPcmRlciA9IGFsbFByb2plY3RzLmxlbmd0aDtcbiAgY29uc3Qgc2hvd1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHNob3dQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1wcmlvcml0eVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZHVlZGF0ZVwiKTtcbiAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG5cbiAgaWYgKHVyZ2VuY3kgPT09IFwibG93XCIpIHtcbiAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gIH0gZWxzZSBpZiAodXJnZW5jeSA9PT0gXCJtZWRpdW1cIikge1xuICAgIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gIH0gZWxzZSBpZiAodXJnZW5jeSA9PT0gXCJoaWdoXCIpIHtcbiAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICB9XG5cbiAgc2hvd1Byb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgYHByb2plY3Qke3Byb2plY3RPcmRlcn1gKTtcbiAgcHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0T3JkZXIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGl0bGUke3Byb2plY3RPcmRlcn1gKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZGF0ZSR7cHJvamVjdE9yZGVyfWApO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcHJpb3JpdHkke3Byb2plY3RPcmRlcn1gKTtcblxuICBjb250ZW50TGVmdC5hcHBlbmRDaGlsZChzaG93UHJvamVjdCk7XG4gIHNob3dQcm9qZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgc2hvd1Byb2plY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBzaG93UHJvamVjdC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgc2hvd1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcbiAgcHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiPlwiO1xuXG4gIChmdW5jdGlvbiBjaGVja0Rpc2xheSgpIHtcbiAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0aGlzUHJvamVjdCA9IGFsbFByb2plY3RzW051bWJlcihlLnRhcmdldC5pZCkgLSAxXTtcbiAgICAgICAgY29udGVudFJpZ2h0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHJpZ2h0RGVsZXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIGUudGFyZ2V0LmlkKTtcbiAgICAgICAgcmlnaHRFZGl0LnNldEF0dHJpYnV0ZShcImlkXCIsIGUudGFyZ2V0LmlkKTtcbiAgICAgICAgd2hpbGUgKGRpc3BsYXlUYWdzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBkaXNwbGF5VGFncy5yZW1vdmVDaGlsZChkaXNwbGF5VGFncy5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzUHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbiAgICAgICAgY3JlYXRlVGFncyh0aGlzUHJvamVjdC50YWdzKTtcbiAgICAgICAgZGlzcGxheU9ubHkoXG4gICAgICAgICAgdGhpc1Byb2plY3QubmFtZSxcbiAgICAgICAgICB0aGlzUHJvamVjdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICB0aGlzUHJvamVjdC5wcmlvcml0eSxcbiAgICAgICAgICB0aGlzUHJvamVjdC5kdWVEYXRlLFxuICAgICAgICAgIHRoaXNQcm9qZWN0LnRpbWVcbiAgICAgICAgKTtcbiAgICAgICAgY2hlY2tQcmlvcml0eSh0aGlzUHJvamVjdC5wcmlvcml0eSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG59XG4iLCIvLyBDb25zdGFudHNcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndyYXBwZXJcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgZm9ybVBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXBvcHVwXCIpO1xuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1jb250YWluZXJcIik7XG5jb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250YWluZXJcIik7XG5jb25zdCBmb3JtQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY2xvc2VcIik7XG5jb25zdCBjbG9zZVNpZ24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXNpZ25cIik7XG5jb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1zdWJtaXRcIik7XG5jb25zdCBmb3JtQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1jb250ZW50XCIpO1xuY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKTtcbmNvbnN0IGZvcm1Cb3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tYm90dG9tXCIpO1xuY29uc3QgZm9ybUxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbGVmdFwiKTtcbmNvbnN0IHRhZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFnLWNvbnRhaW5lclwiKTtcbi8vIGNvbnN0IGJ0blRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXRhZ1wiKTtcbmNvbnN0IGFkZFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhZ1wiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGZvcm1SaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1yaWdodFwiKTtcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlXCIpO1xuY29uc3QgZHVlVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLXRpbWVcIik7XG5jb25zdCBsb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcbmNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaXVtXCIpO1xuY29uc3QgaGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaFwiKTtcblxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci10aXRsZVwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBjb250ZW50VG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXRvcFwiKTtcbmNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJcIik7XG5jb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pY29uXCIpO1xuY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyZWV0aW5nXCIpO1xuXG5jb25zdCBjb250ZW50Qm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWJvdHRvbVwiKTtcbmNvbnN0IGNvbnRlbnRMZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWxlZnRcIik7XG5jb25zdCBib3R0b21IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbS1oZWFkZXJcIik7XG5jb25zdCBib3R0b21UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90dG9tLXRpdGxlXCIpO1xuY29uc3QgY3JlYXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWZvcm1cIik7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpO1xuY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXByaW9yaXR5XCIpO1xuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuY29uc3QgcHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZHVlZGF0ZVwiKTtcbmNvbnN0IHByb2plY3RTaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXNob3dcIik7XG5cbmNvbnN0IGNvbnRlbnRSaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1yaWdodFwiKTtcbmNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1jb250YWluZXJcIik7XG5jb25zdCByaWdodEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtaGVhZGVyXCIpO1xuY29uc3QgcmlnaHREZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWRlbGV0ZVwiKTtcbmNvbnN0IHJpZ2h0RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtZWRpdFwiKTtcbmNvbnN0IHJpZ2h0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtdGFza1wiKTtcbmNvbnN0IGRpc3BsYXlUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS10YXNrLW5hbWVcIik7XG5jb25zdCByaWdodFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1wcmlvcml0eVwiKTtcbmNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktdGV4dFwiKTtcbmNvbnN0IHByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWxldmVsXCIpO1xuY29uc3QgcmlnaHRUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC10YWdzXCIpO1xuY29uc3QgZGlzcGxheVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktdGFnc1wiKTtcblxuY29uc3QgcmlnaHREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1kYXRlXCIpO1xuY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdGV4dFwiKTtcbmNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS10ZXh0XCIpO1xuY29uc3QgdGltZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWUtdGV4dFwiKTtcbmNvbnN0IGR1ZVRpbWVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtdGltZS10ZXh0XCIpO1xuY29uc3QgcmlnaHREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtZGVzY3JpcHRpb25cIik7XG5jb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLXRleHRcIik7XG5cbmNvbnN0IGFkZE5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtbm90ZXNcIik7XG5jb25zdCBhZGRDaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaGVja2xpc3RcIik7XG5cbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IHtcbiAgd3JhcHBlcixcbiAgaGVhZGVyLFxuICBmb3JtLFxuICBmb3JtUG9wdXAsXG4gIGZvcm1Db250YWluZXIsXG4gIGJ1dHRvbkNvbnRhaW5lcixcbiAgZm9ybUNsb3NlLFxuICBjbG9zZVNpZ24sXG4gIGJ0blN1Ym1pdCxcbiAgZm9ybUNvbnRlbnQsXG4gIHRhc2tOYW1lLFxuICBmb3JtQm90dG9tLFxuICBmb3JtTGVmdCxcbiAgdGFnQ29udGFpbmVyLFxuICBhZGRUYWcsXG4gIGRlc2NyaXB0aW9uLFxuICBmb3JtUmlnaHQsXG4gIGR1ZURhdGUsXG4gIGR1ZVRpbWUsXG4gIGxvdyxcbiAgbWVkaXVtLFxuICBoaWdoLFxuICBoZWFkZXJUaXRsZSxcbiAgY29udGVudCxcbiAgY29udGVudFRvcCxcbiAgd2VhdGhlcixcbiAgd2VhdGhlckljb24sXG4gIGdyZWV0aW5nLFxuICBjb250ZW50Qm90dG9tLFxuICBjb250ZW50TGVmdCxcbiAgYm90dG9tSGVhZGVyLFxuICBib3R0b21UaXRsZSxcbiAgY3JlYXRlRm9ybSxcbiAgcHJvamVjdCxcbiAgcHJvamVjdFByaW9yaXR5LFxuICBwcm9qZWN0VGl0bGUsXG4gIHByb2plY3REdWVEYXRlLFxuICBwcm9qZWN0U2hvdyxcbiAgY29udGVudFJpZ2h0LFxuICByaWdodENvbnRhaW5lcixcbiAgcmlnaHRIZWFkZXIsXG4gIHJpZ2h0RGVsZXRlLFxuICByaWdodEVkaXQsXG4gIHJpZ2h0VGFzayxcbiAgZGlzcGxheVRhc2tOYW1lLFxuICByaWdodFByaW9yaXR5LFxuICBwcmlvcml0eVRleHQsXG4gIHByaW9yaXR5TGV2ZWwsXG4gIHJpZ2h0VGFncyxcbiAgZGlzcGxheVRhZ3MsXG4gIHJpZ2h0RGF0ZSxcbiAgZGF0ZVRleHQsXG4gIGR1ZURhdGVUZXh0LFxuICB0aW1lVGV4dCxcbiAgZHVlVGltZVRleHQsXG4gIHJpZ2h0RGVzY3JpcHRpb24sXG4gIGRlc2NyaXB0aW9uVGV4dCxcbiAgYWRkTm90ZXMsXG4gIGFkZENoZWNrbGlzdCxcbiAgZm9vdGVyLFxuICBhbGxQcm9qZWN0c1xufTtcbiIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0IHsgbG93LCBtZWRpdW0sIGhpZ2gsIGRpc3BsYXlUYWdzIH0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsbEluZm8oKSB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktdGFzay1uYW1lXCIpLnRleHRDb250ZW50O1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktbGV2ZWxcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLXRleHRcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS10aW1lLXRleHRcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudDtcbiAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhZy1uYW1lXCIpLnRleHRDb250ZW50KTtcbiAgbGV0IHRhZ05hbWU7XG5cbiAgaWYgKGRpc3BsYXlUYWdzLmlubmVySFRNTCA9PT0gXCJcIikge1xuICAgIHRhZ05hbWUgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIHRhZ05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFnLW5hbWVcIilbMF0udGV4dENvbnRlbnQ7XG4gIH1cblxuICBjb25zdCBjb21iaW5lZERhdGUgPSBgJHtkYXRlfSAke3RpbWV9YDtcbiAgY29uc3QgdGltZUZvcm1hdHRlZCA9IG5ldyBEYXRlKGNvbWJpbmVkRGF0ZSk7XG4gIGNvbnNvbGUubG9nKHRpbWVGb3JtYXR0ZWQpO1xuICBjb25zdCBuZXdUaW1lID0gZm9ybWF0KHRpbWVGb3JtYXR0ZWQsIFwiSEg6bW1cIik7XG4gIGNvbnN0IG5ld0RhdGUgPSBmb3JtYXQodGltZUZvcm1hdHRlZCwgXCJ5eXl5LU1NLWRkXCIpO1xuXG4gIGNvbnNvbGUubG9nKG5hbWUsIHByaW9yaXR5LCB0YWdOYW1lLCBuZXdEYXRlLCBuZXdUaW1lLCBkZXNjcmlwdGlvbik7XG4gIGlmIChwcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgIGxvdy5jaGVja2VkID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgIG1lZGl1bS5jaGVja2VkID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICBoaWdoLmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZSA9IG5ld0RhdGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlID0gbmFtZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YWdcIikudmFsdWUgPSB0YWdOYW1lO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS10aW1lXCIpLnZhbHVlID0gbmV3VGltZTtcbn1cbiIsImltcG9ydCB7IGJ0blN1Ym1pdCwgZm9ybVBvcHVwLCBmb3JtQ29udGFpbmVyIH0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICBmb3JtUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjb25zb2xlLmxvZyhidG5TdWJtaXQudHlwZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb3NlVGhlRm9ybSgpIHtcbiAgZm9ybVBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4iLCJpbXBvcnQgYWRkVmFsdWVzIGZyb20gXCIuL2FkZFZhbHVlXCI7XG5pbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcbmltcG9ydCBjbG9zZVRoZUZvcm0gZnJvbSBcIi4vb3BlbkNsb3NlRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJtaXRGb3JtKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB3b3JraW5nXCIpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBhZGRWYWx1ZXMoKTtcbiAgZm9ybS5yZXNldCgpO1xuICBjbG9zZVRoZUZvcm0oKTtcbn1cbiIsImltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdElkcygpIHtcbiAgbGV0IGNvdW50ZXIgPSAxO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZGlzcGxheUJ0bkNsYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtYnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb2plY3RDbGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuICAgIGNvbnN0IHRpdGxlQ2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBjb25zdCBkYXRlQ2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1kdWVkYXRlXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5Q2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1wcmlvcml0eVwiKTtcblxuICAgIHRpdGxlQ2xhc3NbaV0uaWQgPSBgdGl0bGUke2NvdW50ZXJ9YDtcbiAgICBkYXRlQ2xhc3NbaV0uaWQgPSBgZGF0ZSR7Y291bnRlcn1gO1xuICAgIHByaW9yaXR5Q2xhc3NbaV0uaWQgPSBgcHJpb3JpdHkke2NvdW50ZXJ9YDtcblxuICAgIHByb2plY3RDbGFzc1tpXS5pZCA9IGBwcm9qZWN0JHtjb3VudGVyfWA7XG4gICAgY29uc29sZS5sb2cocHJvamVjdENsYXNzW2ldLmlkKTtcbiAgICBhbGxQcm9qZWN0c1tpXS5pZCA9IGk7XG4gICAgZGlzcGxheUJ0bkNsYXNzW2ldLmlkID0gY291bnRlcjtcbiAgICBjb3VudGVyICs9IDE7XG4gICAgY29uc29sZS5sb2coY291bnRlcik7XG4gIH1cbn1cbiIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0IHBhcnNlSVNPIGZyb20gXCJkYXRlLWZucy9wYXJzZUlTT1wiO1xuaW1wb3J0IHtcbiAgYWxsUHJvamVjdHMsXG4gIGRpc3BsYXlUYWdzLFxuICBsb3csXG4gIG1lZGl1bSxcbiAgaGlnaCxcbiAgZm9ybVxufSBmcm9tIFwiLi9kb21FbGVtZW50c1wiO1xuaW1wb3J0IGRpc3BsYXlPbmx5IGZyb20gXCIuL2Rpc3BsYXlPbmx5XCI7XG5pbXBvcnQgY2xvc2VUaGVGb3JtIGZyb20gXCIuL29wZW5DbG9zZUZvcm1cIjtcbmltcG9ydCBjcmVhdGVUYWdzIGZyb20gXCIuL2NyZWF0ZVRhZ3NcIjtcbmltcG9ydCBjaGVja1ByaW9yaXR5IGZyb20gXCIuL2NoZWNrUHJpb3JpdHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdEluZm8oaW5kZXgpIHtcbiAgY29uc3QgYXJyYXlJZCA9IE51bWJlcihpbmRleCkgLSAxO1xuICBjb25zb2xlLmxvZyhhcnJheUlkKTtcbiAgY29uc3QgdGhpc1Byb2plY3QgPSBhbGxQcm9qZWN0c1thcnJheUlkXTtcbiAgbGV0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS10aW1lXCIpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGNvbnN0IHRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhZ1wiKS52YWx1ZTtcblxuICBjb25zb2xlLmxvZyh0YWcpO1xuICBjb25zb2xlLmxvZyh0aGlzUHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKHRpbWUpO1xuICBjb25zb2xlLmxvZyhkYXRlKTtcblxuICBjb25zdCBjb21iaW5lZERhdGUgPSBgJHtkYXRlfSAke3RpbWV9YDtcbiAgY29uc3QgdGltZUZvcm1hdHRlZCA9IG5ldyBEYXRlKGNvbWJpbmVkRGF0ZSk7XG4gIGNvbnNvbGUubG9nKHRpbWVGb3JtYXR0ZWQpO1xuICBjb25zdCBuZXdUaW1lID0gZm9ybWF0KHRpbWVGb3JtYXR0ZWQsIFwiaDptbSBhXCIpO1xuXG4gIGNvbnN0IG5ld0RhdGUgPSBwYXJzZUlTTyhkYXRlKTtcbiAgY29uc3QgZGF0ZUZvcm1hdHRlZCA9IGZvcm1hdChuZXdEYXRlLCBcIk0vZGQveXlcIik7XG5cbiAgdGhpc1Byb2plY3QudGFncyA9IFwiXCI7XG4gIHdoaWxlIChkaXNwbGF5VGFncy5maXJzdENoaWxkKSB7XG4gICAgZGlzcGxheVRhZ3MucmVtb3ZlQ2hpbGQoZGlzcGxheVRhZ3MuZmlyc3RDaGlsZCk7XG4gIH1cblxuICB0aGlzUHJvamVjdC5uYW1lID0gbmFtZTtcbiAgdGhpc1Byb2plY3QuZHVlRGF0ZSA9IGRhdGVGb3JtYXR0ZWQ7XG4gIHRoaXNQcm9qZWN0LnRpbWUgPSBuZXdUaW1lO1xuICB0aGlzUHJvamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXG4gIGlmIChsb3cuY2hlY2tlZCkge1xuICAgIHRoaXNQcm9qZWN0LnByaW9yaXR5ID0gXCJsb3dcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJpb3JpdHkke2luZGV4fWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgfSBlbHNlIGlmIChtZWRpdW0uY2hlY2tlZCkge1xuICAgIHRoaXNQcm9qZWN0LnByaW9yaXR5ID0gXCJtZWRpdW1cIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJpb3JpdHkke2luZGV4fWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICBcInllbGxvd1wiO1xuICB9IGVsc2UgaWYgKGhpZ2guY2hlY2tlZCkge1xuICAgIHRoaXNQcm9qZWN0LnByaW9yaXR5ID0gXCJoaWdoXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByaW9yaXR5JHtpbmRleH1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICB9XG5cbiAgY29uc3QgdXJnZW5jeSA9IHRoaXNQcm9qZWN0LnByaW9yaXR5O1xuICB0aGlzUHJvamVjdC50YWdzID0gdGFnO1xuICBjcmVhdGVUYWdzKHRoaXNQcm9qZWN0LnRhZ3MpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0aXRsZSR7aW5kZXh9YCkudGV4dENvbnRlbnQgPSB0aGlzUHJvamVjdC5uYW1lO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF0ZSR7aW5kZXh9YCkudGV4dENvbnRlbnQgPSBkYXRlRm9ybWF0dGVkO1xuXG4gIGlmICh0aW1lID09PSBcIlwiKSB7XG4gICAgdGltZSA9IFwiTm8gVGltZVwiO1xuICB9XG5cbiAgZGlzcGxheU9ubHkobmFtZSwgZGVzY3JpcHRpb24sIHVyZ2VuY3ksIGRhdGVGb3JtYXR0ZWQsIG5ld1RpbWUpO1xuICBjaGVja1ByaW9yaXR5KHVyZ2VuY3kpO1xuICBjbG9zZVRoZUZvcm0oKTtcbiAgZm9ybS5yZXNldCgpO1xufVxuIiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XG5pbXBvcnQgeyB3ZWF0aGVySWNvbiwgZ3JlZXRpbmcsIGNvbnRlbnRUb3AgfSBmcm9tIFwiLi9kb21FbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWxjb21lKCkge1xuICBjb25zdCBjdXJyZW50SG91ciA9ICtmb3JtYXQobmV3IERhdGUoKSwgXCJrXCIpO1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGN1cnJlbnRIb3VyID49IDIwIHx8IGN1cnJlbnRIb3VyIDwgNjpcbiAgICAgIGdyZWV0aW5nLnRleHRDb250ZW50ID0gXCJHb29kIEV2ZW5pbmcsIFVzZXJcIjtcbiAgICAgIGNvbnRlbnRUb3Auc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiKDUxLCA0MSwgNDEpLCByZ2IoMCwgMzQsIDEyOCkpXCI7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbW9vbi5wbmdcIjtcbiAgICAgIGNvbnNvbGUubG9nKFwibW9vblwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgY3VycmVudEhvdXIgPj0gNiAmJiBjdXJyZW50SG91ciA8IDEyOlxuICAgICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIkdvb2QgTW9ybmluZywgVXNlclwiO1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3N1bi5wbmdcIjtcbiAgICAgIGNvbnRlbnRUb3Auc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiKDYsIDEzMiwgMjM1KSwgcmdiKDI1NSwgMjU1LCAyNTUpKVwiO1xuICAgICAgY29uc29sZS5sb2coXCJzdW5yaXNlXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBjdXJyZW50SG91ciA+PSAxMiAmJiBjdXJyZW50SG91ciA8IDE5OlxuICAgICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIkdvb2QgQWZ0ZXJub29uLCBVc2VyXCI7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvc3VucmlzZS5wbmdcIjtcbiAgICAgIGNvbnRlbnRUb3Auc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgMTc0LCAwKSwgcmdiKDIsIDE3NSwgMjU1KSlcIjtcbiAgICAgIGNvbnNvbGUubG9nKFwic3VuXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBjdXJyZW50SG91ciA+PSAxOSAmJiBjdXJyZW50SG91ciA8IDIwOlxuICAgICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIkdvb2QgRXZlbmluZywgVXNlclwiO1xuICAgICAgd2VhdGhlckljb24uc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21vb24ucG5nXCI7XG4gICAgICBjb250ZW50VG9wLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgIFwibGluZWFyLWdyYWRpZW50KHJnYig1MSwgNDEsIDQxKSwgcmdiKDAsIDM0LCAxMjgpKVwiO1xuICAgICAgY29uc29sZS5sb2coXCJzdW5zZXRcIik7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coXCJ3ZWxjb21lSWNvbiBmdW5jdGlvbiBicm9rZW5cIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHtcbiAgYWxsUHJvamVjdHMsXG4gIGNyZWF0ZUZvcm0sXG4gIGZvcm1DbG9zZSxcbiAgZm9ybSxcbiAgYnRuU3VibWl0LFxuICByaWdodEVkaXQsXG4gIHJpZ2h0RGVsZXRlXG59IGZyb20gXCIuL2Z1bmN0aW9ucy9kb21FbGVtZW50c1wiO1xuaW1wb3J0IGNsb3NlVGhlRm9ybSwgeyBvcGVuRm9ybSB9IGZyb20gXCIuL2Z1bmN0aW9ucy9vcGVuQ2xvc2VGb3JtXCI7XG5pbXBvcnQgc3VibWl0Rm9ybSBmcm9tIFwiLi9mdW5jdGlvbnMvc3VibWl0Rm9ybVwiO1xuaW1wb3J0IGZpbGxJbmZvIGZyb20gXCIuL2Z1bmN0aW9ucy9maWxsSW5mb1wiO1xuaW1wb3J0IGNoZWNrRGVsZXRlIGZyb20gXCIuL2Z1bmN0aW9ucy9jaGVja0RlbGV0ZVwiO1xuaW1wb3J0IHVwZGF0ZVByb2plY3RJbmZvIGZyb20gXCIuL2Z1bmN0aW9ucy91cGRhdGVQcm9qZWN0SW5mb1wiO1xuaW1wb3J0IHdlbGNvbWUgZnJvbSBcIi4vZnVuY3Rpb25zL3dlbGNvbWVcIjtcblxuLyogXG5Uby1kbyBsaXN0OyBvYmplY3RzIHRoYXQgYXJlIGNyZWF0ZWQgXG51c2luZyBmYWN0b3JpZXMgb3IgY29uc3RydWN0b3JzL2NsYXNzZXNcbnByb3BlcnRpZXMgc2hvdWxkIGhhdmUgYXQgbGVhc3QgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBcbmFuZCBwcmlvcml0eS5cbm1pZ2h0IGJlIGdvb2QgdG8gaW5jbHVkZSBub3RlcyBhbmQgY2hlY2tsaXN0LiBcbiAgICAtIHNob3VsZCBoYXZlIHByb2plY3RzL3NlcGVyYXRlIGxpc3Qgb2YgdG9kb3NcbiAgICAtIG9uIG9wZW4sIGRlZmF1bHQgcHJvamVjdCBzaG93cyB3aXRoIGFsbCB0aGVpciB0b2Rvc1xuICAgIC0gdXNlcnMgc2hvdWxkIGJlIGFibGUgdG8gY3JlYXRlIG5ldyBwcm9qZWN0cyBhbmRcbiAgICBjaG9zZSB3aGljaCBwcm9qZWN0IHRoZWlyIHRvZG9zIGdvIGludG8uXG5TZXBlcmF0ZSBhcHBsaWNhdGlvbiBsb2dpYyBmcm9tIERPTS1yZWxhdGVkIHN0dWZmXG4gICAgLSBjcmVhdGluZyBuZXcgdG9kb3NcbiAgICAtIHNldHRpbmcgdG9kb3MgYXMgY29tcGxldGVcbiAgICAtIGNoYW5naW5nIHRvZG8gcHJpb3JpdHlcblVJIHNob3VsZCBiZSBhYmxlIHRvOlxuICAgIC0gdmlldyBhbGwgcHJvamVjdHNcbiAgICAtIHZpZXcgYWxsIHRvZG9zIGluIGVhY2ggcHJvamVjdCAoZXguIFRpdGxlLCBkdWVkYXRlLCBhbmQgcHJpb3JpdGllcylcbiAgICAtIGV4cGFuZCBhIHNpbmdsZSB0b2RvIHRvIHNlZS9lZGl0IGl0cyBkZXRhaWxzXG4gICAgLSBkZWxldGUgYSB0b2RvXG5cbi0gV3JpdGUgYW4gYXJyYXkgXG4qL1xuZm9yIChsZXQgaSA9IEFycmF5Lmxlbmd0aCAtIDE7IGkgPCBBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAvLyBjb2RlIGhlcmUgYWRkcyB0YXNrIHRvIGFycmF5XG59XG5cbi8vIGNoZWNrcyB3aGljaCBwcm9qZWN0IHlvdSBhcmUgb24gYW5kIGFkZHMgdGFzayBmcm9tIHRoZSBwcm9qZWN0IGJhc2VkIG9uIHRoZSBhcnJheSBvcmRlclxuZnVuY3Rpb24gYWRkVGFzayh0aXRsZSwgZGVzYykge1xuICBjb25zdCB0YXNrID0ge1xuICAgIHR5cGU6IFwidGFza1wiLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjXG4gIH07XG4gIGFsbFByb2plY3RzWzBdLnRhc2tzLnB1c2godGFzayk7XG59XG5cbmZ1bmN0aW9uIGFkZENoZWNrbGlzdCh0aXRsZSkge1xuICBjb25zdCBjaGVja0xpc3QgPSB7XG4gICAgdHlwZTogXCJjaGVja2xpc3RcIixcbiAgICB0aXRsZVxuICB9O1xuICBhbGxQcm9qZWN0c1swXS50YXNrcy5wdXNoKGNoZWNrTGlzdCk7XG4gIC8vIERPTSBlbGVtZW50IGZ1bmN0aW9uIHRoYXQgYWRkcyB0aGUgY2hlY2tsaXN0IGJveFxufVxuXG5jb25zdCByZXN1bHQgPSBuZXcgRGF0ZSgpO1xuY29uc3QgcmVzdWx0Rm9ybWF0dGVkID0gZm9ybWF0KHJlc3VsdCwgXCJNTS9kZC95eXl5XCIpO1xuY29uc29sZS5sb2cocmVzdWx0KTtcblxuLy8gKGZ1bmN0aW9uIHdlbGNvbWVJY29uKCkge1xuLy8gICBjb25zdCBjdXJyZW50SG91ciA9ICtmb3JtYXQobmV3IERhdGUoKSwgXCJrXCIpO1xuLy8gICBzd2l0Y2ggKHRydWUpIHtcbi8vICAgICBjYXNlIGN1cnJlbnRIb3VyID49IDIwIHx8IGN1cnJlbnRIb3VyIDwgNjpcbi8vICAgICAgIGdyZWV0aW5nLnRleHRDb250ZW50ID0gXCJHb29kIEV2ZW5pbmcsIFVzZXJcIjtcbi8vICAgICAgIGNvbnRlbnRUb3Auc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbi8vICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiKDUxLCA0MSwgNDEpLCByZ2IoMCwgMzQsIDEyOCkpXCI7XG4vLyAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbW9vbi5wbmdcIjtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwibW9vblwiKTtcbi8vICAgICAgIGJyZWFrO1xuLy8gICAgIGNhc2UgY3VycmVudEhvdXIgPj0gNiAmJiBjdXJyZW50SG91ciA8IDEyOlxuLy8gICAgICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIkdvb2QgTW9ybmluZywgVXNlclwiO1xuLy8gICAgICAgd2VhdGhlckljb24uc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3N1bi5wbmdcIjtcbi8vICAgICAgIGNvbnRlbnRUb3Auc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbi8vICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiKDYsIDEzMiwgMjM1KSwgcmdiKDI1NSwgMjU1LCAyNTUpKVwiO1xuLy8gICAgICAgY29uc29sZS5sb2coXCJzdW5yaXNlXCIpO1xuLy8gICAgICAgYnJlYWs7XG4vLyAgICAgY2FzZSBjdXJyZW50SG91ciA+PSAxMiAmJiBjdXJyZW50SG91ciA8IDE5OlxuLy8gICAgICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIkdvb2QgQWZ0ZXJub29uLCBVc2VyXCI7XG4vLyAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvc3VucmlzZS5wbmdcIjtcbi8vICAgICAgIGNvbnRlbnRUb3Auc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbi8vICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgMTc0LCAwKSwgcmdiKDIsIDE3NSwgMjU1KSlcIjtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwic3VuXCIpO1xuLy8gICAgICAgYnJlYWs7XG4vLyAgICAgY2FzZSBjdXJyZW50SG91ciA+PSAxOSAmJiBjdXJyZW50SG91ciA8IDIwOlxuLy8gICAgICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIkdvb2QgRXZlbmluZywgVXNlclwiO1xuLy8gICAgICAgd2VhdGhlckljb24uc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21vb24ucG5nXCI7XG4vLyAgICAgICBjb250ZW50VG9wLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4vLyAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KHJnYig1MSwgNDEsIDQxKSwgcmdiKDAsIDM0LCAxMjgpKVwiO1xuLy8gICAgICAgY29uc29sZS5sb2coXCJzdW5zZXRcIik7XG4vLyAgICAgICBicmVhaztcbi8vICAgICBkZWZhdWx0OlxuLy8gICAgICAgY29uc29sZS5sb2coXCJ3ZWxjb21lSWNvbiBmdW5jdGlvbiBicm9rZW5cIik7XG4vLyAgIH1cbi8vIH0pKCk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIHdlbGNvbWUoKTtcbn07XG5cbmZvcm1DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbG9zZVRoZUZvcm0oKTtcbn0pO1xuXG5jcmVhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGJ0blN1Ym1pdC50eXBlID0gXCJzdWJtaXRcIjtcbiAgb3BlbkZvcm0oKTtcbn0pO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0Rm9ybSk7XG5cbmJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGJ0blN1Ym1pdC50eXBlID09PSBcImJ1dHRvblwiKSB1cGRhdGVQcm9qZWN0SW5mbyhlLnRhcmdldC5pZCk7XG59KTtcblxucmlnaHRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCBlZGl0QnRuSWQgPSBlLnRhcmdldC5pZDtcbiAgY29uc29sZS5sb2coZWRpdEJ0bklkKTtcbiAgYnRuU3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIGVkaXRCdG5JZCk7XG4gIGJ0blN1Ym1pdC50eXBlID0gXCJidXR0b25cIjtcbiAgb3BlbkZvcm0oKTtcbiAgZmlsbEluZm8oKTtcbn0pO1xuXG5yaWdodERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjaGVja0RlbGV0ZSgpO1xufSk7XG5cbmNvbnNvbGUubG9nKHJlc3VsdEZvcm1hdHRlZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=