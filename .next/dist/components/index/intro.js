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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intro = function (_React$Component) {
  (0, _inherits3.default)(Intro, _React$Component);

  function Intro() {
    (0, _classCallCheck3.default)(this, Intro);

    return (0, _possibleConstructorReturn3.default)(this, (Intro.__proto__ || (0, _getPrototypeOf2.default)(Intro)).apply(this, arguments));
  }

  (0, _createClass3.default)(Intro, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'root', 'data-jsx': 755008405
      }, _react2.default.createElement('div', { className: 'branding', 'data-jsx': 755008405
      }, _react2.default.createElement('h1', {
        'data-jsx': 755008405
      }, 'swing networks')), _react2.default.createElement('p', {
        'data-jsx': 755008405
      }, 'the future of trading is here'), _react2.default.createElement('button', { onClick: function onClick() {
          _index2.default.push('/simulator');
        }, 'data-jsx': 755008405
      }, 'simulator'), _react2.default.createElement(_style2.default, {
        styleId: 755008405,
        css: 'div.root[data-jsx="755008405"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}h1[data-jsx="755008405"]{margin:65px 0 0 0;font-family:"Ubuntu",sans-serif;font-size:75px;font-weight:700;color:#7BF3A3;cursor:default}p[data-jsx="755008405"]{margin:12.5px 0 0 0;font-size:30px;font-weight:300;color:#72B688}button[data-jsx="755008405"]{margin:70px 0 115px 0;padding:17.5px 27.5px;border:0;background-color:#4E4E4E;border-radius:20px;cursor:pointer;-webkit-transition-duration:0.25s;transition-duration:0.25s;color:#B5B5B5;font-family:Ubuntu;font-weight:300;font-size:30px;text-decoration:none}button[data-jsx="755008405"]:hover{background-color:#587B63;color:#96F5B5}@media screen and (max-width:600px){h1[data-jsx="755008405"]{font-size:60px}p[data-jsx="755008405"]{font-size:25px}button[data-jsx="755008405"]{margin:50px 0 75px 0}}'
      }));
    }
  }]);

  return Intro;
}(_react2.default.Component);

exports.default = Intro;