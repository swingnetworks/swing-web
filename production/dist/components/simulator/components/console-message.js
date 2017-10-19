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

var _colors = require('../../../styles/shared/colors.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      return _react2.default.createElement('div', { className: "root " + style, 'data-jsx': 786266044
      }, _react2.default.createElement('div', { className: "main", 'data-jsx': 786266044
      }, _react2.default.createElement('h2', { className: style, 'data-jsx': 786266044
      }, sender), _react2.default.createElement('p', { className: style, 'data-jsx': 786266044
      }, this.state.text)), _react2.default.createElement(_style2.default, {
        styleId: 786266044,
        css: 'div.root[data-jsx="786266044"]{display:inline-block;border-radius:17.5px;padding:10px 12.5px 10px 12.5px;max-width:70%}div.main[data-jsx="786266044"]{display:block;min-width:150px;overflow-x:hidden;word-wrap:break-word}div.tinted[data-jsx="786266044"]{margin:10px auto 0 10px;background-color:' + _colors.themeColors.medDark + '}div.normal[data-jsx="786266044"]{margin:10px 10px 0 auto;background-color:' + _colors.themeColors.light + '}p[data-jsx="786266044"]{margin:0;font-size:17.5px;font-weight:500}h2[data-jsx="786266044"]{margin:0 0 2.5px 0;font-weight:400;font-size:22.5px;font-family:Nunito}p.normal[data-jsx="786266044"]{color:' + _colors.themeColors.medDarkMuted + ';text-align:right}h2.normal[data-jsx="786266044"]{color:' + _colors.themeColors.dark + ';text-align:right}p.tinted[data-jsx="786266044"]{color:' + _colors.themeColors.medLight + '}h2.tinted[data-jsx="786266044"]{color:' + _colors.themeColors.light + '}'
      }));
    }
  }]);

  return ConsoleMessage;
}(_react2.default.Component);

exports.default = ConsoleMessage;