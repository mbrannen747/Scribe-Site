module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About.jsx":
/*!******************************!*\
  !*** ./components/About.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/StyleConstants */ "./constants/StyleConstants.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./components/Section.jsx");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Col */ "./components/Col.jsx");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row */ "./components/Row.jsx");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "about-us-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3720963037"
  }, "#about-us.jsx-3720963037{position:relative;display:block;visibility:hidden;top:-101px;}.col-image.jsx-3720963037{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcQWJvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1vQixBQUtrQyxBQU1QLFdBQ2QsT0FOaUIsY0FDSSxrQkFDTixXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcQWJvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3R5bGVDb25zdGFudHMgZnJvbSAgJy4uL2NvbnN0YW50cy9TdHlsZUNvbnN0YW50cyc7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbic7XHJcbmltcG9ydCBDb2wgZnJvbSAnLi9Db2wnXHJcbmltcG9ydCBSb3cgZnJvbSAnLi9Sb3cnXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiA8U2VjdGlvbiBpZD1cImFib3V0LXVzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgI2Fib3V0LXVzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Fib3V0LXVzIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8YSBpZD1cImFib3V0LXVzXCI+PC9hPlxyXG4gICAgICAgICAgICA8aDE+QUJPVVQgVVM8L2gxPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBmaXJzdD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTY3JpYmUgRGF0YWxvZ2dlciBpcyBhbiBlYXN5IHRvIHVzZSwgdW5pdmVyc2FsIGxvZ2dlciBkZXNpZ25lZCBmb3Igc2NpZW50aWZpYyBhbmQgaW5kdXN0cmlhbCBtYXJrZXRzLCBvZmZlcnMgcmVhbC10aW1lIGRhdGEgZGlzcGxheXMsIHdpcmVsZXNzIGNvbm5lY3Rpdml0eSwgY2xvdWQgZGF0YSBzdG9yYWdlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGJpZyBkYXRhIGFwcGxpY2F0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBIaWdobHkgYWRhcHRhYmxlIHRvIG1lZXQgYW55IG1lYXN1cmVtZW50IG5lZWQgaW5jbHVkaW5nIHNjaWVudGlmaWMsIGluZHVzdHJpYWwgb3IgbWlsaXRhcnkgYXBwbGljYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lYXN1cmVtZW50IHByb3RvY29scyBpbmNsdWRlIGJ1dCBub3QgbGltaXRlZCB0bzogYW5hbG9nLCBwdWxzZSwgYnJpZGdlLCBTREktMTIsIGFuZCBzZXJpYWwgcHJvdG9jb2xzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbW11bmljYXRpb25zIGZvciBkYXRhIHRyYW5zZmVycyBhbmQgcmVtb3RlIG1vbml0b3JpbmcgY2FuIGJlIGFjaGlldmVkIHRocm91Z2ggcmFkaW8sIGludGVybmV0LCBjZWxsdWxhciBvciBzYXRlbGxpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZ3JhbW1hYmxlIHZpYSBQeXRob25cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGFzdD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL3NjcmliZV90ZWFtMi5qcGdcIiBjbGFzc05hbWU9XCJjb2wtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\components\\About.jsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "about-us",
    className: "jsx-3720963037"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3720963037"
  }, "ABOUT US"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    first: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3720963037"
  }, "The Scribe Datalogger is an easy to use, universal logger designed for scientific and industrial markets, offers real-time data displays, wireless connectivity, cloud data storage, and big data applications Highly adaptable to meet any measurement need including scientific, industrial or military applications Measurement protocols include but not limited to: analog, pulse, bridge, SDI-12, and serial protocols Communications for data transfers and remote monitoring can be achieved through radio, internet, cellular or satellite Programmable via Python")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    last: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/scribe_team2.jpg",
    className: "jsx-3720963037" + " " + "col-image"
  }))));
});

/***/ }),

/***/ "./components/BigVideo.jsx":
/*!*********************************!*\
  !*** ./components/BigVideo.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/StyleConstants */ "./constants/StyleConstants.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var videoSrc = _ref.videoSrc,
      text = _ref.text;
  var textElement = text ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: [-200, 200],
    className: "bigvid-overlay-text"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, text)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bigvid-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: [-40, 40]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1076743749"
  }, ".bigvid-container{width:100%;height:600px;overflow:hidden;margin-top:-100px;}.bigvid-overlay-text{position:absolute;top:200px;width:100%;text-align:center;color:#fff;font-size:3em;text-shadow:0px 0px 5px #000;z-index:10000;}.bigvid{position:relative;width:100%;}@media(max-width:1050px){.bigvid-container{height:450px;}}@media(max-width:800px){.bigvid-container{height:300px;}}@media(max-width:800px){.bigvid-container{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcQmlnVmlkZW8uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVErQixBQUdnQyxBQU1PLEFBVUQsQUFLQSxBQUtBLEFBS0QsV0E5QkgsRUFxQmIsQUFLQSxBQUtBLEtBekJVLEFBVUEsTUFmTSxJQU1MLENBVWYsVUFUc0IsQ0FORCxpQkFPUCxDQU5kLFVBT2lCLGNBQ2dCLDZCQUNoQixjQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXE1pY2hhZWwgQnJhbm5lblxcRGVza3RvcFxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXEJpZ1ZpZGVvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0eWxlQ29uc3RhbnRzIGZyb20gICcuLi9jb25zdGFudHMvU3R5bGVDb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XHJcbmV4cG9ydCBkZWZhdWx0ICh7dmlkZW9TcmMsdGV4dH0pID0+IHtcclxuICAgIGxldCB0ZXh0RWxlbWVudCA9IHRleHQgPyA8UGFyYWxsYXggeT17Wy0yMDAsMjAwXX0gY2xhc3NOYW1lPVwiYmlndmlkLW92ZXJsYXktdGV4dFwiPlxyXG4gICAgICAgICAgICA8cD57dGV4dH08L3A+XHJcbiAgICAgICAgPC9QYXJhbGxheD4gOiA8ZGl2IC8+XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiaWd2aWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFBhcmFsbGF4IHk9e1stNDAsNDBdfSA+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYmlndmlkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJpZ3ZpZC1vdmVybGF5LXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5iaWd2aWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjEwNTBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmJpZ3ZpZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5iaWd2aWQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjgwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAuYmlndmlkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAge3RleHRFbGVtZW50fVxyXG4gICAgICAgICAgICA8dmlkZW8gYXV0b1BsYXk9e3RydWV9IG11dGVkPXt0cnVlfSBsb29wPXt0cnVlfSBjbGFzc05hbWU9XCJiaWd2aWRcIj5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXt2aWRlb1NyY30gdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgPC9QYXJhbGxheD5cclxuICAgIDwvZGl2PlxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\components\\BigVideo.jsx */"), textElement, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    className: "jsx-1076743749" + " " + "bigvid"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: videoSrc,
    type: "video/mp4",
    className: "jsx-1076743749"
  }))));
});

/***/ }),

/***/ "./components/Col.jsx":
/*!****************************!*\
  !*** ./components/Col.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Col; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/StyleConstants */ "./constants/StyleConstants.js");









/*
    To get rid of padding on appropriate sides, 
    add first={true} to the first col, and last={true} to the last col
*/

var Col =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Col, _React$Component);

  function Col() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Col);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Col).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Col, [{
    key: "render",
    value: function render() {
      var padding;

      if (this.props.first) {
        padding = "padding-right: ".concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["marginNum"] / 2, "px");
      } else if (this.props.last) {
        padding = "padding-left: ".concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["marginNum"] / 2, "px");
      } else {
        padding = "padding: 0 ".concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["marginNum"] / 2, "px");
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2938578957", [padding]]]) + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2938578957",
        dynamic: [padding]
      }, ".col.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;".concat(padding, ";}@media (max-width:800px){.col.__jsx-style-dynamic-selector{padding:0 !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcQ29sLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQm9CLEFBR3VCLEFBS2tCLHFCQUN4QixZQUpMLDZCQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcQ29sLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0eWxlQ29uc3RhbnRzIGZyb20gICcuLi9jb25zdGFudHMvU3R5bGVDb25zdGFudHMnO1xyXG5pbXBvcnQgJ3JlYWN0JztcclxuLypcclxuICAgIFRvIGdldCByaWQgb2YgcGFkZGluZyBvbiBhcHByb3ByaWF0ZSBzaWRlcywgXHJcbiAgICBhZGQgZmlyc3Q9e3RydWV9IHRvIHRoZSBmaXJzdCBjb2wsIGFuZCBsYXN0PXt0cnVlfSB0byB0aGUgbGFzdCBjb2xcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IHBhZGRpbmc7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5maXJzdCl7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgPSBgcGFkZGluZy1yaWdodDogJHtzdHlsZUNvbnN0YW50cy5tYXJnaW5OdW0gLyAyfXB4YDtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wcm9wcy5sYXN0KXtcclxuICAgICAgICAgICAgcGFkZGluZyA9IGBwYWRkaW5nLWxlZnQ6ICR7c3R5bGVDb25zdGFudHMubWFyZ2luTnVtIC8gMn1weGA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFkZGluZyA9IGBwYWRkaW5nOiAwICR7c3R5bGVDb25zdGFudHMubWFyZ2luTnVtIC8gMn1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmNvbCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OjE7XHJcbiAgICAgICAgICAgICAgICAke3BhZGRpbmd9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ODAwcHgpIHtcclxuICAgICAgICAgICAgICAgIC5jb2wge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\components\\Col.jsx */")), this.props.children);
    }
  }]);

  return Col;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/ContactUs.jsx":
/*!**********************************!*\
  !*** ./components/ContactUs.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/StyleConstants */ "./constants/StyleConstants.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Row */ "./components/Row.jsx");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]]) + " " + "contactUs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2676654383",
    dynamic: [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]
  }, "#contact-us.__jsx-style-dynamic-selector{position:relative;display:block;visibility:hidden;top:-101px;}form.__jsx-style-dynamic-selector{".concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], ";width:75%;}input[type=text].__jsx-style-dynamic-selector{").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], ";width:100%;margin:5px;padding:5px;}input[type=email].__jsx-style-dynamic-selector{").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], ";width:100%;margin:5px;padding:5px;}textarea.__jsx-style-dynamic-selector{width:100%;height:50px;").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], ";margin:5px;padding:5px;}input[type=submit].__jsx-style-dynamic-selector{background:").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, ";color:").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite, ";margin-left:5px;padding:10px 15px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcQ29udGFjdFVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJb0IsQUFLa0MsQUFNVyxBQUlBLEFBTUEsQUFNbEIsQUFNOEIsV0FObEIsT0FyQlQsS0FzQmUsTUFoQm5CLEFBSUUsQUFNQSxHQWZNLE9BTXJCLENBSWUsQUFNQSxBQVd3QixVQTFCeEIsQ0FVQyxBQU1BLENBS0QsU0FwQmYsRUFVQSxBQU1BLEFBS2dCLFlBQ2hCLEFBSW9CLGdCQUNFLGtCQUNOLFlBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcQ29udGFjdFVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0eWxlQ29uc3RhbnRzIGZyb20gICcuLi9jb25zdGFudHMvU3R5bGVDb25zdGFudHMnO1xyXG5pbXBvcnQgUm93IGZyb20gJy4vUm93J1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWN0VXNcIj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICNjb250YWN0LXVzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2NvbnRhY3QtdXMge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xMDFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgICR7c3R5bGVDb25zdGFudHMuZm9udE5vcm1hbH07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo3NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgICAgICAgICAke3N0eWxlQ29uc3RhbnRzLmZvbnROb3JtYWx9O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPWVtYWlsXSB7XHJcbiAgICAgICAgICAgICAgICAke3N0eWxlQ29uc3RhbnRzLmZvbnROb3JtYWx9O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlOyBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgICAgICR7c3R5bGVDb25zdGFudHMuZm9udE5vcm1hbH07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtzdHlsZUNvbnN0YW50cy5jb2xvcnMuY29sb3JQcmltYXJ5VmVyeURhcmt9O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7c3R5bGVDb25zdGFudHMuY29sb3JzLmNvbG9yV2hpdGV9O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPGEgaWQ9XCJjb250YWN0XCI+PC9hPlxyXG4gICAgICAgICAgICA8aDE+Q09OVEFDVCBVUzwvaDE+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvbWFpbFwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIj48L2lucHV0Pjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiPjwvaW5wdXQ+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIj48L3RleHRhcmVhPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\components\\ContactUs.jsx */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "contact",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]])
  }, "CONTACT US"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "/mail",
    method: "post",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Your Name",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email Address",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    name: "message",
    placeholder: "Message",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "submit",
    value: "Submit",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2676654383", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["fontNormal"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorWhite]]])
  }))));
});

/***/ }),

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/StyleConstants */ "./constants/StyleConstants.js");
/* harmony import */ var _ContactUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactUs */ "./components/ContactUs.jsx");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row */ "./components/Row.jsx");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Col */ "./components/Col.jsx");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1854239162", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"]]]]) + " " + "footer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1854239162",
    dynamic: [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"]]
  }, ".footer.__jsx-style-dynamic-selector{width:100%;background:#fff;z-index:10101010;position:absolute;".concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], ";}.footer-container.__jsx-style-dynamic-selector{").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], ";}.footer-logo.__jsx-style-dynamic-selector{height:230px;width:230px;display:block;margin:25px auto 0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNb0IsQUFHMkIsQUFRZixBQUVrQixXQVRFLEVBVUgsWUFDQyxFQVZJLEVBTXJCLFVBSzRCLEtBVlAsa0JBRXRCLENBU0MsNEJBVEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxNaWNoYWVsIEJyYW5uZW5cXERlc2t0b3BcXFNjcmliZS1TaXRlXFxjb21wb25lbnRzXFxGb290ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3R5bGVDb25zdGFudHMgZnJvbSAgJy4uL2NvbnN0YW50cy9TdHlsZUNvbnN0YW50cyc7XHJcbmltcG9ydCBDb250YWN0VXMgZnJvbSAnLi9Db250YWN0VXMnO1xyXG5pbXBvcnQgUm93IGZyb20gJy4vUm93JztcclxuaW1wb3J0IENvbCBmcm9tICcuL0NvbCc7XHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAxMDEwMTA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICR7c3R5bGVDb25zdGFudHMuc2hhZG93fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICR7c3R5bGVDb25zdGFudHMuY29udGFpbmVyTWFyZ2lufVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXItbG9nbyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCBhdXRvIDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy90b3BEb3duTG9nby5wbmdcIiBjbGFzc05hbWU9XCJmb290ZXItbG9nb1wiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0VXMgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PsKpIDIwMTggU2NyaWJlIFNjaWVuY2VzLiBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\components\\Footer.jsx */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1854239162", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"]]]]) + " " + "footer-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/topDownLogo.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1854239162", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"]]]]) + " " + "footer-logo"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ContactUs__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      textAlign: "center"
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1854239162", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"]]]])
  }, "\xA9 2018 Scribe Sciences. All Rights Reserved.")));
});

/***/ }),

/***/ "./components/Founders.jsx":
/*!*********************************!*\
  !*** ./components/Founders.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/StyleConstants */ "./constants/StyleConstants.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./components/Section.jsx");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Col */ "./components/Col.jsx");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row */ "./components/Row.jsx");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3446547584"
  }, "#our-founders.jsx-3446547584{position:relative;display:block;visibility:hidden;top:-101px;}.col-image.jsx-3446547584{width:100%;}@media (max-width:800px){.col-image.jsx-3446547584{width:50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcRm91bmRlcnMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1vQixBQUdrQyxBQU1QLEFBSUcsVUFDYixDQUpKLE9BTmlCLGNBQ0ksa0JBQ04sV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE1pY2hhZWwgQnJhbm5lblxcRGVza3RvcFxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXEZvdW5kZXJzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0eWxlQ29uc3RhbnRzIGZyb20gICcuLi9jb25zdGFudHMvU3R5bGVDb25zdGFudHMnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgQ29sIGZyb20gJy4vQ29sJ1xyXG5pbXBvcnQgUm93IGZyb20gJy4vUm93J1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFNlY3Rpb24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAjb3VyLWZvdW5kZXJzIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjgwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAuY29sLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPGEgaWQ9XCJvdXItZm91bmRlcnNcIj48L2E+XHJcbiAgICAgICAgPGgxPkZPVU5ERVJTPC9oMT5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgZmlyc3Q9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9QaWN0dXJlMS5wbmdcIiBjbGFzc05hbWU9XCJjb2wtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5CZW4gRmFzb2xpPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Tb2Z0d2FyZSBEZXZlbG9wbWVudDwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvUGljdHVyZTIuanBnXCIgY2xhc3NOYW1lPVwiY29sLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+UnlhbiBCYXJlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QnVzaW5lc3MgRGV2ZWxvcG1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGFzdD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL1BpY3R1cmUzLnBuZ1wiIGNsYXNzTmFtZT1cImNvbC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkJyYW5kb24gTWFydGluPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5IYXJkd2FyZSBDb21tZXJjaWFsaXphdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\components\\Founders.jsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "our-founders",
    className: "jsx-3446547584"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3446547584"
  }, "FOUNDERS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    first: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Picture1.png",
    className: "jsx-3446547584" + " " + "col-image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3446547584"
  }, "Ben Fasoli"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3446547584"
  }, "Software Development")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Picture2.jpg",
    className: "jsx-3446547584" + " " + "col-image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3446547584"
  }, "Ryan Bares"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3446547584"
  }, "Business Development")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    last: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Picture3.png",
    className: "jsx-3446547584" + " " + "col-image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3446547584"
  }, "Brandon Martin"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3446547584"
  }, "Hardware Commercialization"))));
});

/***/ }),

/***/ "./components/Head.jsx":
/*!*****************************!*\
  !*** ./components/Head.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Scribe Sciences", title ? " | ".concat(title) : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Barlow:200,500",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/favicon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }));
});

/***/ }),

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/StyleConstants */ "./constants/StyleConstants.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1492357097", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"]]]]) + " " + "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1492357097",
    dynamic: [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"]]
  }, ".navbar.__jsx-style-dynamic-selector{width:100%;position:fixed;height:73.65px;top:0;background:#fff;z-index:10101010;".concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], ";}.navbar-container.__jsx-style-dynamic-selector{").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], ";}.logo.__jsx-style-dynamic-selector{width:200px;}nav.__jsx-style-dynamic-selector{display:inline-block;float:right;padding-top:30px;}nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;position:relative;color:#222;margin:0 25px;font-family:'Barlow',sans-serif;font-weight:200;").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], " transition:color .5s;}nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, ";}nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, ";visibility:hidden;-webkit-transform:scaleX(0);-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;}nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:before{visibility:visible;-webkit-transform:scaleX(1);-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}@media(max-width:960px){nav.__jsx-style-dynamic-selector{padding-top:35px;}nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{margin:0 10px;").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], ";}}@media(max-width:720px){nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{margin:0 5px;").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"], ";}}@media(max-width:600px){nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcTmF2YmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHb0IsQUFHMkIsQUFVZixBQUVpQixBQUdRLEFBS0EsQUFXekIsQUFFZ0IsQUFjUSxBQU1DLEFBR0gsQUFNRCxBQU1BLFdBbkVELEFBaUNHLENBckJ0QixDQW1ERyxBQUtDLENBWEQsR0FKQyxFQU40QixFQWhDakIsS0FkRyxHQVFsQixBQXlCZSxJQWxCSyxFQWNwQixLQUtlLENBakNOLENBNkRMLENBTkEsSUF0RGUsQUE2Q0ssR0EvQnhCLEFBR3FCLENBZ0JSLFNBQ0YsR0FqQ1UsSUFrQzZCLENBakJwQyxXQUNHLENBaEJsQixhQWlCc0MsZ0JBakJyQyxJQWlDc0IsTUFVdEIsTUF6Qm1CLE1BZ0JhLFVBZFIsa0JBZUEsZ0NBZHhCLHdDQWUrQywyQ0FDUiw4RUFDdkMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNaWNoYWVsIEJyYW5uZW5cXERlc2t0b3BcXFNjcmliZS1TaXRlXFxjb21wb25lbnRzXFxOYXZiYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3R5bGVDb25zdGFudHMgZnJvbSAgJy4uL2NvbnN0YW50cy9TdHlsZUNvbnN0YW50cyc7XHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjczLjY1cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMTAxMDEwO1xyXG4gICAgICAgICAgICAgICAgJHtzdHlsZUNvbnN0YW50cy5zaGFkb3d9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgJHtzdHlsZUNvbnN0YW50cy5jb250YWluZXJNYXJnaW59XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IzIyMjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowIDI1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDoyMDA7XHJcbiAgICAgICAgICAgICAgICAke3N0eWxlQ29uc3RhbnRzLmhlYWRpbmdTaXplMX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246Y29sb3IgLjVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hdiBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAke3N0eWxlQ29uc3RhbnRzLmNvbG9ycy5jb2xvclByaW1hcnlWZXJ5RGFya31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYgYTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzdHlsZUNvbnN0YW50cy5jb2xvcnMuY29sb3JQcmltYXJ5fTtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYgYTpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjk2MHB4KXtcclxuICAgICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICR7c3R5bGVDb25zdGFudHMuaGVhZGluZ1NpemUyfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzIwcHgpe1xyXG4gICAgICAgICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDVweDtcclxuICAgICAgICAgICAgICAgICAgICAke3N0eWxlQ29uc3RhbnRzLmhlYWRpbmdTaXplM31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgICAgICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiLz48L2E+XHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0LXVzXCI+QWJvdXQgVXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI291ci1wcm9kdWN0XCI+T3VyIFByb2R1Y3Q8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI291ci1mb3VuZGVyc1wiPk91ciBGb3VuZGVyczwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\components\\Navbar.jsx */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1492357097", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"]]]]) + " " + "navbar-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1492357097", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"]]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/logo.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1492357097", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"]]]]) + " " + "logo"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1492357097", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"]]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#about-us",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1492357097", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"]]]])
  }, "About Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#our-product",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1492357097", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"]]]])
  }, "Our Product"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#our-founders",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1492357097", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"]]]])
  }, "Our Founders"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#contact",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1492357097", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimaryVeryDark, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["colors"].colorPrimary, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize2"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize3"]]]])
  }, "Contact"))));
});

/***/ }),

/***/ "./components/Product.jsx":
/*!********************************!*\
  !*** ./components/Product.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/StyleConstants */ "./constants/StyleConstants.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./components/Section.jsx");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row */ "./components/Row.jsx");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Col */ "./components/Col.jsx");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1412552695"
  }, "#our-product.jsx-1412552695{position:relative;display:block;visibility:hidden;top:-101px;}.col-image.jsx-1412552695{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcUHJvZHVjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9CLEFBR2tDLEFBTVAsV0FDZCxPQU5pQixjQUNJLGtCQUNOLFdBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxNaWNoYWVsIEJyYW5uZW5cXERlc2t0b3BcXFNjcmliZS1TaXRlXFxjb21wb25lbnRzXFxQcm9kdWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0eWxlQ29uc3RhbnRzIGZyb20gICcuLi9jb25zdGFudHMvU3R5bGVDb25zdGFudHMnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xyXG5pbXBvcnQgUm93IGZyb20gJy4vUm93JztcclxuaW1wb3J0IENvbCBmcm9tICcuL0NvbCc7XHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiA8U2VjdGlvbj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICNvdXItcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRvcDogLTEwMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2wtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8YSBpZD1cIm91ci1wcm9kdWN0XCI+PC9hPlxyXG4gICAgICAgICAgICA8aDE+T1VSIFBST0RVQ1Q8L2gxPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBmaXJzdD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+IFNjcmliZSBEYXRhbG9nZ2VyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DbG91ZCBCYXNlZCBTZXJ2aWNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZWFsIFRpbWUgVmlzdWFsaXphdGlvbiBUb29sczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FYXN5IHRvIFVzZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Mb3cgQ29zdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Nb3JlIENvbXB1dGluZyBQb3dlciBhbmQgTWVtb3J5PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ2dlcl9tb2RlbDIuanBnXCIgY2xhc3NOYW1lPVwiY29sLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsYXN0PXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nZ2VyLnBuZ1wiIGNsYXNzTmFtZT1cImNvbC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\components\\Product.jsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "our-product",
    className: "jsx-1412552695"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1412552695"
  }, "OUR PRODUCT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    first: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1412552695"
  }, " Scribe Datalogger"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1412552695"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1412552695"
  }, "Cloud Based Services"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1412552695"
  }, "Real Time Visualization Tools"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1412552695"
  }, "Easy to Use"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1412552695"
  }, "Low Cost"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1412552695"
  }, "More Computing Power and Memory"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/logger_model2.jpg",
    className: "jsx-1412552695" + " " + "col-image"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    last: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/logger.png",
    className: "jsx-1412552695" + " " + "col-image"
  }))));
});

/***/ }),

/***/ "./components/Row.jsx":
/*!****************************!*\
  !*** ./components/Row.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Row; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/StyleConstants */ "./constants/StyleConstants.js");










var Row =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Row, _React$Component);

  function Row() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Row);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Row).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Row, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1344765724" + " " + "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1344765724"
      }, ".row.jsx-1344765724{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media (max-width:800px){.row.jsx-1344765724{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcUm93LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLb0IsQUFHNkIsQUFJSyxjQUNqQiw0REFKSiIsImZpbGUiOiJDOlxcVXNlcnNcXE1pY2hhZWwgQnJhbm5lblxcRGVza3RvcFxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXFJvdy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZUNvbnN0YW50cyBmcm9tICAnLi4vY29uc3RhbnRzL1N0eWxlQ29uc3RhbnRzJztcclxuaW1wb3J0ICdyZWFjdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ODAwcHgpIHtcclxuICAgICAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\components\\Row.jsx */"), this.props.children);
    }
  }]);

  return Row;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/Section.jsx":
/*!********************************!*\
  !*** ./components/Section.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/StyleConstants */ "./constants/StyleConstants.js");










var Section =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Section, _React$Component);

  function Section() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Section);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Section).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Section, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: this.props.id,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1202052321", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["colors"].colorWhite, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerPadding"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerMargin"]]]]) + " " + "section-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1202052321",
        dynamic: [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["colors"].colorWhite, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerPadding"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerMargin"]]
      }, ".section-container.__jsx-style-dynamic-selector{background:".concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["colors"].colorWhite, ";width:100%;z-index:10;position:relative;-webkit-transform:translateY(-70px);-ms-transform:translateY(-70px);transform:translateY(-70px);").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerPadding"], " ").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["shadow"], ";}.section-inner.__jsx-style-dynamic-selector{").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerMargin"], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS29CLEFBR3dELEFBVTVDLDZCQUFDLFdBVGMsV0FDQSxXQUNRLGtCQUNTLGdHQUdoQywwREFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXE1pY2hhZWwgQnJhbm5lblxcRGVza3RvcFxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXFNlY3Rpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3R5bGVDb25zdGFudHMgZnJvbSAgJy4uL2NvbnN0YW50cy9TdHlsZUNvbnN0YW50cyc7XHJcbmltcG9ydCAncmVhY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuc2VjdGlvbi1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiR7c3R5bGVDb25zdGFudHMuY29sb3JzLmNvbG9yV2hpdGV9O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6MTA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNzBweCk7XHJcbiAgICAgICAgICAgICAgICAke3N0eWxlQ29uc3RhbnRzLmNvbnRhaW5lclBhZGRpbmd9XHJcbiAgICAgICAgICAgICAgICAke3N0eWxlQ29uc3RhbnRzLnNoYWRvd31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VjdGlvbi1pbm5lcntcclxuICAgICAgICAgICAgICAgICR7c3R5bGVDb25zdGFudHMuY29udGFpbmVyTWFyZ2lufVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\components\\Section.jsx */")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1202052321", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["colors"].colorWhite, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerPadding"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerMargin"]]]]) + " " + "section-inner"
      }, this.props.children));
    }
  }]);

  return Section;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./constants/Color.js":
/*!****************************!*\
  !*** ./constants/Color.js ***!
  \****************************/
/*! exports provided: colorPrimaryVeryLight, colorPrimaryLight, colorPrimary, colorPrimaryDark, colorPrimaryVeryDark, colorBlackVeryLight, colorBlackLight, colorBlack, colorBlackDark, colorBlackVeryDark, colorWhite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimaryVeryLight", function() { return colorPrimaryVeryLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimaryLight", function() { return colorPrimaryLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimary", function() { return colorPrimary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimaryDark", function() { return colorPrimaryDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPrimaryVeryDark", function() { return colorPrimaryVeryDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorBlackVeryLight", function() { return colorBlackVeryLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorBlackLight", function() { return colorBlackLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorBlack", function() { return colorBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorBlackDark", function() { return colorBlackDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorBlackVeryDark", function() { return colorBlackVeryDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorWhite", function() { return colorWhite; });
// Scribe Green
var colorPrimaryVeryLight = "#98D5C8";
var colorPrimaryLight = "#68C6B2";
var colorPrimary = "#4EAF98";
var colorPrimaryDark = "#408776";
var colorPrimaryVeryDark = "#1B5F4F"; // Black

var colorBlackVeryLight = "#EAEAEA";
var colorBlackLight = "#D2D2D2";
var colorBlack = "#8E8E8E";
var colorBlackDark = "#515151";
var colorBlackVeryDark = "#2D2D2D"; // White

var colorWhite = "#FFFFFF";

/***/ }),

/***/ "./constants/StyleConstants.js":
/*!*************************************!*\
  !*** ./constants/StyleConstants.js ***!
  \*************************************/
/*! exports provided: colors, marginNum, containerMargin, containerPadding, headingSize1, headingSize2, headingSize3, headingSize4, shadow, fontLight, fontNormal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginNum", function() { return marginNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerMargin", function() { return containerMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerPadding", function() { return containerPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingSize1", function() { return headingSize1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingSize2", function() { return headingSize2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingSize3", function() { return headingSize3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingSize4", function() { return headingSize4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontLight", function() { return fontLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontNormal", function() { return fontNormal; });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ "./constants/Color.js");

var colors = _Color__WEBPACK_IMPORTED_MODULE_0__;
var marginNum = 50;
var containerMargin = "margin: 0 ".concat(marginNum, "px;");
var containerPadding = "padding: ".concat(marginNum, "px 0;");
var headingSize1 = "font-size:1.35em;";
var headingSize2 = "font-size:1em;";
var headingSize3 = "font-size:.85em;";
var headingSize4 = "font-size:.5em;";
var shadow = "box-shadow: 0 0 10px rgba(2,2,2,.5);";
var fontLight = "font-family: 'Barlow', sans-serif; font-weight:200;";
var fontNormal = "font-family: 'Barlow', sans-serif; font-weight:400;";

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Head */ "./components/Head.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");
/* harmony import */ var _components_BigVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BigVideo */ "./components/BigVideo.jsx");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/About */ "./components/About.jsx");
/* harmony import */ var _components_Founders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Founders */ "./components/Founders.jsx");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Product */ "./components/Product.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");










/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_5__["ParallaxProvider"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2731717803"
  }, "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}body{margin:0;background:#eee;font-family:'Barlow',sans-serif;font-weight:200;}h1,h2{font-family:'Barlow',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVcrQixBQUc0QyxBQUdkLEFBTXdCLFNBTGxCLGdCQUNrQixPQUtyQyx5QkFKbUIsZ0JBQ25CLG9DQU5BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWljaGFlbCBCcmFubmVuXFxEZXNrdG9wXFxTY3JpYmUtU2l0ZVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBCaWdWaWRlbyBmcm9tICcuLi9jb21wb25lbnRzL0JpZ1ZpZGVvJztcclxuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0JztcclxuaW1wb3J0IEZvdW5kZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvRm91bmRlcnMnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3QnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFyYWxsYXhQcm92aWRlcj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2VlZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6MjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDEsaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPEhlYWQvPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMjYuNnB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxCaWdWaWRlbyB2aWRlb1NyYz17XCIvc3RhdGljL0JsdWUgU2t5IFZpZGVvXzEubXA0XCJ9IHRleHQ9XCJFZmZvcnRsZXNzLCBXaXJlbGVzcywgUmVhbHRpbWUgRGF0YWxvZ2dpbmdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICAgIDxCaWdWaWRlbyB2aWRlb1NyYz17XCIvc3RhdGljL0JsdWUgU2t5IFZpZGVvXzIubXA0XCJ9Lz5cclxuICAgICAgICAgICAgPFByb2R1Y3QgLz4gICAgXHJcbiAgICAgICAgICAgIDxCaWdWaWRlbyB2aWRlb1NyYz17XCIvc3RhdGljL0JsdWUgU2t5IFZpZGVvXzEubXA0XCJ9Lz5cclxuICAgICAgICAgICAgPEZvdW5kZXJzIC8+XHJcbiAgICAgICAgICAgIDxCaWdWaWRlbyB2aWRlb1NyYz17XCIvc3RhdGljL0JsdWUgU2t5IFZpZGVvXzIubXA0XCJ9Lz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUGFyYWxsYXhQcm92aWRlcj4pO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Michael Brannen\\Desktop\\Scribe-Site\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: "126.6px"
    },
    className: "jsx-2731717803"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BigVideo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    videoSrc: "/static/Blue Sky Video_1.mp4",
    text: "Effortless, Wireless, Realtime Datalogging"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BigVideo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    videoSrc: "/static/Blue Sky Video_2.mp4"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Product__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BigVideo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    videoSrc: "/static/Blue Sky Video_1.mp4"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Founders__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BigVideo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    videoSrc: "/static/Blue Sky Video_2.mp4"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Michael Brannen\Desktop\Scribe-Site\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

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

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map