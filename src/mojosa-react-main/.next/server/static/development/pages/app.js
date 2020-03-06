module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\app.js": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App/AppWorks.js":
/*!************************************!*\
  !*** ./components/App/AppWorks.js ***!
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







var AppWorks = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppWorks, _React$Component);

  function AppWorks() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppWorks);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppWorks).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppWorks, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "how-app-work ptb-100"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "How App Works"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/app-mobile.png */ "./images/app-mobile.png"),
        alt: "mobile"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-app-works"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-downloaded"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Download"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Duis cursus dictum enim dictum venenatis. Orci varius natoque penatibus et magnis dis parturient montes."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-app-works"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-settings"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Setup It"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Duis cursus dictum enim dictum venenatis. Orci varius natoque penatibus et magnis dis parturient montes."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-app-works"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-thumbs-up"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Enjoy it"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Duis cursus dictum enim dictum venenatis. Orci varius natoque penatibus et magnis dis parturient montes."))))));
    }
  }]);

  return AppWorks;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AppWorks);

/***/ }),

/***/ "./components/App/Banner.js":
/*!**********************************!*\
  !*** ./components/App/Banner.js ***!
  \**********************************/
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








var Banner = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Banner, _React$Component);

  function Banner() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "main-banner app-home"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "d-table"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "d-table-cell"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Comparez et \xE9conomisez en toute simplicit\xE9"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary",
        style: {
          width: "50vh",
          fontWeight: 700
        }
      }, "Assurance emprunteur")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary",
        style: {
          width: "50vh"
        }
      }, "Pr\xEAt immobilier")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app-image"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "https://nextland-react.envytheme.com/app/_next/static/images/app-img4-6fd6f318e09edfd5d1294bc644525fd7.png",
        alt: "image"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "https://nextland-react.envytheme.com/app/_next/static/images/app-img4-6fd6f318e09edfd5d1294bc644525fd7.png",
        alt: "image"
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "creative-shape"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/bg3.png */ "./images/bg3.png"),
        alt: "bg"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bg-gray shape-1"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape1.png */ "./images/shape1.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape2.png */ "./images/shape2.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape3.png */ "./images/shape3.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "shape4 rotateme"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/shape4.png */ "./images/shape4.png"),
        alt: "img"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
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
      })));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/App/Blog.js":
/*!********************************!*\
  !*** ./components/App/Blog.js ***!
  \********************************/
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
  nav: true,
  loop: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
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

var Blog = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Blog, _React$Component);

  function Blog() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Blog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Blog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      display: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Blog, [{
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
        className: "blog-area ptb-100"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "Our Latest News"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, this.state.display ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OwlCarousel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "blog-slides owl-carousel owl-theme"
      }, options), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "post-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/blog-img1.jpg */ "./images/blog-img1.jpg"),
        alt: "blog-image"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "blog-post-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-user-male"
      }), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "Admin"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-wall-clock"
      }), " January 23, 2019")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "The Most Popular New Business Apps"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-rounded-double-right"
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "post-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/blog-img2.jpg */ "./images/blog-img2.jpg"),
        alt: "blog-image"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "blog-post-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-user-male"
      }), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "Admin"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-wall-clock"
      }), " January 16, 2019")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "The Best Marketing Management Tools"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-rounded-double-right"
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "post-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/blog-img3.jpg */ "./images/blog-img3.jpg"),
        alt: "blog-image"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "blog-post-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-user-male"
      }), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "Admin"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-wall-clock"
      }), " January 14, 2019")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "The Best Marketing Management Tools"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-rounded-double-right"
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "post-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/blog-img4.jpg */ "./images/blog-img4.jpg"),
        alt: "blog-image"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "blog-post-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-user-male"
      }), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "Admin"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-wall-clock"
      }), " January 06, 2019")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "The Best Marketing Management Tools"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-rounded-double-right"
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "post-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/blog-img5.jpg */ "./images/blog-img5.jpg"),
        alt: "blog-image"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "blog-post-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-user-male"
      }), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "Admin"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-wall-clock"
      }), " January 04, 2019")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "The Best Marketing Management Tools"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-rounded-double-right"
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-blog-post"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "post-image"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/blog-img3.jpg */ "./images/blog-img3.jpg"),
        alt: "blog-image"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "blog-post-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-user-male"
      }), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "Admin"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-wall-clock"
      }), " January 26, 2019")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, "The Best Marketing Management Tools"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "read-more-btn"
      }, "Read More ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-rounded-double-right"
      }))))))) : '')));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./components/App/Download.js":
/*!************************************!*\
  !*** ./components/App/Download.js ***!
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








var Download = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Download, _React$Component);

  function Download() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Download);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Download).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Download, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "app-download ptb-100 bg-gray"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Download Our Apps Today"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account the system and expound the actual teachings of the great explore."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "download-btn"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-brand-android-robot"
      }), " Available On ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "Google Store"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-brand-apple"
      }), " Available On ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "Apple Store")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "download-image"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/app-img1.png */ "./images/app-img1.png"),
        alt: "image"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/app-img2.png */ "./images/app-img2.png"),
        alt: "image"
      }))))));
    }
  }]);

  return Download;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Download);

/***/ }),

/***/ "./components/App/Features.js":
/*!************************************!*\
  !*** ./components/App/Features.js ***!
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







var Features = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Features, _Component);

  function Features() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Features);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Features).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Features, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "features-area app-features ptb-100"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "How Can We Help You"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-features-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-camera"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Camera Filter"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-features-box"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-responsive"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Fast and optimized"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-features-box"
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
        alt: "image"
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
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./components/App/Feedback.js":
/*!************************************!*\
  !*** ./components/App/Feedback.js ***!
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

/***/ "./components/App/Funfact.js":
/*!***********************************!*\
  !*** ./components/App/Funfact.js ***!
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
        className: "app-funfacts-area ptb-100"
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
        className: "icofont-download"
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
        end: this.state.didViewCountUp ? 2 : 0,
        duration: 3
      }))), "B"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Download"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-funfact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-star"
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
        end: this.state.didViewCountUp ? 5 : 0,
        duration: 3
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Ratings"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "single-funfact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icofont-user-suited"
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
        end: this.state.didViewCountUp ? 500 : 0,
        duration: 3
      }))), "M"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Active Users"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
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
        end: this.state.didViewCountUp ? 13 : 0,
        duration: 3
      }))), "K"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Updates"))))));
    }
  }]);

  return Funfact;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Funfact);

/***/ }),

/***/ "./components/App/Overview.js":
/*!************************************!*\
  !*** ./components/App/Overview.js ***!
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
        className: "overview-section ptb-100"
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
        src: __webpack_require__(/*! ../../images/overview-app1.png */ "./images/overview-app1.png"),
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 overview-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-power"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Fast and Smooth"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Unimited Video Call"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Add Favourite contact"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Camera Filter")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
        className: "icofont-share-alt"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Share your passion to the world"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Unimited Video Call"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Add Favourite contact"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Camera Filter")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
        src: __webpack_require__(/*! ../../images/overview-app3.png */ "./images/overview-app3.png"),
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 overview-content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-ui-messaging"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Constant Updates"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Unimited Video Call"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Add Favourite contact"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Camera Filter")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
        className: "icofont-users-social"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "We provide proffesional staff"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Unimited Video Call"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Add Favourite contact"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Camera Filter")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: "btn btn-primary"
      }, "Read More")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-6 col-md-6 overview-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/overview-app2.png */ "./images/overview-app2.png"),
        alt: "image"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overview-box modern-flexible"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row h-100 justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-item right-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-lamp-light"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Stunning Showcases"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-item right-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-responsive"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Fully Customizable"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-item right-icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-ui-timer"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Engaging Tours"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-12 overview-img"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/feature-img-with-app.png */ "./images/feature-img-with-app.png"),
        alt: "image"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-ui-timer"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Engaging Tours"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-star-alt-2"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Exquisite Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "single-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icofont-ui-timer"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Engaging Tours"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
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

/***/ "./components/App/Partner.js":
/*!***********************************!*\
  !*** ./components/App/Partner.js ***!
  \***********************************/
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
        className: "partner-area app-partner"
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

/***/ "./components/App/PricingPlan.js":
/*!***************************************!*\
  !*** ./components/App/PricingPlan.js ***!
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
        className: "pricing-area ptb-100"
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
        className: "pricing-table"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-header"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "title"
      }, "Personal"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "dollar"
      }, "$"), "15", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "month"
      }, "/Mo"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-body"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Free"), " Security Service"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "1x"), " Security Service"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Unlimited"), " Security Service"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "1x"), " Dashboard Access"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "3x"), " Job Listings"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "5x"), " invoices and quotes"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-footer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Get Started"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricing-table"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-header"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "title"
      }, "Business"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "dollar"
      }, "$"), "39", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "month"
      }, "/Mo"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-body"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Free"), " Security Service"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "1x"), " Security Service"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Unlimited"), " Security Service"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "1x"), " Dashboard Access"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "3x"), " Job Listings"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "5x"), " invoices and quotes"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-footer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Get Started"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pricing-table"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-header"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "title"
      }, "Enterprise"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "dollar"
      }, "$"), "99", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "month"
      }, "/Mo"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-body"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Free"), " Security Service"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "1x"), " Security Service"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Unlimited"), " Security Service"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "1x"), " Dashboard Access"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "3x"), " Job Listings"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "5x"), " invoices and quotes"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "price-footer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "btn btn-primary"
      }, "Get Started"))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("canvas", {
        id: "canvas"
      }));
    }
  }]);

  return PricingPlan;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PricingPlan);

/***/ }),

/***/ "./components/App/SaasTools.js":
/*!*************************************!*\
  !*** ./components/App/SaasTools.js ***!
  \*************************************/
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

/***/ "./components/App/Screenshot.js":
/*!**************************************!*\
  !*** ./components/App/Screenshot.js ***!
  \**************************************/
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
    1024: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
};

var Screenshot = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Screenshot, _React$Component);

  function Screenshot() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Screenshot);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Screenshot)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      display: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Screenshot, [{
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
        className: "screenshot-area ptb-100"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "Screenshot"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-contain"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/mobile.png */ "./images/mobile.png"),
        className: "mobile-light",
        alt: "mobile"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, this.state.display ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OwlCarousel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "screenshot-slides owl-carousel owl-theme"
      }, options), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot-img1.png */ "./images/screenshot-img1.png"),
        alt: "screenshot"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot-img4.png */ "./images/screenshot-img4.png"),
        alt: "screenshot"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot-img2.png */ "./images/screenshot-img2.png"),
        alt: "screenshot"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot-img3.png */ "./images/screenshot-img3.png"),
        alt: "screenshot"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot-img4.png */ "./images/screenshot-img4.png"),
        alt: "screenshot"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot-img1.png */ "./images/screenshot-img1.png"),
        alt: "screenshot"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "screenshot-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/screenshot-img2.png */ "./images/screenshot-img2.png"),
        alt: "screenshot"
      })))) : ''))))));
    }
  }]);

  return Screenshot;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Screenshot);

/***/ }),

/***/ "./components/App/Subscribe.js":
/*!*************************************!*\
  !*** ./components/App/Subscribe.js ***!
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







var Subscribe = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Subscribe, _Component);

  function Subscribe() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Subscribe);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Subscribe).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Subscribe, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "subscribe-area ptb-100"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Connect With Our Community"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: "newsletter-form",
        "data-toggle": "validator"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        placeholder: "Your Email Address",
        name: "EMAIL",
        required: true,
        autoComplete: "off"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn-primary",
        type: "submit"
      }, "Subscribe"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "validator-newsletter",
        className: "form-result"
      }))));
    }
  }]);

  return Subscribe;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./components/App/Team.js":
/*!********************************!*\
  !*** ./components/App/Team.js ***!
  \********************************/
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
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};

var Team = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Team, _React$Component);

  function Team() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Team);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Team)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      display: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Team, [{
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
        className: "team-area ptb-100 bg-gray"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", null, "Our Smart Team"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "bar"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, this.state.display ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(OwlCarousel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "team-slides owl-carousel owl-theme"
      }, options), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-team-member"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/team-img1.jpg */ "./images/team-img1.jpg"),
        alt: "team"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "team-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "John Doe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "CEO"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-facebook"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-instagram"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-twitter"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-linkedin"
      })))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-team-member"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/team-img2.jpg */ "./images/team-img2.jpg"),
        alt: "team"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "team-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Steven Smith"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Developer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-facebook"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-instagram"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-twitter"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-linkedin"
      })))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-team-member"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/team-img3.jpg */ "./images/team-img3.jpg"),
        alt: "team"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "team-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "David Luiz"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Designer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-facebook"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-instagram"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-twitter"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-linkedin"
      })))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-team-member"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/team-img4.jpg */ "./images/team-img4.jpg"),
        alt: "team"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "team-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Park Tim"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "SEO Expert"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-facebook"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-instagram"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-twitter"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-linkedin"
      })))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "single-team-member"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/team-img5.jpg */ "./images/team-img5.jpg"),
        alt: "team"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "team-content"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Doglas Costa"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Manager"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-facebook"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-instagram"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-twitter"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icofont-linkedin"
      }))))))))) : '')));
    }
  }]);

  return Team;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

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

/***/ "./images/app-img1.png":
/*!*****************************!*\
  !*** ./images/app-img1.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app-img1-1e581864771707ed7794f05a99ea85c3.png";

/***/ }),

/***/ "./images/app-img2.png":
/*!*****************************!*\
  !*** ./images/app-img2.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app-img2-c43859446f07af415d7d25a217939e2b.png";

/***/ }),

/***/ "./images/app-mobile.png":
/*!*******************************!*\
  !*** ./images/app-mobile.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/app-mobile-97bd7d6ed070d9e42a443dd767fd1d75.png";

/***/ }),

/***/ "./images/bg3.png":
/*!************************!*\
  !*** ./images/bg3.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg3-1c0067c9f1b2c8ea1c9ec1eb4273616e.png";

/***/ }),

/***/ "./images/blog-img1.jpg":
/*!******************************!*\
  !*** ./images/blog-img1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-img1-2c6110d15917655c4e774d02b10d31c9.jpg";

/***/ }),

/***/ "./images/blog-img2.jpg":
/*!******************************!*\
  !*** ./images/blog-img2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-img2-2c6110d15917655c4e774d02b10d31c9.jpg";

/***/ }),

/***/ "./images/blog-img3.jpg":
/*!******************************!*\
  !*** ./images/blog-img3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-img3-2c6110d15917655c4e774d02b10d31c9.jpg";

/***/ }),

/***/ "./images/blog-img4.jpg":
/*!******************************!*\
  !*** ./images/blog-img4.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-img4-2c6110d15917655c4e774d02b10d31c9.jpg";

/***/ }),

/***/ "./images/blog-img5.jpg":
/*!******************************!*\
  !*** ./images/blog-img5.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-img5-2c6110d15917655c4e774d02b10d31c9.jpg";

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

/***/ "./images/feature-img-with-app.png":
/*!*****************************************!*\
  !*** ./images/feature-img-with-app.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-img-with-app-1f9b98dab34d5662d1e1a19f348f53d4.png";

/***/ }),

/***/ "./images/features-img1.png":
/*!**********************************!*\
  !*** ./images/features-img1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBoAAAI3CAYAAAA1PjiNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0M2JmZWQ3Ny0wNDIwLTAzNGYtYTU1OC0yYjFmM2I3YjljMTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUVGQzUwMkY0MzM2MTFFOUJDQ0U5NkFDMTk1ODVDNUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUVGQzUwMkU0MzM2MTFFOUJDQ0U5NkFDMTk1ODVDNUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDNiZmVkNzctMDQyMC0wMzRmLWE1NTgtMmIxZjNiN2I5YzEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzYmZlZDc3LTA0MjAtMDM0Zi1hNTU4LTJiMWYzYjdiOWMxMCIv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AACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoAAACAGKEBAAAAiBEaAAAAgBihAQAAAIgRGgAAAIAYoQEAAACIERoA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"

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

/***/ "./images/mobile.png":
/*!***************************!*\
  !*** ./images/mobile.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mobile-9a6a2abd6c36da06e4f033538f15f7b0.png";

/***/ }),

/***/ "./images/overview-app1.png":
/*!**********************************!*\
  !*** ./images/overview-app1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/overview-app1-35ef84f6b2890d25c33b5bafbfc5352d.png";

/***/ }),

/***/ "./images/overview-app2.png":
/*!**********************************!*\
  !*** ./images/overview-app2.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/overview-app2-2417722dc6fc36f620f25c51a4893233.png";

/***/ }),

/***/ "./images/overview-app3.png":
/*!**********************************!*\
  !*** ./images/overview-app3.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/overview-app3-98eae315ae0efb31e29588d3432967bb.png";

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

/***/ "./images/screenshot-img1.png":
/*!************************************!*\
  !*** ./images/screenshot-img1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAJYBAMAAAD28bI7AAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEZUlEQVR4nO3Xy2/iVhTH8WNjsJdcJ4FZmkmqZplMO9UsTZPJGlA16tJUVMwSUol1HmrVP7vnXvs6OEmldIE9qr4fCR/ziPzLfflaBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi/iBbm9G6vSvzbaPP6D9Pf3clusm7UNjwYY0Z7VZZVfe2H51oHWou92oZoYlJjLuoqPb24rS9+aIz+JBe51O+P5Km2oa/t89m8q6vcm01s63OhWcmNxk/MWLbmrq6tCE2uzXJUV1mORbavdLn7bDLUjt5IrF3taysC22nTUV0jk1XRn1ke62H+TqapTXtc11bcj23UtK5xOTbdLI9szyc2tj0vyj/YujE5rmsr/lrZqKO6uoBxNX0uR+J6VuxH1fLkgmlEX9vjm0TrwHa2b7ipzo771J32zd3OrZeu53Vo+NqW6LHqVFtDY0/LDzRaIZNyvvfMo648Z24CuaHha0sSXcXzujZSakQ/jQdmril1vewu5VFe1/K6LoLapn66653m12Sukd0/oP+Lr+2ldKt4WZspB2Z5Up6FuojrT467SinypykbzNZmysQNxTJloUfN3FlKncszX5vjUm/W1QI0cDdDXao6Gpci9Z1O67OU9Z3arVB25ekk5d82ha6PvjbWS+16f9Zz6TVVJ+vlMrNHU/jauPfogum3R7Fvy07uPZe2SRJT+Lp/H9dU6bbq06Qcl0fd3Mfntq36ZuZrc090eRL6wJNC3Laukz2RG1lTk/va2F/qfijxE+lyXO6POtlfDnQL/lmfDHxt7NVtEr+sT80v0Vbfd7JX13U7tUu3r43nHrsfuq96v2+qx7cunnu0Pcrdhq/7z5CTsU1dRZ5X6bt4hpTop8npZq9KvPTP47Edk5GpZkjyIf3kTnZm3agAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAl4Lq9W37llKa9Md/+eZZyqG+C4wxkoqEQ/tWXU3WIjdmJUEmMjlcymH0w9tTuuPoTnZVyui7/FEP14s8+Crx8oAp5Wf5cCphHutJ//2FBIuhLb33c5tycSqDjX6zl3JcyLpK2ZuVh/5FsJPB9qAp+6ubWW8zlT/ky/VHCVaufLm2TRPoV0kmH/dTDs+TrEoZ5uUhyoLw7uGAg1h7PMyjLLlYbD7JmbZakLtyJlObUr+Stb50ANsx6VLuBpsqZeAPwyAu1gdMqbPHNVF2XmQ2ib2oLUM/Lofy0NvIfluGt/KyLeX77JBtaS9jG6z4WmgDuii27LVluJBGyv6JvByXMp8dNqUdl7LY3M5kl1/ZKLY8jUuJx82U7o077s1xOejiaq+mc1zu82ku8eTcXsuWpzkucfZKynJUXBm/Xh425RsMNp1e/o1uuw7wFsF51wkA4L/6B+f3rkI+WRyLAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./images/screenshot-img2.png":
/*!************************************!*\
  !*** ./images/screenshot-img2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAJYBAMAAAD28bI7AAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEZUlEQVR4nO3Xy2/iVhTH8WNjsJdcJ4FZmkmqZplMO9UsTZPJGlA16tJUVMwSUol1HmrVP7vnXvs6OEmldIE9qr4fCR/ziPzLfflaBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi/iBbm9G6vSvzbaPP6D9Pf3clusm7UNjwYY0Z7VZZVfe2H51oHWou92oZoYlJjLuoqPb24rS9+aIz+JBe51O+P5Km2oa/t89m8q6vcm01s63OhWcmNxk/MWLbmrq6tCE2uzXJUV1mORbavdLn7bDLUjt5IrF3taysC22nTUV0jk1XRn1ke62H+TqapTXtc11bcj23UtK5xOTbdLI9szyc2tj0vyj/YujE5rmsr/lrZqKO6uoBxNX0uR+J6VuxH1fLkgmlEX9vjm0TrwHa2b7ipzo771J32zd3OrZeu53Vo+NqW6LHqVFtDY0/LDzRaIZNyvvfMo648Z24CuaHha0sSXcXzujZSakQ/jQdmril1vewu5VFe1/K6LoLapn66653m12Sukd0/oP+Lr+2ldKt4WZspB2Z5Up6FuojrT467SinypykbzNZmysQNxTJloUfN3FlKncszX5vjUm/W1QI0cDdDXao6Gpci9Z1O67OU9Z3arVB25ekk5d82ha6PvjbWS+16f9Zz6TVVJ+vlMrNHU/jauPfogum3R7Fvy07uPZe2SRJT+Lp/H9dU6bbq06Qcl0fd3Mfntq36ZuZrc090eRL6wJNC3Laukz2RG1lTk/va2F/qfijxE+lyXO6POtlfDnQL/lmfDHxt7NVtEr+sT80v0Vbfd7JX13U7tUu3r43nHrsfuq96v2+qx7cunnu0Pcrdhq/7z5CTsU1dRZ5X6bt4hpTop8npZq9KvPTP47Edk5GpZkjyIf3kTnZm3agAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAl4Lq9W37llKa9Md/+eZZyqG+C4wxkoqEQ/tWXU3WIjdmJUEmMjlcymH0w9tTuuPoTnZVyui7/FEP14s8+Crx8oAp5Wf5cCphHutJ//2FBIuhLb33c5tycSqDjX6zl3JcyLpK2ZuVh/5FsJPB9qAp+6ubWW8zlT/ky/VHCVaufLm2TRPoV0kmH/dTDs+TrEoZ5uUhyoLw7uGAg1h7PMyjLLlYbD7JmbZakLtyJlObUr+Stb50ANsx6VLuBpsqZeAPwyAu1gdMqbPHNVF2XmQ2ib2oLUM/Lofy0NvIfluGt/KyLeX77JBtaS9jG6z4WmgDuii27LVluJBGyv6JvByXMp8dNqUdl7LY3M5kl1/ZKLY8jUuJx82U7o077s1xOejiaq+mc1zu82ku8eTcXsuWpzkucfZKynJUXBm/Xh425RsMNp1e/o1uuw7wFsF51wkA4L/6B+f3rkI+WRyLAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./images/screenshot-img3.png":
/*!************************************!*\
  !*** ./images/screenshot-img3.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAJYBAMAAAD28bI7AAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEZUlEQVR4nO3Xy2/iVhTH8WNjsJdcJ4FZmkmqZplMO9UsTZPJGlA16tJUVMwSUol1HmrVP7vnXvs6OEmldIE9qr4fCR/ziPzLfflaBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi/iBbm9G6vSvzbaPP6D9Pf3clusm7UNjwYY0Z7VZZVfe2H51oHWou92oZoYlJjLuoqPb24rS9+aIz+JBe51O+P5Km2oa/t89m8q6vcm01s63OhWcmNxk/MWLbmrq6tCE2uzXJUV1mORbavdLn7bDLUjt5IrF3taysC22nTUV0jk1XRn1ke62H+TqapTXtc11bcj23UtK5xOTbdLI9szyc2tj0vyj/YujE5rmsr/lrZqKO6uoBxNX0uR+J6VuxH1fLkgmlEX9vjm0TrwHa2b7ipzo771J32zd3OrZeu53Vo+NqW6LHqVFtDY0/LDzRaIZNyvvfMo648Z24CuaHha0sSXcXzujZSakQ/jQdmril1vewu5VFe1/K6LoLapn66653m12Sukd0/oP+Lr+2ldKt4WZspB2Z5Up6FuojrT467SinypykbzNZmysQNxTJloUfN3FlKncszX5vjUm/W1QI0cDdDXao6Gpci9Z1O67OU9Z3arVB25ekk5d82ha6PvjbWS+16f9Zz6TVVJ+vlMrNHU/jauPfogum3R7Fvy07uPZe2SRJT+Lp/H9dU6bbq06Qcl0fd3Mfntq36ZuZrc090eRL6wJNC3Laukz2RG1lTk/va2F/qfijxE+lyXO6POtlfDnQL/lmfDHxt7NVtEr+sT80v0Vbfd7JX13U7tUu3r43nHrsfuq96v2+qx7cunnu0Pcrdhq/7z5CTsU1dRZ5X6bt4hpTop8npZq9KvPTP47Edk5GpZkjyIf3kTnZm3agAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAl4Lq9W37llKa9Md/+eZZyqG+C4wxkoqEQ/tWXU3WIjdmJUEmMjlcymH0w9tTuuPoTnZVyui7/FEP14s8+Crx8oAp5Wf5cCphHutJ//2FBIuhLb33c5tycSqDjX6zl3JcyLpK2ZuVh/5FsJPB9qAp+6ubWW8zlT/ky/VHCVaufLm2TRPoV0kmH/dTDs+TrEoZ5uUhyoLw7uGAg1h7PMyjLLlYbD7JmbZakLtyJlObUr+Stb50ANsx6VLuBpsqZeAPwyAu1gdMqbPHNVF2XmQ2ib2oLUM/Lofy0NvIfluGt/KyLeX77JBtaS9jG6z4WmgDuii27LVluJBGyv6JvByXMp8dNqUdl7LY3M5kl1/ZKLY8jUuJx82U7o077s1xOejiaq+mc1zu82ku8eTcXsuWpzkucfZKynJUXBm/Xh425RsMNp1e/o1uuw7wFsF51wkA4L/6B+f3rkI+WRyLAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./images/screenshot-img4.png":
/*!************************************!*\
  !*** ./images/screenshot-img4.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAJYBAMAAAD28bI7AAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEZUlEQVR4nO3Xy2/iVhTH8WNjsJdcJ4FZmkmqZplMO9UsTZPJGlA16tJUVMwSUol1HmrVP7vnXvs6OEmldIE9qr4fCR/ziPzLfflaBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPi/iBbm9G6vSvzbaPP6D9Pf3clusm7UNjwYY0Z7VZZVfe2H51oHWou92oZoYlJjLuoqPb24rS9+aIz+JBe51O+P5Km2oa/t89m8q6vcm01s63OhWcmNxk/MWLbmrq6tCE2uzXJUV1mORbavdLn7bDLUjt5IrF3taysC22nTUV0jk1XRn1ke62H+TqapTXtc11bcj23UtK5xOTbdLI9szyc2tj0vyj/YujE5rmsr/lrZqKO6uoBxNX0uR+J6VuxH1fLkgmlEX9vjm0TrwHa2b7ipzo771J32zd3OrZeu53Vo+NqW6LHqVFtDY0/LDzRaIZNyvvfMo648Z24CuaHha0sSXcXzujZSakQ/jQdmril1vewu5VFe1/K6LoLapn66653m12Sukd0/oP+Lr+2ldKt4WZspB2Z5Up6FuojrT467SinypykbzNZmysQNxTJloUfN3FlKncszX5vjUm/W1QI0cDdDXao6Gpci9Z1O67OU9Z3arVB25ekk5d82ha6PvjbWS+16f9Zz6TVVJ+vlMrNHU/jauPfogum3R7Fvy07uPZe2SRJT+Lp/H9dU6bbq06Qcl0fd3Mfntq36ZuZrc090eRL6wJNC3Laukz2RG1lTk/va2F/qfijxE+lyXO6POtlfDnQL/lmfDHxt7NVtEr+sT80v0Vbfd7JX13U7tUu3r43nHrsfuq96v2+qx7cunnu0Pcrdhq/7z5CTsU1dRZ5X6bt4hpTop8npZq9KvPTP47Edk5GpZkjyIf3kTnZm3agAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAl4Lq9W37llKa9Md/+eZZyqG+C4wxkoqEQ/tWXU3WIjdmJUEmMjlcymH0w9tTuuPoTnZVyui7/FEP14s8+Crx8oAp5Wf5cCphHutJ//2FBIuhLb33c5tycSqDjX6zl3JcyLpK2ZuVh/5FsJPB9qAp+6ubWW8zlT/ky/VHCVaufLm2TRPoV0kmH/dTDs+TrEoZ5uUhyoLw7uGAg1h7PMyjLLlYbD7JmbZakLtyJlObUr+Stb50ANsx6VLuBpsqZeAPwyAu1gdMqbPHNVF2XmQ2ib2oLUM/Lofy0NvIfluGt/KyLeX77JBtaS9jG6z4WmgDuii27LVluJBGyv6JvByXMp8dNqUdl7LY3M5kl1/ZKLY8jUuJx82U7o077s1xOejiaq+mc1zu82ku8eTcXsuWpzkucfZKynJUXBm/Xh425RsMNp1e/o1uuw7wFsF51wkA4L/6B+f3rkI+WRyLAAAAAElFTkSuQmCC"

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACqCAYAAACJUODIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzZBMzcyNDlCMTAyMTFFOEJBQkNDRkE4MzM2NTAxRkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZBMzcyNDhCMTAyMTFFOEJBQkNDRkE4MzM2NTAxRkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3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"

/***/ }),

/***/ "./images/shape3.png":
/*!***************************!*\
  !*** ./images/shape3.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACTCAYAAAAjkeOBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzI2M0I4MjNCMTA0MTFFODlBRkJENDA3NDZCOUFGQzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzI2M0I4MjJCMTA0MTFFODlBRkJENDA3NDZCOUFGQzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3MzVkMGQxMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpEQkREAAAu1SURBVHja7N15bBTXHQfw92YP79oYDIRLAYJLgzlsA0EJUdX/UNKIChFVShupaSrKqShNmpZKPdJAoqRR2j/CH4lasGkqIMFxoEgloWAaNSXmsCmHiDGlJCTBQMCG2Njr9Z7zOrOx2/Uyb47d2fXsm+9XWna9ntl99n72934zs2MoQRDnhJpcjtn1QAjiBNCmgUv4nSIjDJruXfqslHmfzoVoLIuKjTgjoVUNFUFvyRyJ0snKlwHlIjPCeqPJ+Oebzuz9+JfHticNKjTTq96AjRQ8yXV75iqg5/P7CxY61XXx8KJdP+vl4GVG2D34NSMFRl2loF6o359Q/+SysVOrKqZe3n3xaJLTdlC94oweGylYBtY0lulV6gzcgeWV99UOwpU4vTbltdaAjRQsfsk300qXUOotmbbx3kcDBrg1qzZgIwWLUq0nWl3n4cr7J3BQ86p36tqLXzdSwASsrhD0+AMGOznY4PcZKjYyEqGMsLjVlXrj4bjFPhuwkcKGMXLT6jpNHadvZSCmGl/f9iYCbKRgiSRjF60sH4pHvvx1y46w2Q1Ggr0iyEikrO573Ukmf2KquhMm77xwqD3b58IBGqRgPbb6T7kveP2+iXePkag0Wgd18h9XPjr5SNPvvuRsLGbeZtzSjSCFgK1ezyifSE9/d1Olgny2RGl5epXujQ1cqz938Pz6I2/0p63D0vDKg7fltPvljGUAGyk87LRrqeGB9aUK9LKb0T759Y/29e+7dELW6KczUWuBTofNABspJGqisXeDtysvEzYPtyZsHKBB8oXXzHKaB1c4fTPL6Km1QGPjEbENM82ipaUGbwYedEZMfGRVDSq2OJWSjcBzmrnfaFxalZka4B5qSQgPO3psMaf7vEE/8p1XPIsmzJzipZ7xjDA/YywaTkS7Hnr3+c6j18+ztHEyiz+T0WFyxmlJtK4BW0DQeQOeWPeX6R4q3aPcDN7+JKz3097O1plvru3WqcRmfj4ebl4botmOAHYRoN737edo7fi7Ar2xATa34clolphzAU6T6/bUSJTOM1gu+Z+eqx9W7Xzihg5AluObmJl54wC2g9O/+u2xQa9/HiV0ytD2kFIZowlZvvTPq23tD+zdEM3lxbeAer6Ceo6ZhWXGBlZ98FrTG/9+P6Gz4cfrq7OdhXDksViq9OC5gQt4r5ECPKZM/UeVqb/LxNTMssRtCfVQrvTfPDN128pPOH2xnOOYTL1R8SEoZ6KeM3jCK+XP19RfOXriN99d+mw5GX6QQyKcs0ryWanTM66kfArRPvCiNSaWJWjd9QDbmajNnvDqWTK1dj7RPoIncVDTfKJW45GkUmLudC4zG4m8doYAtoCohxLw+CdvvPfRIAdPOm5qEndOqFMCGZOJuUPlehWbWcUM2IKgHsqD0xaO5Uz7xAJoW1CnNnoT0T7C/xyI3phs2zWJI49Fjnpo9s9AI1vd2LILtZpTXRevkuEHabRu5/WIKSp28aMml0M3YoOvpWQw7fN6bdtQh+KR7qXvvdCp0QIVdA8cYBc5apmxxG9a3+rNgKR3wmvmbdtQR5Px8DOHt56KyQmrLRBgA/XwXAp1XTrfc4V3gMMQlJ2on26ub6k/dzBqsQUCbKAenkgyFvrB+69+rAHZ1Kfv7ET9VHNdy+b2AxEd1FrXDLCBeljicjLyXOvOE81fnEtmM93H1+62FfWW9qaIBmgznxPBxiNQ/x/1huM7W39/ek84C0gp1F7Jky/UjBh/xDTvwLG7r0hRv3xyV39WGNfuUlHPziNqwoHMCtWGoGKLgdrwxNah25E179T6JW++URudRW7Hh58A2wWoiYk2IIW6xOMbSdSE8A+RM8AGaqOp/ra+Nry6sabAqI1mkbxWa/TYYqHW/OMxoVUNNUGvv6rAqGUzrRH2igB1mLMXQfeioi7zBZyCuiAtCGA7HLX6d+w2nfnriUHUzApoh6Nm+UadeiFg0Xmo1XzW1/l55Y415ziQCNH5O3ZFgDrvsFGxHYhazaGrZ6/pFnTOXoY+oAZsp6JOwf7i7IDVvQ4K6upRQA3YTkWtprJ8ks+wDU+DBtSA7XjUar41feE4k6jJrZVvATVgOx+1mppxd82oHT/DY4S6+0dvVo/2lwI1YDsftZoSjy94cNnzNdNG3aH5GgW9fnpjxfbqipKyWUCt8SLBqfNQp6c/Huk90HHq/BOHNt+4PtAjK+BZ44M/r1hyZ+2sMl9gIlADdtGhTo/MWDLBklEv9fiUMfjseExRUQN2kaDOR0RGDdhALSRqwAZqIVEDNlALiRqwgVpI1Grw3+G5BPWPm+ta61yCGhXbBagjyZhSqetV1ANuQa0GRx7dgTriJtSo2O5BzdyEGrAFRv3kh1tat577uytRAzZQC4na7bCBWlDUboYN1AKjduteEdFRE7ejdmPFdgNq5nbUboMN1C5B7SbYQO0i1G6BDdQuQ+0G2EDtQtSiwwZql6IWGTZQuxi1qLCB2uWoRYQN1EAtHGygBmrhYAM1UAsHG6iBWjjYQA3UwsEGaqAWDjZQA7VwsIEaqIWDDdRALRxsoAZq4WADNVALBxuogVo42EAN1MLBBmqgFg42UAO1cLCBGqiFgw3UQC0cbKAGauFgAzVQCwcbqIFaONhADdTCwQZqoBYONlADtXCwgRqohYMN1EAtHGygBmrhYAM1UAsHG6iBWjjYQA3UIxJPsaBWQPVfC/d0dkf7uxlhiYDXF6CEUqBGClmxbUOdkJOx/R2n2pbte7Ez/cVfMXtJySv3/3DuhODoyUCNFAK2bajjcjKy4fjO1pdP7urX+DbzS15y6fH62knBiqlAjaRHKkLU/wMSkxNs2b6X2pSqHgVqJF+wC4WapCM63nkhofTel4EayQfsfKPWA8O6Ird6gBpJj7dIUOvBIj7Jy4AasRN2oVFroSHKxuNooEbsakVGGnXqsrxyMR0fKJ8G1MgwnMWMWl0gtKphQZkv8DWgRnJtRUYStZz+/b5VDdVAjdhRsZ2AOrWMinqUL1AF1EiusIEaqIWDPVKob8OkoK4BasQO2I5BrWwo1pTZj5pZHQdQFz9soAbqoozkNtRPNdcDtYthOwl1tZ2o69qbgNqtsJ2CumvFtrsU1LNzHUc0GQdql8WrgXquE1BvW/IT3/hA+QJ7UNe1DKImQO3Ciq2grnICavXycOXi6ZRQnx2otwC1e2GHVzfeoaBe6ATU6iXo8U8AaiRn2AGvr4bkeA6kXahTW6+UlgA1klOPffnxrSXKtD/JIaiH1kkCNZJTxVY20kbnUq3zgJowxm5mg/rp5nqgRr6C7aUeyUGoU7evhXs+tYJJRf3M4a0tm9sPADXyFexQPBJyEOpUpm1fGYrJiTazqNcf+fOxP5zdP5Dx3EDtZthj//T9MCPsllNQD+Wed37arqA9rzeOSDLW+4tj246+1vZexMQYgNoloUO9dXh14/Sg1/8Ns6hf+NfbLS+eaAznC3Xa+Mhnj9VNmFxaMcvv8U4a3LfNFPA9F3uvdyz/2287Lty6yjS2EW77GyRA7ULYamJrdy/ySZ679VZQ2oMBpUq3bDzeENaBlAsmmgl78FqdXei6eQ/5/nh2f3Lo68yfIeOxzF6AWmTYXx8zhZ5+5NVZpb6Saq2jft3R0LVftexoU2BF09ZjeaiQVGOM6RcpY+yZuPV6bKB2CezMa/rS4sd8K2YvuTPo8Y9Rem9PX3xgoKnjdNfqD17v11jHLCCrmCivamtUaqOKTYAasI0qZPqyLIup3ywmo6pNOT8D08Etc2YZoBYsHg4Owpni9VCYqdxWMRlVZMIZA28mAWqXwiYmNsiIDli7KyTl3DZ6HN5nrnlvCERQ2EbV0QiAEfhcKiTVGaOZ5yVA7b54OUipzovOLOC2AxPj9M9m1iMAjYptduo3Qp2vCklN3mf0fEDtor0iZnBrbVgyk1WS5XnMVis44kLYPMTZAmIFHjtAI7o4qIX7GVAhxQI7l6kfoBHHwza7PDAjjsl/BRgA3HOhYQnszuIAAAAASUVORK5CYII="

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAFFCAYAAADW0LDdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMThEQkJGNTAwMDFENjJCODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDU0RTQ3N0MxODA5MTFFOTgzN0E5OTJDMjcwRjY4OUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDU0RTQ3N0IxODA5MTFFOTgzN0E5OTJDMjcwRjY4OUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNhYzQ0YTg5LTZlYjEtYmU0My04NTQyLWZmODM4ZDJhYzE0YyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmY2MWFiMThhLWU0NGMtMTFlOC1hZDNlLWRiYjgyOWI2ODJhNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpqxBEMAAA8TSURBVHja7N0LlBZlHcfxB9xFbsLiLnEVUUAXEWTVQAgvXARFEAstbyV4NypFkSwVERUzFMU0MvWkpqeOl2N5zVOamVlaqJFKKXhFlLtXFEHp/2eePax7luXd9zLz/Ge+n3N+vRjLXmbmtzPvzPPMNFu5aoODOS0kPSW9JLv69JBUSDrUe23ewL//ULJW8p5kjX9dLnld8qp/fU2ykkUdtqrKss2vZSyK4LWVDJLsJ6mRDPQFblbA59zBp8c2Pk4L/7zkOZ9nJYsk/PYPTDP2yEHubfeXHCwZ5cvbPKDvb73k75JHJY9LnpF8xmpLdo9MkcPZ646TTJSM8XtLK9ZJnpA8ILlXsozVSZGzpLnf406WHC5pnYKfaZPkacndkt9JlrCaKXJaVUpOk5wq2TnlP+uTkpskd/k9Nyiyeb0l0yQnSFpm7GfXk2Z3SG500QkzFLnIzVkUsRT4Fsl//Z64ZQaXgb7nP12ywL+fHusKO+uOBt6noTQ6Sa6TvOT3wtuxSDbTM/IPShZKvu24BEqRA6Ub5lmSlyVTJOUskgbtKblNslgyiUJT5JDs66KBE1dL2rE4cqIn/H7l99DjWRwUOUmtJHNcdOllTxZHXvpK7nPRQJN+LA6KHLe9XHQSZxrLsyhGuGhY6Gz/CxIUuaT0rOtUFw1R7MviKPp5hh9JXpCMZnFQ5FLR9786HHGui8ZGozR0VtcjkttdNJsLFLlo9P3bvyQTWBSxOc7vncewKChyMehABp3504dFEbuukj9IruIoiCIX4vuS+52tmUlpdLbkKckuLAqK3BR6UusKybUsr2Ds46IrBWNZFBQ5Fzqs8mbJdBZFcPTkl86BPs8xbpsiN0Lfh+nZ0sksiqCPli7362l7ioyGSqyT449mUZhwrORPkh0pMuoeTt/pGPdrzTAXnQTbiSJDl4fOyOEasU27u+jyYDVFzraf+cM02NVN8ldJf4qcTRdKvstiSIUqyWNZKjNFjuiZ6VksBspMke0aLrmBxZDqMvehyOmmK/gex+140l5mvVlBd4qcTjoVUcdOMz0u/fSSlE64qKDI6aIjgm510eUKZINOP9U55C0ocnqcLzmCbTtzDnIpPR+SxSKPlFzMNp1Zk1w0JZUiG9bZRY8u4Wx9tunNCYZRZLvvi3/toidAINv0KoU+WK4LRbbnHBc9xhSoPTq7y6Xk0mNWilwjuYxtF/V8TTKDItuwvT+k5oZtaMiPJUMpcvj0Ny6PIEFjHdBf9G0pcrj0oWo/ZFvFNuiN8OdR5HAPqW9xPJcYuTnRGX48TZqLfAmH1Gii+c7og+PSWmS97/E5bJfI4xD7QoocBj2U/qVj9Bbyc67FI7k0buxTJHuzPSJP+kjXX1DkZOmDvi5lW0SBdBz21ylycvT5TDxkDcWgz/sqp8jx0wd6TWT7Q5HobaBOt/LNNlu5akMaFrpeM35R0ovtD0W02m9T74f6DVZVlqVqjzyVEqMEKv22xR45BnqC63/O+FhZBL1X7in5iD1yaV1BiVHivfL32COX1hAXPYEPKPVeuYdkHXvkEvwSctFD14A49sonh/wNWi7y8S4aUw3E4cyQ+2K1yDpDZTbbFmKkEyoOo8jFpTOburNtIWbB3g/b4skuvfvhK44z1UjGHpJFoXwzlk92zaLESNAZ7JELp/NEFzrmGiM5eilKByF9xh45fz+hxEiYXooaG9o3ZakUB0jGsR0hAJMocp5vASRXsv0gELpHrqLITXek5KtsPwhEud8mKXIT6KNeLmfbQWC+QZGb5lTHXGOEZ7ikgiLnRu+/NYNtBgHS6z7jKXJupks6ss0gUEeE8o2EPCBEnya/WNKa7QWB0vnJHVyCg0MsDAiZRYkRON0+h3BovXXVkslsJzBgFEXeup86HocKimy6yDoUczzbB4wYJGlPkb+MoZiwRjs0jCJ/2TcdQzFhzxCKvIUOxeQ+XLBoMEXeQm8CvivbBIwWuTlFjiZrX8j2AKN0KHE1RXZupgtoADqQh0FZL7L+JjuD7QDG9ct6ka9yDP6AfZk+tB7tAryRGcAeOXd6u5RrWP9IiZ6Sllks8lmSvqx/pISOStwta0XWucZcbkLadMtakee46NobQJGNFlkHmB/HOkcKdc1KkfUE189Z36DItos8TdKf9Y2U6pKFIvd23NoW6dY+7UXWU/M3uASvswExaJf2Ip8gGcF6Rsq1TnORO7toPDWQdm3SXGQ9pN6RdYwM2CGtRZ4kOZz1C9gtcg/JPBYxYLfIOr/4dpfgWTyAIhfuAsn+LF7AbpG1wAz8AAwXWZ9l/BsX/nOXAYrcyPvi37oEp3IBCduQhiLrUyIYvYUs+9h6kSdKprMekXGfWC5yjeQ21iHg1lstss6/vM8lOFgcCMiHFous5f29pDvrD9hsrbUi6xnqOxzPMgZMF3m+5AjWG/AlaywVeabkFNYZYHePfKbkItYX0KDVFoqsjz7lWU3A1q0IvcjHO+5HDWzL2yEX+TuSW1lHwDYtD7XIZ/gSM5sJ2LZlIRZ5KofTQM4+cIGNtdabyV8qmcu6AXL2TpJfvKzef+uIrRslk1kvgM0i682175SMZZ0ATfZuCEXWW9fqBIiBrA8gL8uS/OL6Hnk/yTOUGLC9R35csj3rASjIW0nvkSkxkIIiAyjcUooM2LbJBXCyC0BhdIz1BooM2PZm0t8ARQaMvz+myABFBsChNcAemSIDFJkiA8W0nCID9i2jyIBtH0nWUWSAvTFFBhL2LkUG7HuHIgMUmSIDHFpTZKAYONkFpMAKigzYt5YiAxSZIgMUmSIDxfAeRQZs03HWGykyYNv6UL4RigwUtkemyIBxn1JkgCJTZIBDa4oMFMNGigyAIgOgyABFBrBZOUUG7GtDkQH7KigywB6ZIgMUmSIDxdAqlA5RZKAwXSgyYN9OFBmgyBQZoMgUGSiGPhQZsK+GIgP2DZBsR5EB2/RacjVFBuwbRJEB+0ZSZMC+UZJmFBmwrZOkP0UG7BtNkQH7jqLIgH165roXRQbYK1NkIADHUGTAvgEuocEhFBkortMoMmDf0ZJ2FBmwrbVkEkUG7DtbUkaRAdt2djFfiqLIQGlMo8iAfXtLDqHIgH0zKTJg3+C49soUGSity1wMNx2gyEDp3ytPpMiAfZdLyikyYFtvV+Ix2BQZiMcMV8Ix2BQZiEdHyQUUGbDvLMnuFBmwTU94XUORAft0gMg4igzYd7WkBUUGbNPLUVMpMmCfnsHuQpEB29pKrqTIgH3HSg6kyIB917si3N+LIgPJ6if5AUUG7JvpCjzxRZGB5O3gCjzxRZGBMBR04osiA+HI+8QXRQbCoSe+plBkwL6LJV+hyIBt7V10502KDBh3kqSGIgO26X2w51JkwL6DJBMoMmDfHJfj5SiKDISrj+RkigzYd5GkFUUGbOvscpgdRZGB8J0nqaDIgG1a4tMpMmDfNBfd54siA4ZVSk6hyEA69srlFBmwratkIkUG7JtCkQH7hkkGUmTAvlMpMmDfka7eSS+KDNjTUTKSIgP2HUeRAfvGuzpzlSkyYJPepG8oRQbsO5QiA/aNociAfTWrVm/sQJEB+wZTZMC+/SgywB4ZQAD2ociAfR31hBdFBuyrpsgARQYQgN4UGbCvE0UG7OtKkQH2yAACUEmRAfsqKDJgXxlFBuxrQ5GBFKDIAEUGQJEBFMPHFBmwbyNFBuxbQ5EB+1ZSZMC+1RQZsG8FRQbse4MiA/YtpsiAfUsoMmDfKxQZsG15VWUZl58A4xbo/1BkgCIDSNizFBmw728UGbDtBT3RRZEB2x6t/QNFBux6jCIDtn1KkQH7/ij5iCIDtt1d9z8oMmDPRskDFBmw7WHJGooM2HZT/f+DIgO2LJc8RJEB227x75EpMmDU55L5Df0FRQbsuFPyBkUGbLtqa39BkQEbdILEAooM2Dajsb+kyED47pc8RZEBuzZJLtjWB1FkIGy3SxZSZMCu9yXn5vKBFBkI1/kuGpJJkQGj9FLT/Fw/mCID4dGhmKdJvqDIgF2zXSODPygyYOOQ+pKm/iOKDIRDb6b3LckGigzYdZJkST7/kCIDYbjGRdMUHUUGbNKZTecW8gkoMpCslyVHuQZu30ORARtWSA6VrC30E1FkIBkfSMZKXi3GJ6PIQPw+kUxwTRz0QZGBsEo8TvJ4MT8pRQbiL/Fjxf7EFBmI7z3xIaUosSpj+QIl966LTmw9V6ovkIYiL5W85RfWSp/aP6/yhzPr/G/E+tPC2vmjkraSCkl7ny6STv61m6SnpAPbI/Kgt+kZL3mzlF/ESpGXSV7y0dP1S3z0z+tj+h604LtI+kj6Sqr96x6SFmyvaMCDkmMkH5b6CzVbuWrDpoB+cP2B/+1/i/3HF1df1wa8ssp8oWskAyX7SvaRtGY7zrS5kukuuklAyVRVliVeZD0kfr5edA+7KQUrUZfuAMlgyRDJAZKd2bYz4T3JiZJ74/hicRZZfyMtaqC0qzO2gvV99v6SAyUj/GE60uWfLppP/FpcX7BURdYnxb3oD4drXxfF+D7Wkl0loyUH+2JXsEjM0pOo+oA1vZH8Z3F+4UKK/KlksYtmbbziX2tPRH3AOs3Ldv4w/DCfvVgkZizyh9L/SOKLN1ZkPRR+2225rPOGP1SoLe3SlLyPDVl3F113PMzvtVuySIKjPblCMivJI866RT7HF/ZNt+V67Oesp2C08offei1Sh/d1ZpEk7s+SM/1bx0TVLTKrxQ4dvKKXtyb4Ug9gkcTqdck0yT2hfEMUOR161nlfPZxD8JLRKyxzJPNcdI7IUWSUig5AGVGn2DuxSIpS4Csl17noVrXBocjpN8AXeoxkqKScRZIzHRJ8reT6UAtMkbOpjeQgySgXnQXfg0XSoKf94fPdLo+bxFNkxK1bnVKPdNFMr6zSZxDr/aRv9kU2hSKjrmq/xx7mX7ul/OfVW88+IrlNcp8L7AQWRUax9HDRZI+h/lVHmlmfqql73ockD0gedmHPqKPIKIlyX+baKZoD/fvskKdq6g0ldNjkE5K/SJ608r6XIiNOOjhFZ3D1l/ST7Cbp7V+rEiht7SSdhb7AC9JYXIqMOLX3h+f6XluvZ+vYcR1auqNPlf+Y2lsttW+koO/XS+0cAH3VYcW1d4r5IosLurbI/xdgAIaTZBzRgnMgAAAAAElFTkSuQmCC"

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

/***/ "./images/team-img1.jpg":
/*!******************************!*\
  !*** ./images/team-img1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-img1-849acd7f8c242b9f506186852199c8af.jpg";

/***/ }),

/***/ "./images/team-img2.jpg":
/*!******************************!*\
  !*** ./images/team-img2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-img2-849acd7f8c242b9f506186852199c8af.jpg";

/***/ }),

/***/ "./images/team-img3.jpg":
/*!******************************!*\
  !*** ./images/team-img3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-img3-849acd7f8c242b9f506186852199c8af.jpg";

/***/ }),

/***/ "./images/team-img4.jpg":
/*!******************************!*\
  !*** ./images/team-img4.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-img4-849acd7f8c242b9f506186852199c8af.jpg";

/***/ }),

/***/ "./images/team-img5.jpg":
/*!******************************!*\
  !*** ./images/team-img5.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-img5-849acd7f8c242b9f506186852199c8af.jpg";

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

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
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
/* harmony import */ var _components_App_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/App/Banner */ "./components/App/Banner.js");
/* harmony import */ var _components_App_Partner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/App/Partner */ "./components/App/Partner.js");
/* harmony import */ var _components_App_Features__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/App/Features */ "./components/App/Features.js");
/* harmony import */ var _components_App_AppWorks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/App/AppWorks */ "./components/App/AppWorks.js");
/* harmony import */ var _components_App_Overview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/App/Overview */ "./components/App/Overview.js");
/* harmony import */ var _components_App_Funfact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/App/Funfact */ "./components/App/Funfact.js");
/* harmony import */ var _components_App_SaasTools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/App/SaasTools */ "./components/App/SaasTools.js");
/* harmony import */ var _components_App_Screenshot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/App/Screenshot */ "./components/App/Screenshot.js");
/* harmony import */ var _components_App_Team__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/App/Team */ "./components/App/Team.js");
/* harmony import */ var _components_App_PricingPlan__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/App/PricingPlan */ "./components/App/PricingPlan.js");
/* harmony import */ var _components_App_Download__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/App/Download */ "./components/App/Download.js");
/* harmony import */ var _components_App_Blog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/App/Blog */ "./components/App/Blog.js");
/* harmony import */ var _components_App_Feedback__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/App/Feedback */ "./components/App/Feedback.js");
/* harmony import */ var _components_App_Subscribe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/App/Subscribe */ "./components/App/Subscribe.js");























var HomeTwo = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomeTwo, _React$Component);

  function HomeTwo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeTwo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomeTwo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeTwo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Banner__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Partner__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Features__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_AppWorks__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Overview__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Funfact__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_SaasTools__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Screenshot__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Team__WEBPACK_IMPORTED_MODULE_16__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_PricingPlan__WEBPACK_IMPORTED_MODULE_17__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Download__WEBPACK_IMPORTED_MODULE_18__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Blog__WEBPACK_IMPORTED_MODULE_19__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Feedback__WEBPACK_IMPORTED_MODULE_20__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_App_Subscribe__WEBPACK_IMPORTED_MODULE_21__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return HomeTwo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HomeTwo);

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

/***/ 3:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\omarb\my-app2\src\mojosa-react-main\pages\app.js */"./pages/app.js");


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

/***/ })

/******/ });
//# sourceMappingURL=app.js.map