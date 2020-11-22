/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function card(doc) {\n  function generateHtml(_ref) {\n    var location = _ref.location,\n        temperature = _ref.temperature,\n        measurement = _ref.measurement,\n        imageCode = _ref.imageCode,\n        description = _ref.description,\n        humidity = _ref.humidity,\n        windSpeed = _ref.windSpeed;\n    return \"\\n      <h2>\".concat(location, \"</h2>\\n      <div class=\\\"card-body\\\">\\n        <div class=\\\"summary\\\">\\n          <h3>\").concat(temperature, \"\\xB0\").concat(measurement, \"</h3>\\n          <img\\n            src=\\\"https://openweathermap.org/img/wn/\").concat(imageCode, \"@2x.png\\\"\\n            alt=\\\"Weather icon\\\"\\n          />\\n        </div>\\n        <div class=\\\"description\\\">\\n          <p>\").concat(description, \"</p>\\n        </div>\\n        <div class=\\\"extra-details\\\">\\n          <div class=\\\"humidity\\\">\\n            <i class=\\\"fas fa-tint\\\"></i>\\n            <p>\").concat(humidity, \"%</p>\\n          </div>\\n          <div class=\\\"wind\\\">\\n            <i class=\\\"fas fa-wind\\\"></i>\\n            <p>\").concat(windSpeed, \"mph</p>\\n          </div>\\n        </div>\");\n  }\n\n  function create(details) {\n    var element = doc.createElement('section');\n    element.classList.add('card');\n    element.innerHTML = generateHtml(details);\n    return element;\n  }\n\n  return {\n    create: create\n  };\n})(document));\n\n//# sourceURL=webpack://weather-app/./src/card.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\n\nwindow.addEventListener('load', function () {\n  var content = document.querySelector('.content'); // create and display a weather card with the provided details\n\n  function displayCard(details) {\n    content.innerHTML = '';\n    content.appendChild(_card__WEBPACK_IMPORTED_MODULE_0__.default.create(details));\n  } // displayCard({\n  //   location: 'London, UK',\n  //   temperature: 30,\n  //   measurement: 'C',\n  //   imageCode: '09n',\n  //   description: 'Drizzling rain.',\n  //   humidity: 100,\n  //   windSpeed: 30,\n  // });\n\n});\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;