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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary-color: #0056b3;\\n  --primary-color-opaque: #0057b39d;\\n  --secondary-color: #7c002e;\\n  --tertiary-color: #203144;\\n  --accent-color: #fff;\\n  --background-color: #f5f5f5;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml,\\nbody {\\n  height: 100%;\\n  margin: 0;\\n}\\n\\n.flex-col {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\na,\\nfooter a {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nfooter a {\\n  font-weight: bold;\\n  text-decoration: none;\\n}\\n\\n.nav-links {\\n  list-style: none;\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.nav-links a {\\n  display: block;\\n  font-size: 24px;\\n  text-decoration: none;\\n  color:  var(--accent-color);\\n  font-weight: bold;\\n  padding: 5px;\\n  transition: background-color 0.3s ease-in-out;\\n}\\n\\n.nav-links a,\\nnav a:hover,\\nnav a:focus {\\n  font-weight: bold;\\n}\\n\\nfooter a:hover {\\n  color: var(--secondary-color);\\n}\\n\\n#nav-counter {\\n  margin-left: 0.5rem;\\n  font-weight: bold;\\n}\\n\\nbody {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  background-color: var(--secondary-color);\\n}\\n\\n.container {\\n  max-width: 100%;\\n  width: 85%;\\n  margin: 0 auto;\\n  min-height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nheader {\\n  background-color: var(--tertiary-color);\\n  box-shadow: 0 6px 11px rgba(0, 0, 0, 0.774);\\n  width: 100%;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 2%;\\n}\\n\\nnav {\\n  width: 75%;\\n  align-items: flex-end;\\n  margin: 0 auto;\\n  display: flex;\\n}\\n\\n.logo {\\n  margin-right: 3rem;\\n  text-decoration: none;\\n}\\n\\n.logo img {\\n  height: 100px;\\n}\\n\\n.motto {\\n  display: none;\\n}\\n\\n.nav-links li {\\n  margin-right: 3rem;\\n}\\n\\n.nav-links li:last-child {\\n  margin-right: 0;\\n}\\n\\n.nav-toggle {\\n  display: none;\\n}\\n\\n.nav-toggle-label {\\n  background-color: var(--secondary-color);\\n  z-index: 50;\\n  border: transparent 1px solid;\\n  border-radius: 10px;\\n  display: none;\\n  cursor: pointer;\\n  position: fixed;\\n  padding: 15px;\\n  top: 3rem;\\n  right: 1rem;\\n}\\n\\n@media (max-width: 768px) {\\n  .nav-toggle-label {\\n    display: block;\\n  }\\n\\n  .nav-links {\\n    list-style-type: none;\\n    margin: 0;\\n    padding: 0;\\n    display: none;\\n  }\\n}\\n\\n.nav-toggle:checked ~ .nav-toggle-label {\\n  border: transparent 1px solid;\\n  border-radius: 50%;\\n  background-color: var(--background-color);\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\\n  position: fixed;\\n}\\n\\n.nav-toggle:checked ~ .nav-toggle-label:hover {\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);\\n}\\n\\n.burger {\\n  display: block;\\n  width: 25px;\\n  height: 3px;\\n  background-color: var(--accent-color);\\n  margin-bottom: 5px;\\n  transition: transform 0.3s ease-in-out;\\n}\\n\\n.nav-toggle:checked ~ .nav-toggle-label .burger {\\n  background-color: var(--secondary-color);\\n}\\n\\n.nav-toggle:checked ~ .nav-toggle-label:hover .burger {\\n  background-color: red;\\n}\\n\\n.nav-toggle:checked ~ #nav-menu {\\n  display: flex;\\n  flex-direction: column;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  background: var(--primary-color);\\n  padding: 1%;\\n  padding-left: 3rem;\\n  width: 100%;\\n  height: 150px;\\n}\\n\\n.nav-toggle:checked ~ #nav-menu li {\\n  width: 20%;\\n}\\n\\n.nav-toggle:checked ~ .nav-toggle-label .burger:nth-child(2) {\\n  transform: rotate(-45deg) translate(-5px, 6px);\\n}\\n\\n.nav-toggle:checked ~ .nav-toggle-label .burger:nth-child(3) {\\n  opacity: 0;\\n}\\n\\n.nav-toggle:checked ~ .nav-toggle-label .burger:nth-child(4) {\\n  transform: rotate(45deg) translate(-5px, -6px);\\n}\\n\\n.nav-toggle:checked ~ .nav-links li a {\\n  font-size: 24px;\\n  color: var(--accent-color);\\n  font-weight: bold;\\n  text-decoration: none;\\n}\\n\\n@media (max-width: 768px) {\\n  header {\\n    height: 150px;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--primary-color-opaque);\\n    justify-content: center;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    z-index: 1;\\n  }\\n\\n  .logo {\\n    margin-bottom: 1rem;\\n  }\\n\\n  .logo img {\\n    display: none;\\n  }\\n\\n  .motto {\\n    max-height: 150px;\\n    pointer-events: none;\\n    display: block;\\n    font-family: \\\"Open Sans\\\", sans-serif;\\n    font-size: 24px;\\n    width: 95%;\\n    color: var(--accent-color);\\n  }\\n\\n  .nav-links {\\n    display: none;\\n    flex-direction: column;\\n  }\\n\\n  .nav-toggle:checked ~ #nav-menu {\\n    height: auto;\\n  }\\n\\n  .nav-links a {\\n    padding: 10px 0;\\n    font-size: 16px;\\n  }\\n\\n  main {\\n    margin-top: 150px;\\n  }\\n}\\n\\nmain {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n  padding: 5% 0;\\n}\\n\\n.card-grid {\\n  display: grid;\\n  justify-items: center;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-gap: 20px;\\n  width: 100%;\\n}\\n\\n@media (max-width: 768px) {\\n  .card-grid {\\n    grid-template-columns: repeat(1, 1fr);\\n  }\\n}\\n\\n.card {\\n  padding: 10%;\\n  border: 1px transparent solid;\\n  border-radius: 10px;\\n  background-color: var(--tertiary-color);\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\\n  color: var(--accent-color);\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  gap: 0.6rem;\\n}\\n\\n.card img {\\n  width: 100%;\\n  height: auto;\\n  object-fit: contain;\\n  border-radius: 4px 4px 0 0;\\n}\\n\\n@media (min-width: 420px) {\\n  .card img {\\n    width: 100%;\\n  }\\n}\\n\\n@media (min-width: 1000px) {\\n  .card img {\\n    width: 100%;\\n    min-width: 230px;\\n    height: 400px;\\n  }\\n}\\n\\n.card-content {\\n  padding: 20px;\\n}\\n\\n.card-content h2 {\\n  margin: 0;\\n}\\n\\n.card-top {\\n  display: flex;\\n  align-items: flex-start;\\n  align-items: center;\\n  justify-content: space-between;\\n  margin-top: 10px;\\n}\\n\\n.card-top .title {\\n  flex: 1;\\n}\\n\\n.card-likes {\\n  display: flex;\\n  flex-direction: column;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  text-align: center;\\n  white-space: nowrap;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  padding-right: 10px;\\n}\\n\\n.card-like-button {\\n  padding-bottom: 0.3rem;\\n  background: transparent;\\n  border: none;\\n  cursor: pointer;\\n  color: inherit;\\n}\\n\\n.card-like-button i {\\n  font-size: 24px;\\n  color: var(--accent-color);\\n}\\n\\n.card-like-button:hover i {\\n  color: crimson;\\n}\\n\\n.card-comments {\\n  font-size: 14px;\\n  padding: 10px 20px;\\n  border: none;\\n  background-color: var(--secondary-color);\\n  color: var(--accent-color);\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\n.card-comments:hover {\\n  color: var(--accent-color);\\n  background-color: crimson;\\n}\\n\\n.card-comments:focus {\\n  outline: none;\\n}\\n\\nfooter {\\n  background-color: var(--primary-color);\\n  border-top: 1px solid var(--accent-color);\\n  color: var(--accent-color);\\n  padding: 20px;\\n  text-align: left;\\n  display: flex;\\n  align-items: center;\\n  margin-top: auto;\\n}\\n\\n@media (max-width: 480px) {\\n  footer {\\n    flex-direction: column;\\n    text-align: center;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_handleLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/handleLike.js */ \"./src/modules/handleLike.js\");\n/* harmony import */ var _modules_renderCards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderCards.js */ \"./src/modules/renderCards.js\");\n/* harmony import */ var _modules_fetchShows_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/fetchShows.js */ \"./src/modules/fetchShows.js\");\n/* harmony import */ var _modules_navToggle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navToggle.js */ \"./src/modules/navToggle.js\");\n\n\n\n\n\n\nconst navToggle = document.querySelector('.nav-toggle');\nconst navMenu = document.querySelector('.nav-links');\nconst container = document.getElementById('card-container');\n\nlet showsTotal = 0;\n\nconst updateCounter = () => {\n  const counterElement = document.getElementById('nav-counter');\n  counterElement.textContent = `(${showsTotal})`;\n};\n\nconst fetchDataAndRenderCards = async () => {\n  const shows = await (0,_modules_fetchShows_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const renderPromises = shows.map(async (show) => {\n    const card = await (0,_modules_renderCards_js__WEBPACK_IMPORTED_MODULE_2__.renderCards)(show);\n    container.appendChild(card);\n    showsTotal += 1;\n  });\n\n  await Promise.all(renderPromises);\n  updateCounter();\n};\n\nnavToggle.addEventListener('click', _modules_navToggle_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\ndocument.addEventListener('click', async (event) => {\n  if (event.target.classList.contains('card-like-button')) {\n    const itemId = event.target.getAttribute('data-item-id');\n    await (0,_modules_handleLike_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemId, _modules_renderCards_js__WEBPACK_IMPORTED_MODULE_2__.updateLikesCountCallback);\n  }\n});\n\ndocument.addEventListener('click', () => {\n  const visibility = navMenu.getAttribute('data-visible');\n  if (visibility === 'true' && window.innerWidth < 768) {\n    (0,_modules_navToggle_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  }\n});\n\nfetchDataAndRenderCards().then(() => {\n  updateCounter();\n});\n\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addComment = async (itemId, username, comment, commentsCount, updateCommentsCallback) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kCfF1syB4EtsO7lyqfM/comments';\n\n  const requestBody = {\n    item_id: itemId,\n    username,\n    comment,\n  };\n\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(requestBody),\n  });\n\n  if (response.status === 201) {\n    await updateCommentsCallback(commentsCount, requestBody);\n  } else {\n    // error handling\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/fetchShows.js":
/*!***********************************!*\
  !*** ./src/modules/fetchShows.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchData = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const data = await response.json();\n  const shows = data.slice(0, 6);\n  return shows;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/modules/fetchShows.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getItemComments = async (itemId) => {\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kCfF1syB4EtsO7lyqfM/comments?item_id=${itemId}`;\n  const response = await fetch(url);\n  const commentsData = await response.json();\n\n  if (commentsData.length > 0) {\n    return commentsData;\n  }\n  return [];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItemComments);\n\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getItemLikesCount = async (itemId) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kCfF1syB4EtsO7lyqfM/likes';\n  const response = await fetch(url);\n  const likesData = await response.json();\n\n  const itemLikes = likesData.find((item) => item.item_id === itemId);\n\n  if (itemLikes) {\n    const likesCount = itemLikes.likes;\n    return likesCount;\n  }\n  return 0;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItemLikesCount);\n\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/handleLike.js":
/*!***********************************!*\
  !*** ./src/modules/handleLike.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handleLike = async (itemId, updateLikesCountCallback) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kCfF1syB4EtsO7lyqfM/likes';\n\n  const requestBody = {\n    item_id: itemId,\n  };\n\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(requestBody),\n  });\n\n  if (response.status === 201) {\n    await updateLikesCountCallback(itemId);\n  } else {\n    // error handling\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleLike);\n\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/modules/handleLike.js?");

/***/ }),

/***/ "./src/modules/navToggle.js":
/*!**********************************!*\
  !*** ./src/modules/navToggle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navMenu = document.querySelector('.nav-links');\nconst navToggle = document.querySelector('.nav-toggle');\n\nfunction toggleBurger() {\n  const width = window.innerWidth;\n  const visibility = navMenu.getAttribute('data-visible');\n  const expanded = visibility === 'false' && width < 768;\n  navToggle.setAttribute('aria-expanded', expanded);\n  navMenu.setAttribute('data-visible', expanded);\n  navMenu.setAttribute('aria-expanded', expanded);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleBurger);\n\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/modules/navToggle.js?");

/***/ }),

/***/ "./src/modules/renderCards.js":
/*!************************************!*\
  !*** ./src/modules/renderCards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCards: () => (/* binding */ renderCards),\n/* harmony export */   updateLikesCountCallback: () => (/* binding */ updateLikesCountCallback)\n/* harmony export */ });\n/* harmony import */ var _handleLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleLike.js */ \"./src/modules/handleLike.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n/* harmony import */ var _img_close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/close.png */ \"./src/img/close.png\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n\n\n\n\n\n\nconst updateLikesCountCallback = async (itemId) => {\n  const likesCountElement = document.querySelector(`#likes-count-${itemId}`);\n  const likesCount = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemId);\n  likesCountElement.textContent = `${likesCount} likes`;\n};\n\nconst updateCommentsCallback = async (commentsCountN, comment) => {\n  const commentsCount = document.getElementById('comments-count');\n  commentsCount.innerText = `Comments (${commentsCountN})`;\n\n  const listComments = document.getElementById('list-comments');\n  listComments.innerHTML += `\n      <li class=\"comment\"><b>${new Date().toISOString().split('T')[0]} ${comment.username}</b>: ${comment.comment}</li>\n    `;\n\n  document.getElementById('username').value = '';\n  document.getElementById('comment').value = '';\n};\nconst createElement = (tagName, attributes = {}) => {\n  const element = document.createElement(tagName);\n  Object.entries(attributes).forEach(([key, value]) => {\n    if (key === 'textContent') {\n      element.textContent = value;\n    } else if (key === 'onclick') {\n      element.addEventListener('click', value);\n    } else {\n      element.setAttribute(key, value);\n    }\n  });\n  return element;\n};\n\nconst createLikeButton = (itemId) => {\n  const likeButton = createElement('button', { class: 'card-like-button', onclick: () => (0,_handleLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(itemId, updateLikesCountCallback) });\n  likeButton.innerHTML = '<i class=\"fa fa-heart\"></i>';\n  return likeButton;\n};\n\nconst openModal = async (show) => {\n  const modal = document.getElementById('modal-container');\n  modal.classList.toggle('hide');\n  modal.innerHTML = `\n  <div class=\"modal-content\">\n  <img class=\"close-button\" id=\"close-button\" src=\"${_img_close_png__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"close-button\"}\">\n  <img class=\"modal-image\" src=\"${show.image.original}\" alt=\"modal-image\">\n  <h2 class=\"modal-title\">${show.name}</h2>\n  <article class=\"show-info\">\n      <div>\n        <p><b>Rating:</b> ${show.rating.average}</p>\n        <p><b>Genres:</b> ${show.genres.join(', ')}</p>\n      </div>\n      <div>\n        <p><b>Language:</b> ${show.language}</p>\n        <p><b>Premiered:</b> ${show.premiered}</p>\n      </div>\n  </article>\n  <article class=\"modal-coments\">\n    <h2 id=\"comments-count\">Coments ()</h2>\n    <ul class=\"list-comments\" id=\"list-comments\">\n    </ul>\n  </article>\n  <article>\n    <h2>Add a comment</h2>\n    <form class=\"add-comment\" id=\"add-comment-form\">\n      <input class=\"input-comment\" type=\"text\" placeholder=\"Your Name\" id=\"username\" require>\n      <textarea class=\"input-comment\" placeholder=\"Your Insights\" id=\"comment\" require></textarea>\n      <input class=\"input-comment\" type=\"submit\" value=\"Comment\" id=\"comment-button\">\n    <form>\n  </article>\n  </div>`;\n\n  document.getElementById('close-button').addEventListener('click', () => {\n    modal.classList.toggle('hide');\n  });\n\n  const comments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(show.id);\n  const listComments = document.getElementById('list-comments');\n  comments.forEach((comment) => {\n    listComments.innerHTML += `\n      <li class=\"comment\"><b>${comment.creation_date} ${comment.username}</b>: ${comment.comment}</li>\n    `;\n  });\n\n  const commentsCount = document.getElementById('comments-count');\n  commentsCount.innerText = `Comments (${comments.length})`;\n\n  const addCommentForm = document.getElementById('add-comment-form');\n  addCommentForm.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const usernameInput = document.getElementById('username').value;\n    const commentInput = document.getElementById('comment').value;\n    await (0,_addComment_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(show.id, usernameInput, commentInput, comments.length, updateCommentsCallback);\n  });\n};\n\nconst renderCards = async (show) => {\n  const card = document.createElement('div');\n  card.classList.add('card');\n  const imageUrl = window.innerWidth > 1200 ? show.image.original : show.image.medium;\n  card.appendChild(createElement('img', { src: imageUrl, class: 'card-image' }));\n  const flexContainer = document.createElement('div');\n  flexContainer.classList.add('card-top');\n  const titleElement = createElement('h2', { textContent: show.name, class: 'card-title' });\n  flexContainer.appendChild(titleElement);\n  const likesCount = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(show.id);\n  const likesContainer = createElement('div', { class: 'card-likes' });\n  likesContainer.appendChild(createLikeButton(show.id));\n  likesContainer.appendChild(createElement('span', { textContent: `${likesCount} likes`, id: `likes-count-${show.id}` }));\n  flexContainer.appendChild(likesContainer);\n  card.appendChild(flexContainer);\n  card.appendChild(createElement('button', { textContent: 'Comments', class: 'card-comments', onclick: () => openModal(show) }));\n  return card;\n};\n\ndocument.addEventListener('click', async (event) => {\n  if (event.target.classList.contains('card-like-button')) {\n    const itemId = event.target.getAttribute('data-item-id');\n    await (0,_handleLike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(itemId, updateLikesCountCallback);\n  }\n});\n\n\n\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/modules/renderCards.js?");

/***/ }),

/***/ "./src/img/close.png":
/*!***************************!*\
  !*** ./src/img/close.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"955d46e3dc946ec73600.png\";\n\n//# sourceURL=webpack://javaScript-Capstone-Project/./src/img/close.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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