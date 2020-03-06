module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Footer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer-area ptb-100 pb-0 bg-image"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "logo"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/logo2.png */ "./images/logo2.png"),
        alt: "logo2"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "social-list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-facebook"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-twitter"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-instagram"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-linkedin"
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget pl-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Company"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "About"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Carrers"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Awards"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "User Program"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#"
      }, "Locations"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Login")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Products"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Integrations"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "API"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Pricing"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Documentation"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Release Notes")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-footer-widget"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Support"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "About"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Contact"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "FAQ"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Press")))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "copyright-area"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Copyright @ 2019 Crake. All rights reserved")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Terms & Conditions"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Privacy Policy")))))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layouts/Navbar.js":
/*!**************************************!*\
  !*** ./components/Layouts/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SideDrawer */ "./components/Layouts/SideDrawer.js");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SearchForm */ "./components/Layouts/SearchForm.js");














var Navbar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar, _React$Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_isMounted", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      drawer: false,
      searchForm: false,
      collapsed: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDrawer", function () {
      _this.setState(function (prevState) {
        return {
          drawer: !prevState.drawer
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearchForm", function () {
      _this.setState(function (prevState) {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pathname = this.props.router.pathname;
      var products = this.props.products;
      var layOutCls = '';

      var logo = __webpack_require__(/*! ../../images/logoComparateur.png */ "./images/logoComparateur.png");

      if (pathname == '/digital-marketing') {
        layOutCls = 'marketing-navbar';
        logo = __webpack_require__(/*! ../../images/logo2.png */ "./images/logo2.png");
      }

      var collapsed = this.state.collapsed;
      var classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      var classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        id: "header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "navbar",
        className: "crake-nav ".concat(layOutCls)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "navbar navbar-expand-md navbar-light"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/saas"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "hero-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        style: {
          color: "#fff",
          fontSize: "31px",
          fontWeight: 700
        }
      }, "Le Comparateur.com"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classOne,
        id: "navbarSupportedContent"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "navbar-nav nav ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link",
        style: {
          fontWeight: "700"
        }
      }, "Assurance emprunteur")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/saas"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "SaaS Landing"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/app"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "App Landing"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/digital-marketing"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Digital Marketing"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/product-landing"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Product Landing"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/software-landing"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Software Landing"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/book-landing"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Book Landing"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/agency"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Startup Agency"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/payment-processing"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Payment Processing"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "nav-link",
        style: {
          fontWeight: "700"
        }
      }, "Pr\xEAt immobilier"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/about/about-one"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "About Us 1"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/about/about-two"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "About Us 2"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/features"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Features"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/services"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Services"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/gallery"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Gallery"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link"
      }, "Team")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/team/team-one"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Team 1"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/team/team-two"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Team 2"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link"
      }, "Pricing")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/pricing/pricing-one"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Pricing 1"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/pricing/pricing-two"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Pricing 2"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/pricing/pricing-three"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Pricing 3"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link"
      }, "Shop")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/shop-one"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Shop 1"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/shop-two"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Shop 2"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/shop-details"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Shop Details"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/cart"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Cart"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/checkout"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Checkout"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link"
      }, "Blog")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "dropdown_menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/blog/blog-one"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Blog 1"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/blog/blog-two"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Blog 2"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/blog/blog-details"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Blog Details"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/login"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Login"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/signup"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/coming-soon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Coming Soon"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/error"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "404 Error"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/faq"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "FAQ"))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mr-auto others-option"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "navbar-nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item cart-wrapper"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "header-search-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.handleSearchForm();
        },
        title: "Search"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-search-2"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        onClick: this.handleDrawer
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "side-menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "bar-1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "bar-2"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "bar-3"
      }))))))))), this.state.drawer ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SideDrawer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClick: this.handleDrawer
      }) : '', this.state.searchForm ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SearchForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.handleSearchForm
      }) : '');
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Navbar)));

/***/ }),

/***/ "./components/Layouts/SearchForm.js":
/*!******************************************!*\
  !*** ./components/Layouts/SearchForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var SearchForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchForm, _Component);

  function SearchForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      searchForm: false,
      term: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeSearchForm", function () {
      _this.props.onClick(_this.state.searchForm);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearch", function (e) {
      e.preventDefault();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "header-search",
        className: "header-search open"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        onClick: this.closeSearchForm,
        className: "close"
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSearch,
        className: "header-search-form"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        placeholder: "Type here........",
        value: this.state.term,
        onChange: function onChange(e) {
          return _this2.setState({
            term: e.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Search")));
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ }),

/***/ "./components/Layouts/SideDrawer.js":
/*!******************************************!*\
  !*** ./components/Layouts/SideDrawer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);










var SideDrawer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SideDrawer, _React$Component);

  function SideDrawer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SideDrawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SideDrawer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      drawer: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeDrawer", function () {
      _this.props.onClick(_this.state.drawer);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SideDrawer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sidebar-modal"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "modal right fade show",
        style: {
          display: "block",
          paddingRight: "16px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "modal-header"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        onClick: this.closeDrawer
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        "aria-hidden": "true"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-close"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "modal-title",
        id: "myModalLabel2"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
        alt: "logo"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "modal-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sidebar-modal-widget"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "title"
      }, "Additional Links"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/login"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "Login"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/signup"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "Register"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/faq"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "FAQ"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "Logout"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sidebar-modal-widget"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "title"
      }, "Contact Info"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "contact-info"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-google-map"
      }), "Address", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "1660 Travis Street Miramar, FL 33025, California")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-email"
      }), "Email", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "admin@crake.com")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-phone"
      }), "Phone", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "+123 456 7890")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sidebar-modal-widget"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "title"
      }, "Connect With Us"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "social-list"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-facebook"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-twitter"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-instagram"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-linkedin"
      })))))))))));
    }
  }]);

  return SideDrawer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SideDrawer);

/***/ }),

/***/ "./components/Saas/Banner.js":
/*!***********************************!*\
  !*** ./components/Saas/Banner.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal-video */ "react-modal-video");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__);











var isServer = typeof window === 'undefined';
var WOW = !isServer ? __webpack_require__(/*! wowjs */ "wowjs") : null;

var Banner = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Banner, _React$Component);

  function Banner() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openModal", function () {
      _this.setState({
        isOpen: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 20,
        mobile: true,
        live: true
      }).init();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main-banner saas-home"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-table"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-table-cell"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "saas-image"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/arrow.png */ "./images/saas-shape/arrow.png"),
        className: "wow fadeInDown",
        alt: "arrow"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/box1.png */ "./images/saas-shape/box1.png"),
        className: "wow fadeInUp",
        "data-wow-delay": "0.6s",
        alt: "box1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/boy1.png */ "./images/saas-shape/boy1.png"),
        className: "wow fadeInLeft",
        "data-wow-delay": "0.6s",
        alt: "boy1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/boy2.png */ "./images/saas-shape/boy2.png"),
        className: "wow zoomIn",
        "data-wow-delay": "0.6s",
        alt: "boy2"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/boy3.png */ "./images/saas-shape/boy3.png"),
        className: "wow bounceIn",
        "data-wow-delay": "0.6s",
        alt: "boy3"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/digital-screen.png */ "./images/saas-shape/digital-screen.png"),
        className: "wow fadeInDown",
        "data-wow-delay": "0.6s",
        alt: "digital-screen"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/filter1.png */ "./images/saas-shape/filter1.png"),
        className: "wow zoomIn",
        "data-wow-delay": "0.6s",
        alt: "filter1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/filter2.png */ "./images/saas-shape/filter2.png"),
        className: "wow fadeInUp",
        "data-wow-delay": "0.6s",
        alt: "filter2"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/filter3.png */ "./images/saas-shape/filter3.png"),
        className: "wow rotateIn",
        "data-wow-delay": "0.6s",
        alt: "filter3"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/girl1.png */ "./images/saas-shape/girl1.png"),
        className: "wow fadeInUp",
        "data-wow-delay": "0.6s",
        alt: "girl1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/girl2.png */ "./images/saas-shape/girl2.png"),
        className: "wow zoomIn",
        "data-wow-delay": "0.6s",
        alt: "girl2"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/monitor.png */ "./images/saas-shape/monitor.png"),
        className: "wow zoomIn",
        "data-wow-delay": "0.6s",
        alt: "monitor"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/saas-shape/main-image.png */ "./images/saas-shape/main-image.png"),
        className: "wow zoomIn",
        "data-wow-delay": "0.6s",
        alt: "main-image.png"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "hero-content pl-4"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Comparez et \xE9conomisez en toute simplicit\xE9"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "btn btn-primary",
        style: {
          width: "50vh",
          fontWeight: 700
        }
      }, "Assurance emprunteur")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "btn btn-primary",
        style: {
          width: "50vh"
        }
      }, "Pr\xEAt immobilier")))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "bg-gray shape-1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "shape1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape1.png */ "./images/shape1.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "shape2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape2.png */ "./images/shape2.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "shape3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape3.png */ "./images/shape3.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "shape4 rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape4.png */ "./images/shape4.png"),
        alt: "img"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_modal_video__WEBPACK_IMPORTED_MODULE_9___default.a, {
        channel: "youtube",
        isOpen: this.state.isOpen,
        videoId: "szuchBiLrEM",
        onClose: function onClose() {
          return _this2.setState({
            isOpen: false
          });
        }
      }));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Saas/CtaCard.js":
/*!************************************!*\
  !*** ./components/Saas/CtaCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var CtaCard = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CtaCard, _React$Component);

  function CtaCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CtaCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CtaCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CtaCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "cta-area"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-7 col-md-7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Want a bite? You're in the right place!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-5 col-md-5 text-right"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Take a Test Drive"))))));
    }
  }]);

  return CtaCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CtaCard);

/***/ }),

/***/ "./components/Saas/Features.js":
/*!*************************************!*\
  !*** ./components/Saas/Features.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var Features = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Features, _React$Component);

  function Features() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Features);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Features).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Features, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "features-area saas-features ptb-100"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Our Amazing Features"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-features"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-lock"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Quick Access"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-features"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-heart-eyes"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Easily Manage"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-features"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-lock"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Safty"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-features"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-camera"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Camera Filter"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-features"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-responsive"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Fast and optimized"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-features"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-hand-drag1"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Drag and Drop"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "features-inner-area"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "features-image"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/features-img1.png */ "./images/features-img1.png"),
        alt: "image feature"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "features-inner-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "features-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-ui-call"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Free Caliing Service"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "features-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-gift"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Daily Free Gift"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "features-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-qr-code"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "QR Code Scaner"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape7.png */ "./images/shape7.png"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape3.png */ "./images/shape3.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bg-gray shape-1"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape6.png */ "./images/shape6.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape8 rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape8.svg */ "./images/shape8.svg"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape9"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape9.svg */ "./images/shape9.svg"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape10"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape10.svg */ "./images/shape10.svg"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape11 rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape11.svg */ "./images/shape11.svg"),
        alt: "shape"
      })));
    }
  }]);

  return Features;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./components/Saas/Feedback.js":
/*!*************************************!*\
  !*** ./components/Saas/Feedback.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);










var OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")];
    },
    modules: ['react-owl-carousel3']
  }
});
var options = {
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  center: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

var Feedback = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Feedback, _React$Component);

  function Feedback() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Feedback);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Feedback)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      display: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Feedback, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        display: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "feedback-area ptb-100 bg-gray"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "Testimonials"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, this.state.display ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OwlCarousel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "feedback-slides owl-carousel owl-theme"
      }, options), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-feedback"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "client-info"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/client1.jpg */ "./images/client1.jpg"),
        alt: "client"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Alit John"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Web Developer")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-feedback"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "client-info"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/client2.jpg */ "./images/client2.jpg"),
        alt: "client"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Alit John"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "SEO Expert")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-feedback"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "client-info"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/client3.jpg */ "./images/client3.jpg"),
        alt: "client"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Steven John"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Web Developer")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-feedback"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "client-info"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/client4.jpg */ "./images/client4.jpg"),
        alt: "client"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "David Warner"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Web Developer")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual.")))) : '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        className: "svg-feedback-bottom",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 100",
        preserveAspectRatio: "none"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        d: "M0,70 C30,130 70,50 100,70 L100,100 0,100 Z",
        fill: "#ffffff"
      })));
    }
  }]);

  return Feedback;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Feedback);

/***/ }),

/***/ "./components/Saas/Funfact.js":
/*!************************************!*\
  !*** ./components/Saas/Funfact.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__);












var Funfact = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Funfact, _React$Component);

  function Funfact() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Funfact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Funfact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      didViewCountUp: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onVisibilityChange", function (isVisible) {
      if (isVisible) {
        _this.setState({
          didViewCountUp: true
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Funfact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "fun-facts-area ptb-100"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-funfact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-users"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "count"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onChange: this.onVisibilityChange,
        offset: {
          top: 10
        },
        delayedCall: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_9___default.a, {
        start: 0,
        end: this.state.didViewCountUp ? 806 : 0,
        duration: 3
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Satisfied Client"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-funfact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-thumbs-up"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "count"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onChange: this.onVisibilityChange,
        offset: {
          top: 10
        },
        delayedCall: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_9___default.a, {
        start: 0,
        end: this.state.didViewCountUp ? 202 : 0,
        duration: 3
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Appriciation"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-funfact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-diamond"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "count"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onChange: this.onVisibilityChange,
        offset: {
          top: 10
        },
        delayedCall: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_9___default.a, {
        start: 0,
        end: this.state.didViewCountUp ? 5241 : 0,
        duration: 3
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Response time"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-funfact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-wrench"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "count"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onChange: this.onVisibilityChange,
        offset: {
          top: 10
        },
        delayedCall: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_9___default.a, {
        start: 0,
        end: this.state.didViewCountUp ? 512 : 0,
        duration: 3
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Data Entry"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "fun-facts-inner-area"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "fun-facts-image"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/features-img2.png */ "./images/features-img2.png"),
        alt: "image"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "fun-facts-inner-content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Build Beautiful Interface Into Your Application"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Funding freemium technology focus equity bootstrapping usernce niche market. Seed round agile development growth hacking retur investment alpha. Investor advisor marketing pitch gen scrum project."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Responsive web design. Agile development innovator termsheet is users interface pitch scrum project research & development."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Unimited Video Call"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Add Favourite contact"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, "Camera Filter")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Read More"))))))));
    }
  }]);

  return Funfact;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Funfact);

/***/ }),

/***/ "./components/Saas/GetStarted.js":
/*!***************************************!*\
  !*** ./components/Saas/GetStarted.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var GetStarted = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GetStarted, _React$Component);

  function GetStarted() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GetStarted);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GetStarted).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GetStarted, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "get-started ptb-100"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Get Started Free"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "get-started-form"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Name"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        placeholder: "Email"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        placeholder: "Password"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Or use your ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Facebook Account")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("canvas", {
        id: "canvas"
      }));
    }
  }]);

  return GetStarted;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GetStarted);

/***/ }),

/***/ "./components/Saas/JoinCard.js":
/*!*************************************!*\
  !*** ./components/Saas/JoinCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var JoinCard = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(JoinCard, _React$Component);

  function JoinCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, JoinCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(JoinCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(JoinCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "join-area ptb-100"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "join-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/3.png */ "./images/3.png"),
        alt: "img"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "join-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "Start 30 Days Free Trial"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Overall 400k+ Our Clients! Please Get Start Now"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Join Now")))))));
    }
  }]);

  return JoinCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (JoinCard);

/***/ }),

/***/ "./components/Saas/Overview.js":
/*!*************************************!*\
  !*** ./components/Saas/Overview.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Overview = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Overview, _React$Component);

  function Overview() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Overview);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Overview).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Overview, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "overview-section ptb-100 bg-gray"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "More to Discover"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overview-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 overview-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/overview-1.png */ "./images/overview-1.png"),
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 overview-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-power"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Getting started page"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Unimited Video Call"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Add Favourite contact"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Camera Filter")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Read More"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overview-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 overview-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-anchor"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Outdated comments toggling"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Unimited Video Call"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Add Favourite contact"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Camera Filter")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Read More"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 app-fetured-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app-item item-one"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-wink-smile"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", null, "Community")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app-item item-two"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-ebook"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", null, "Honest pricing")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app-item item-three"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-wink-smile"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", null, "Management")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app-item item-four"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-stock-mobile"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", null, "Mobile Design"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overview-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 overview-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/overview-3.png */ "./images/overview-3.png"),
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 overview-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-users-social"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Code review illustrations"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Unimited Video Call"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Add Favourite contact"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Camera Filter")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Read More"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overview-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 overview-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-ui-messaging"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "We provide proffesional staff"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Unimited Video Call"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Add Favourite contact"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Camera Filter")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Read More"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 overview-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/overview-4.png */ "./images/overview-4.png"),
        alt: "image"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape7.png */ "./images/shape7.png"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape3.png */ "./images/shape3.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bg-gray shape-1"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape6.png */ "./images/shape6.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape8 rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape8.svg */ "./images/shape8.svg"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape9"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape9.svg */ "./images/shape9.svg"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape10"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape10.svg */ "./images/shape10.svg"),
        alt: "shape"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape11 rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape11.svg */ "./images/shape11.svg"),
        alt: "shape"
      })));
    }
  }]);

  return Overview;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Overview);

/***/ }),

/***/ "./components/Saas/Partner.js":
/*!************************************!*\
  !*** ./components/Saas/Partner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);











var OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")];
    },
    modules: ['react-owl-carousel3']
  }
});
var options = {
  autoplay: true,
  nav: false,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  loop: true,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
};

var Partner = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Partner, _React$Component);

  function Partner() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Partner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Partner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      display: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Partner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        display: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "partner-area"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, this.state.display ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OwlCarousel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "partner-slides owl-carousel owl-theme"
      }, options), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/partner-1.png */ "./images/partner-1.png"),
        alt: "partner"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/partner-2.png */ "./images/partner-2.png"),
        alt: "partner"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/partner-3.png */ "./images/partner-3.png"),
        alt: "partner"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/partner-4.png */ "./images/partner-4.png"),
        alt: "partner"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/partner-5.png */ "./images/partner-5.png"),
        alt: "partner"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/partner-6.png */ "./images/partner-6.png"),
        alt: "partner"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/partner-7.png */ "./images/partner-7.png"),
        alt: "partner"
      })))))) : '')));
    }
  }]);

  return Partner;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Partner);

/***/ }),

/***/ "./components/Saas/PricingPlan.js":
/*!****************************************!*\
  !*** ./components/Saas/PricingPlan.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var PricingPlan = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PricingPlan, _React$Component);

  function PricingPlan() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PricingPlan);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PricingPlan).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PricingPlan, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "pricing-area ptb-100 bg-gray"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Easy Pricing Plans"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricingTable"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricing-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-globe"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-Value"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "currency"
      }, "$"), "15"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "month"
      }, "/Month"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricingHeader"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "title"
      }, "Personal")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricing-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Send 5 invoices and quotes"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "2 Clients and Products"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Invoicing and Payments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Enter 5 bills"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Data Security and Backups"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Unlimited Staff Accounts"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Web Booking Widget"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Monthly Reports and Analytics"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "24/7 Support"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Get Started")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricingTable"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricing-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-globe"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-Value"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "currency"
      }, "$"), "39"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "month"
      }, "/Month"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricingHeader"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "title"
      }, "Business")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricing-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Send 5 invoices and quotes"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "2 Clients and Products"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Invoicing and Payments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Enter 5 bills"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Data Security and Backups"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Unlimited Staff Accounts"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Web Booking Widget"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Monthly Reports and Analytics"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "24/7 Support"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Get Started")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricingTable"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricing-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-globe"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-Value"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "currency"
      }, "$"), "99"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "month"
      }, "/Month"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricingHeader"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "title"
      }, "Enterprise")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricing-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Send 5 invoices and quotes"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "2 Clients and Products"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Invoicing and Payments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Enter 5 bills"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Data Security and Backups"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Unlimited Staff Accounts"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Web Booking Widget"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "Monthly Reports and Analytics"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active"
      }, "24/7 Support"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Get Started")))))));
    }
  }]);

  return PricingPlan;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PricingPlan);

/***/ }),

/***/ "./components/Saas/SaasTools.js":
/*!**************************************!*\
  !*** ./components/Saas/SaasTools.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);










var SaasTools = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SaasTools, _React$Component);

  function SaasTools() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SaasTools);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SaasTools)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openTabSection", function (evt, tabNmae) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs_item");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      evt.currentTarget.className += "current";
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SaasTools, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "saas-tools ptb-100 bg-gray"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "Tools for Everyone"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "tabs active"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "current",
        onClick: function onClick(e) {
          return _this2.openTabSection(e, 'tab1');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-dashboard-web"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        onClick: function onClick(e) {
          return _this2.openTabSection(e, 'tab2');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-inbox"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "Inbox"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        onClick: function onClick(e) {
          return _this2.openTabSection(e, 'tab3');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-calendar"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "Calendar"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        onClick: function onClick(e) {
          return _this2.openTabSection(e, 'tab4');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-copy-invert"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "Invoicing"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        onClick: function onClick(e) {
          return _this2.openTabSection(e, 'tab5');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-wrench"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), "Reporting")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab_content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "tab1",
        className: "tabs_item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs_item_content mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Creative Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Retina Ready"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Modern Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Digital Marketing & Branding")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs_item_img"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/features-img1.png */ "./images/features-img1.png"),
        alt: "img"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "tab2",
        className: "tabs_item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs_item_img"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/features-img1.png */ "./images/features-img1.png"),
        alt: "img"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs_item_content mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Inbox"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Creative Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Retina Ready"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Modern Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Digital Marketing & Branding")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "tab3",
        className: "tabs_item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs_item_content mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Calendar"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Creative Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Retina Ready"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Modern Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Digital Marketing & Branding")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs_item_img"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/features-img1.png */ "./images/features-img1.png"),
        alt: "img"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "tab4",
        className: "tabs_item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs_item_img"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/features-img1.png */ "./images/features-img1.png"),
        alt: "img"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs_item_content mb-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Invoicing"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Creative Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Retina Ready"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Modern Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Digital Marketing & Branding")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "tab5",
        className: "tabs_item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs_item_content mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Reporting"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Creative Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Retina Ready"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Modern Design"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-ui-check"
      }), " Digital Marketing & Branding")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-6 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tabs_item_img"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/features-img1.png */ "./images/features-img1.png"),
        alt: "img"
      })))))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "shape1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape1.png */ "./images/shape1.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "shape2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape2.png */ "./images/shape2.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "shape3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape3.png */ "./images/shape3.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "shape6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape6.png */ "./images/shape6.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "shape8 rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape8.svg */ "./images/shape8.svg"),
        alt: "shape"
      })));
    }
  }]);

  return SaasTools;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SaasTools);

/***/ }),

/***/ "./components/Saas/WorkProcess.js":
/*!****************************************!*\
  !*** ./components/Saas/WorkProcess.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var WorkProcess = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WorkProcess, _React$Component);

  function WorkProcess() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WorkProcess);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WorkProcess).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WorkProcess, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "saas-work-process ptb-100"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Work Process"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-work-process"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-calendar"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Plan"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Morbi pharetra sapien ut mattis."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-work-process"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-code-alt"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Develop"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Morbi pharetra sapien ut mattis."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-work-process"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-server"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Lounch"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Morbi pharetra sapien ut mattis."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-work-process"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-check"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Reporting"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Morbi pharetra sapien ut mattis."))))));
    }
  }]);

  return WorkProcess;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WorkProcess);

/***/ }),

/***/ "./images/3.png":
/*!**********************!*\
  !*** ./images/3.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/client1.jpg":
/*!****************************!*\
  !*** ./images/client1.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBDgEOAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKqvqNpHKY2nUMDg9ePxp897b2u3zpNu77vBOfyoAnoql/a9j/wA9/wDxxv8ACrE9zDbJumkCA9M96AJaKjguIrhN8Lh16cVJQAUUUUAFFQT3tvbECaUKT0GCT+lOFxC0BnVwYwCSwoAloql/a9j/AM9//HG/wqxDcw3ERkifKA4JIIx+dAEtFVor+1ml8uOZS/p61ZoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKZKGMLhPv7Tt+tPpCQoJJwByaAKUNlBBp2ydEHy5kY+v1o01BLpsHmoGIBxuGeM1EkUmqHzZmKWufkjHVvc1oMVhhLYwiLnA7AUAUJIYrnUFhWNBFBh5CFxluwpyotxrExkAZYEUKD0BPOadpSH7IZm+/Mxc0kJEes3KHjzUVl98cUAJsW31hPLAVZ4zuA6ZHOavPu2NsxvxxnpmqUp8zWoFXnyo2ZvbPFX6AM0aofsDSMgFwreX5f8AtVfi8zyl83b5mPm29M1hvIn9qfbfL/0cSBC3q2Otb9AFO3tMXNxNOiszt8pPOFqKwVBdX0cYBh3DA7ZxzSzvPeXD20D+XEnEsg659BVu3t47WERRLhR+ZNAFe+8q3t8pBGZXIRBtHU1BdQC102K1Q4MkioxHfPWpGP2jWlT+G3Tdj/aP/wBal1X5YIpecRSq5+lABqFrEunsY0VGiG5CByMVchfzII5P7yg/mKralKqadKc53rtXHfNWIEMdvEh6qgH6UASUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU2RBLE8ZJAYFSR15p1FAGcNGhAwLi5AHYOP8ACrK2iCzNtvkKkEFifm5qxRQAyKNYYkjXO1AAM1FdWcV2F8zcGX7rKcEVYooAr21nFaBvLBLNyzMck1NInmRsm5l3DGV6inUUAVxZQiy+y4Pl4x7/AF+tSwxiGFIwzMFGAW60+igCg+kxPK8nnTqXYsQrAD+VTWtmloWKySvux99s4qzRQBDFbJFPLMCxeXGcnpj0qR0WRGRwCrDBBp1FAFGLSreKRXzI205VWbIWr1FFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRVSSeZDO4MeyJgNpU5Pyg9c+/pQBboqD7Uvmbdr7d2zfj5c+n58U4XEe4KSQxcoAfUUAS0VB9pXahVHYvnaoAyQO/0/xoa6RY43Cu3mNtCgc55/wNAE9FQNdKpOY3woG84GEz68/yzUd5c7IJ1RZCyocuv8JxxQBboqG7YrZzspIIjYgjtxQlwHJHlyK23cAwGWHtQBNRUSzo/lbcnzBkY7D3pstwkM8ayOiIyscsccgj/E0AT0VWW4M8rpbyxEKqndjd13ZHBHoKjE9z9hWfMTPIE2rtIA3EDnnnrQBdoqnJeHEBiAO8rv3fwgsB+eT+hqxHIXkmU4wj7R/3yD/WgCSioppGjChAC7ttXPT1/kDSb5IopHmKMFXdlAR9e9AE1FVvMuI9jyiPYxClVByueBz35+lMjvDicygDYW2Y/iAJH55H6igC5RUNrJJLAGlCh9zKQvTgkf0qagAooooAKKKKACiiigAooooAKKKKACiiigAqFbWITSSsiM7MCCVGRwBjP4VNRQBX+zNux5n7rf5mzbznOevpnmmyWe+WSQSEMwG3j7p45/QflVqigCtLZpIkSgITENq703DH0/CnLbhVhAKjy2LYVcA5BHTt1qeigCpLYpJM0mIsvjdvjDH04Pb9aWe1eQTKk2xZR8w255xjjn0xVqigBk0fnQSRZxvUrn0yKjSJkfzZZPMKqQMJjjv9TwKnooArWkW3zJSCu9iVU/wrn/8AWfxqYx5nSXP3VZcfUj/Cn0UAMEeJ3lz95VXH0J/xqMW+LWKHd/q9nOOu0g/0qeigCBrWP5tg2lnV2PXOGz/n60nkzLLI0csYDtuw0ZOOAPUelWKKAIpIWkBzIQQwZCB93jH49/zoWN2R1mdXDDGFXaMfmalooArrbyEqJJt6IQQNuCcdMnv+lKtrH8u8birs6npjLZ/z9KnooAZFH5SFc5yzN+ZJ/rT6KKAP/9k="

/***/ }),

/***/ "./images/client2.jpg":
/*!****************************!*\
  !*** ./images/client2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBDgEOAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKqvqNpHKY2nUMDg9ePxp897b2u3zpNu77vBOfyoAnoql/a9j/wA9/wDxxv8ACrE9zDbJumkCA9M96AJaKjguIrhN8Lh16cVJQAUUUUAFFQT3tvbECaUKT0GCT+lOFxC0BnVwYwCSwoAloql/a9j/AM9//HG/wqxDcw3ERkifKA4JIIx+dAEtFVor+1ml8uOZS/p61ZoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKZKGMLhPv7Tt+tPpCQoJJwByaAKUNlBBp2ydEHy5kY+v1o01BLpsHmoGIBxuGeM1EkUmqHzZmKWufkjHVvc1oMVhhLYwiLnA7AUAUJIYrnUFhWNBFBh5CFxluwpyotxrExkAZYEUKD0BPOadpSH7IZm+/Mxc0kJEes3KHjzUVl98cUAJsW31hPLAVZ4zuA6ZHOavPu2NsxvxxnpmqUp8zWoFXnyo2ZvbPFX6AM0aofsDSMgFwreX5f8AtVfi8zyl83b5mPm29M1hvIn9qfbfL/0cSBC3q2Otb9AFO3tMXNxNOiszt8pPOFqKwVBdX0cYBh3DA7ZxzSzvPeXD20D+XEnEsg659BVu3t47WERRLhR+ZNAFe+8q3t8pBGZXIRBtHU1BdQC102K1Q4MkioxHfPWpGP2jWlT+G3Tdj/aP/wBal1X5YIpecRSq5+lABqFrEunsY0VGiG5CByMVchfzII5P7yg/mKralKqadKc53rtXHfNWIEMdvEh6qgH6UASUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU2RBLE8ZJAYFSR15p1FAGcNGhAwLi5AHYOP8ACrK2iCzNtvkKkEFifm5qxRQAyKNYYkjXO1AAM1FdWcV2F8zcGX7rKcEVYooAr21nFaBvLBLNyzMck1NInmRsm5l3DGV6inUUAVxZQiy+y4Pl4x7/AF+tSwxiGFIwzMFGAW60+igCg+kxPK8nnTqXYsQrAD+VTWtmloWKySvux99s4qzRQBDFbJFPLMCxeXGcnpj0qR0WRGRwCrDBBp1FAFGLSreKRXzI205VWbIWr1FFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRVSSeZDO4MeyJgNpU5Pyg9c+/pQBboqD7Uvmbdr7d2zfj5c+n58U4XEe4KSQxcoAfUUAS0VB9pXahVHYvnaoAyQO/0/xoa6RY43Cu3mNtCgc55/wNAE9FQNdKpOY3woG84GEz68/yzUd5c7IJ1RZCyocuv8JxxQBboqG7YrZzspIIjYgjtxQlwHJHlyK23cAwGWHtQBNRUSzo/lbcnzBkY7D3pstwkM8ayOiIyscsccgj/E0AT0VWW4M8rpbyxEKqndjd13ZHBHoKjE9z9hWfMTPIE2rtIA3EDnnnrQBdoqnJeHEBiAO8rv3fwgsB+eT+hqxHIXkmU4wj7R/3yD/WgCSioppGjChAC7ttXPT1/kDSb5IopHmKMFXdlAR9e9AE1FVvMuI9jyiPYxClVByueBz35+lMjvDicygDYW2Y/iAJH55H6igC5RUNrJJLAGlCh9zKQvTgkf0qagAooooAKKKKACiiigAooooAKKKKACiiigAqFbWITSSsiM7MCCVGRwBjP4VNRQBX+zNux5n7rf5mzbznOevpnmmyWe+WSQSEMwG3j7p45/QflVqigCtLZpIkSgITENq703DH0/CnLbhVhAKjy2LYVcA5BHTt1qeigCpLYpJM0mIsvjdvjDH04Pb9aWe1eQTKk2xZR8w255xjjn0xVqigBk0fnQSRZxvUrn0yKjSJkfzZZPMKqQMJjjv9TwKnooArWkW3zJSCu9iVU/wrn/8AWfxqYx5nSXP3VZcfUj/Cn0UAMEeJ3lz95VXH0J/xqMW+LWKHd/q9nOOu0g/0qeigCBrWP5tg2lnV2PXOGz/n60nkzLLI0csYDtuw0ZOOAPUelWKKAIpIWkBzIQQwZCB93jH49/zoWN2R1mdXDDGFXaMfmalooArrbyEqJJt6IQQNuCcdMnv+lKtrH8u8birs6npjLZ/z9KnooAZFH5SFc5yzN+ZJ/rT6KKAP/9k="

/***/ }),

/***/ "./images/client3.jpg":
/*!****************************!*\
  !*** ./images/client3.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBDgEOAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKqvqNpHKY2nUMDg9ePxp897b2u3zpNu77vBOfyoAnoql/a9j/wA9/wDxxv8ACrE9zDbJumkCA9M96AJaKjguIrhN8Lh16cVJQAUUUUAFFQT3tvbECaUKT0GCT+lOFxC0BnVwYwCSwoAloql/a9j/AM9//HG/wqxDcw3ERkifKA4JIIx+dAEtFVor+1ml8uOZS/p61ZoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKZKGMLhPv7Tt+tPpCQoJJwByaAKUNlBBp2ydEHy5kY+v1o01BLpsHmoGIBxuGeM1EkUmqHzZmKWufkjHVvc1oMVhhLYwiLnA7AUAUJIYrnUFhWNBFBh5CFxluwpyotxrExkAZYEUKD0BPOadpSH7IZm+/Mxc0kJEes3KHjzUVl98cUAJsW31hPLAVZ4zuA6ZHOavPu2NsxvxxnpmqUp8zWoFXnyo2ZvbPFX6AM0aofsDSMgFwreX5f8AtVfi8zyl83b5mPm29M1hvIn9qfbfL/0cSBC3q2Otb9AFO3tMXNxNOiszt8pPOFqKwVBdX0cYBh3DA7ZxzSzvPeXD20D+XEnEsg659BVu3t47WERRLhR+ZNAFe+8q3t8pBGZXIRBtHU1BdQC102K1Q4MkioxHfPWpGP2jWlT+G3Tdj/aP/wBal1X5YIpecRSq5+lABqFrEunsY0VGiG5CByMVchfzII5P7yg/mKralKqadKc53rtXHfNWIEMdvEh6qgH6UASUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU2RBLE8ZJAYFSR15p1FAGcNGhAwLi5AHYOP8ACrK2iCzNtvkKkEFifm5qxRQAyKNYYkjXO1AAM1FdWcV2F8zcGX7rKcEVYooAr21nFaBvLBLNyzMck1NInmRsm5l3DGV6inUUAVxZQiy+y4Pl4x7/AF+tSwxiGFIwzMFGAW60+igCg+kxPK8nnTqXYsQrAD+VTWtmloWKySvux99s4qzRQBDFbJFPLMCxeXGcnpj0qR0WRGRwCrDBBp1FAFGLSreKRXzI205VWbIWr1FFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRVSSeZDO4MeyJgNpU5Pyg9c+/pQBboqD7Uvmbdr7d2zfj5c+n58U4XEe4KSQxcoAfUUAS0VB9pXahVHYvnaoAyQO/0/xoa6RY43Cu3mNtCgc55/wNAE9FQNdKpOY3woG84GEz68/yzUd5c7IJ1RZCyocuv8JxxQBboqG7YrZzspIIjYgjtxQlwHJHlyK23cAwGWHtQBNRUSzo/lbcnzBkY7D3pstwkM8ayOiIyscsccgj/E0AT0VWW4M8rpbyxEKqndjd13ZHBHoKjE9z9hWfMTPIE2rtIA3EDnnnrQBdoqnJeHEBiAO8rv3fwgsB+eT+hqxHIXkmU4wj7R/3yD/WgCSioppGjChAC7ttXPT1/kDSb5IopHmKMFXdlAR9e9AE1FVvMuI9jyiPYxClVByueBz35+lMjvDicygDYW2Y/iAJH55H6igC5RUNrJJLAGlCh9zKQvTgkf0qagAooooAKKKKACiiigAooooAKKKKACiiigAqFbWITSSsiM7MCCVGRwBjP4VNRQBX+zNux5n7rf5mzbznOevpnmmyWe+WSQSEMwG3j7p45/QflVqigCtLZpIkSgITENq703DH0/CnLbhVhAKjy2LYVcA5BHTt1qeigCpLYpJM0mIsvjdvjDH04Pb9aWe1eQTKk2xZR8w255xjjn0xVqigBk0fnQSRZxvUrn0yKjSJkfzZZPMKqQMJjjv9TwKnooArWkW3zJSCu9iVU/wrn/8AWfxqYx5nSXP3VZcfUj/Cn0UAMEeJ3lz95VXH0J/xqMW+LWKHd/q9nOOu0g/0qeigCBrWP5tg2lnV2PXOGz/n60nkzLLI0csYDtuw0ZOOAPUelWKKAIpIWkBzIQQwZCB93jH49/zoWN2R1mdXDDGFXaMfmalooArrbyEqJJt6IQQNuCcdMnv+lKtrH8u8birs6npjLZ/z9KnooAZFH5SFc5yzN+ZJ/rT6KKAP/9k="

/***/ }),

/***/ "./images/client4.jpg":
/*!****************************!*\
  !*** ./images/client4.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBDgEOAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKqvqNpHKY2nUMDg9ePxp897b2u3zpNu77vBOfyoAnoql/a9j/wA9/wDxxv8ACrE9zDbJumkCA9M96AJaKjguIrhN8Lh16cVJQAUUUUAFFQT3tvbECaUKT0GCT+lOFxC0BnVwYwCSwoAloql/a9j/AM9//HG/wqxDcw3ERkifKA4JIIx+dAEtFVor+1ml8uOZS/p61ZoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKZKGMLhPv7Tt+tPpCQoJJwByaAKUNlBBp2ydEHy5kY+v1o01BLpsHmoGIBxuGeM1EkUmqHzZmKWufkjHVvc1oMVhhLYwiLnA7AUAUJIYrnUFhWNBFBh5CFxluwpyotxrExkAZYEUKD0BPOadpSH7IZm+/Mxc0kJEes3KHjzUVl98cUAJsW31hPLAVZ4zuA6ZHOavPu2NsxvxxnpmqUp8zWoFXnyo2ZvbPFX6AM0aofsDSMgFwreX5f8AtVfi8zyl83b5mPm29M1hvIn9qfbfL/0cSBC3q2Otb9AFO3tMXNxNOiszt8pPOFqKwVBdX0cYBh3DA7ZxzSzvPeXD20D+XEnEsg659BVu3t47WERRLhR+ZNAFe+8q3t8pBGZXIRBtHU1BdQC102K1Q4MkioxHfPWpGP2jWlT+G3Tdj/aP/wBal1X5YIpecRSq5+lABqFrEunsY0VGiG5CByMVchfzII5P7yg/mKralKqadKc53rtXHfNWIEMdvEh6qgH6UASUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU2RBLE8ZJAYFSR15p1FAGcNGhAwLi5AHYOP8ACrK2iCzNtvkKkEFifm5qxRQAyKNYYkjXO1AAM1FdWcV2F8zcGX7rKcEVYooAr21nFaBvLBLNyzMck1NInmRsm5l3DGV6inUUAVxZQiy+y4Pl4x7/AF+tSwxiGFIwzMFGAW60+igCg+kxPK8nnTqXYsQrAD+VTWtmloWKySvux99s4qzRQBDFbJFPLMCxeXGcnpj0qR0WRGRwCrDBBp1FAFGLSreKRXzI205VWbIWr1FFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRVSSeZDO4MeyJgNpU5Pyg9c+/pQBboqD7Uvmbdr7d2zfj5c+n58U4XEe4KSQxcoAfUUAS0VB9pXahVHYvnaoAyQO/0/xoa6RY43Cu3mNtCgc55/wNAE9FQNdKpOY3woG84GEz68/yzUd5c7IJ1RZCyocuv8JxxQBboqG7YrZzspIIjYgjtxQlwHJHlyK23cAwGWHtQBNRUSzo/lbcnzBkY7D3pstwkM8ayOiIyscsccgj/E0AT0VWW4M8rpbyxEKqndjd13ZHBHoKjE9z9hWfMTPIE2rtIA3EDnnnrQBdoqnJeHEBiAO8rv3fwgsB+eT+hqxHIXkmU4wj7R/3yD/WgCSioppGjChAC7ttXPT1/kDSb5IopHmKMFXdlAR9e9AE1FVvMuI9jyiPYxClVByueBz35+lMjvDicygDYW2Y/iAJH55H6igC5RUNrJJLAGlCh9zKQvTgkf0qagAooooAKKKKACiiigAooooAKKKKACiiigAqFbWITSSsiM7MCCVGRwBjP4VNRQBX+zNux5n7rf5mzbznOevpnmmyWe+WSQSEMwG3j7p45/QflVqigCtLZpIkSgITENq703DH0/CnLbhVhAKjy2LYVcA5BHTt1qeigCpLYpJM0mIsvjdvjDH04Pb9aWe1eQTKk2xZR8w255xjjn0xVqigBk0fnQSRZxvUrn0yKjSJkfzZZPMKqQMJjjv9TwKnooArWkW3zJSCu9iVU/wrn/8AWfxqYx5nSXP3VZcfUj/Cn0UAMEeJ3lz95VXH0J/xqMW+LWKHd/q9nOOu0g/0qeigCBrWP5tg2lnV2PXOGz/n60nkzLLI0csYDtuw0ZOOAPUelWKKAIpIWkBzIQQwZCB93jH49/zoWN2R1mdXDDGFXaMfmalooArrbyEqJJt6IQQNuCcdMnv+lKtrH8u8birs6npjLZ/z9KnooAZFH5SFc5yzN+ZJ/rT6KKAP/9k="

/***/ }),

/***/ "./images/features-img1.png":
/*!**********************************!*\
  !*** ./images/features-img1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBoAAAI3CAYAAAA1PjiNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0M2JmZWQ3Ny0wNDIwLTAzNGYtYTU1OC0yYjFmM2I3YjljMTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUVGQzUwMkY0MzM2MTFFOUJDQ0U5NkFDMTk1ODVDNUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUVGQzUwMkU0MzM2MTFFOUJDQ0U5NkFDMTk1ODVDNUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDNiZmVkNzctMDQyMC0wMzRmLWE1NTgtMmIxZjNiN2I5YzEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzYmZlZDc3LTA0MjAtMDM0Zi1hNTU4LTJiMWYzYjdiOWMxMCIv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AACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoA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"

/***/ }),

/***/ "./images/features-img2.png":
/*!**********************************!*\
  !*** ./images/features-img2.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/features-img2-38817f4817a5ef22ad50389ec3ab4fda.png";

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/logo2.png":
/*!**************************!*\
  !*** ./images/logo2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/logoComparateur.png":
/*!************************************!*\
  !*** ./images/logoComparateur.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logoComparateur-ee81aa353a2e92dde420b8b53537e766.png";

/***/ }),

/***/ "./images/overview-1.png":
/*!*******************************!*\
  !*** ./images/overview-1.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfkAAAHlCAYAAAD2ooUEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAzLTA2VDEzOjAxOjU4KzA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wMy0wNlQyMToyNDo1NSswNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMy0wNlQyMToyNDo1NSswNjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmODZkYzE1ZS04ODQ4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"

/***/ }),

/***/ "./images/overview-3.png":
/*!*******************************!*\
  !*** ./images/overview-3.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfkAAAHlCAYAAAD2ooUEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAzLTA2VDEzOjE0OjM2KzA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wMy0wNlQyMToyNToxOSswNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMy0wNlQyMToyNToxOSswNjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MWY1YTkyNy1hZTQ5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"

/***/ }),

/***/ "./images/overview-4.png":
/*!*******************************!*\
  !*** ./images/overview-4.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfkAAAHlCAYAAAD2ooUEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAzLTA2VDEzOjIxOjQ2KzA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wMy0wNlQyMToyNToyNyswNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMy0wNlQyMToyNToyNyswNjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3YWQ5YTFiOS02NTVj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"

/***/ }),

/***/ "./images/partner-1.png":
/*!******************************!*\
  !*** ./images/partner-1.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAsBAMAAAB1flzCAAAAG1BMVEXMzMyWlpacnJzFxcWxsbGjo6Oqqqq+vr63t7dy4/Y7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAzUlEQVRIie2SPQvCMBCG3yb9cDQErGMVB8e0/QMtVOcWiq79CW0cukpB/NumrW6CEF2Ee+CGC9zDvUcAgiAI4g9hyhMrDLtXzyUQKysVzxXrL8Fat88Hz7gqOxfbKAb42aKEG3kZUEi4uZ0LjkqqhrU8AvZagUcSiWPt6u4nM7wEhtpEbCXO9i4OPbuY2e0I6Tb2LlNzxmQ8uxA3Ida2rgJ6uj0OJmOahjyN289z7126r4NQX8HDbswm513tXO62mf6qX3rNdy6CIIif8wBbjRrQCIS2PAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-2.png":
/*!******************************!*\
  !*** ./images/partner-2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAsBAMAAAB1flzCAAAAG1BMVEXMzMyWlpacnJzFxcWxsbGjo6Oqqqq+vr63t7dy4/Y7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAzUlEQVRIie2SPQvCMBCG3yb9cDQErGMVB8e0/QMtVOcWiq79CW0cukpB/NumrW6CEF2Ee+CGC9zDvUcAgiAI4g9hyhMrDLtXzyUQKysVzxXrL8Fat88Hz7gqOxfbKAb42aKEG3kZUEi4uZ0LjkqqhrU8AvZagUcSiWPt6u4nM7wEhtpEbCXO9i4OPbuY2e0I6Tb2LlNzxmQ8uxA3Ida2rgJ6uj0OJmOahjyN289z7126r4NQX8HDbswm513tXO62mf6qX3rNdy6CIIif8wBbjRrQCIS2PAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-3.png":
/*!******************************!*\
  !*** ./images/partner-3.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAsBAMAAAB1flzCAAAAG1BMVEXMzMyWlpacnJzFxcWxsbGjo6Oqqqq+vr63t7dy4/Y7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAzUlEQVRIie2SPQvCMBCG3yb9cDQErGMVB8e0/QMtVOcWiq79CW0cukpB/NumrW6CEF2Ee+CGC9zDvUcAgiAI4g9hyhMrDLtXzyUQKysVzxXrL8Fat88Hz7gqOxfbKAb42aKEG3kZUEi4uZ0LjkqqhrU8AvZagUcSiWPt6u4nM7wEhtpEbCXO9i4OPbuY2e0I6Tb2LlNzxmQ8uxA3Ida2rgJ6uj0OJmOahjyN289z7126r4NQX8HDbswm513tXO62mf6qX3rNdy6CIIif8wBbjRrQCIS2PAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-4.png":
/*!******************************!*\
  !*** ./images/partner-4.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAsBAMAAAB1flzCAAAAG1BMVEXMzMyWlpacnJzFxcWxsbGjo6Oqqqq+vr63t7dy4/Y7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAzUlEQVRIie2SPQvCMBCG3yb9cDQErGMVB8e0/QMtVOcWiq79CW0cukpB/NumrW6CEF2Ee+CGC9zDvUcAgiAI4g9hyhMrDLtXzyUQKysVzxXrL8Fat88Hz7gqOxfbKAb42aKEG3kZUEi4uZ0LjkqqhrU8AvZagUcSiWPt6u4nM7wEhtpEbCXO9i4OPbuY2e0I6Tb2LlNzxmQ8uxA3Ida2rgJ6uj0OJmOahjyN289z7126r4NQX8HDbswm513tXO62mf6qX3rNdy6CIIif8wBbjRrQCIS2PAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-5.png":
/*!******************************!*\
  !*** ./images/partner-5.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAsBAMAAAB1flzCAAAAG1BMVEXMzMyWlpacnJzFxcWxsbGjo6Oqqqq+vr63t7dy4/Y7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAzUlEQVRIie2SPQvCMBCG3yb9cDQErGMVB8e0/QMtVOcWiq79CW0cukpB/NumrW6CEF2Ee+CGC9zDvUcAgiAI4g9hyhMrDLtXzyUQKysVzxXrL8Fat88Hz7gqOxfbKAb42aKEG3kZUEi4uZ0LjkqqhrU8AvZagUcSiWPt6u4nM7wEhtpEbCXO9i4OPbuY2e0I6Tb2LlNzxmQ8uxA3Ida2rgJ6uj0OJmOahjyN289z7126r4NQX8HDbswm513tXO62mf6qX3rNdy6CIIif8wBbjRrQCIS2PAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-6.png":
/*!******************************!*\
  !*** ./images/partner-6.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAsBAMAAAB1flzCAAAAG1BMVEXMzMyWlpacnJzFxcWxsbGjo6Oqqqq+vr63t7dy4/Y7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAzUlEQVRIie2SPQvCMBCG3yb9cDQErGMVB8e0/QMtVOcWiq79CW0cukpB/NumrW6CEF2Ee+CGC9zDvUcAgiAI4g9hyhMrDLtXzyUQKysVzxXrL8Fat88Hz7gqOxfbKAb42aKEG3kZUEi4uZ0LjkqqhrU8AvZagUcSiWPt6u4nM7wEhtpEbCXO9i4OPbuY2e0I6Tb2LlNzxmQ8uxA3Ida2rgJ6uj0OJmOahjyN289z7126r4NQX8HDbswm513tXO62mf6qX3rNdy6CIIif8wBbjRrQCIS2PAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-7.png":
/*!******************************!*\
  !*** ./images/partner-7.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAsBAMAAAB1flzCAAAAG1BMVEXMzMyWlpacnJzFxcWxsbGjo6Oqqqq+vr63t7dy4/Y7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAzUlEQVRIie2SPQvCMBCG3yb9cDQErGMVB8e0/QMtVOcWiq79CW0cukpB/NumrW6CEF2Ee+CGC9zDvUcAgiAI4g9hyhMrDLtXzyUQKysVzxXrL8Fat88Hz7gqOxfbKAb42aKEG3kZUEi4uZ0LjkqqhrU8AvZagUcSiWPt6u4nM7wEhtpEbCXO9i4OPbuY2e0I6Tb2LlNzxmQ8uxA3Ida2rgJ6uj0OJmOahjyN289z7126r4NQX8HDbswm513tXO62mf6qX3rNdy6CIIif8wBbjRrQCIS2PAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/saas-shape/arrow.png":
/*!*************************************!*\
  !*** ./images/saas-shape/arrow.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/arrow-cf530be027d56ca7f4f42fb73bccce5f.png";

/***/ }),

/***/ "./images/saas-shape/box1.png":
/*!************************************!*\
  !*** ./images/saas-shape/box1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/box1-8ac1969d32f26aff151ab78ed944afba.png";

/***/ }),

/***/ "./images/saas-shape/boy1.png":
/*!************************************!*\
  !*** ./images/saas-shape/boy1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAB7CAYAAAAL+rJzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzQjVDREYxNDMzNDExRTlCRDEyQUNDQzY3OUJBMkNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzQjVDREYyNDMzNDExRTlCRDEyQUNDQzY3OUJBMkNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDNCNUNERUY0MzM0MTFFOUJEMTJBQ0NDNjc5QkEyQ0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDNCNUNERjA0MzM0MTFFOUJEMTJBQ0NDNjc5QkEyQ0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6uFKbmAAAIxklEQVR42tyc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"

/***/ }),

/***/ "./images/saas-shape/boy2.png":
/*!************************************!*\
  !*** ./images/saas-shape/boy2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAB0CAYAAAAVbmuYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFBODhFMkQ0NDMzNDExRTk5ODQyQUQ3RDVERTc5MzNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFBODhFMkQ1NDMzNDExRTk5ODQyQUQ3RDVERTc5MzNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUE4OEUyRDI0MzM0MTFFOTk4NDJBRDdENURFNzkzM0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUE4OEUyRDM0MzM0MTFFOTk4NDJBRDdENURFNzkzM0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lo9OBAAAIV0lEQVR42uyc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"

/***/ }),

/***/ "./images/saas-shape/boy3.png":
/*!************************************!*\
  !*** ./images/saas-shape/boy3.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAABwCAYAAABVRIOsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI1REMwNzg4NDMzNDExRTlBRUZBOTA3OUIwODU2MDZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI1REMwNzg5NDMzNDExRTlBRUZBOTA3OUIwODU2MDZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjVEQzA3ODY0MzM0MTFFOUFFRkE5MDc5QjA4NTYwNkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjVEQzA3ODc0MzM0MTFFOUFFRkE5MDc5QjA4NTYwNkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz65LXYdAAAK7klEQVR42tSc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"

/***/ }),

/***/ "./images/saas-shape/digital-screen.png":
/*!**********************************************!*\
  !*** ./images/saas-shape/digital-screen.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAADyCAYAAACh4YCEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QURFMjBBRkM0MzM0MTFFOUFCRDNFM0ZFNzA5MjBERDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QURFMjBBRkI0MzM0MTFFOUFCRDNFM0ZFNzA5MjBERDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTlDOUJDMzM0MzM0MTFFOUExMjlGRUZDMUUzMTA5RDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTlDOUJDMzQ0MzM0MTFFOUExMjlGRUZDMUUzMTA5RDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6pc+03AAAVGklEQVR42uxd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"

/***/ }),

/***/ "./images/saas-shape/filter1.png":
/*!***************************************!*\
  !*** ./images/saas-shape/filter1.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAACMCAYAAAAqamRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyRUIyODk3NDMzNDExRTk5MkIzQTFEQjg4RTU2QUM5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYyRUIyODk4NDMzNDExRTk5MkIzQTFEQjg4RTU2QUM5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjJFQjI4OTU0MzM0MTFFOTkyQjNBMURCODhFNTZBQzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjJFQjI4OTY0MzM0MTFFOTkyQjNBMURCODhFNTZBQzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7HEcbMAAAJdklEQVR42uyd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"

/***/ }),

/***/ "./images/saas-shape/filter2.png":
/*!***************************************!*\
  !*** ./images/saas-shape/filter2.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACyCAYAAADBJBSAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5REYwQzEyNDMzNDExRTlBRjZEODBBMUFEMkMzOUJEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY5REYwQzEzNDMzNDExRTlBRjZEODBBMUFEMkMzOUJEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjlERjBDMTA0MzM0MTFFOUFGNkQ4MEExQUQyQzM5QkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjlERjBDMTE0MzM0MTFFOUFGNkQ4MEExQUQyQzM5QkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6d7eJbAAAWyUlEQVR42uyd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"

/***/ }),

/***/ "./images/saas-shape/filter3.png":
/*!***************************************!*\
  !*** ./images/saas-shape/filter3.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAACNCAYAAADlw2fNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcwREJGMUU3NDMzNDExRTk4QjdGRTMyRjFDNDM1RUY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcwREJGMUU4NDMzNDExRTk4QjdGRTMyRjFDNDM1RUY2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzBEQkYxRTU0MzM0MTFFOThCN0ZFMzJGMUM0MzVFRjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzBEQkYxRTY0MzM0MTFFOThCN0ZFMzJGMUM0MzVFRjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7KcPKnAAAJQ0lEQVR42uyd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"

/***/ }),

/***/ "./images/saas-shape/girl1.png":
/*!*************************************!*\
  !*** ./images/saas-shape/girl1.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAB6CAYAAADu40BEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJEQjAzMjY2NDMzNDExRTlCQURBOTE5Q0FDNTVGNTRGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJEQjAzMjY3NDMzNDExRTlCQURBOTE5Q0FDNTVGNTRGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRCMDMyNjQ0MzM0MTFFOUJBREE5MTlDQUM1NUY1NEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRCMDMyNjU0MzM0MTFFOUJBREE5MTlDQUM1NUY1NEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6lEnsiAAAKVUlEQVR42uSd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"

/***/ }),

/***/ "./images/saas-shape/girl2.png":
/*!*************************************!*\
  !*** ./images/saas-shape/girl2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAB4CAYAAACuNZEIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5MTAxNUJBNDMzNDExRTlBMkM0QjZEOTIzN0I4NkM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5MTAxNUJCNDMzNDExRTlBMkM0QjZEOTIzN0I4NkM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzkxMDE1Qjg0MzM0MTFFOUEyQzRCNkQ5MjM3Qjg2QzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzkxMDE1Qjk0MzM0MTFFOUEyQzRCNkQ5MjM3Qjg2QzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4GbV1KAAAKr0lEQVR42uSd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"

/***/ }),

/***/ "./images/saas-shape/main-image.png":
/*!******************************************!*\
  !*** ./images/saas-shape/main-image.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-image-4cc28a0743c5971d54fbfe5d9836d390.png";

/***/ }),

/***/ "./images/saas-shape/monitor.png":
/*!***************************************!*\
  !*** ./images/saas-shape/monitor.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/monitor-1cc23fac0286910a6a30c72e5da65c4d.png";

/***/ }),

/***/ "./images/shape1.png":
/*!***************************!*\
  !*** ./images/shape1.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACSCAYAAADozTAkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTc1MUE5OUFCMTA0MTFFODlGMjdFOEIxOTJFNEM5NjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTc1MUE5OTlCMTA0MTFFODlGMjdFOEIxOTJFNEM5NjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3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"

/***/ }),

/***/ "./images/shape10.svg":
/*!****************************!*\
  !*** ./images/shape10.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyANCiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQogd2lkdGg9IjE5M3B4IiBoZWlnaHQ9IjIzNXB4Ij4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJQU2dyYWRfMCIgeDE9IjY5Ljg1NyUiIHgyPSIwJSIgeTE9IjAlIiB5Mj0iNzEuNTU1JSI+DQogIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9InJnYigxNDksMjQ0LDEwNSkiIHN0b3Atb3BhY2l0eT0iMSIgLz4NCiAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSJyZ2IoMjEsMjA4LDExMCkiIHN0b3Atb3BhY2l0eT0iMSIgLz4NCjwvbGluZWFyR3JhZGllbnQ+DQoNCjwvZGVmcz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgIG9wYWNpdHk9IjAuMTA2IiBmaWxsPSJ1cmwoI1BTZ3JhZF8wKSINCiBkPSJNMTM1LjQ2MSw5LjY1NCBMMTkyLjE5MywyMjEuMzgwIEMxOTUuMDU1LDIzMi4wNjMgMTg5LjAyNywyMzcuNDgyIDE3OC43MDgsMjMzLjUwNCBMMTAuNzIyLDE2OC43MzYgQzAuNDAyLDE2NC43NTggLTIuMzIzLDE1NC41ODUgNC42MjQsMTQ1Ljk4MCBMMTE3LjcyMSw1Ljg5NyBDMTI0LjY2OCwtMi43MDggMTMyLjU5OCwtMS4wMjkgMTM1LjQ2MSw5LjY1NCBaIi8+DQo8L3N2Zz4="

/***/ }),

/***/ "./images/shape11.svg":
/*!****************************!*\
  !*** ./images/shape11.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyANCiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQogd2lkdGg9IjE3MHB4IiBoZWlnaHQ9IjIwN3B4Ij4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJQU2dyYWRfMCIgeDE9Ijc0LjMxNCUiIHgyPSIwJSIgeTE9IjAlIiB5Mj0iNjYuOTEzJSI+DQogIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9InJnYigyNTUsMjM1LDIyMSkiIHN0b3Atb3BhY2l0eT0iMSIgLz4NCiAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSJyZ2IoMjU1LDI1MSwyNDQpIiBzdG9wLW9wYWNpdHk9IjEiIC8+DQo8L2xpbmVhckdyYWRpZW50Pg0KDQo8L2RlZnM+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiICBmaWxsPSJ1cmwoI1BTZ3JhZF8wKSINCiBkPSJNNTAuNDU2LDE5Ny4zMzMgTDEuMzA3LDEzLjkwNiBDLTEuNTU2LDMuMjIzIDQuNDcyLC0yLjE5NiAxNC43OTIsMS43ODIgTDE1OS41NzAsNTcuNjAzIEMxNjkuODkwLDYxLjU4MSAxNzIuNjE2LDcxLjc1MyAxNjUuNjY4LDgwLjM1OSBMNjguMTk2LDIwMS4wOTAgQzYxLjI0OCwyMDkuNjk1IDUzLjMxOCwyMDguMDE1IDUwLjQ1NiwxOTcuMzMzIFoiLz4NCjwvc3ZnPg=="

/***/ }),

/***/ "./images/shape2.png":
/*!***************************!*\
  !*** ./images/shape2.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACqCAYAAACJUODIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzZBMzcyNDlCMTAyMTFFOEJBQkNDRkE4MzM2NTAxRkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZBMzcyNDhCMTAyMTFFOEJBQkNDRkE4MzM2NTAxRkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3MzVkMGQxMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpiFF9EAAArnSURBVHja7J1rbFPnGcf/7zn28SWxkziXxhcSB5JwCZCQNVxKKaUr07TLh2kfprYbE182aVu7tRpDU7u2E10rVduqdRPaqNouKylhNGth2qpJUGlQppFCxehA7dQLSbk0EAgkISGJ7bP32IkM+BInhNjn8fNIp+ccm/QcPz8/1/O+rwVYclVEzv2PWHKXA0POXbBsyeTAbtpswZJGN6zWIqhKARTFCaE45Ds2CGGVe3V8U+Q2Jjc9uo9ERuX+KsLhYYRCVzA6MoDu7n488dgwQ8423NY2FxyOCqhquYTokZtrRnnougG+D6OjvQx5tsB++asC39xQAU3zS6DGVkAi4DNcKW3tJbA75kqoc+RmJ5fV5S3YTZtVtCyvgsVaF3XFlFP3vIuzf9xegMLCWhln50YTpnyoz/IC7B13CvzgIS9stnkyI/bnXRFOuuxp3V6IgsIaCdaItw4zF+QM9lp59lcagsEAVEtQwq0wf3HOUGPyw0dU3LHaB4ulSoL1jTckiHy4fIVqyGOPW7Gk0SvBBiRYr3zFSvfDUod57b/b9pITbrcXVqtPgq1ErH2YV0qg9llEtJZtai6HTfNCUStl8uTO92+6ua3UkJ89acXCRWXSUiukpZbLrYSStVKCLDJ67+EfW9C0rBh2uweq4pGWWjLjDwAY8qzco8DPn7LKksYNm90Ni+qGUNxRtxtr/nPlkOOQE+9ry9NWzKstl+62VLpa49Fcca43IRhyJvfS1l4MzRaAqnrHG/1snSaFfP09vPKqGw5ntbTWagm2kBGZH3Ls+ps2K2hZPgcW6zwJtoKx0IAcu+6vf2NFVXWttNp6jq90IMeu98vnLAjW1MtYOx859NyVIc/Etb7wRYHvfLcGqmWpPLez+ulAjl1jZ4dHlj8t0i2XsNppQRZ4fquKQGCphFvPJRA9yGLceleNtxRZsiS3pkFvjHt67Y350LR7GTA9Sxb43e8t8PlWRMcZs5CDLLC93Qmn865oX5mFHGSBHbuKYLffLY+5qUEQspFglcr4awC2skrpQWbA5LNro0RiwIQhGzFY09YyYKqQW7fbZZJlAOaHCyQhb3lahcu9Rh4VsPpoQhZoWNws6+AyVh1VyB27jSE5taw2qpDb2guhKLezyqhCNh44OJwrOZM2p2TWDPnLHmPtC7Zispbc2uaQgBtZVXQhC7hcjeymKUNuf82YKFbDaqILWUDT2E2Thryzo0xacSWriC5kAau1gdVDGfKOXcYcXy+rhy5kAZutjlVDGbIxGF6IIKuGMmS/P8B1MW3Iguti6pC3vWTlSeDUIZeWepEna1vlK2TBZVM+WLIQt7FKKEM25jEBTlYJXchGA4QH55G3ZFXlmYh5EJOLWB30IfOKAOQh8xKHpCELbN2mgZsgxC3ZVcgLp5GHbNVUVgV1yLrOjxbzJLtmYcgsZoessyqoQw6FRlkV1CFfGWTIhMUonYR01mE0f64BvFQxYUv+2191WUYNszqoZ9e6PsjqIA85cpnVQR1yKNzH6qAOeXj4AquDOuQnHu2XcXmEVUIZcne3kXz1sEpoQp5oaeoYHT3LKqFsyYacOH5a/jfCaqElImHfsXsNFMXHqqFqyYZcHf6E1UJL1ARLHh4aRPPtcyEEjxYhZsnx5OvNv0dkAvYhq4ayuzbkP0cNyCFWD63EKzEJ29mxFJq2kFVEy5L16/aHO9+HrvNgAmKWfKM1C7z65/lwOHh9TSLZdXKX/cnHfbhrrU9m2jzDglDidb3LfvdIBD2fvctqouWuE6059ouqjbDb57O6aLjrZBm3wMmTvVh9pxeKwj+bSwRyojWfPaOjadl5lJUZvwvFk+OIQY5b8769Y1i77jJcrirw0F3Tx+TUsdnYWtvmwe1uZtWZN7tOnWlPHH/7gY8xOHiCVUcD8o3A49C/dd8JDA19wOqjAVlPAVvHA994DwMDx1mFdCz5RvcdO95w//u41HcUPPXV9JD1FMeR6PnGDR/JOvogdH2M1WmuEiqTTDx+/o83r6A6eBpebxkUhfvcJoacrKyKy8G3x/DesW6sXGmBZvOwas0LOT3o3l4dr3ecw9LGc/B4SqVV21jF5oacHLQhb+0dxvHjXWhcFobD4YEQvACNySBnBvr8OR173rgoE7JuBGus0LQiCZvboSaCnBloQ47/NyxdeI+E3A2/X5Hx2s2WPbsiZvDvb4zVyjXn8e2uuzXcd38VysqDsFh4ZV4TQJ4MtEizAT/5qQcLFwbgcnuhqlx65TDkdDV0IthU0B96uAiLFlXAXVQKu934BXYL48ktyNO1aiQ9drsVbNjoRl29B54SD5wFRpOFp+3kCORMQSMj2BPHLpfA9x70YMECn7R0YxiSxuiyC3ky942M4Sa+Bnh9Cn70iA9V1cGoW2fJGuR0oDFFwKn3jz5eisVL6iVs/k2rLEG+Gdjp9ol/99QzFZi/oIFLsplvhswkbEP0DPbJ33tr3yDe6exGSwvG26jcWcsS5FSeI9lrqUCnfu/SpQj27O5FMHgOldFHnpycZQnyVGFPDbSxP/j2VVy8cApLm9zsvmcvJk/n+iLD89SZuMej4Lnnl8iSay5DNse9TD9Tf7F1gQS+kCGb674mA54I++VXGlBcXM+QzXmPmfbMBdram+EsqObEy9xfzPSJW+ehHqxfXw5VdTJk8wMXSbJwoL9fR4mnB7V1Vfn2hIvKNNTMws6RwyGsXTcIl2sOx2Q6nyd5jN7ZsQKaFsgXyNTGWulI3TQxttisj8Odx6DrYbZkmlYdH3+2Y9eSfFkHhfKoyWRWHbfsA/v/ly/WnA9DY5OB1rH1t1cxMvIhQ6YJOg6789AH+WDN+fTcNXm/e8euxTI2L+I6mS5ogeLiPtTV11BukOTbdJVEt/3iC2MY6D/GMZkm6DjwB7/fhXCohyFTLrP6L+s4evQdqkti5POAt8RRJS//qRrFJSvYkinH6Y0bumXt/BFn17StGTj16XmsWlUORXEyZKol1alTunTZZzGv1i/LKo0hU7XmI4fDqJl7Fv5AgMKPoDHkVKAPHgihru4zeH1+s4NmyKnctiH7/zkaBV3p9ZrZdTPkdNY8Abqy8gyqqsrNutogQ84E9KF/h3HhwqdoXFYEi8VlZjfFksptx/oJAg6HwNY/1Mvsu8FMumNLnvyLb5zr0X0oBOx+/SIam3rhKTHNzEmGnDnouOzbO4yuri40LTMWiy3JdatmyNMNZadPxRaLrZXZd1l5EVTVYc4PwpLZ4nM2m8Azz/owp2pRLs6JZshTS8SAdMtKFroUbPlFAP5ALazWIoZs7vg8+bKST24pk668Bk5nZbYXjGXIN5eIpV43dOL4ns/b8LWv+2Tc9sNu92RD5wx5Ztx3OuuOv7buHg1f+koFKirKoktJWiy37nHm2OgVDAz24eyZCwx5ZuN0OuCJ5/eut2H1mmLcVumWbr1QJnCFMpY7ZKauZWSAuq4jEh7ByOgQRq4Oob9/UEIdwIH9l/GvgxNDmXSGfGvcdzrAmOQ1RBO4luUafD4LXC5VWrwiLV/FyEgEQ1ciuHQphK6TY+g8lMmYNIZ8i0BPBWryNUSntgxWUrjcDJmdvEZP89pUVh5EkvfSXVPnxGv2rBqY6qKw6Y8zZcaQswx7OqCny0pnyLPrwjMFPhnsKYcIhpxd2JkkcDedeDHk7CZnYoa+GOksmUuoHMvGxTT+hutkEwOfMW/LkM0HnSEz9ET5vwADAD4PPIYbpsrGAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./images/shape3.png":
/*!***************************!*\
  !*** ./images/shape3.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACTCAYAAAAjkeOBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzI2M0I4MjNCMTA0MTFFODlBRkJENDA3NDZCOUFGQzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzI2M0I4MjJCMTA0MTFFODlBRkJENDA3NDZCOUFGQzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3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"

/***/ }),

/***/ "./images/shape4.png":
/*!***************************!*\
  !*** ./images/shape4.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape4-2987e49cefc822238f99f8260744bfd6.png";

/***/ }),

/***/ "./images/shape6.png":
/*!***************************!*\
  !*** ./images/shape6.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/shape7.png":
/*!***************************!*\
  !*** ./images/shape7.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAFFCAYAAADW0LDdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMThEQkJGNTAwMDFENjJCODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDU0RTQ3N0MxODA5MTFFOTgzN0E5OTJDMjcwRjY4OUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDU0RTQ3N0IxODA5MTFFOTgzN0E5OTJDMjcwRjY4OUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNhYzQ0YTg5LTZlYjEtYmU0My04NTQyLWZmODM4ZDJh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"

/***/ }),

/***/ "./images/shape8.svg":
/*!***************************!*\
  !*** ./images/shape8.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmb250LXNpemU6IDI1cHg7CiAgICAgICAgZmlsbDogIzI3ZWFjODsKICAgICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlOwogICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDx0ZXh0IGlkPSJfIiBkYXRhLW5hbWU9IisiIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40MzcsIDEuNDM0LCAtMS40MzcsIDEuNDM0LCAtMC44MzIsIDIzLjA2NikiPjx0c3BhbiB4PSIwIj4rPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo="

/***/ }),

/***/ "./images/shape9.svg":
/*!***************************!*\
  !*** ./images/shape9.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC41NjIiIGhlaWdodD0iMjguNTk0IiB2aWV3Qm94PSIwIDAgMjguNTYyIDI4LjU5NCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMWUxZTE7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMTQuMjgxIiBjeT0iMTQuMjk3IiByPSIxMi43ODEiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-modal-video/scss/modal-video.scss":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal-video/scss/modal-video.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _components_Saas_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Saas/Banner */ "./components/Saas/Banner.js");
/* harmony import */ var _components_Saas_Features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Saas/Features */ "./components/Saas/Features.js");
/* harmony import */ var _components_Saas_Overview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Saas/Overview */ "./components/Saas/Overview.js");
/* harmony import */ var _components_Saas_JoinCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Saas/JoinCard */ "./components/Saas/JoinCard.js");
/* harmony import */ var _components_Saas_CtaCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Saas/CtaCard */ "./components/Saas/CtaCard.js");
/* harmony import */ var _components_Saas_SaasTools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Saas/SaasTools */ "./components/Saas/SaasTools.js");
/* harmony import */ var _components_Saas_Funfact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Saas/Funfact */ "./components/Saas/Funfact.js");
/* harmony import */ var _components_Saas_WorkProcess__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Saas/WorkProcess */ "./components/Saas/WorkProcess.js");
/* harmony import */ var _components_Saas_PricingPlan__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Saas/PricingPlan */ "./components/Saas/PricingPlan.js");
/* harmony import */ var _components_Saas_GetStarted__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Saas/GetStarted */ "./components/Saas/GetStarted.js");
/* harmony import */ var _components_Saas_Feedback__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Saas/Feedback */ "./components/Saas/Feedback.js");
/* harmony import */ var _components_Saas_Partner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Saas/Partner */ "./components/Saas/Partner.js");





















var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_Banner__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_Features__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_Overview__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_JoinCard__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_CtaCard__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_SaasTools__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_Funfact__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_WorkProcess__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_PricingPlan__WEBPACK_IMPORTED_MODULE_16__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_GetStarted__WEBPACK_IMPORTED_MODULE_17__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_Feedback__WEBPACK_IMPORTED_MODULE_18__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Saas_Partner__WEBPACK_IMPORTED_MODULE_19__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/ActiveLink.js":
/*!*****************************!*\
  !*** ./utils/ActiveLink.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_3__["Children"].only(children);
  var className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className, " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, props, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\omarb\my-app2\src\mojosa-react-main\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-modal-video":
/*!************************************!*\
  !*** external "react-modal-video" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "wowjs":
/*!************************!*\
  !*** external "wowjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("wowjs");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map