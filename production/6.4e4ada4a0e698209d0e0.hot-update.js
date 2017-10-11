webpackHotUpdate(6,{

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(67);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(68);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(69);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(552);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(553);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stevenxie/Programs/active-projects/swing-networks/swing-web/components/simulator/components/console-message.js';


var ConsoleMessage = function (_React$Component) {
  (0, _inherits3.default)(ConsoleMessage, _React$Component);

  function ConsoleMessage(props) {
    (0, _classCallCheck3.default)(this, ConsoleMessage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConsoleMessage.__proto__ || (0, _getPrototypeOf2.default)(ConsoleMessage)).call(this, props));

    _this.state = {
      text: props.text,
      sender: props.sender
    };
    return _this;
  }

  (0, _createClass3.default)(ConsoleMessage, [{
    key: 'render',
    value: function render() {
      var style = "tinted";
      var sender = "you";

      if (this.state.sender != "user") {
        style = "normal";
        sender = "system";
      }

      return _react2.default.createElement('div', { className: "root " + style, 'data-jsx': 786266044,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('div', { className: "main", 'data-jsx': 786266044,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('h2', { className: style, 'data-jsx': 786266044,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, sender), _react2.default.createElement('p', { className: style, 'data-jsx': 786266044,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.state.text)), _react2.default.createElement(_style2.default, {
        styleId: 786266044,
        css: 'div.root[data-jsx="786266044"]{display:inline-block;border-radius:17.5px;padding:10px 12.5px 10px 12.5px;max-width:70%}div.main[data-jsx="786266044"]{display:block;min-width:150px;overflow-x:hidden;word-wrap:break-word}div.tinted[data-jsx="786266044"]{margin:10px auto 0 10px;background-color:' + _colors.themeColors.medDark + '}div.normal[data-jsx="786266044"]{margin:10px 10px 0 auto;background-color:' + _colors.themeColors.light + '}p[data-jsx="786266044"]{margin:0;font-size:17.5px;font-weight:500}h2[data-jsx="786266044"]{margin:0 0 2.5px 0;font-weight:400;font-size:22.5px;font-family:Nunito}p.normal[data-jsx="786266044"]{color:' + _colors.themeColors.medDarkMuted + ';text-align:right}h2.normal[data-jsx="786266044"]{color:' + _colors.themeColors.dark + ';text-align:right}p.tinted[data-jsx="786266044"]{color:' + _colors.themeColors.medLight + '}h2.tinted[data-jsx="786266044"]{color:' + _colors.themeColors.light + '}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2ltdWxhdG9yL2NvbXBvbmVudHMvY29uc29sZS1tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHa0MsQUFPUCxBQU9VLEFBS0EsQUFLZixBQU1VLEFBT2dCLEFBS0EsQUFLQSxBQUlBLFNBMUJsQixLQWpCRCxLQXVCQSxFQTlCSyxHQWN5QixBQU1qRCxFQUttQixJQWpCRSxLQXVCRCxBQU1BLEFBS0EsQUFLbkIsQUFJQSxPQWxEa0MsQUF5QmxDLE1BakJ1QixJQXVCRixBQU1yQixBQUtBLGlCQWpDQSxDQUtBLEFBS0EsQ0FhQSxHQS9CZ0IsY0FDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9zaW11bGF0b3IvY29tcG9uZW50cy9jb25zb2xlLW1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbnhpZS9Qcm9ncmFtcy9hY3RpdmUtcHJvamVjdHMvc3dpbmctbmV0d29ya3Mvc3dpbmctd2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdGhlbWVDb2xvcnMgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbG9ycy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZU1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXh0OiBwcm9wcy50ZXh0LFxuICAgICAgc2VuZGVyOiBwcm9wcy5zZW5kZXIsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHZhciBzdHlsZSA9IFwidGludGVkXCI7XG4gICAgdmFyIHNlbmRlciA9IFwieW91XCI7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZW5kZXIgIT0gXCJ1c2VyXCIpIHtcbiAgICAgIHN0eWxlID0gXCJub3JtYWxcIjtcbiAgICAgIHNlbmRlciA9IFwic3lzdGVtXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wicm9vdCBcIiArIHN0eWxlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWFpblwifT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZX0+e3NlbmRlcn08L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGV9Pnt0aGlzLnN0YXRlLnRleHR9PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LnJvb3Qge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTcuNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMi41cHggMTBweCAxMi41cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYubWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2LnRpbnRlZCB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0byAwIDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyB0aGVtZUNvbG9ycy5tZWREYXJrIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2Lm5vcm1hbCB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwIGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyB0aGVtZUNvbG9ycy5saWdodCB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3LjVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMi41cHggMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIyLjVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcC5ub3JtYWwge1xuICAgICAgICAgICAgY29sb3I6ICR7IHRoZW1lQ29sb3JzLm1lZERhcmtNdXRlZCB9O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIubm9ybWFsIHtcbiAgICAgICAgICAgIGNvbG9yOiAkeyB0aGVtZUNvbG9ycy5kYXJrIH07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwLnRpbnRlZCB7XG4gICAgICAgICAgICBjb2xvcjogJHsgdGhlbWVDb2xvcnMubWVkTGlnaHQgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMi50aW50ZWQge1xuICAgICAgICAgICAgY29sb3I6ICR7IHRoZW1lQ29sb3JzLmxpZ2h0IH07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/simulator/components/console-message.js */'
      }));
    }
  }]);

  return ConsoleMessage;
}(_react2.default.Component);

exports.default = ConsoleMessage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/stevenxie/Programs/active-projects/swing-networks/swing-web/components/simulator/components/console-message.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/stevenxie/Programs/active-projects/swing-networks/swing-web/components/simulator/components/console-message.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi40ZTRhZGE0YTBlNjk4MjA5ZDBlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaW11bGF0b3IvY29tcG9uZW50cy9jb25zb2xlLW1lc3NhZ2UuanM/OTVjNzE4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0aGVtZUNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zaGFyZWQvY29sb3JzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6IHByb3BzLnRleHQsXG4gICAgICBzZW5kZXI6IHByb3BzLnNlbmRlcixcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgdmFyIHN0eWxlID0gXCJ0aW50ZWRcIjtcbiAgICB2YXIgc2VuZGVyID0gXCJ5b3VcIjtcblxuICAgIGlmICh0aGlzLnN0YXRlLnNlbmRlciAhPSBcInVzZXJcIikge1xuICAgICAgc3R5bGUgPSBcIm5vcm1hbFwiO1xuICAgICAgc2VuZGVyID0gXCJzeXN0ZW1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyb290IFwiICsgc3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtYWluXCJ9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlfT57c2VuZGVyfTwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZX0+e3RoaXMuc3RhdGUudGV4dH08L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYucm9vdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNy41cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEyLjVweCAxMHB4IDEyLjVweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdi5tYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYudGludGVkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvIDAgMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IHRoZW1lQ29sb3JzLm1lZERhcmsgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYubm9ybWFsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDAgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IHRoZW1lQ29sb3JzLmxpZ2h0IH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTcuNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyLjVweCAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjIuNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwLm5vcm1hbCB7XG4gICAgICAgICAgICBjb2xvcjogJHsgdGhlbWVDb2xvcnMubWVkRGFya011dGVkIH07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMi5ub3JtYWwge1xuICAgICAgICAgICAgY29sb3I6ICR7IHRoZW1lQ29sb3JzLmRhcmsgfTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAudGludGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAkeyB0aGVtZUNvbG9ycy5tZWRMaWdodCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyLnRpbnRlZCB7XG4gICAgICAgICAgICBjb2xvcjogJHsgdGhlbWVDb2xvcnMubGlnaHQgfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zaW11bGF0b3IvY29tcG9uZW50cy9jb25zb2xlLW1lc3NhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUF0QkE7QUFzQkE7Ozs7O0FBbkJBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9