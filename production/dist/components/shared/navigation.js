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

var _jsxFileName = '/Users/stevenxie/Programs/active-projects/swing-networks/swing-web/components/shared/navigation.js';
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
      return _react2.default.createElement('div', { className: 'root', 'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', { className: 'nav-elements', 'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('table', {
        'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('tbody', {
        'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('tr', {
        'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('td', {
        'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('a', { className: this.getSelection("home"), 'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'home'))), _react2.default.createElement('td', {
        'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/simulator', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('a', { className: this.getSelection("simulator"), 'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'simulator'))), _react2.default.createElement('td', {
        'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/history', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('a', { className: this.getSelection("history"), 'data-jsx': 697615455,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'history'))))))), _react2.default.createElement(_style2.default, {
        styleId: 697615455,
        css: 'div.root[data-jsx="697615455"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:' + _colors.themeColors.darkMuted + '}div.nav-elements[data-jsx="697615455"]{-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;margin:50px 75px;max-width:1000px}a[data-jsx="697615455"]{margin:0 5px;text-decoration:none;-webkit-transition-duration:0.3s;transition-duration:0.3s;font-weight:300;font-size:22.5px}a.regular[data-jsx="697615455"]{color:' + _colors.themeColors.medLightMuted + '}a.selected[data-jsx="697615455"]{color:' + _colors.themeColors.medLight + ';cursor:default}a.regular[data-jsx="697615455"]:hover{color:' + _colors.themeColors.lightMuted + '}@media screen and (max-width:750px){div.nav-elements[data-jsx="697615455"]{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}div.nav-elements[data-jsx="697615455"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:17.5px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL25hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUcwQixBQU1ELEFBTUMsQUFRc0IsQUFJQSxBQUtBLEFBS2QsQUFJTixhQXpCTSxxQkFDSSxDQU8zQixBQUlpQixBQUtqQixhQXZCbUIsRUFtQm5CLGVBbEJtQixTQVBNLEFBc0NQLFFBOUJsQixNQStCMkIsSUF6QlQsQ0FvQmhCLGVBbkJpQixpQkFDbkIsZ0RBZmdELGNBdUM5QyxnQ0F0Q0YiLCJmaWxlIjoiY29tcG9uZW50cy9zaGFyZWQvbmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RldmVueGllL1Byb2dyYW1zL2FjdGl2ZS1wcm9qZWN0cy9zd2luZy1uZXR3b3Jrcy9zd2luZy13ZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB0aGVtZUNvbG9ycyB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaGFyZWQvY29sb3JzLmpzJ1xuXG5leHBvcnQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEVsZW1lbnQ6IHByb3BzLnNlbGVjdGlvblxuICAgIH07XG4gIH1cblxuICBnZXRTZWxlY3Rpb24obmF2RWxlbWVudCl7XG4gICAgaWYgKG5hdkVsZW1lbnQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEVsZW1lbnQpe1xuICAgICAgcmV0dXJuIFwic2VsZWN0ZWRcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiBcInJlZ3VsYXJcIjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtZWxlbWVudHNcIj5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+PExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e3RoaXMuZ2V0U2VsZWN0aW9uKFwiaG9tZVwiKX0+aG9tZTwvYT48L0xpbms+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9zaW11bGF0b3JcIj48YSBjbGFzc05hbWU9e3RoaXMuZ2V0U2VsZWN0aW9uKFwic2ltdWxhdG9yXCIpfT5zaW11bGF0b3I8L2E+PC9MaW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxMaW5rIHByZWZldGNoIGhyZWY9XCIvaGlzdG9yeVwiPjxhIGNsYXNzTmFtZT17dGhpcy5nZXRTZWxlY3Rpb24oXCJoaXN0b3J5XCIpfT5oaXN0b3J5PC9hPjwvTGluaz48L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LnJvb3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgdGhlbWVDb2xvcnMuZGFya011dGVkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2Lm5hdi1lbGVtZW50c3tcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCA3NXB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIyLjVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLnJlZ3VsYXIge1xuICAgICAgICAgICAgY29sb3I6ICR7IHRoZW1lQ29sb3JzLm1lZExpZ2h0TXV0ZWQgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAkeyB0aGVtZUNvbG9ycy5tZWRMaWdodCB9O1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEucmVndWxhciA6aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogJHsgdGhlbWVDb2xvcnMubGlnaHRNdXRlZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcbiAgICAgICAgICAgIGRpdi5uYXYtZWxlbWVudHN7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdi5uYXYtZWxlbWVudHN7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTcuNXB4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/shared/navigation.js */'
      }));
    }
  }]);

  return Navbar;
}(_react2.default.Component);