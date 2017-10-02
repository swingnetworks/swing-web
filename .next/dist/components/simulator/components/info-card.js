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

var InfoCard = function (_React$Component) {
  (0, _inherits3.default)(InfoCard, _React$Component);

  function InfoCard(props) {
    (0, _classCallCheck3.default)(this, InfoCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InfoCard.__proto__ || (0, _getPrototypeOf2.default)(InfoCard)).call(this, props));

    _this.state = {
      title: props.title,
      value: props.value,
      options: props.options
    };
    return _this;
  }

  (0, _createClass3.default)(InfoCard, [{
    key: "getRootClassName",
    value: function getRootClassName() {
      if (this.state.options == null) {
        return "root";
      }
      return "root " + this.state.options;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: this.getRootClassName(), "data-jsx": 349579105
      }, _react2.default.createElement("p", {
        "data-jsx": 349579105
      }, this.state.title), _react2.default.createElement("h1", {
        "data-jsx": 349579105
      }, this.state.value), _react2.default.createElement(_style2.default, {
        styleId: 349579105,
        css: "div.root[data-jsx=\"349579105\"]{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0;margin:0;background-color:#C1C1C1;color:#878787;margin:5px;border-radius:17.5px;padding:7.5px 12.5px;min-width:150px}div.tinted[data-jsx=\"349579105\"]{background-color:#B6BDCB;color:#647C9D}p[data-jsx=\"349579105\"]{margin:0;font-size:16px;font-weight:500}h1[data-jsx=\"349579105\"]{margin:0 0 15px 0;font-weight:700;font-size:35px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}"
      }));
    }
  }]);

  return InfoCard;
}(_react2.default.Component);

exports.default = InfoCard;