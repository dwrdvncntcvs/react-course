module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetUpId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetUpDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetUpDetails.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MeetUpDetails_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetUpDetails.module.css */ "./components/meetups/MeetUpDetails.module.css");
/* harmony import */ var _MeetUpDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetUpDetails_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Builds\\Tutorials\\React\\Section 23\\meetup-app\\components\\meetups\\MeetUpDetails.js";



const MeetUpDetails = ({
  image,
  title,
  address,
  description
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _MeetUpDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.details,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: image,
      alt: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
      children: address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MeetUpDetails);

/***/ }),

/***/ "./components/meetups/MeetUpDetails.module.css":
/*!*****************************************************!*\
  !*** ./components/meetups/MeetUpDetails.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"details": "MeetUpDetails_details__3hNVf"
};


/***/ }),

/***/ "./database/mongodb/config.js":
/*!************************************!*\
  !*** ./database/mongodb/config.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = "mongodb://localhost/next_db";

async function dbConnect() {
  return await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(MONGODB_URI);
}

/* harmony default export */ __webpack_exports__["default"] = (dbConnect);

/***/ }),

/***/ "./database/mongodb/models/MeetUp.js":
/*!*******************************************!*\
  !*** ./database/mongodb/models/MeetUp.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const meetupSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  title: String,
  image: String,
  address: String,
  description: String
});
const MeetUp = mongoose__WEBPACK_IMPORTED_MODULE_0__["models"].MeetUp || Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])("MeetUp", meetupSchema);
/* harmony default export */ __webpack_exports__["default"] = (MeetUp);

/***/ }),

/***/ "./pages/[meetUpId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetUpId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetUpDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetUpDetails */ "./components/meetups/MeetUpDetails.js");
/* harmony import */ var _database_mongodb_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../database/mongodb/config */ "./database/mongodb/config.js");
/* harmony import */ var _database_mongodb_models_MeetUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../database/mongodb/models/MeetUp */ "./database/mongodb/models/MeetUp.js");


var _jsxFileName = "D:\\Builds\\Tutorials\\React\\Section 23\\meetup-app\\pages\\[meetUpId]\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MeetUpDetailsPage = ({
  image,
  title,
  address,
  description
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "image",
        content: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetUpDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: image,
      title: title,
      address: address,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

async function getStaticPaths() {
  await Object(_database_mongodb_config__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const meetups = await _database_mongodb_models_MeetUp__WEBPACK_IMPORTED_MODULE_5__["default"].find();
  const paths = meetups.map(({
    _id
  }) => ({
    params: {
      meetUpId: _id.toString()
    }
  }));
  return {
    fallback: false,
    paths
  };
}

const cleanData = data => {
  const document = data._doc;

  const id = data._id.toString();

  delete document._id;
  return _objectSpread(_objectSpread({}, document), {}, {
    id
  });
};

async function getStaticProps(context) {
  const {
    meetUpId
  } = context.params;
  const meetup = await _database_mongodb_models_MeetUp__WEBPACK_IMPORTED_MODULE_5__["default"].findById(meetUpId);
  const cleanMeetUpData = cleanData(meetup);
  return {
    props: _objectSpread({}, cleanMeetUpData)
  };
}
/* harmony default export */ __webpack_exports__["default"] = (MeetUpDetailsPage);

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXRVcERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXRVcERldGFpbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9tb25nb2RiL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9tb25nb2RiL21vZGVscy9NZWV0VXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21lZXRVcElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTWVldFVwRGV0YWlscyIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJjbGFzc2VzIiwiZGV0YWlscyIsIk1PTkdPREJfVVJJIiwiZGJDb25uZWN0IiwibW9uZ29vc2UiLCJjb25uZWN0IiwibWVldHVwU2NoZW1hIiwiU2NoZW1hIiwiU3RyaW5nIiwiTWVldFVwIiwibW9kZWxzIiwibW9kZWwiLCJNZWV0VXBEZXRhaWxzUGFnZSIsImdldFN0YXRpY1BhdGhzIiwibWVldHVwcyIsImZpbmQiLCJwYXRocyIsIm1hcCIsIl9pZCIsInBhcmFtcyIsIm1lZXRVcElkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImNsZWFuRGF0YSIsImRhdGEiLCJkb2N1bWVudCIsIl9kb2MiLCJpZCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsIm1lZXR1cCIsImZpbmRCeUlkIiwiY2xlYW5NZWV0VXBEYXRhIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFF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QWYsRTs7Ozs7Ozs7Ozs7QUM1REEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvW21lZXRVcElkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvW21lZXRVcElkXS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWVldFVwRGV0YWlscy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBNZWV0VXBEZXRhaWxzID0gKHsgaW1hZ2UsIHRpdGxlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cclxuICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxyXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgIDxhZGRyZXNzPnthZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldFVwRGV0YWlscztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsc1wiOiBcIk1lZXRVcERldGFpbHNfZGV0YWlsc19fM2hOVmZcIlxufTtcbiIsImltcG9ydCBtb25nb29zZSwgeyBjb25uZWN0IH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IFwibW9uZ29kYjovL2xvY2FsaG9zdC9uZXh0X2RiXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgcmV0dXJuIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XHJcbiIsImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgbWVldHVwU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgdGl0bGU6IFN0cmluZyxcclxuICBpbWFnZTogU3RyaW5nLFxyXG4gIGFkZHJlc3M6IFN0cmluZyxcclxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxyXG59KTtcclxuXHJcbmNvbnN0IE1lZXRVcCA9IG1vZGVscy5NZWV0VXAgfHwgbW9kZWwoXCJNZWV0VXBcIiwgbWVldHVwU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXRVcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBNZWV0VXBEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldFVwRGV0YWlsc1wiO1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9tb25nb2RiL2NvbmZpZ1wiO1xyXG5pbXBvcnQgTWVldFVwIGZyb20gXCIuLi8uLi9kYXRhYmFzZS9tb25nb2RiL21vZGVscy9NZWV0VXBcIjtcclxuXHJcbmNvbnN0IE1lZXRVcERldGFpbHNQYWdlID0gKHsgaW1hZ2UsIHRpdGxlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJpbWFnZVwiIGNvbnRlbnQ9e2ltYWdlfT48L21ldGE+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lZXRVcERldGFpbHNcclxuICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIGFkZHJlc3M9e2FkZHJlc3N9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IE1lZXRVcC5maW5kKCk7XHJcbiAgY29uc3QgcGF0aHMgPSBtZWV0dXBzLm1hcCgoeyBfaWQgfSkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBtZWV0VXBJZDogX2lkLnRvU3RyaW5nKCksXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIHBhdGhzLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFuRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgZG9jdW1lbnQgPSBkYXRhLl9kb2M7XHJcbiAgY29uc3QgaWQgPSBkYXRhLl9pZC50b1N0cmluZygpO1xyXG4gIGRlbGV0ZSBkb2N1bWVudC5faWQ7XHJcbiAgcmV0dXJuIHsgLi4uZG9jdW1lbnQsIGlkIH07XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgbWVldFVwSWQgfSA9IGNvbnRleHQucGFyYW1zO1xyXG5cclxuICBjb25zdCBtZWV0dXAgPSBhd2FpdCBNZWV0VXAuZmluZEJ5SWQobWVldFVwSWQpO1xyXG4gIGNvbnN0IGNsZWFuTWVldFVwRGF0YSA9IGNsZWFuRGF0YShtZWV0dXApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLi4uY2xlYW5NZWV0VXBEYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0VXBEZXRhaWxzUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9