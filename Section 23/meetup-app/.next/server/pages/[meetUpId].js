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
/* harmony import */ var _components_meetups_MeetUpDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetUpDetails */ "./components/meetups/MeetUpDetails.js");
/* harmony import */ var _database_mongodb_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../database/mongodb/config */ "./database/mongodb/config.js");
/* harmony import */ var _database_mongodb_models_MeetUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../database/mongodb/models/MeetUp */ "./database/mongodb/models/MeetUp.js");

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetUpDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: image,
    title: title,
    address: address,
    description: description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

async function getStaticPaths() {
  await Object(_database_mongodb_config__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const meetups = await _database_mongodb_models_MeetUp__WEBPACK_IMPORTED_MODULE_4__["default"].find();
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
  const meetup = await _database_mongodb_models_MeetUp__WEBPACK_IMPORTED_MODULE_4__["default"].findById(meetUpId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXRVcERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXRVcERldGFpbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9tb25nb2RiL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9tb25nb2RiL21vZGVscy9NZWV0VXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21lZXRVcElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTWVldFVwRGV0YWlscyIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJjbGFzc2VzIiwiZGV0YWlscyIsIk1PTkdPREJfVVJJIiwiZGJDb25uZWN0IiwibW9uZ29vc2UiLCJjb25uZWN0IiwibWVldHVwU2NoZW1hIiwiU2NoZW1hIiwiU3RyaW5nIiwiTWVldFVwIiwibW9kZWxzIiwibW9kZWwiLCJNZWV0VXBEZXRhaWxzUGFnZSIsImdldFN0YXRpY1BhdGhzIiwibWVldHVwcyIsImZpbmQiLCJwYXRocyIsIm1hcCIsIl9pZCIsInBhcmFtcyIsIm1lZXRVcElkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImNsZWFuRGF0YSIsImRhdGEiLCJkb2N1bWVudCIsIl9kb2MiLCJpZCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsIm1lZXR1cCIsImZpbmRCeUlkIiwiY2xlYW5NZWV0VXBEYXRhIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RCxNQUFjO0FBQ3RDQyxVQUFNLEVBQUU7QUFDTkMsY0FBUSxFQUFFRixHQUFHLENBQUNHLFFBQUo7QUFESjtBQUQ4QixHQUFkLENBQVosQ0FBZDtBQU1BLFNBQU87QUFDTEMsWUFBUSxFQUFFLEtBREw7QUFFTE47QUFGSyxHQUFQO0FBSUQ7O0FBRUQsTUFBTU8sU0FBUyxHQUFJQyxJQUFELElBQVU7QUFDMUIsUUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLElBQXRCOztBQUNBLFFBQU1DLEVBQUUsR0FBR0gsSUFBSSxDQUFDTixHQUFMLENBQVNHLFFBQVQsRUFBWDs7QUFDQSxTQUFPSSxRQUFRLENBQUNQLEdBQWhCO0FBQ0EseUNBQVlPLFFBQVo7QUFBc0JFO0FBQXRCO0FBQ0QsQ0FMRDs7QUFPTyxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QyxRQUFNO0FBQUVUO0FBQUYsTUFBZVMsT0FBTyxDQUFDVixNQUE3QjtBQUVBLFFBQU1XLE1BQU0sR0FBRyxNQUFNckIsdUVBQU0sQ0FBQ3NCLFFBQVAsQ0FBZ0JYLFFBQWhCLENBQXJCO0FBQ0EsUUFBTVksZUFBZSxHQUFHVCxTQUFTLENBQUNPLE1BQUQsQ0FBakM7QUFFQSxTQUFPO0FBQ0xHLFNBQUssb0JBQ0FELGVBREE7QUFEQSxHQUFQO0FBS0Q7QUFFY3BCLGdGQUFmLEU7Ozs7Ozs7Ozs7O0FDcERBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1ttZWV0VXBJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1ttZWV0VXBJZF0vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lZXRVcERldGFpbHMubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgTWVldFVwRGV0YWlscyA9ICh7IGltYWdlLCB0aXRsZSwgYWRkcmVzcywgZGVzY3JpcHRpb24gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cclxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICA8YWRkcmVzcz57YWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXRVcERldGFpbHM7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbHNcIjogXCJNZWV0VXBEZXRhaWxzX2RldGFpbHNfXzNoTlZmXCJcbn07XG4iLCJpbXBvcnQgbW9uZ29vc2UsIHsgY29ubmVjdCB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBcIm1vbmdvZGI6Ly9sb2NhbGhvc3QvbmV4dF9kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gIHJldHVybiBhd2FpdCBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xyXG4iLCJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IG1lZXR1cFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIHRpdGxlOiBTdHJpbmcsXHJcbiAgaW1hZ2U6IFN0cmluZyxcclxuICBhZGRyZXNzOiBTdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IFN0cmluZyxcclxufSk7XHJcblxyXG5jb25zdCBNZWV0VXAgPSBtb2RlbHMuTWVldFVwIHx8IG1vZGVsKFwiTWVldFVwXCIsIG1lZXR1cFNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0VXA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXRVcERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0VXBEZXRhaWxzXCI7XHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uL2RhdGFiYXNlL21vbmdvZGIvY29uZmlnXCI7XHJcbmltcG9ydCBNZWV0VXAgZnJvbSBcIi4uLy4uL2RhdGFiYXNlL21vbmdvZGIvbW9kZWxzL01lZXRVcFwiO1xyXG5cclxuY29uc3QgTWVldFVwRGV0YWlsc1BhZ2UgPSAoeyBpbWFnZSwgdGl0bGUsIGFkZHJlc3MsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lZXRVcERldGFpbHNcclxuICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgIGFkZHJlc3M9e2FkZHJlc3N9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IE1lZXRVcC5maW5kKCk7XHJcbiAgY29uc3QgcGF0aHMgPSBtZWV0dXBzLm1hcCgoeyBfaWQgfSkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBtZWV0VXBJZDogX2lkLnRvU3RyaW5nKCksXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIHBhdGhzLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFuRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgZG9jdW1lbnQgPSBkYXRhLl9kb2M7XHJcbiAgY29uc3QgaWQgPSBkYXRhLl9pZC50b1N0cmluZygpO1xyXG4gIGRlbGV0ZSBkb2N1bWVudC5faWQ7XHJcbiAgcmV0dXJuIHsgLi4uZG9jdW1lbnQsIGlkIH07XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgbWVldFVwSWQgfSA9IGNvbnRleHQucGFyYW1zO1xyXG5cclxuICBjb25zdCBtZWV0dXAgPSBhd2FpdCBNZWV0VXAuZmluZEJ5SWQobWVldFVwSWQpO1xyXG4gIGNvbnN0IGNsZWFuTWVldFVwRGF0YSA9IGNsZWFuRGF0YShtZWV0dXApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLi4uY2xlYW5NZWV0VXBEYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0VXBEZXRhaWxzUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=