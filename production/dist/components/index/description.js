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

var _colors = require('../../styles/shared/colors.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = function (_React$Component) {
  (0, _inherits3.default)(Description, _React$Component);

  function Description() {
    (0, _classCallCheck3.default)(this, Description);

    return (0, _possibleConstructorReturn3.default)(this, (Description.__proto__ || (0, _getPrototypeOf2.default)(Description)).apply(this, arguments));
  }

  (0, _createClass3.default)(Description, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'root', 'data-jsx': 496927475
      }, _react2.default.createElement('div', {
        'data-jsx': 496927475
      }, _react2.default.createElement('h1', {
        'data-jsx': 496927475
      }, '\u201Crotman commerce sucks\u201D'), _react2.default.createElement('h2', {
        'data-jsx': 496927475
      }, '\u2014dave lio')), _react2.default.createElement('div', {
        'data-jsx': 496927475
      }, _react2.default.createElement('h1', {
        'data-jsx': 496927475
      }, '\u201Caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\u201D'), _react2.default.createElement('h2', {
        'data-jsx': 496927475
      }, '\u2014steven xie')), _react2.default.createElement('div', { className: 'spacer', 'data-jsx': 496927475
      }), _react2.default.createElement(_style2.default, {
        styleId: 496927475,
        css: 'div.root[data-jsx="496927475"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:' + _colors.themeColors.medLight + ';padding-top:60px}h1[data-jsx="496927475"]{margin:50px 45px 0 45px;font-size:37.5px;font-weight:300;color:' + _colors.themeColors.medMuted + '}h2[data-jsx="496927475"]{text-align:center;padding-left:55%;font-size:27.5px;font-weight:100;color:' + _colors.themeColors.medMuted + '}div.spacer[data-jsx="496927475"]{height:75px}@media screen and (max-width:600px){div.root[data-jsx="496927475"]{padding-top:45px}h1[data-jsx="496927475"]{margin:25px 40px 0 40px;font-size:30px}h2[data-jsx="496927475"]{margin:10px 0 15px 0}div.spacer[data-jsx="496927475"]{height:40px}}'
      }));
    }
  }]);

  return Description;
}(_react2.default.Component);

exports.default = Description;