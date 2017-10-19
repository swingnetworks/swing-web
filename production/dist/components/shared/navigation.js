'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = undefined;

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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _colors = require('../../styles/shared/colors.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = exports.Navbar = function (_React$Component) {
  (0, _inherits3.default)(Navbar, _React$Component);

  function Navbar(props) {
    (0, _classCallCheck3.default)(this, Navbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).call(this, props));

    _this.state = {
      selectedElement: props.selection
    };
    return _this;
  }

  (0, _createClass3.default)(Navbar, [{
    key: 'getSelection',
    value: function getSelection(navElement) {
      if (navElement == this.state.selectedElement) {
        return "selected";
      } else {
        return "regular";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'root', 'data-jsx': 697615455
      }, _react2.default.createElement('div', { className: 'nav-elements', 'data-jsx': 697615455
      }, _react2.default.createElement('table', {
        'data-jsx': 697615455
      }, _react2.default.createElement('tbody', {
        'data-jsx': 697615455
      }, _react2.default.createElement('tr', {
        'data-jsx': 697615455
      }, _react2.default.createElement('td', {
        'data-jsx': 697615455
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, _react2.default.createElement('a', { className: this.getSelection("home"), 'data-jsx': 697615455
      }, 'home'))), _react2.default.createElement('td', {
        'data-jsx': 697615455
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/simulator' }, _react2.default.createElement('a', { className: this.getSelection("simulator"), 'data-jsx': 697615455
      }, 'simulator'))), _react2.default.createElement('td', {
        'data-jsx': 697615455
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/history' }, _react2.default.createElement('a', { className: this.getSelection("history"), 'data-jsx': 697615455
      }, 'history'))))))), _react2.default.createElement(_style2.default, {
        styleId: 697615455,
        css: 'div.root[data-jsx="697615455"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:' + _colors.themeColors.darkMuted + '}div.nav-elements[data-jsx="697615455"]{-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;margin:50px 75px;max-width:1000px}a[data-jsx="697615455"]{margin:0 5px;text-decoration:none;-webkit-transition-duration:0.3s;transition-duration:0.3s;font-weight:300;font-size:22.5px}a.regular[data-jsx="697615455"]{color:' + _colors.themeColors.medLightMuted + '}a.selected[data-jsx="697615455"]{color:' + _colors.themeColors.medLight + ';cursor:default}a.regular[data-jsx="697615455"]:hover{color:' + _colors.themeColors.lightMuted + '}@media screen and (max-width:750px){div.nav-elements[data-jsx="697615455"]{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}div.nav-elements[data-jsx="697615455"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:17.5px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}}'
      }));
    }
  }]);

  return Navbar;
}(_react2.default.Component);