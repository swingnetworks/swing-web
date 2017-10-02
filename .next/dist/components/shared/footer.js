"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);

    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "root", "data-jsx": 4184487480
      }, _react2.default.createElement("div", { className: "row", "data-jsx": 4184487480
      }, _react2.default.createElement("h2", {
        "data-jsx": 4184487480
      }, "made in ", _react2.default.createElement("a", {
        "data-jsx": 4184487480
      }, "toronto")), _react2.default.createElement("h1", {
        "data-jsx": 4184487480
      }, "$"), _react2.default.createElement("h2", { style: { textAlign: 'right' }, "data-jsx": 4184487480
      }, "we're on ", _react2.default.createElement("a", { href: "https://github.com/swingnetworks", "data-jsx": 4184487480
      }, "github"))), _react2.default.createElement(_style2.default, {
        styleId: 4184487480,
        css: "div.root[data-jsx=\"4184487480\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}div.row[data-jsx=\"4184487480\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}h1[data-jsx=\"4184487480\"]{margin:25px 0;font-family:\"Ubuntu\",sans-serif;font-weight:800;font-size:75px;color:#96F5B5;cursor:default}h2[data-jsx=\"4184487480\"]{margin:0 35px;font-weight:300;font-size:32.5px}a[data-jsx=\"4184487480\"]{text-decoration:none;color:#D0D0D0;-webkit-transition-duration:0.25s;transition-duration:0.25s}a[data-jsx=\"4184487480\"]:hover{color:white}@media screen and (max-width:600px){h2[data-jsx=\"4184487480\"]{font-size:25px;margin:0 25px}h1[data-jsx=\"4184487480\"]{font-size:65px}div.row[data-jsx=\"4184487480\"]{-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between}}"
      }));
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;