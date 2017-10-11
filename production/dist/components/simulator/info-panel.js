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

var _jsxFileName = '/Users/stevenxie/Programs/active-projects/swing-networks/swing-web/components/simulator/info-panel.js';


var InfoPanel = function (_React$Component) {
  (0, _inherits3.default)(InfoPanel, _React$Component);

  function InfoPanel() {
    (0, _classCallCheck3.default)(this, InfoPanel);

    return (0, _possibleConstructorReturn3.default)(this, (InfoPanel.__proto__ || (0, _getPrototypeOf2.default)(InfoPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(InfoPanel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'root', 'data-jsx': 1690823854,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_panel2.default, { title: 'INFO', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('div', { className: 'content', 'data-jsx': 1690823854,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('div', { className: 'card single', 'data-jsx': 1690823854,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_infoCard2.default, { title: 'Simulation Date', value: 'N/A', options: 'tinted', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })), _react2.default.createElement('div', { className: 'card double', 'data-jsx': 1690823854,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_infoCard2.default, { title: 'Portfolio Value', value: 'N/A', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement(_infoCard2.default, { title: 'Account Balance', value: 'N/A', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })), _react2.default.createElement('div', { className: 'card double', 'data-jsx': 1690823854,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_infoCard2.default, { title: 'Last Stock Sold', value: 'N/A', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(_infoCard2.default, { title: 'Value from Stock', value: 'N/A', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })))), _react2.default.createElement(_style2.default, {
        styleId: 1690823854,
        css: 'div.content[data-jsx="1690823854"]{padding:7.5px}p[data-jsx="1690823854"]{margin:0;padding:0}div.card[data-jsx="1690823854"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}div.double[data-jsx="1690823854"]{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2ltdWxhdG9yL2luZm8tcGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUcyQixBQUlMLEFBS0ksQUFJRSxTQVJMLEtBSlosS0FLQSxzQ0FRQSxpQkFKQSIsImZpbGUiOiJjb21wb25lbnRzL3NpbXVsYXRvci9pbmZvLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zdGV2ZW54aWUvUHJvZ3JhbXMvYWN0aXZlLXByb2plY3RzL3N3aW5nLW5ldHdvcmtzL3N3aW5nLXdlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYW5lbCBmcm9tICcuL2NvbXBvbmVudHMvcGFuZWwuanMnXG5pbXBvcnQgSW5mb0NhcmQgZnJvbSAnLi9jb21wb25lbnRzL2luZm8tY2FyZC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb1BhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgPFBhbmVsIHRpdGxlPVwiSU5GT1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNpbmdsZVwiPlxuICAgICAgICAgICAgICA8SW5mb0NhcmQgdGl0bGU9XCJTaW11bGF0aW9uIERhdGVcIiB2YWx1ZT1cIk4vQVwiIG9wdGlvbnM9XCJ0aW50ZWRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZG91YmxlXCI+XG4gICAgICAgICAgICAgIDxJbmZvQ2FyZCB0aXRsZT1cIlBvcnRmb2xpbyBWYWx1ZVwiIHZhbHVlPVwiTi9BXCIgLz5cbiAgICAgICAgICAgICAgPEluZm9DYXJkIHRpdGxlPVwiQWNjb3VudCBCYWxhbmNlXCIgdmFsdWU9XCJOL0FcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZG91YmxlXCI+XG4gICAgICAgICAgICAgIDxJbmZvQ2FyZCB0aXRsZT1cIkxhc3QgU3RvY2sgU29sZFwiIHZhbHVlPVwiTi9BXCIgLz5cbiAgICAgICAgICAgICAgPEluZm9DYXJkIHRpdGxlPVwiVmFsdWUgZnJvbSBTdG9ja1wiIHZhbHVlPVwiTi9BXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYuY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA3LjVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2LmNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYuZG91YmxlIHtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/simulator/info-panel.js */'
      }));
    }
  }]);

  return InfoPanel;
}(_react2.default.Component);

exports.default = InfoPanel;