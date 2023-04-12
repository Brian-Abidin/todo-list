"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["updateprojectinfo"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/functions/updateProjectInfo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcHJvamVjdGluZm8uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDOztBQUUvQjtBQUNmO0FBQ0EsSUFBSSw2RUFBbUM7QUFDdkMsSUFBSTtBQUNKLElBQUksNkVBQW1DO0FBQ3ZDLElBQUk7QUFDSixJQUFJLDZFQUFtQztBQUN2QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVjRDOztBQUU3QjtBQUNmO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlFQUF1QjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnVCOztBQUVSO0FBQ2YsRUFBRSxxRUFBMkI7QUFDN0IsRUFBRSxtRUFBeUI7QUFDM0IsRUFBRSxzRUFBNEI7QUFDOUI7QUFDQSxFQUFFLGlFQUF1QjtBQUN6QixFQUFFLGlFQUF1QjtBQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFnRUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcklrRTs7QUFFN0Q7QUFDUCxFQUFFLGlFQUF1QjtBQUN6QixFQUFFLHFFQUEyQjtBQUM3QixjQUFjLHdEQUFjO0FBQzVCOztBQUVlO0FBQ2YsRUFBRSxpRUFBdUI7QUFDekIsRUFBRSxxRUFBMkI7QUFDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYcUM7QUFDSTtBQVFsQjtBQUNpQjtBQUNHO0FBQ0w7QUFDTTs7QUFFN0I7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLE1BQU0sRUFBRSxLQUFLO0FBQ3ZDO0FBQ0E7QUFDQSxrQkFBa0IsMkRBQU07O0FBRXhCLGtCQUFrQiw2REFBUTtBQUMxQix3QkFBd0IsMkRBQU07O0FBRTlCO0FBQ0EsU0FBUyxnRUFBc0I7QUFDL0IsSUFBSSxpRUFBdUIsQ0FBQyxnRUFBc0I7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxxREFBVztBQUNqQjtBQUNBLHVDQUF1QyxNQUFNO0FBQzdDLElBQUksU0FBUyx3REFBYztBQUMzQjtBQUNBLHVDQUF1QyxNQUFNO0FBQzdDO0FBQ0EsSUFBSSxTQUFTLHNEQUFZO0FBQ3pCO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0M7O0FBRUE7QUFDQTtBQUNBLEVBQUUsdURBQVU7O0FBRVosa0NBQWtDLE1BQU07QUFDeEMsaUNBQWlDLE1BQU07O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHdEQUFXO0FBQ2IsRUFBRSwwREFBYTtBQUNmLEVBQUUsMERBQVk7QUFDZCxFQUFFLG9EQUFVO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2NoZWNrUHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVUYWdzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZGlzcGxheU9ubHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL29wZW5DbG9zZUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy91cGRhdGVQcm9qZWN0SW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByaWdodFByaW9yaXR5IH0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tQcmlvcml0eSh1cmdlbmN5KSB7XG4gIGlmICh1cmdlbmN5ID09PSBcImxvd1wiKSB7XG4gICAgcmlnaHRQcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gIH0gZWxzZSBpZiAodXJnZW5jeSA9PT0gXCJtZWRpdW1cIikge1xuICAgIHJpZ2h0UHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgfSBlbHNlIGlmICh1cmdlbmN5ID09PSBcImhpZ2hcIikge1xuICAgIHJpZ2h0UHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGlzcGxheVRhZ3MgfSBmcm9tIFwiLi9kb21FbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYWdzKHRhZ3MpIHtcbiAgaWYgKHRhZ3MgPT09IFwiXCIpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YWdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCByZW1vdmVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgdGFnLmNsYXNzTGlzdC5hZGQoXCJ0YWcxXCIpO1xuICAgIHRhZ05hbWUuY2xhc3NMaXN0LmFkZChcInRhZy1uYW1lXCIpO1xuICAgIHJlbW92ZVRhZy5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLXRhZ1wiKTtcblxuICAgIGRpc3BsYXlUYWdzLmFwcGVuZENoaWxkKHRhZyk7XG4gICAgdGFnLmFwcGVuZENoaWxkKHRhZ05hbWUpO1xuICAgIHRhZy5hcHBlbmRDaGlsZChyZW1vdmVUYWcpO1xuXG4gICAgdGFnTmFtZS50ZXh0Q29udGVudCA9IHRhZ3M7XG4gICAgcmVtb3ZlVGFnLnRleHRDb250ZW50ID0gXCItXCI7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGRpc3BsYXlUYXNrTmFtZSxcbiAgcHJpb3JpdHlMZXZlbCxcbiAgcmlnaHREZXNjcmlwdGlvbixcbiAgZHVlRGF0ZVRleHQsXG4gIGR1ZVRpbWVUZXh0XG59IGZyb20gXCIuL2RvbUVsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlPbmx5KG5hbWUsIGRlc2MsIHVyZ2VuY3ksIGRhdGUsIHRpbWUpIHtcbiAgZGlzcGxheVRhc2tOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgcHJpb3JpdHlMZXZlbC50ZXh0Q29udGVudCA9IHVyZ2VuY3k7XG4gIHJpZ2h0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xuICBjb25zb2xlLmxvZyhkYXRlKTtcbiAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSBkYXRlO1xuICBkdWVUaW1lVGV4dC50ZXh0Q29udGVudCA9IHRpbWU7XG59XG4iLCIvLyBDb25zdGFudHNcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndyYXBwZXJcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgZm9ybVBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXBvcHVwXCIpO1xuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1jb250YWluZXJcIik7XG5jb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250YWluZXJcIik7XG5jb25zdCBmb3JtQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY2xvc2VcIik7XG5jb25zdCBjbG9zZVNpZ24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXNpZ25cIik7XG5jb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1zdWJtaXRcIik7XG5jb25zdCBmb3JtQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1jb250ZW50XCIpO1xuY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKTtcbmNvbnN0IGZvcm1Cb3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tYm90dG9tXCIpO1xuY29uc3QgZm9ybUxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbGVmdFwiKTtcbmNvbnN0IHRhZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFnLWNvbnRhaW5lclwiKTtcbi8vIGNvbnN0IGJ0blRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXRhZ1wiKTtcbmNvbnN0IGFkZFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhZ1wiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGZvcm1SaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1yaWdodFwiKTtcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlXCIpO1xuY29uc3QgZHVlVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLXRpbWVcIik7XG5jb25zdCBsb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcbmNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaXVtXCIpO1xuY29uc3QgaGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaFwiKTtcblxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci10aXRsZVwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBjb250ZW50VG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXRvcFwiKTtcbmNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJcIik7XG5jb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pY29uXCIpO1xuY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyZWV0aW5nXCIpO1xuXG5jb25zdCBjb250ZW50Qm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWJvdHRvbVwiKTtcbmNvbnN0IGNvbnRlbnRMZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWxlZnRcIik7XG5jb25zdCBib3R0b21IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbS1oZWFkZXJcIik7XG5jb25zdCBib3R0b21UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90dG9tLXRpdGxlXCIpO1xuY29uc3QgY3JlYXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWZvcm1cIik7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpO1xuY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXByaW9yaXR5XCIpO1xuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuY29uc3QgcHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZHVlZGF0ZVwiKTtcbmNvbnN0IHByb2plY3RTaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXNob3dcIik7XG5cbmNvbnN0IGNvbnRlbnRSaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1yaWdodFwiKTtcbmNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1jb250YWluZXJcIik7XG5jb25zdCByaWdodEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtaGVhZGVyXCIpO1xuY29uc3QgcmlnaHREZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWRlbGV0ZVwiKTtcbmNvbnN0IHJpZ2h0RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtZWRpdFwiKTtcbmNvbnN0IHJpZ2h0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtdGFza1wiKTtcbmNvbnN0IGRpc3BsYXlUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS10YXNrLW5hbWVcIik7XG5jb25zdCByaWdodFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1wcmlvcml0eVwiKTtcbmNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktdGV4dFwiKTtcbmNvbnN0IHByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWxldmVsXCIpO1xuY29uc3QgcmlnaHRUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC10YWdzXCIpO1xuY29uc3QgZGlzcGxheVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktdGFnc1wiKTtcblxuY29uc3QgcmlnaHREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1kYXRlXCIpO1xuY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdGV4dFwiKTtcbmNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS10ZXh0XCIpO1xuY29uc3QgdGltZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWUtdGV4dFwiKTtcbmNvbnN0IGR1ZVRpbWVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtdGltZS10ZXh0XCIpO1xuY29uc3QgcmlnaHREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtZGVzY3JpcHRpb25cIik7XG5jb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLXRleHRcIik7XG5cbmNvbnN0IGFkZE5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtbm90ZXNcIik7XG5jb25zdCBhZGRDaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaGVja2xpc3RcIik7XG5cbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IHtcbiAgd3JhcHBlcixcbiAgaGVhZGVyLFxuICBmb3JtLFxuICBmb3JtUG9wdXAsXG4gIGZvcm1Db250YWluZXIsXG4gIGJ1dHRvbkNvbnRhaW5lcixcbiAgZm9ybUNsb3NlLFxuICBjbG9zZVNpZ24sXG4gIGJ0blN1Ym1pdCxcbiAgZm9ybUNvbnRlbnQsXG4gIHRhc2tOYW1lLFxuICBmb3JtQm90dG9tLFxuICBmb3JtTGVmdCxcbiAgdGFnQ29udGFpbmVyLFxuICBhZGRUYWcsXG4gIGRlc2NyaXB0aW9uLFxuICBmb3JtUmlnaHQsXG4gIGR1ZURhdGUsXG4gIGR1ZVRpbWUsXG4gIGxvdyxcbiAgbWVkaXVtLFxuICBoaWdoLFxuICBoZWFkZXJUaXRsZSxcbiAgY29udGVudCxcbiAgY29udGVudFRvcCxcbiAgd2VhdGhlcixcbiAgd2VhdGhlckljb24sXG4gIGdyZWV0aW5nLFxuICBjb250ZW50Qm90dG9tLFxuICBjb250ZW50TGVmdCxcbiAgYm90dG9tSGVhZGVyLFxuICBib3R0b21UaXRsZSxcbiAgY3JlYXRlRm9ybSxcbiAgcHJvamVjdCxcbiAgcHJvamVjdFByaW9yaXR5LFxuICBwcm9qZWN0VGl0bGUsXG4gIHByb2plY3REdWVEYXRlLFxuICBwcm9qZWN0U2hvdyxcbiAgY29udGVudFJpZ2h0LFxuICByaWdodENvbnRhaW5lcixcbiAgcmlnaHRIZWFkZXIsXG4gIHJpZ2h0RGVsZXRlLFxuICByaWdodEVkaXQsXG4gIHJpZ2h0VGFzayxcbiAgZGlzcGxheVRhc2tOYW1lLFxuICByaWdodFByaW9yaXR5LFxuICBwcmlvcml0eVRleHQsXG4gIHByaW9yaXR5TGV2ZWwsXG4gIHJpZ2h0VGFncyxcbiAgZGlzcGxheVRhZ3MsXG4gIHJpZ2h0RGF0ZSxcbiAgZGF0ZVRleHQsXG4gIGR1ZURhdGVUZXh0LFxuICB0aW1lVGV4dCxcbiAgZHVlVGltZVRleHQsXG4gIHJpZ2h0RGVzY3JpcHRpb24sXG4gIGRlc2NyaXB0aW9uVGV4dCxcbiAgYWRkTm90ZXMsXG4gIGFkZENoZWNrbGlzdCxcbiAgZm9vdGVyLFxuICBhbGxQcm9qZWN0c1xufTtcbiIsImltcG9ydCB7IGJ0blN1Ym1pdCwgZm9ybVBvcHVwLCBmb3JtQ29udGFpbmVyIH0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xuICBmb3JtUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjb25zb2xlLmxvZyhidG5TdWJtaXQudHlwZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb3NlVGhlRm9ybSgpIHtcbiAgZm9ybVBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcbmltcG9ydCBwYXJzZUlTTyBmcm9tIFwiZGF0ZS1mbnMvcGFyc2VJU09cIjtcbmltcG9ydCB7XG4gIGFsbFByb2plY3RzLFxuICBkaXNwbGF5VGFncyxcbiAgbG93LFxuICBtZWRpdW0sXG4gIGhpZ2gsXG4gIGZvcm1cbn0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcbmltcG9ydCBkaXNwbGF5T25seSBmcm9tIFwiLi9kaXNwbGF5T25seVwiO1xuaW1wb3J0IGNsb3NlVGhlRm9ybSBmcm9tIFwiLi9vcGVuQ2xvc2VGb3JtXCI7XG5pbXBvcnQgY3JlYXRlVGFncyBmcm9tIFwiLi9jcmVhdGVUYWdzXCI7XG5pbXBvcnQgY2hlY2tQcmlvcml0eSBmcm9tIFwiLi9jaGVja1ByaW9yaXR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RJbmZvKGluZGV4KSB7XG4gIGNvbnN0IGFycmF5SWQgPSBOdW1iZXIoaW5kZXgpIC0gMTtcbiAgY29uc29sZS5sb2coYXJyYXlJZCk7XG4gIGNvbnN0IHRoaXNQcm9qZWN0ID0gYWxsUHJvamVjdHNbYXJyYXlJZF07XG4gIGxldCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtdGltZVwiKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIikudmFsdWU7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCB0YWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YWdcIikudmFsdWU7XG5cbiAgY29uc29sZS5sb2codGFnKTtcbiAgY29uc29sZS5sb2codGhpc1Byb2plY3QpO1xuICBjb25zb2xlLmxvZyh0aW1lKTtcbiAgY29uc29sZS5sb2coZGF0ZSk7XG5cbiAgY29uc3QgY29tYmluZWREYXRlID0gYCR7ZGF0ZX0gJHt0aW1lfWA7XG4gIGNvbnN0IHRpbWVGb3JtYXR0ZWQgPSBuZXcgRGF0ZShjb21iaW5lZERhdGUpO1xuICBjb25zb2xlLmxvZyh0aW1lRm9ybWF0dGVkKTtcbiAgY29uc3QgbmV3VGltZSA9IGZvcm1hdCh0aW1lRm9ybWF0dGVkLCBcImg6bW0gYVwiKTtcblxuICBjb25zdCBuZXdEYXRlID0gcGFyc2VJU08oZGF0ZSk7XG4gIGNvbnN0IGRhdGVGb3JtYXR0ZWQgPSBmb3JtYXQobmV3RGF0ZSwgXCJNL2RkL3l5XCIpO1xuXG4gIHRoaXNQcm9qZWN0LnRhZ3MgPSBcIlwiO1xuICB3aGlsZSAoZGlzcGxheVRhZ3MuZmlyc3RDaGlsZCkge1xuICAgIGRpc3BsYXlUYWdzLnJlbW92ZUNoaWxkKGRpc3BsYXlUYWdzLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgdGhpc1Byb2plY3QubmFtZSA9IG5hbWU7XG4gIHRoaXNQcm9qZWN0LmR1ZURhdGUgPSBkYXRlRm9ybWF0dGVkO1xuICB0aGlzUHJvamVjdC50aW1lID0gbmV3VGltZTtcbiAgdGhpc1Byb2plY3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblxuICBpZiAobG93LmNoZWNrZWQpIHtcbiAgICB0aGlzUHJvamVjdC5wcmlvcml0eSA9IFwibG93XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByaW9yaXR5JHtpbmRleH1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gIH0gZWxzZSBpZiAobWVkaXVtLmNoZWNrZWQpIHtcbiAgICB0aGlzUHJvamVjdC5wcmlvcml0eSA9IFwibWVkaXVtXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByaW9yaXR5JHtpbmRleH1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgXCJ5ZWxsb3dcIjtcbiAgfSBlbHNlIGlmIChoaWdoLmNoZWNrZWQpIHtcbiAgICB0aGlzUHJvamVjdC5wcmlvcml0eSA9IFwiaGlnaFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmlvcml0eSR7aW5kZXh9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgfVxuXG4gIGNvbnN0IHVyZ2VuY3kgPSB0aGlzUHJvamVjdC5wcmlvcml0eTtcbiAgdGhpc1Byb2plY3QudGFncyA9IHRhZztcbiAgY3JlYXRlVGFncyh0aGlzUHJvamVjdC50YWdzKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGUke2luZGV4fWApLnRleHRDb250ZW50ID0gdGhpc1Byb2plY3QubmFtZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRhdGUke2luZGV4fWApLnRleHRDb250ZW50ID0gZGF0ZUZvcm1hdHRlZDtcblxuICBpZiAodGltZSA9PT0gXCJcIikge1xuICAgIHRpbWUgPSBcIk5vIFRpbWVcIjtcbiAgfVxuXG4gIGRpc3BsYXlPbmx5KG5hbWUsIGRlc2NyaXB0aW9uLCB1cmdlbmN5LCBkYXRlRm9ybWF0dGVkLCBuZXdUaW1lKTtcbiAgY2hlY2tQcmlvcml0eSh1cmdlbmN5KTtcbiAgY2xvc2VUaGVGb3JtKCk7XG4gIGZvcm0ucmVzZXQoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==