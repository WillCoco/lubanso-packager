webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Selecter.js":
/*!********************************!*\
  !*** ./Components/Selecter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
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





var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
var DropMenus = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["inject"])(function (_ref) {
  var store = _ref.store;
  return {
    list: store.availableList,
    current: store.targetVersion,
    updateTargetVersion: store.updateTargetVersion
  };
}), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropMenus, _React$Component);

  function DropMenus() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropMenus);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropMenus)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onClick = function (e) {
      _this.props.updateTargetVersion(e);
    };

    return _this;
  }

  _createClass(DropMenus, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$list = _this$props.list,
          list = _this$props$list === void 0 ? ['获取中...'] : _this$props$list,
          current = _this$props.current,
          style = _this$props.style;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        value: current || list[0],
        style: {
          width: 120
        },
        onChange: this.onClick
      }, list.map(function (d, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: "selector_".concat(i),
          value: d
        }, d);
      })));
    }
  }]);

  return DropMenus;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (DropMenus);

/***/ })

})
//# sourceMappingURL=index.js.91b538906daf76c8b7f9.hot-update.js.map