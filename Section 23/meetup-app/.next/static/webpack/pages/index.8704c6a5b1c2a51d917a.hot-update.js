webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var D_Builds_Tutorials_React_Section_23_meetup_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_mongodb_models_MeetUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/mongodb/models/MeetUp */ "./database/mongodb/models/MeetUp.js");



var _jsxFileName = "D:\\Builds\\Tutorials\\React\\Section 23\\meetup-app\\pages\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Builds_Tutorials_React_Section_23_meetup_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var DUMMY_LIST = [{
  id: "m1",
  title: "A First Meet Up",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
  address: "Some address",
  description: "This is a first meet up"
}, {
  id: "m2",
  title: "A Second Meet Up",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
  address: "Some address 1",
  description: "This is a second meet up"
}];

var HomePage = function HomePage(_ref) {
  var meetups = _ref.meetups;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_database_mongodb_models_MeetUp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    meetups: meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 10
  }, _this);
}; // export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_LIST,
//     },
//   };
// }


_c = HomePage;

var cleanData = function cleanData(data) {
  var doc = data._doc;
  var dataId = doc._id;
  console.log("Data ID: ", dataId);
  delete doc._id;
  return _objectSpread(_objectSpread({}, doc), {}, {
    id: dataId.toString()
  });
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTElTVCIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwibWVldHVwcyIsImNsZWFuRGF0YSIsImRhdGEiLCJkb2MiLCJfZG9jIiwiZGF0YUlkIiwiX2lkIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsaUJBRlQ7QUFHRUMsT0FBSyxFQUNILDhJQUpKO0FBS0VDLFNBQU8sRUFBRSxjQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBRGlCLEVBU2pCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxrQkFGVDtBQUdFQyxPQUFLLEVBQ0gsOElBSko7QUFLRUMsU0FBTyxFQUFFLGdCQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBVGlCLENBQW5COztBQW1CQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNoQyxzQkFBTyxxRUFBQyx1RUFBRDtBQUFZLFdBQU8sRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRCxDLENBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FiTUQsUTs7QUFlTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDMUIsTUFBTUMsR0FBRyxHQUFHRCxJQUFJLENBQUNFLElBQWpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNHLEdBQW5CO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJILE1BQXpCO0FBQ0EsU0FBT0YsR0FBRyxDQUFDRyxHQUFYO0FBRUEseUNBQVlILEdBQVo7QUFBaUJULE1BQUUsRUFBRVcsTUFBTSxDQUFDSSxRQUFQO0FBQXJCO0FBQ0QsQ0FQRDs7O0FBMkJlVix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NzA0YzZhNWIxYzJhNTFkOTE3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vZGF0YWJhc2UvbW9uZ29kYi9tb2RlbHMvTWVldFVwXCI7XHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uL2RhdGFiYXNlL21vbmdvZGIvY29uZmlnXCI7XHJcblxyXG5jb25zdCBEVU1NWV9MSVNUID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJBIEZpcnN0IE1lZXQgVXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYi9iNi9JbWFnZV9jcmVhdGVkX3dpdGhfYV9tb2JpbGVfcGhvbmUucG5nLzEyODBweC1JbWFnZV9jcmVhdGVkX3dpdGhfYV9tb2JpbGVfcGhvbmUucG5nXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXQgdXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJBIFNlY29uZCBNZWV0IFVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2IvYjYvSW1hZ2VfY3JlYXRlZF93aXRoX2FfbW9iaWxlX3Bob25lLnBuZy8xMjgwcHgtSW1hZ2VfY3JlYXRlZF93aXRoX2FfbW9iaWxlX3Bob25lLnBuZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgMVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNlY29uZCBtZWV0IHVwXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHsgbWVldHVwcyB9KSA9PiB7XHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e21lZXR1cHN9IC8+O1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9MSVNULFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5jb25zdCBjbGVhbkRhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGRvYyA9IGRhdGEuX2RvYztcclxuICBjb25zdCBkYXRhSWQgPSBkb2MuX2lkO1xyXG4gIGNvbnNvbGUubG9nKFwiRGF0YSBJRDogXCIsIGRhdGFJZCk7XHJcbiAgZGVsZXRlIGRvYy5faWQ7XHJcblxyXG4gIHJldHVybiB7IC4uLmRvYywgaWQ6IGRhdGFJZC50b1N0cmluZygpIH07XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgY29uc3QgbWVldHVwTGlzdCA9IGF3YWl0IE1lZXR1cExpc3QuZmluZCgpO1xyXG4gIGNvbnNvbGUubG9nKFwiTWVldCBVcCBMaXN0OiBcIiwgbWVldHVwTGlzdCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBMaXN0Lm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICB9KSksXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==