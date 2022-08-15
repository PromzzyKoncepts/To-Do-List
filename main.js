/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/clearCompleted.js":
/*!***********************************!*\
  !*** ./modules/clearCompleted.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./modules/functions.js\");\n\n// import { toDoList as } from './functions.js';\n\nconst updateChecked = (index) => {\n  const toDoList = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.allToDos)();\n  if (toDoList[index].completed === true) {\n    toDoList[index].completed = false;\n  } else {\n    toDoList[index].completed = true;\n  }\n  localStorage.setItem('tasks: ', JSON.stringify(toDoList));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateChecked);\n\n//# sourceURL=webpack://to-do-list/./modules/clearCompleted.js?");

/***/ }),

/***/ "./modules/functions.js":
/*!******************************!*\
  !*** ./modules/functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToLocalStorage\": () => (/* binding */ addToLocalStorage),\n/* harmony export */   \"allToDos\": () => (/* binding */ allToDos),\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"getTaskFromLocStg\": () => (/* binding */ getTaskFromLocStg),\n/* harmony export */   \"highlightTask\": () => (/* binding */ highlightTask),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"taskArrayofObjects\": () => (/* binding */ taskArrayofObjects),\n/* harmony export */   \"taskDisplay\": () => (/* binding */ taskDisplay)\n/* harmony export */ });\n/* eslint-disable max-len */\n\nlet toDoList = [];\n// function to add the set tasks to local storage\nconst allToDos = () => toDoList;\nconst addToLocalStorage = (task) => {\n  toDoList = JSON.parse(localStorage.getItem('tasks: '));\n  if (toDoList == null) { toDoList = []; }\n  toDoList.push(task);\n  localStorage.setItem('tasks: ', JSON.stringify(toDoList));\n};\n\n// const inputVal = document.getElementById('add');\n\n// function for the add button\nfunction taskDisplay(todos) {\n  const addList = document.querySelector('.list-container');\n  const listDiv = document.createElement('div');\n  const listInput = document.createElement('input');\n  listDiv.className = 'task';\n\n  const taskValue = document.createElement('input');\n  taskValue.setAttribute('type', 'checkbox');\n  const ellipsis = document.createElement('span');\n  const deleteBtn = document.createElement('span');\n\n  ellipsis.innerHTML = '<i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i>';\n  deleteBtn.innerHTML = '<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>';\n  deleteBtn.className = 'remove-btn';\n  listInput.value = todos.description;\n  listInput.className = 'task-value';\n  taskValue.checked = todos.completed;\n\n  listDiv.appendChild(taskValue);\n  listDiv.appendChild(listInput);\n  listDiv.appendChild(ellipsis);\n  listDiv.appendChild(deleteBtn);\n  addList.appendChild(listDiv);\n\n  taskValue.className = 'checkTask';\n}\n// function to get tasks from local Storage and display from Storage\nconst getTaskFromLocStg = () => {\n  toDoList = JSON.parse(localStorage.getItem('tasks: '));\n  if (toDoList !== null) {\n    toDoList.forEach((todos) => {\n      taskDisplay(todos);\n    });\n  } else {\n    toDoList = [];\n  }\n};\n\nconst taskArrayofObjects = (todos) => {\n  const task = {\n    description: String,\n    completed: false,\n    index: Number,\n  };\n  task.description = todos;\n  task.index = toDoList.length + 1;\n  addToLocalStorage(task);\n  taskDisplay(task);\n};\n\n// function to delete a task from the list\nconst removeTask = (index) => {\n  const tasksElement = document.querySelectorAll('.task');\n  toDoList.splice(index, 1);\n  tasksElement[index].remove();\n  for (let i = index; i < toDoList.length; i += 1) {\n    toDoList[i].index -= 1;\n  }\n  localStorage.setItem('tasks: ', JSON.stringify(toDoList));\n};\n\n// Function to modify each task\nconst editTask = (todos, index) => {\n  toDoList[index].description = todos;\n  localStorage.setItem('tasks: ', JSON.stringify(toDoList));\n};\n\nconst highlightTask = (index) => {\n  const moveBtns = document.querySelectorAll('.fa.fa-ellipsis-h');\n  const deleteBtns = document.querySelectorAll('.fa.fa-trash');\n  const activeTasks = document.querySelectorAll('.task.active');\n  const tasksElt = document.querySelectorAll('.task-value');\n  activeTasks.forEach((activeTask) => {\n    activeTask.classList.remove('active');\n  });\n  moveBtns.forEach((btn, index) => {\n    btn.classList.remove('active');\n    deleteBtns[index].classList.remove('active');\n  });\n\n  tasksElt[index].classList.toggle('active');\n  moveBtns[index].classList.toggle('active');\n  deleteBtns[index].classList.toggle('active');\n};\n\n// function for the clear completed button,\nconst clearCompleted = () => {\n  const tasksElt = document.querySelectorAll('.task');\n  toDoList.forEach((task, index) => {\n    if (task.completed === true) {\n      tasksElt[index].remove();\n    }\n  });\n  toDoList = toDoList.filter((task) => task.completed === false);\n  for (let i = toDoList.length - 1; i >= 0; i -= 1) {\n    toDoList[i].index = i;\n  }\n  localStorage.setItem('tasks: ', JSON.stringify(toDoList));\n};\n// // function for the clear completed button, hint: its not functional yet\n// const clearCompleted = () => {\n//   const tasksElt = document.querySelectorAll('.task');\n//   toDoList.forEach((task, index) => {\n//     if (task.completed === true) {\n//       tasksElt[index].remove();\n//     }\n//   });\n//   toDoList = toDoList.filter((task) => task.completed === false);\n//   for (let i = toDoList.length - 1; i >= 0; i -= 1) {\n//     toDoList[i].index = i;\n//   }\n//   localStorage.setItem('tasks: ', JSON.stringify(toDoList));\n// };\n\n// const completed = (item) => {\n\n//     item.nextElementSibling.classList.toggle('completed');\n//     const modifiedList = toDoList.map((todo) => {\n//       if (todo.index === index + 1) {\n//         return {\n//           description: todo.description,\n//           completed: true,\n//           index: todo.index,\n//         };\n//       }\n//       return todo;\n//     });\n//     toDoList = modifiedList;\n//     localStorage.setItem('tasks', JSON.stringify(modifiedList));\n//   }\n\n\n\n\n//# sourceURL=webpack://to-do-list/./modules/functions.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Crete+Round&family=Inter:wght@400;500;600;700;800&family=Poppins&family=Roboto:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  background-color: rgba(165, 42, 42, 0.837);\\r\\n  font-family: 'Inter', sans-serif;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nvideo {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: absolute;\\r\\n  object-fit: cover;\\r\\n  z-index: 0;\\r\\n\\r\\n  /* mix-blend-mode:overlay; */\\r\\n}\\r\\n\\r\\nsection {\\r\\n  background-color: white;\\r\\n  width: 60%;\\r\\n  margin: auto;\\r\\n  z-index: 1;\\r\\n  box-shadow: 0 0 10px #5f5f5f;\\r\\n  border-radius: 10px;\\r\\n  transform: translateY(10rem);\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.clear-btn {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  padding: 15px;\\r\\n  font-size: 1.2rem;\\r\\n  border-radius: 0 0 10px 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.clear-btn:hover {\\r\\n  color: white;\\r\\n  background-color: brown;\\r\\n  transition: all 0.5s ease-out;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.input-item {\\r\\n  width: 80%;\\r\\n  border: none;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.input-item:focus {\\r\\n  outline: 0;\\r\\n  color: brown;\\r\\n}\\r\\n\\r\\n.input-item:hover::placeholder {\\r\\n  transform: translateX(10px);\\r\\n  transition: all 0.5s ease-out;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.task-value.active {\\r\\n  text-decoration: line-through;\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n.task-value {\\r\\n  border: 0;\\r\\n  font-size: 15px;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.task-value:focus {\\r\\n  color: brown;\\r\\n  outline: 0;\\r\\n  border: 1px solid;\\r\\n  border-width: 0 0 1px;\\r\\n  border-color: rgba(165, 42, 42, 0.618);\\r\\n  transition: all 0.5s ease-out;\\r\\n}\\r\\n\\r\\n#add::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n/* the font awesome stylings */\\r\\n.fa-trash {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.fa-trash:hover {\\r\\n  color: brown;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-h {\\r\\n  float: right;\\r\\n  cursor: grab;\\r\\n  margin-left: 15px;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-h:active {\\r\\n  cursor: grabbing;\\r\\n  color: brown;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  z-index: 3;\\r\\n  background-color: #f4f4f4;\\r\\n  padding: 30px;\\r\\n  position: relative;\\r\\n  text-align: center;\\r\\n  transform: translateY(18.35rem);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/functions.js */ \"./modules/functions.js\");\n/* harmony import */ var _modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/clearCompleted.js */ \"./modules/clearCompleted.js\");\n/* eslint-disable max-len */\n\n\n\n\n\nwindow.onload = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.getTaskFromLocStg)();\n\n// Event Handlers\n\n// This is for adding the value from input to display\nconst displayTaskVal = document.querySelector('#add');\ndisplayTaskVal.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    e.preventDefault();\n    if (displayTaskVal.value !== '') {\n      e = (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.taskArrayofObjects)(displayTaskVal.value);\n      displayTaskVal.value = '';\n    } else {\n      e.preventDefault();\n    }\n  }\n});\n\n// Event Handlers for the remove and highlight functions\ndocument.addEventListener('click', (e) => {\n  if (!(e.target.matches('.checkTask') || e.target.matches('.fa-trash'))) {\n    return;\n  }\n  if (e.target.matches('.checkTask')) {\n    const tasks = document.querySelectorAll('.checkTask');\n    tasks.forEach((task, index) => {\n      if (e.target === task) {\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.highlightTask)(index);\n      }\n    });\n  } else {\n    const deleteBtn = document.querySelectorAll('.fa-trash');\n    deleteBtn.forEach((btn, index) => {\n      if (e.target === btn) {\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.removeTask)(index);\n      }\n    });\n  }\n});\n\n// Event handler for the edit task function\ndocument.addEventListener('change', (e) => {\n  if (!(e.target.matches('.task-value') || e.target.matches('input[type=checkbox]'))) {\n    return;\n  }\n  if (e.target.matches('.task-value')) {\n    const allTasks = document.querySelectorAll('.task-value');\n    allTasks.forEach((task, index) => {\n      if (e.target === task) {\n        (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(task.value, index);\n      }\n    });\n  } else {\n    const checkBoxes = document.querySelectorAll('input[type=checkbox]');\n    checkBoxes.forEach((checkBox, index) => {\n      if (e.target === checkBox) {\n        (0,_modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(index);\n      }\n    });\n  }\n});\n\n// Event Handler for the clearCompleted function\nconst clearAll = document.querySelector('.clear-btn');\nclearAll.addEventListener('click', () => {\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.clearCompleted)();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;