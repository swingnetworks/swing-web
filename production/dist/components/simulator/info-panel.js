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

var _panel = require('./components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _infoCard = require('./components/info-card.js');

var _infoCard2 = _interopRequireDefault(_infoCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoPanel = function (_React$Component) {
  (0, _inherits3.default)(InfoPanel, _React$Component);

  function InfoPanel() {
    (0, _classCallCheck3.default)(this, InfoPanel);

    return (0, _possibleConstructorReturn3.default)(this, (InfoPanel.__proto__ || (0, _getPrototypeOf2.default)(InfoPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(InfoPanel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'root', 'data-jsx': 1690823854
      }, _react2.default.createElement(_panel2.default, { title: 'INFO' }, _react2.default.createElement('div', { className: 'content', 'data-jsx': 1690823854
      }, _react2.default.createElement('div', { className: 'card single', 'data-jsx': 1690823854
      }, _react2.default.createElement(_infoCard2.default, { title: 'Simulation Date', value: 'N/A', options: 'tinted' })), _react2.default.createElement('div', { className: 'card double', 'data-jsx': 1690823854
      }, _react2.default.createElement(_infoCard2.default, { title: 'Portfolio Value', value: 'N/A' }), _react2.default.createElement(_infoCard2.default, { title: 'Account Balance', value: 'N/A' })), _react2.default.createElement('div', { className: 'card double', 'data-jsx': 1690823854
      }, _react2.default.createElement(_infoCard2.default, { title: 'Last Stock Sold', value: 'N/A' }), _react2.default.createElement(_infoCard2.default, { title: 'Value from Stock', value: 'N/A' })))), _react2.default.createElement(_style2.default, {
        styleId: 1690823854,
        css: 'div.content[data-jsx="1690823854"]{padding:7.5px}p[data-jsx="1690823854"]{margin:0;padding:0}div.card[data-jsx="1690823854"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}div.double[data-jsx="1690823854"]{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}'
      }));
    }
  }]);

  return InfoPanel;
}(_react2.default.Component);

exports.default = InfoPanel;