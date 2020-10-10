/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n\n\n\ndocument.getElementById(\"submit\").onclick = verification;\n\nfunction verification() {\n  var operator1 = Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"transformerString\"])(document.getElementById(\"operador1\").value);\n  var conditional = document.getElementById(\"condicional\").value;\n  var operator2 = Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"transformerString\"])(document.getElementById(\"operador2\").value);\n  console.log(operator1);\n  console.log(conditional);\n  console.log(operator2);\n\n  switch (conditional) {\n    case \"===\":\n      if (operator1 === operator2) Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalTrue\"])();else Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalFalse\"])();\n      break;\n\n    case \"!==\":\n      if (operator1 !== operator2) Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalTrue\"])();else Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalFalse\"])();\n      break;\n\n    case \"==\":\n      if (operator1 == operator2) Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalTrue\"])();else Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalFalse\"])();\n      break;\n\n    case \"!=\":\n      if (operator1 != operator2) Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalTrue\"])();else Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalFalse\"])();\n      break;\n\n    case \">=\":\n      if (parseFloat(operator1) >= parseFloat(operator2)) Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalTrue\"])();else Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalFalse\"])();\n      break;\n\n    case \"<=\":\n      if (parseFloat(operator1) <= parseFloat(operator2)) Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalTrue\"])();else Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalFalse\"])();\n      break;\n\n    case \">\":\n      if (parseFloat(operator1) > parseFloat(operator2)) Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalTrue\"])();else Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalFalse\"])();\n      break;\n\n    case \"<\":\n      if (parseFloat(operator1) < parseFloat(operator2)) Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalTrue\"])();else Object(_modal__WEBPACK_IMPORTED_MODULE_0__[\"modalFalse\"])();\n      break;\n  }\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: modalTrue, modalFalse, transformerString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalTrue\", function() { return modalTrue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalFalse\", function() { return modalFalse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformerString\", function() { return transformerString; });\nfunction modalTrue() {\n  document.getElementById(\"exampleModalLabel\").innerHTML = \"Resultado\";\n  document.getElementById(\"modalBody\").innerHTML = \"TRUE\";\n}\nfunction modalFalse() {\n  document.getElementById(\"exampleModalLabel\").innerHTML = \"Resultado\";\n  document.getElementById(\"modalBody\").innerHTML = \"FALSE\";\n}\nfunction transformerString(operator) {\n  if (operator.includes(\"'\") || operator.includes(\"\\\"\")) {\n    operator = operator.replaceAll(\"'\", \"\");\n    operator = operator.replaceAll(\"\\\"\", \"\");\n    operator = operator.toString();\n    console.log(\"Esse ta com String\", operator);\n    return operator.toString();\n  } else return operator;\n}\n\n//# sourceURL=webpack:///./src/js/modal.js?");

/***/ })

/******/ });