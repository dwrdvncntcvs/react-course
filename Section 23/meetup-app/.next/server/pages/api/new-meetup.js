module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database_mongodb_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/mongodb/config */ "./database/mongodb/config.js");
/* harmony import */ var _database_mongodb_models_MeetUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/mongodb/models/MeetUp */ "./database/mongodb/models/MeetUp.js");
//api/new-meetup



async function handler(req, res) {
  switch (req.method) {
    case "POST":
      console.log("Creating data...");
      const {
        title,
        image,
        address,
        description
      } = req.body;

      try {
        const db = await Object(_database_mongodb_config__WEBPACK_IMPORTED_MODULE_0__["default"])();
        const result = await _database_mongodb_models_MeetUp__WEBPACK_IMPORTED_MODULE_1__["default"].create({
          title,
          image,
          address,
          description
        });
        console.log("Result: ", result);
        db.connection.close();
        return res.status(201).send({
          message: "Meetup created",
          result
        });
      } catch (err) {
        console.log("Error: ", err.message);
      }

    default:
      return;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvbW9uZ29kYi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvbW9uZ29kYi9tb2RlbHMvTWVldFVwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiTU9OR09EQl9VUkkiLCJkYkNvbm5lY3QiLCJtb25nb29zZSIsImNvbm5lY3QiLCJtZWV0dXBTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsIlN0cmluZyIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiTWVldFVwIiwibW9kZWxzIiwibW9kZWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJkYiIsInJlc3VsdCIsImNyZWF0ZSIsImNvbm5lY3Rpb24iLCJjbG9zZSIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiZXJyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsV0FBVyxHQUFHLDZCQUFwQjs7QUFFQSxlQUFlQyxTQUFmLEdBQTJCO0FBQ3pCLFNBQU8sTUFBTUMsK0NBQVEsQ0FBQ0MsT0FBVCxDQUFpQkgsV0FBakIsQ0FBYjtBQUNEOztBQUVjQyx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1HLFlBQVksR0FBRyxJQUFJQywrQ0FBSixDQUFXO0FBQzlCQyxPQUFLLEVBQUVDLE1BRHVCO0FBRTlCQyxPQUFLLEVBQUVELE1BRnVCO0FBRzlCRSxTQUFPLEVBQUVGLE1BSHFCO0FBSTlCRyxhQUFXLEVBQUVIO0FBSmlCLENBQVgsQ0FBckI7QUFPQSxNQUFNSSxNQUFNLEdBQUdDLCtDQUFNLENBQUNELE1BQVAsSUFBaUJFLHNEQUFLLENBQUMsUUFBRCxFQUFXVCxZQUFYLENBQXJDO0FBRWVPLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlRyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0IsVUFBUUQsR0FBRyxDQUFDRSxNQUFaO0FBQ0UsU0FBSyxNQUFMO0FBQ0VDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0EsWUFBTTtBQUFFYixhQUFGO0FBQVNFLGFBQVQ7QUFBZ0JDLGVBQWhCO0FBQXlCQztBQUF6QixVQUF5Q0ssR0FBRyxDQUFDSyxJQUFuRDs7QUFFQSxVQUFJO0FBQ0YsY0FBTUMsRUFBRSxHQUFHLE1BQU1wQix3RUFBUyxFQUExQjtBQUVBLGNBQU1xQixNQUFNLEdBQUcsTUFBTVgsdUVBQU0sQ0FBQ1ksTUFBUCxDQUFjO0FBQ2pDakIsZUFEaUM7QUFFakNFLGVBRmlDO0FBR2pDQyxpQkFIaUM7QUFJakNDO0FBSmlDLFNBQWQsQ0FBckI7QUFPQVEsZUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkcsTUFBeEI7QUFDQUQsVUFBRSxDQUFDRyxVQUFILENBQWNDLEtBQWQ7QUFFQSxlQUFPVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLGdCQUFYO0FBQTZCTjtBQUE3QixTQUFyQixDQUFQO0FBQ0QsT0FkRCxDQWNFLE9BQU9PLEdBQVAsRUFBWTtBQUNaWCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCVSxHQUFHLENBQUNELE9BQTNCO0FBQ0Q7O0FBQ0g7QUFDRTtBQXZCSjtBQXlCRDs7QUFFY2Qsc0VBQWYsRTs7Ozs7Ozs7Ozs7QUNoQ0EscUMiLCJmaWxlIjoicGFnZXMvYXBpL25ldy1tZWV0dXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzXCIpO1xuIiwiaW1wb3J0IG1vbmdvb3NlLCB7IGNvbm5lY3QgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gXCJtb25nb2RiOi8vbG9jYWxob3N0L25leHRfZGJcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICByZXR1cm4gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIiwiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBtZWV0dXBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICB0aXRsZTogU3RyaW5nLFxyXG4gIGltYWdlOiBTdHJpbmcsXHJcbiAgYWRkcmVzczogU3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmcsXHJcbn0pO1xyXG5cclxuY29uc3QgTWVldFVwID0gbW9kZWxzLk1lZXRVcCB8fCBtb2RlbChcIk1lZXRVcFwiLCBtZWV0dXBTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldFVwO1xyXG4iLCIvL2FwaS9uZXctbWVldHVwXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uL2RhdGFiYXNlL21vbmdvZGIvY29uZmlnXCI7XHJcbmltcG9ydCBNZWV0VXAgZnJvbSBcIi4uLy4uL2RhdGFiYXNlL21vbmdvZGIvbW9kZWxzL01lZXRVcFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBkYXRhLi4uXCIpO1xyXG4gICAgICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb24gfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBNZWV0VXAuY3JlYXRlKHtcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiwgcmVzdWx0KTtcclxuICAgICAgICBkYi5jb25uZWN0aW9uLmNsb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZCh7IG1lc3NhZ2U6IFwiTWVldHVwIGNyZWF0ZWRcIiwgcmVzdWx0IH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9