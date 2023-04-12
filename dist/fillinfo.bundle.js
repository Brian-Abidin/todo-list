"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["fillinfo"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/functions/fillInfo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbGluZm8uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQWdFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySW1DO0FBQzBCOztBQUVoRDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sK0RBQXFCO0FBQzNCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsMEJBQTBCLE1BQU0sRUFBRSxLQUFLO0FBQ3ZDO0FBQ0E7QUFDQSxrQkFBa0IsMkRBQU07QUFDeEIsa0JBQWtCLDJEQUFNOztBQUV4QjtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmLElBQUk7QUFDSixJQUFJLHdEQUFjO0FBQ2xCLElBQUk7QUFDSixJQUFJLHNEQUFZO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9maWxsSW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb25zdGFudHNcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndyYXBwZXJcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgZm9ybVBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXBvcHVwXCIpO1xuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1jb250YWluZXJcIik7XG5jb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250YWluZXJcIik7XG5jb25zdCBmb3JtQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY2xvc2VcIik7XG5jb25zdCBjbG9zZVNpZ24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLXNpZ25cIik7XG5jb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1zdWJtaXRcIik7XG5jb25zdCBmb3JtQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1jb250ZW50XCIpO1xuY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKTtcbmNvbnN0IGZvcm1Cb3R0b20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tYm90dG9tXCIpO1xuY29uc3QgZm9ybUxlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbGVmdFwiKTtcbmNvbnN0IHRhZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFnLWNvbnRhaW5lclwiKTtcbi8vIGNvbnN0IGJ0blRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXRhZ1wiKTtcbmNvbnN0IGFkZFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhZ1wiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGZvcm1SaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1yaWdodFwiKTtcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlXCIpO1xuY29uc3QgZHVlVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLXRpbWVcIik7XG5jb25zdCBsb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvd1wiKTtcbmNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaXVtXCIpO1xuY29uc3QgaGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaFwiKTtcblxuY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci10aXRsZVwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBjb250ZW50VG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXRvcFwiKTtcbmNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJcIik7XG5jb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pY29uXCIpO1xuY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyZWV0aW5nXCIpO1xuXG5jb25zdCBjb250ZW50Qm90dG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWJvdHRvbVwiKTtcbmNvbnN0IGNvbnRlbnRMZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWxlZnRcIik7XG5jb25zdCBib3R0b21IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbS1oZWFkZXJcIik7XG5jb25zdCBib3R0b21UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90dG9tLXRpdGxlXCIpO1xuY29uc3QgY3JlYXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWZvcm1cIik7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpO1xuY29uc3QgcHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXByaW9yaXR5XCIpO1xuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuY29uc3QgcHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZHVlZGF0ZVwiKTtcbmNvbnN0IHByb2plY3RTaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXNob3dcIik7XG5cbmNvbnN0IGNvbnRlbnRSaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1yaWdodFwiKTtcbmNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1jb250YWluZXJcIik7XG5jb25zdCByaWdodEhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtaGVhZGVyXCIpO1xuY29uc3QgcmlnaHREZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWRlbGV0ZVwiKTtcbmNvbnN0IHJpZ2h0RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtZWRpdFwiKTtcbmNvbnN0IHJpZ2h0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtdGFza1wiKTtcbmNvbnN0IGRpc3BsYXlUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheS10YXNrLW5hbWVcIik7XG5jb25zdCByaWdodFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1wcmlvcml0eVwiKTtcbmNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktdGV4dFwiKTtcbmNvbnN0IHByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWxldmVsXCIpO1xuY29uc3QgcmlnaHRUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC10YWdzXCIpO1xuY29uc3QgZGlzcGxheVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktdGFnc1wiKTtcblxuY29uc3QgcmlnaHREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1kYXRlXCIpO1xuY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdGV4dFwiKTtcbmNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS10ZXh0XCIpO1xuY29uc3QgdGltZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWUtdGV4dFwiKTtcbmNvbnN0IGR1ZVRpbWVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtdGltZS10ZXh0XCIpO1xuY29uc3QgcmlnaHREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtZGVzY3JpcHRpb25cIik7XG5jb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLXRleHRcIik7XG5cbmNvbnN0IGFkZE5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtbm90ZXNcIik7XG5jb25zdCBhZGRDaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaGVja2xpc3RcIik7XG5cbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IHtcbiAgd3JhcHBlcixcbiAgaGVhZGVyLFxuICBmb3JtLFxuICBmb3JtUG9wdXAsXG4gIGZvcm1Db250YWluZXIsXG4gIGJ1dHRvbkNvbnRhaW5lcixcbiAgZm9ybUNsb3NlLFxuICBjbG9zZVNpZ24sXG4gIGJ0blN1Ym1pdCxcbiAgZm9ybUNvbnRlbnQsXG4gIHRhc2tOYW1lLFxuICBmb3JtQm90dG9tLFxuICBmb3JtTGVmdCxcbiAgdGFnQ29udGFpbmVyLFxuICBhZGRUYWcsXG4gIGRlc2NyaXB0aW9uLFxuICBmb3JtUmlnaHQsXG4gIGR1ZURhdGUsXG4gIGR1ZVRpbWUsXG4gIGxvdyxcbiAgbWVkaXVtLFxuICBoaWdoLFxuICBoZWFkZXJUaXRsZSxcbiAgY29udGVudCxcbiAgY29udGVudFRvcCxcbiAgd2VhdGhlcixcbiAgd2VhdGhlckljb24sXG4gIGdyZWV0aW5nLFxuICBjb250ZW50Qm90dG9tLFxuICBjb250ZW50TGVmdCxcbiAgYm90dG9tSGVhZGVyLFxuICBib3R0b21UaXRsZSxcbiAgY3JlYXRlRm9ybSxcbiAgcHJvamVjdCxcbiAgcHJvamVjdFByaW9yaXR5LFxuICBwcm9qZWN0VGl0bGUsXG4gIHByb2plY3REdWVEYXRlLFxuICBwcm9qZWN0U2hvdyxcbiAgY29udGVudFJpZ2h0LFxuICByaWdodENvbnRhaW5lcixcbiAgcmlnaHRIZWFkZXIsXG4gIHJpZ2h0RGVsZXRlLFxuICByaWdodEVkaXQsXG4gIHJpZ2h0VGFzayxcbiAgZGlzcGxheVRhc2tOYW1lLFxuICByaWdodFByaW9yaXR5LFxuICBwcmlvcml0eVRleHQsXG4gIHByaW9yaXR5TGV2ZWwsXG4gIHJpZ2h0VGFncyxcbiAgZGlzcGxheVRhZ3MsXG4gIHJpZ2h0RGF0ZSxcbiAgZGF0ZVRleHQsXG4gIGR1ZURhdGVUZXh0LFxuICB0aW1lVGV4dCxcbiAgZHVlVGltZVRleHQsXG4gIHJpZ2h0RGVzY3JpcHRpb24sXG4gIGRlc2NyaXB0aW9uVGV4dCxcbiAgYWRkTm90ZXMsXG4gIGFkZENoZWNrbGlzdCxcbiAgZm9vdGVyLFxuICBhbGxQcm9qZWN0c1xufTtcbiIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0IHsgbG93LCBtZWRpdW0sIGhpZ2gsIGRpc3BsYXlUYWdzIH0gZnJvbSBcIi4vZG9tRWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsbEluZm8oKSB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXktdGFzay1uYW1lXCIpLnRleHRDb250ZW50O1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktbGV2ZWxcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLXRleHRcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS10aW1lLXRleHRcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudDtcbiAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhZy1uYW1lXCIpLnRleHRDb250ZW50KTtcbiAgbGV0IHRhZ05hbWU7XG5cbiAgaWYgKGRpc3BsYXlUYWdzLmlubmVySFRNTCA9PT0gXCJcIikge1xuICAgIHRhZ05hbWUgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIHRhZ05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFnLW5hbWVcIilbMF0udGV4dENvbnRlbnQ7XG4gIH1cblxuICBjb25zdCBjb21iaW5lZERhdGUgPSBgJHtkYXRlfSAke3RpbWV9YDtcbiAgY29uc3QgdGltZUZvcm1hdHRlZCA9IG5ldyBEYXRlKGNvbWJpbmVkRGF0ZSk7XG4gIGNvbnNvbGUubG9nKHRpbWVGb3JtYXR0ZWQpO1xuICBjb25zdCBuZXdUaW1lID0gZm9ybWF0KHRpbWVGb3JtYXR0ZWQsIFwiSEg6bW1cIik7XG4gIGNvbnN0IG5ld0RhdGUgPSBmb3JtYXQodGltZUZvcm1hdHRlZCwgXCJ5eXl5LU1NLWRkXCIpO1xuXG4gIGNvbnNvbGUubG9nKG5hbWUsIHByaW9yaXR5LCB0YWdOYW1lLCBuZXdEYXRlLCBuZXdUaW1lLCBkZXNjcmlwdGlvbik7XG4gIGlmIChwcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgIGxvdy5jaGVja2VkID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgIG1lZGl1bS5jaGVja2VkID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICBoaWdoLmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZSA9IG5ld0RhdGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlID0gbmFtZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSA9IGRlc2NyaXB0aW9uO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YWdcIikudmFsdWUgPSB0YWdOYW1lO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS10aW1lXCIpLnZhbHVlID0gbmV3VGltZTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==