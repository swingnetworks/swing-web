'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _consolePanel = require('./console-panel.js');

var _consolePanel2 = _interopRequireDefault(_consolePanel);

var _infoPanel = require('./info-panel.js');

var _infoPanel2 = _interopRequireDefault(_infoPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stevenxie/Programs/active-projects/swing-networks/swing-web/components/simulator/body.js';


var Body = function (_React$Component) {
  (0, _inherits3.default)(Body, _React$Component);

  function Body() {
    (0, _classCallCheck3.default)(this, Body);

    return (0, _possibleConstructorReturn3.default)(this, (Body.__proto__ || (0, _getPrototypeOf2.default)(Body)).apply(this, arguments));
  }

  (0, _createClass3.default)(Body, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'root', 'data-jsx': 643766682,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_consolePanel2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement(_infoPanel2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 643766682,
        css: 'div.root[data-jsx="643766682"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:25px 0}@media screen and (max-width:900px){div.root[data-jsx="643766682"]{padding:5px 0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2ltdWxhdG9yL2JvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWW9CLEFBRzBCLEFBUUcsY0FDaEIsNERBUnVCLG1HQUNSLHlEQUNBLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvc2ltdWxhdG9yL2JvZHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbnhpZS9Qcm9ncmFtcy9hY3RpdmUtcHJvamVjdHMvc3dpbmctbmV0d29ya3Mvc3dpbmctd2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnNvbGVQYW5lbCBmcm9tICcuL2NvbnNvbGUtcGFuZWwuanMnXG5pbXBvcnQgSW5mb1BhbmVsIGZyb20gJy4vaW5mby1wYW5lbC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgPENvbnNvbGVQYW5lbCAvPlxuICAgICAgICA8SW5mb1BhbmVsIC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5yb290IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XG4gICAgICAgICAgICBkaXYucm9vdHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/simulator/body.js */'
      }));
    }
  }]);

  return Body;
}(_react2.default.Component);

exports.default = Body;