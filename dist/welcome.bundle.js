"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["welcome"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/functions/welcome.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBZ0VFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJbUM7QUFDNkI7O0FBRW5EO0FBQ2YsdUJBQXVCLDJEQUFNO0FBQzdCO0FBQ0E7QUFDQSxNQUFNLDhEQUFvQjtBQUMxQixNQUFNLDBFQUFnQztBQUN0QztBQUNBLE1BQU0seURBQWU7QUFDckI7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4REFBb0I7QUFDMUIsTUFBTSx5REFBZTtBQUNyQixNQUFNLDBFQUFnQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQW9CO0FBQzFCLE1BQU0seURBQWU7QUFDckIsTUFBTSwwRUFBZ0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFvQjtBQUMxQixNQUFNLHlEQUFlO0FBQ3JCLE1BQU0sMEVBQWdDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL3dlbGNvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29uc3RhbnRzXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3cmFwcGVyXCIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IGZvcm1Qb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1wb3B1cFwiKTtcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY29udGFpbmVyXCIpO1xuY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuY29uc3QgZm9ybUNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWNsb3NlXCIpO1xuY29uc3QgY2xvc2VTaWduID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1zaWduXCIpO1xuY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc3VibWl0XCIpO1xuY29uc3QgZm9ybUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY29udGVudFwiKTtcbmNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIik7XG5jb25zdCBmb3JtQm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWJvdHRvbVwiKTtcbmNvbnN0IGZvcm1MZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWxlZnRcIik7XG5jb25zdCB0YWdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhZy1jb250YWluZXJcIik7XG4vLyBjb25zdCBidG5UYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi10YWdcIik7XG5jb25zdCBhZGRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YWdcIik7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG5jb25zdCBmb3JtUmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tcmlnaHRcIik7XG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKTtcbmNvbnN0IGR1ZVRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS10aW1lXCIpO1xuY29uc3QgbG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3dcIik7XG5jb25zdCBtZWRpdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lZGl1bVwiKTtcbmNvbnN0IGhpZ2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIik7XG5cbmNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItdGl0bGVcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgY29udGVudFRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC10b3BcIik7XG5jb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyXCIpO1xuY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaWNvblwiKTtcbmNvbnN0IGdyZWV0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmVldGluZ1wiKTtcblxuY29uc3QgY29udGVudEJvdHRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1ib3R0b21cIik7XG5jb25zdCBjb250ZW50TGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1sZWZ0XCIpO1xuY29uc3QgYm90dG9tSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3R0b20taGVhZGVyXCIpO1xuY29uc3QgYm90dG9tVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbS10aXRsZVwiKTtcbmNvbnN0IGNyZWF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1mb3JtXCIpO1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1wcmlvcml0eVwiKTtcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKTtcbmNvbnN0IHByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWR1ZWRhdGVcIik7XG5jb25zdCBwcm9qZWN0U2hvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1zaG93XCIpO1xuXG5jb25zdCBjb250ZW50UmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtcmlnaHRcIik7XG5jb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtY29udGFpbmVyXCIpO1xuY29uc3QgcmlnaHRIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWhlYWRlclwiKTtcbmNvbnN0IHJpZ2h0RGVsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1kZWxldGVcIik7XG5jb25zdCByaWdodEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWVkaXRcIik7XG5jb25zdCByaWdodFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LXRhc2tcIik7XG5jb25zdCBkaXNwbGF5VGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktdGFzay1uYW1lXCIpO1xuY29uc3QgcmlnaHRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtcHJpb3JpdHlcIik7XG5jb25zdCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LXRleHRcIik7XG5jb25zdCBwcmlvcml0eUxldmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1sZXZlbFwiKTtcbmNvbnN0IHJpZ2h0VGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtdGFnc1wiKTtcbmNvbnN0IGRpc3BsYXlUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5LXRhZ3NcIik7XG5cbmNvbnN0IHJpZ2h0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtZGF0ZVwiKTtcbmNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLXRleHRcIik7XG5jb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGUtdGV4dFwiKTtcbmNvbnN0IHRpbWVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lLXRleHRcIik7XG5jb25zdCBkdWVUaW1lVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLXRpbWUtdGV4dFwiKTtcbmNvbnN0IHJpZ2h0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi10ZXh0XCIpO1xuXG5jb25zdCBhZGROb3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLW5vdGVzXCIpO1xuY29uc3QgYWRkQ2hlY2tsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtY2hlY2tsaXN0XCIpO1xuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKTtcbmNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbmV4cG9ydCB7XG4gIHdyYXBwZXIsXG4gIGhlYWRlcixcbiAgZm9ybSxcbiAgZm9ybVBvcHVwLFxuICBmb3JtQ29udGFpbmVyLFxuICBidXR0b25Db250YWluZXIsXG4gIGZvcm1DbG9zZSxcbiAgY2xvc2VTaWduLFxuICBidG5TdWJtaXQsXG4gIGZvcm1Db250ZW50LFxuICB0YXNrTmFtZSxcbiAgZm9ybUJvdHRvbSxcbiAgZm9ybUxlZnQsXG4gIHRhZ0NvbnRhaW5lcixcbiAgYWRkVGFnLFxuICBkZXNjcmlwdGlvbixcbiAgZm9ybVJpZ2h0LFxuICBkdWVEYXRlLFxuICBkdWVUaW1lLFxuICBsb3csXG4gIG1lZGl1bSxcbiAgaGlnaCxcbiAgaGVhZGVyVGl0bGUsXG4gIGNvbnRlbnQsXG4gIGNvbnRlbnRUb3AsXG4gIHdlYXRoZXIsXG4gIHdlYXRoZXJJY29uLFxuICBncmVldGluZyxcbiAgY29udGVudEJvdHRvbSxcbiAgY29udGVudExlZnQsXG4gIGJvdHRvbUhlYWRlcixcbiAgYm90dG9tVGl0bGUsXG4gIGNyZWF0ZUZvcm0sXG4gIHByb2plY3QsXG4gIHByb2plY3RQcmlvcml0eSxcbiAgcHJvamVjdFRpdGxlLFxuICBwcm9qZWN0RHVlRGF0ZSxcbiAgcHJvamVjdFNob3csXG4gIGNvbnRlbnRSaWdodCxcbiAgcmlnaHRDb250YWluZXIsXG4gIHJpZ2h0SGVhZGVyLFxuICByaWdodERlbGV0ZSxcbiAgcmlnaHRFZGl0LFxuICByaWdodFRhc2ssXG4gIGRpc3BsYXlUYXNrTmFtZSxcbiAgcmlnaHRQcmlvcml0eSxcbiAgcHJpb3JpdHlUZXh0LFxuICBwcmlvcml0eUxldmVsLFxuICByaWdodFRhZ3MsXG4gIGRpc3BsYXlUYWdzLFxuICByaWdodERhdGUsXG4gIGRhdGVUZXh0LFxuICBkdWVEYXRlVGV4dCxcbiAgdGltZVRleHQsXG4gIGR1ZVRpbWVUZXh0LFxuICByaWdodERlc2NyaXB0aW9uLFxuICBkZXNjcmlwdGlvblRleHQsXG4gIGFkZE5vdGVzLFxuICBhZGRDaGVja2xpc3QsXG4gIGZvb3RlcixcbiAgYWxsUHJvamVjdHNcbn07XG4iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcbmltcG9ydCB7IHdlYXRoZXJJY29uLCBncmVldGluZywgY29udGVudFRvcCB9IGZyb20gXCIuL2RvbUVsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlbGNvbWUoKSB7XG4gIGNvbnN0IGN1cnJlbnRIb3VyID0gK2Zvcm1hdChuZXcgRGF0ZSgpLCBcImtcIik7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgY3VycmVudEhvdXIgPj0gMjAgfHwgY3VycmVudEhvdXIgPCA2OlxuICAgICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIkdvb2QgRXZlbmluZywgVXNlclwiO1xuICAgICAgY29udGVudFRvcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICBcImxpbmVhci1ncmFkaWVudChyZ2IoNTEsIDQxLCA0MSksIHJnYigwLCAzNCwgMTI4KSlcIjtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tb29uLnBuZ1wiO1xuICAgICAgY29uc29sZS5sb2coXCJtb29uXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBjdXJyZW50SG91ciA+PSA2ICYmIGN1cnJlbnRIb3VyIDwgMTI6XG4gICAgICBncmVldGluZy50ZXh0Q29udGVudCA9IFwiR29vZCBNb3JuaW5nLCBVc2VyXCI7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvc3VuLnBuZ1wiO1xuICAgICAgY29udGVudFRvcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICBcImxpbmVhci1ncmFkaWVudChyZ2IoNiwgMTMyLCAyMzUpLCByZ2IoMjU1LCAyNTUsIDI1NSkpXCI7XG4gICAgICBjb25zb2xlLmxvZyhcInN1bnJpc2VcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGN1cnJlbnRIb3VyID49IDEyICYmIGN1cnJlbnRIb3VyIDwgMTk6XG4gICAgICBncmVldGluZy50ZXh0Q29udGVudCA9IFwiR29vZCBBZnRlcm5vb24sIFVzZXJcIjtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9zdW5yaXNlLnBuZ1wiO1xuICAgICAgY29udGVudFRvcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICBcImxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAxNzQsIDApLCByZ2IoMiwgMTc1LCAyNTUpKVwiO1xuICAgICAgY29uc29sZS5sb2coXCJzdW5cIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGN1cnJlbnRIb3VyID49IDE5ICYmIGN1cnJlbnRIb3VyIDwgMjA6XG4gICAgICBncmVldGluZy50ZXh0Q29udGVudCA9IFwiR29vZCBFdmVuaW5nLCBVc2VyXCI7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbW9vbi5wbmdcIjtcbiAgICAgIGNvbnRlbnRUb3Auc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiKDUxLCA0MSwgNDEpLCByZ2IoMCwgMzQsIDEyOCkpXCI7XG4gICAgICBjb25zb2xlLmxvZyhcInN1bnNldFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZyhcIndlbGNvbWVJY29uIGZ1bmN0aW9uIGJyb2tlblwiKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9