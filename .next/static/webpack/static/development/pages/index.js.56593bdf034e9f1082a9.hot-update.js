webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _Components_Selecter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Selecter */ "./Components/Selecter.js");
/* harmony import */ var _Components_Upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Upload */ "./Components/Upload.js");
/* harmony import */ var _Components_History__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/History */ "./Components/History.js");
/* harmony import */ var _Components_Steper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Steper */ "./Components/Steper.js");
/* harmony import */ var _Components_MSGScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/MSGScreen */ "./Components/MSGScreen.js");
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











var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()('http://localhost:3001');
var Row = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Row",
  componentId: "sc-1o92slr-0"
})(["display:flex;"]);
var PackContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__PackContent",
  componentId: "sc-1o92slr-1"
})(["display:flex;flex:1;flex-direction:column;margin-left:100px;"]);
var Packager = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["inject"])(function (_ref) {
  var store = _ref.store;
  return {
    basicUrl: store.basicUrl,
    updateAvailableList: store.updateAvailableList,
    updateUrls: store.updateUrls,
    step: store.step,
    updateStep: store.updateStep,
    targetVersion: store.targetVersion,
    availableList: store.availableList,
    targetUrl: store.targetUrl,
    updateTargetUrl: store.updateTargetUrl,
    updateStepStatus: store.updateStepStatus,
    addPackMsg: store.addPackMsg
  };
}), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Packager, _React$Component);

  function Packager() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Packager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Packager)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      btnPackDisabled: true,
      btnDownDisabled: true
    };

    _this.pack = function () {
      var _this$props = _this.props,
          updateStep = _this$props.updateStep,
          availableList = _this$props.availableList,
          targetVersion = _this$props.targetVersion,
          updateStepStatus = _this$props.updateStepStatus;
      updateStep(3);
      updateStepStatus('process');
      socket.emit('pack', {
        version: targetVersion || availableList[0]
      });
    };

    _this.stopPack = function () {
      socket.emit('stopPack');
    };

    return _this;
  }

  _createClass(Packager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          basicUrl = _this$props2.basicUrl,
          updateStep = _this$props2.updateStep,
          updateTargetUrl = _this$props2.updateTargetUrl,
          updateUrls = _this$props2.updateUrls,
          updateStepStatus = _this$props2.updateStepStatus; // 开始打包

      socket.on('pack', function (res) {
        console.log('pack', res);

        if (!res.url) {
          updateStepStatus('error');
          return;
        }

        updateStep(4);
        updateTargetUrl(res.url);
        updateUrls(res.list);
        updateStepStatus('finish');
      }); // 打包日志

      socket.on('packMsg', function (data) {
        console.log(data.msg, 'packMsg');

        _this2.props.addPackMsg(data.msg);
      }); // 获取可打包项

      fetch("".concat(basicUrl, "/getAvailable")).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.props.updateAvailableList(res);
      }); // 获取可下载项目

      fetch("".concat(basicUrl, "/getUrls")).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.props.updateUrls(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var step = this.props.step;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: 100
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Steper__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PackContent, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Selecter__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
          height: 100
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Upload__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          height: 200
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 100
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: step === 3,
        type: "primary",
        shape: "circle",
        size: "large",
        onClick: this.pack
      }, "Go!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: step !== 3,
        type: "primary",
        shape: "circle",
        size: "large",
        onClick: this.stopPack
      }, "stop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_MSGScreen__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          height: 200
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: this.props.targetUrl
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: step < 4,
        type: "primary",
        icon: "download",
        size: "large"
      }, "Download")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_History__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return Packager;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Packager);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.56593bdf034e9f1082a9.hot-update.js.map