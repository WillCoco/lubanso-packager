webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Steper.js":
/*!******************************!*\
  !*** ./Components/Steper.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var mobx_react_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react/index */ "./node_modules/mobx-react/index.js");
/* harmony import */ var mobx_react_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react_index__WEBPACK_IMPORTED_MODULE_3__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var StyledSteps = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Steps"]).withConfig({
  displayName: "Steper__StyledSteps",
  componentId: "sc-1dwwjtz-0"
})(["width:200px;height:60px;"]);
var Step = antd__WEBPACK_IMPORTED_MODULE_2__["Steps"].Step;
var Uploader = (_dec = Object(mobx_react_index__WEBPACK_IMPORTED_MODULE_3__["inject"])(function (_ref) {
  var store = _ref.store;
  return {
    step: store.step,
    stepStatus: store.stepStatus
  };
}), _dec(_class = Object(mobx_react_index__WEBPACK_IMPORTED_MODULE_3__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Uploader, _React$Component);

  function Uploader() {
    _classCallCheck(this, Uploader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Uploader).apply(this, arguments));
  }

  _createClass(Uploader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$step = _this$props.step,
          step = _this$props$step === void 0 ? 1 : _this$props$step,
          stepStatus = _this$props.stepStatus;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSteps, {
        direction: "vertical",
        current: step,
        status: stepStatus
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, {
        title: "\u9009\u62E9\u7248\u672C",
        description: "\u9ED8\u8BA4\u6700\u65B0"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, {
        title: "\u4E0A\u4F20\u6838\u5FC3\u5E93",
        description: "\u6CE8\u610F\u540D\u79F0"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, {
        title: "Ready",
        description: "\u53EF\u4EE5\u5F00\u59CB\u6253\u5305"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, {
        title: "\u6253\u5305\u4E2D",
        description: "\u8981\u4E00\u4F1A\uFF0C\u4E4B\u540E\u52A0\u4E0A\u5B9E\u65F6\u63A8\u9001\u6253\u5305\u65E5\u5FD7\uFF0C\u4FBF\u4E8E\u89C2\u5BDF\u8FC7\u7A0B"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step, {
        title: "\u5B8C\u6210",
        description: "\u6253\u5305\u5B8C\u53EF\u4E0B\u8F7D"
      }));
    }
  }]);

  return Uploader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Uploader);

/***/ })

})
//# sourceMappingURL=index.js.a1e16e9604743dbad337.hot-update.js.map