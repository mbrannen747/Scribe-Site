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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "about-us-container",
    className: "jsx-1771547331"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1771547331"
  }, "#about-us-container.jsx-1771547331{margin-bottom:300px;}#about-us.jsx-1771547331{position:relative;display:block;visibility:hidden;top:-101px;}.col-image.jsx-1771547331{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXEFib3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNb0IsQUFHb0MsQUFHRixBQU1QLFdBQ2QsT0FOaUIsRUFIakIsWUFJcUIsa0JBQ04sV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXGxwODAwXFxPbmVEcml2ZVxcRGVza3RvcFxcU2Nob29sIFN0dWZmXFxRMTRcXEVudGVycHJpc2UgMyAtIFVTVEFSXFxTY3JpYmVcXFNyaWJlIFdlYnNpdGVcXFNjcmliZS1TaXRlXFxjb21wb25lbnRzXFxBYm91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZUNvbnN0YW50cyBmcm9tICAnLi4vY29uc3RhbnRzL1N0eWxlQ29uc3RhbnRzJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IENvbCBmcm9tICcuL0NvbCdcclxuaW1wb3J0IFJvdyBmcm9tICcuL1JvdydcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJhYm91dC11cy1jb250YWluZXJcIj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICNhYm91dC11cy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTozMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjYWJvdXQtdXMge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xMDFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29sLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxhIGlkPVwiYWJvdXQtdXNcIj48L2E+XHJcbiAgICAgICAgICAgIDxoMT5BQk9VVCBVUzwvaDE+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGZpcnN0PXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNjcmliZSBEYXRhbG9nZ2VyIGlzIGFuIGVhc3kgdG8gdXNlLCB1bml2ZXJzYWwgbG9nZ2VyIGRlc2lnbmVkIGZvciBzY2llbnRpZmljIGFuZCBpbmR1c3RyaWFsIG1hcmtldHMsIG9mZmVycyByZWFsLXRpbWUgZGF0YSBkaXNwbGF5cywgd2lyZWxlc3MgY29ubmVjdGl2aXR5LCBjbG91ZCBkYXRhIHN0b3JhZ2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgYmlnIGRhdGEgYXBwbGljYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpZ2hseSBhZGFwdGFibGUgdG8gbWVldCBhbnkgbWVhc3VyZW1lbnQgbmVlZCBpbmNsdWRpbmcgc2NpZW50aWZpYywgaW5kdXN0cmlhbCBvciBtaWxpdGFyeSBhcHBsaWNhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVhc3VyZW1lbnQgcHJvdG9jb2xzIGluY2x1ZGUgYnV0IG5vdCBsaW1pdGVkIHRvOiBhbmFsb2csIHB1bHNlLCBicmlkZ2UsIFNESS0xMiwgYW5kIHNlcmlhbCBwcm90b2NvbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tbXVuaWNhdGlvbnMgZm9yIGRhdGEgdHJhbnNmZXJzIGFuZCByZW1vdGUgbW9uaXRvcmluZyBjYW4gYmUgYWNoaWV2ZWQgdGhyb3VnaCByYWRpbywgaW50ZXJuZXQsIGNlbGx1bGFyIG9yIHNhdGVsbGl0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9ncmFtbWFibGUgdmlhIFB5dGhvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsYXN0PXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvc2NyaWJlX3RlYW0yLmpwZ1wiIGNsYXNzTmFtZT1cImNvbC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\lp800\\OneDrive\\Desktop\\School Stuff\\Q14\\Enterprise 3 - USTAR\\Scribe\\Sribe Website\\Scribe-Site\\components\\About.jsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "about-us",
    className: "jsx-1771547331"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1771547331"
  }, "ABOUT US"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    first: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1771547331"
  }, "The Scribe Datalogger is an easy to use, universal logger designed for scientific and industrial markets, offers real-time data displays, wireless connectivity, cloud data storage, and big data applications Highly adaptable to meet any measurement need including scientific, industrial or military applications Measurement protocols include but not limited to: analog, pulse, bridge, SDI-12, and serial protocols Communications for data transfers and remote monitoring can be achieved through radio, internet, cellular or satellite Programmable via Python")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    last: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/scribe_team2.jpg",
    className: "jsx-1771547331" + " " + "col-image"
  })))));
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
      parralax = _ref.parralax;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: [0, 50]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1697404078"
  }, ".bigvid.jsx-1697404078{width:100%;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXEJpZ1ZpZGVvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJb0IsQUFHMkIsV0FDRyxjQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGxwODAwXFxPbmVEcml2ZVxcRGVza3RvcFxcU2Nob29sIFN0dWZmXFxRMTRcXEVudGVycHJpc2UgMyAtIFVTVEFSXFxTY3JpYmVcXFNyaWJlIFdlYnNpdGVcXFNjcmliZS1TaXRlXFxjb21wb25lbnRzXFxCaWdWaWRlby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZUNvbnN0YW50cyBmcm9tICAnLi4vY29uc3RhbnRzL1N0eWxlQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xyXG5leHBvcnQgZGVmYXVsdCAoe3ZpZGVvU3JjLHBhcnJhbGF4fSkgPT4ge1xyXG4gICAgcmV0dXJuIDxQYXJhbGxheCB5PXtbMCw1MF19PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmJpZ3ZpZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8dmlkZW8gYXV0b1BsYXk9e3RydWV9IG11dGVkPXt0cnVlfSBsb29wPXt0cnVlfSBjbGFzc05hbWU9XCJiaWd2aWRcIj5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9e3ZpZGVvU3JjfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICA8L3ZpZGVvPlxyXG4gICAgPC9QYXJhbGxheD5cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\lp800\\OneDrive\\Desktop\\School Stuff\\Q14\\Enterprise 3 - USTAR\\Scribe\\Sribe Website\\Scribe-Site\\components\\BigVideo.jsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    className: "jsx-1697404078" + " " + "bigvid"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: videoSrc,
    type: "video/mp4",
    className: "jsx-1697404078"
  })));
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["3771438760", [padding]]]) + " " + "col"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3771438760",
        dynamic: [padding]
      }, ".col.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;".concat(padding, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXENvbC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJvQixBQUd1QixpQ0FFWCw2QkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXGxwODAwXFxPbmVEcml2ZVxcRGVza3RvcFxcU2Nob29sIFN0dWZmXFxRMTRcXEVudGVycHJpc2UgMyAtIFVTVEFSXFxTY3JpYmVcXFNyaWJlIFdlYnNpdGVcXFNjcmliZS1TaXRlXFxjb21wb25lbnRzXFxDb2wuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3R5bGVDb25zdGFudHMgZnJvbSAgJy4uL2NvbnN0YW50cy9TdHlsZUNvbnN0YW50cyc7XHJcbmltcG9ydCAncmVhY3QnO1xyXG4vKlxyXG4gICAgVG8gZ2V0IHJpZCBvZiBwYWRkaW5nIG9uIGFwcHJvcHJpYXRlIHNpZGVzLCBcclxuICAgIGFkZCBmaXJzdD17dHJ1ZX0gdG8gdGhlIGZpcnN0IGNvbCwgYW5kIGxhc3Q9e3RydWV9IHRvIHRoZSBsYXN0IGNvbFxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgcGFkZGluZztcclxuICAgICAgICBpZih0aGlzLnByb3BzLmZpcnN0KXtcclxuICAgICAgICAgICAgcGFkZGluZyA9IGBwYWRkaW5nLXJpZ2h0OiAke3N0eWxlQ29uc3RhbnRzLm1hcmdpbk51bSAvIDJ9cHhgO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnByb3BzLmxhc3Qpe1xyXG4gICAgICAgICAgICBwYWRkaW5nID0gYHBhZGRpbmctbGVmdDogJHtzdHlsZUNvbnN0YW50cy5tYXJnaW5OdW0gLyAyfXB4YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nID0gYHBhZGRpbmc6IDAgJHtzdHlsZUNvbnN0YW50cy5tYXJnaW5OdW0gLyAyfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuY29sIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6MTtcclxuICAgICAgICAgICAgICAgICR7cGFkZGluZ31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\lp800\\OneDrive\\Desktop\\School Stuff\\Q14\\Enterprise 3 - USTAR\\Scribe\\Sribe Website\\Scribe-Site\\components\\Col.jsx */")), this.props.children);
    }
  }]);

  return Col;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



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



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1164906927", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"]]]]) + " " + "footer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1164906927",
    dynamic: [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"]]
  }, ".footer.__jsx-style-dynamic-selector{width:100%;height:100.65px;background:#fff;z-index:10101010;".concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], ";}.footer-container.__jsx-style-dynamic-selector{").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXEZvb3Rlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR29CLEFBRzJCLEFBUWYsV0FQb0IsZ0JBQ0EsRUFNbkIsY0FMcUIsaUJBRXRCLDZCQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXEZvb3Rlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZUNvbnN0YW50cyBmcm9tICAnLi4vY29uc3RhbnRzL1N0eWxlQ29uc3RhbnRzJztcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwLjY1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDEwMTAxMDtcclxuICAgICAgICAgICAgICAgICR7c3R5bGVDb25zdGFudHMuc2hhZG93fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICR7c3R5bGVDb25zdGFudHMuY29udGFpbmVyTWFyZ2lufVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHA+U2NyaWJlIFNjaWVuY2VzICYjMTY5OzIwMTkgfCBGYWNlYm9vayB8IFR3aXR0ZXIgfCBMaW5rZWRJbiB8IENvbnRhY3QgVXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\lp800\\OneDrive\\Desktop\\School Stuff\\Q14\\Enterprise 3 - USTAR\\Scribe\\Sribe Website\\Scribe-Site\\components\\Footer.jsx */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1164906927", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"]]]]) + " " + "footer-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1164906927", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"]]]])
  }, "Scribe Sciences \xA92019 | Facebook | Twitter | LinkedIn | Contact Us")));
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1709528068"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1709528068"
  }, "#our-founders.jsx-1709528068{position:relative;display:block;visibility:hidden;top:-101px;}.col-image.jsx-1709528068{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXEZvdW5kZXJzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNb0IsQUFHa0MsQUFNUCxXQUNkLE9BTmlCLGNBQ0ksa0JBQ04sV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXGxwODAwXFxPbmVEcml2ZVxcRGVza3RvcFxcU2Nob29sIFN0dWZmXFxRMTRcXEVudGVycHJpc2UgMyAtIFVTVEFSXFxTY3JpYmVcXFNyaWJlIFdlYnNpdGVcXFNjcmliZS1TaXRlXFxjb21wb25lbnRzXFxGb3VuZGVycy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZUNvbnN0YW50cyBmcm9tICAnLi4vY29uc3RhbnRzL1N0eWxlQ29uc3RhbnRzJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IENvbCBmcm9tICcuL0NvbCdcclxuaW1wb3J0IFJvdyBmcm9tICcuL1JvdydcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAjb3VyLWZvdW5kZXJzIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgIDxhIGlkPVwib3VyLWZvdW5kZXJzXCI+PC9hPlxyXG4gICAgICAgIDxoMT5GT1VOREVSUzwvaDE+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGZpcnN0PXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvUGljdHVyZTEucG5nXCIgY2xhc3NOYW1lPVwiY29sLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+QmVuIEZhc29saTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U29mdHdhcmUgRGV2ZWxvcG1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL1BpY3R1cmUyLmpwZ1wiIGNsYXNzTmFtZT1cImNvbC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlJ5YW4gQmFyZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkJ1c2luZXNzIERldmVsb3BtZW50PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxhc3Q9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9QaWN0dXJlMy5wbmdcIiBjbGFzc05hbWU9XCJjb2wtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5CcmFuZG9uIE1hcnRpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+SGFyZHdhcmUgQ29tbWVyY2lhbGl6YXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\lp800\\OneDrive\\Desktop\\School Stuff\\Q14\\Enterprise 3 - USTAR\\Scribe\\Sribe Website\\Scribe-Site\\components\\Founders.jsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "our-founders",
    className: "jsx-1709528068"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1709528068"
  }, "FOUNDERS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    first: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Picture1.png",
    className: "jsx-1709528068" + " " + "col-image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1709528068"
  }, "Ben Fasoli"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1709528068"
  }, "Software Development")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Picture2.jpg",
    className: "jsx-1709528068" + " " + "col-image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1709528068"
  }, "Ryan Bares"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1709528068"
  }, "Business Development")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    last: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/Picture3.png",
    className: "jsx-1709528068" + " " + "col-image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1709528068"
  }, "Brandon Martin"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1709528068"
  }, "Hardware Commercialization")))));
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761833812", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"]]]]) + " " + "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2761833812",
    dynamic: [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"]]
  }, ".navbar.__jsx-style-dynamic-selector{width:100%;position:fixed;height:73.65px;top:0;background:#fff;z-index:10101010;".concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], ";}.navbar-container.__jsx-style-dynamic-selector{").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], ";}.logo.__jsx-style-dynamic-selector{width:200px;}nav.__jsx-style-dynamic-selector{display:inline-block;float:right;padding-top:30px;}nav.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;color:#222;margin:0 25px;font-family:'Barlow',sans-serif;font-weight:200;").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXE5hdmJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR29CLEFBRzJCLEFBVWYsQUFFaUIsQUFHUSxBQUtBLFdBbkJMLENBWW5CLFNBR2UsS0FkRyxHQVFsQixJQU9vQixRQWRYLE1BQ1UsR0FjbkIsQUFHYyxXQUNHLEVBakJJLFlBa0JnQixLQWhCdEMsMkJBaUJvQixFQWpCbkIsY0FtQkQsNkJBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxscDgwMFxcT25lRHJpdmVcXERlc2t0b3BcXFNjaG9vbCBTdHVmZlxcUTE0XFxFbnRlcnByaXNlIDMgLSBVU1RBUlxcU2NyaWJlXFxTcmliZSBXZWJzaXRlXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcTmF2YmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0eWxlQ29uc3RhbnRzIGZyb20gICcuLi9jb25zdGFudHMvU3R5bGVDb25zdGFudHMnO1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo3My42NXB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDEwMTAxMDtcclxuICAgICAgICAgICAgICAgICR7c3R5bGVDb25zdGFudHMuc2hhZG93fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICR7c3R5bGVDb25zdGFudHMuY29udGFpbmVyTWFyZ2lufVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmF2IGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiMyMjI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6MjAwO1xyXG4gICAgICAgICAgICAgICAgJHtzdHlsZUNvbnN0YW50cy5oZWFkaW5nU2l6ZTF9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiLz48L2E+XHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0LXVzXCI+QWJvdXQgVXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI291ci1mb3VuZGVyc1wiPk91ciBGb3VuZGVyczwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjb3VyLXByb2R1Y3RcIj5PdXIgUHJvZHVjdDwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\lp800\\OneDrive\\Desktop\\School Stuff\\Q14\\Enterprise 3 - USTAR\\Scribe\\Sribe Website\\Scribe-Site\\components\\Navbar.jsx */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761833812", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"]]]]) + " " + "navbar-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761833812", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"]]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/logo.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761833812", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"]]]]) + " " + "logo"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761833812", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"]]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#about-us",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761833812", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"]]]])
  }, "About Us"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#our-founders",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761833812", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"]]]])
  }, "Our Founders"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#our-product",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761833812", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["containerMargin"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_2__["headingSize1"]]]])
  }, "Our Product"))));
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-426801067" + " " + "product"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "426801067"
  }, "#our-product.jsx-426801067{position:relative;display:block;visibility:hidden;top:-101px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXFByb2R1Y3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1vQixBQUdrQyxrQkFDSixjQUNJLGtCQUNOLFdBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxscDgwMFxcT25lRHJpdmVcXERlc2t0b3BcXFNjaG9vbCBTdHVmZlxcUTE0XFxFbnRlcnByaXNlIDMgLSBVU1RBUlxcU2NyaWJlXFxTcmliZSBXZWJzaXRlXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcUHJvZHVjdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZUNvbnN0YW50cyBmcm9tICAnLi4vY29uc3RhbnRzL1N0eWxlQ29uc3RhbnRzJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcclxuaW1wb3J0IFJvdyBmcm9tICcuL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAnLi9Db2wnO1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAjb3VyLXByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xMDFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICA8YSBpZD1cIm91ci1wcm9kdWN0XCI+PC9hPlxyXG4gICAgICAgICAgICA8aDE+T1VSIFBST0RVQ1Q8L2gxPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBmaXJzdD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICA8aDI+IFNjcmliZSBEYXRhbG9nZ2VyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DbG91ZCBCYXNlZCBTZXJ2aWNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZWFsIFRpbWUgVmlzdWFsaXphdGlvbiBUb29sczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FYXN5IHRvIFVzZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Mb3cgQ29zdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Nb3JlIENvbXB1dGluZyBQb3dlciBhbmQgTWVtb3J5PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxhc3Q9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dnZXIucG5nXCIgY2xhc3NOYW1lPVwiY29sLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\lp800\\OneDrive\\Desktop\\School Stuff\\Q14\\Enterprise 3 - USTAR\\Scribe\\Sribe Website\\Scribe-Site\\components\\Product.jsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "our-product",
    className: "jsx-426801067"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-426801067"
  }, "OUR PRODUCT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    first: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-426801067"
  }, " Scribe Datalogger"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-426801067"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-426801067"
  }, "Cloud Based Services"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-426801067"
  }, "Real Time Visualization Tools"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-426801067"
  }, "Easy to Use"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-426801067"
  }, "Low Cost"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-426801067"
  }, "More Computing Power and Memory"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    last: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/logger.png",
    className: "jsx-426801067" + " " + "col-image"
  })))));
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
        className: "jsx-314506503" + " " + "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "314506503"
      }, ".row.jsx-314506503{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXFJvdy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS29CLEFBRzZCLDBFQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXGxwODAwXFxPbmVEcml2ZVxcRGVza3RvcFxcU2Nob29sIFN0dWZmXFxRMTRcXEVudGVycHJpc2UgMyAtIFVTVEFSXFxTY3JpYmVcXFNyaWJlIFdlYnNpdGVcXFNjcmliZS1TaXRlXFxjb21wb25lbnRzXFxSb3cuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3R5bGVDb25zdGFudHMgZnJvbSAgJy4uL2NvbnN0YW50cy9TdHlsZUNvbnN0YW50cyc7XHJcbmltcG9ydCAncmVhY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\lp800\\OneDrive\\Desktop\\School Stuff\\Q14\\Enterprise 3 - USTAR\\Scribe\\Sribe Website\\Scribe-Site\\components\\Row.jsx */"), this.props.children);
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1913560847", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["colors"].colorWhite, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerPadding"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerMargin"]]]]) + " " + "section-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1913560847",
        dynamic: [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["colors"].colorWhite, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerPadding"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerMargin"]]
      }, ".section-container.__jsx-style-dynamic-selector{background:".concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["colors"].colorWhite, ";width:100%;z-index:10;position:absolute;").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerPadding"], " ").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["shadow"], ";}.section-inner.__jsx-style-dynamic-selector{").concat(_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerMargin"], ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXGNvbXBvbmVudHNcXFNlY3Rpb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtvQixBQUd3RCxBQVM1Qyw2QkFBQyxXQVJjLFdBQ0EsV0FDUSxrQkFHdkIsMERBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxscDgwMFxcT25lRHJpdmVcXERlc2t0b3BcXFNjaG9vbCBTdHVmZlxcUTE0XFxFbnRlcnByaXNlIDMgLSBVU1RBUlxcU2NyaWJlXFxTcmliZSBXZWJzaXRlXFxTY3JpYmUtU2l0ZVxcY29tcG9uZW50c1xcU2VjdGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZUNvbnN0YW50cyBmcm9tICAnLi4vY29uc3RhbnRzL1N0eWxlQ29uc3RhbnRzJztcclxuaW1wb3J0ICdyZWFjdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnNlY3Rpb24tY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDoke3N0eWxlQ29uc3RhbnRzLmNvbG9ycy5jb2xvcldoaXRlfTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OjEwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgJHtzdHlsZUNvbnN0YW50cy5jb250YWluZXJQYWRkaW5nfVxyXG4gICAgICAgICAgICAgICAgJHtzdHlsZUNvbnN0YW50cy5zaGFkb3d9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlY3Rpb24taW5uZXJ7XHJcbiAgICAgICAgICAgICAgICAke3N0eWxlQ29uc3RhbnRzLmNvbnRhaW5lck1hcmdpbn1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\lp800\\OneDrive\\Desktop\\School Stuff\\Q14\\Enterprise 3 - USTAR\\Scribe\\Sribe Website\\Scribe-Site\\components\\Section.jsx */")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1913560847", [_constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["colors"].colorWhite, _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerPadding"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["shadow"], _constants_StyleConstants__WEBPACK_IMPORTED_MODULE_7__["containerMargin"]]]]) + " " + "section-inner"
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
/*! exports provided: colors, marginNum, containerMargin, containerPadding, headingSize1, shadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginNum", function() { return marginNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerMargin", function() { return containerMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerPadding", function() { return containerPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headingSize1", function() { return headingSize1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ "./constants/Color.js");

var colors = _Color__WEBPACK_IMPORTED_MODULE_0__;
var marginNum = 50;
var containerMargin = "margin: 0 ".concat(marginNum, "px;");
var containerPadding = "padding: ".concat(marginNum, "px 0;");
var headingSize1 = "font-size:1.35em;";
var shadow = "box-shadow: 0 0 10px rgba(2,2,2,.5);";

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
  }, "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}body{margin:0;background:#eee;font-family:'Barlow',sans-serif;font-weight:200;}h1,h2{font-family:'Barlow',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbHA4MDBcXE9uZURyaXZlXFxEZXNrdG9wXFxTY2hvb2wgU3R1ZmZcXFExNFxcRW50ZXJwcmlzZSAzIC0gVVNUQVJcXFNjcmliZVxcU3JpYmUgV2Vic2l0ZVxcU2NyaWJlLVNpdGVcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXK0IsQUFHNEMsQUFHZCxBQU13QixTQUxsQixnQkFDa0IsT0FLckMseUJBSm1CLGdCQUNuQixvQ0FOQSIsImZpbGUiOiJDOlxcVXNlcnNcXGxwODAwXFxPbmVEcml2ZVxcRGVza3RvcFxcU2Nob29sIFN0dWZmXFxRMTRcXEVudGVycHJpc2UgMyAtIFVTVEFSXFxTY3JpYmVcXFNyaWJlIFdlYnNpdGVcXFNjcmliZS1TaXRlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IEJpZ1ZpZGVvIGZyb20gJy4uL2NvbXBvbmVudHMvQmlnVmlkZW8nO1xyXG5pbXBvcnQgeyBQYXJhbGxheFByb3ZpZGVyIH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4JztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQnO1xyXG5pbXBvcnQgRm91bmRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3VuZGVycyc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYXJhbGxheFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDoyMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMSxoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8SGVhZC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDotMTUwfX0+XHJcbiAgICAgICAgICAgICAgICA8QmlnVmlkZW8gdmlkZW9TcmM9e1wiL3N0YXRpYy9CbHVlIFNreSBWaWRlb18xLm1wNFwifSBpbmRleD17MH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBYm91dCAvPlxyXG4gICAgICAgICAgICA8QmlnVmlkZW8gdmlkZW9TcmM9e1wiL3N0YXRpYy9CbHVlIFNreSBWaWRlb18yLm1wNFwifSBpbmRleD17LTF9IGhlaWdodD17MjAwfSAvPlxyXG4gICAgICAgICAgICA8Rm91bmRlcnMgLz5cclxuICAgICAgICAgICAgPEJpZ1ZpZGVvIHZpZGVvU3JjPXtcIi9zdGF0aWMvQmx1ZSBTa3kgVmlkZW9fMS5tcDRcIn0gaW5kZXg9ezB9Lz5cclxuICAgICAgICAgICAgPFByb2R1Y3QgLz4gICAgXHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1BhcmFsbGF4UHJvdmlkZXI+KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\lp800\\OneDrive\\Desktop\\School Stuff\\Q14\\Enterprise 3 - USTAR\\Scribe\\Sribe Website\\Scribe-Site\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: -150
    },
    className: "jsx-2731717803"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BigVideo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    videoSrc: "/static/Blue Sky Video_1.mp4",
    index: 0
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BigVideo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    videoSrc: "/static/Blue Sky Video_2.mp4",
    index: -1,
    height: 200
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Founders__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BigVideo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    videoSrc: "/static/Blue Sky Video_1.mp4",
    index: 0
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Product__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lp800\OneDrive\Desktop\School Stuff\Q14\Enterprise 3 - USTAR\Scribe\Sribe Website\Scribe-Site\pages\index.js */"./pages/index.js");


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