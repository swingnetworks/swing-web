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

var _jsxFileName = '/Users/stevenxie/Programs/active-projects/swing-networks/swing-web/components/simulator/components/info-card.js';


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
    key: 'getRootClassName',
    value: function getRootClassName() {
      if (this.state.options == null) {
        return "root";
      }
      return "root " + this.state.options;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: this.getRootClassName(), 'data-jsx': 1075824276,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('p', {
        'data-jsx': 1075824276,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.state.title), _react2.default.createElement('h1', {
        'data-jsx': 1075824276,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, this.state.value), _react2.default.createElement(_style2.default, {
        styleId: 1075824276,
        css: 'div.root[data-jsx="1075824276"]{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0;margin:0;background-color:' + _colors.themeColors.medMuted + ';color:' + _colors.themeColors.medLight + ';margin:5px;border-radius:17.5px;padding:7.5px 12.5px;min-width:150px}div.tinted[data-jsx="1075824276"]{background-color:' + _colors.themeColors.medDarkMuted + ';color:' + _colors.themeColors.light + '}p[data-jsx="1075824276"]{margin:0;font-size:16px;font-weight:500}h1[data-jsx="1075824276"]{margin:0 0 15px 0;font-weight:700;font-size:35px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2ltdWxhdG9yL2NvbXBvbmVudHMvaW5mby1jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCb0IsQUFHb0IsQUFhdUMsQUFLckMsQUFNUyxTQUxILFNBTUMsTUFMQSxTQW5CSCxDQXlCRSxNQUxqQixNQVBxQyxHQWFqQixnQ0FacEIsMEJBYndCLGFBMEJ4QixpRUF6QlksVUFBVSxTQUMwQiw4Q0FDWCxtQ0FDeEIsV0FDVSxxQkFDQSxxQkFDTCxnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9zaW11bGF0b3IvY29tcG9uZW50cy9pbmZvLWNhcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbnhpZS9Qcm9ncmFtcy9hY3RpdmUtcHJvamVjdHMvc3dpbmctbmV0d29ya3Mvc3dpbmctd2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdGhlbWVDb2xvcnMgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbG9ycy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb0NhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICBvcHRpb25zOiBwcm9wcy5vcHRpb25zLFxuICAgIH07XG4gIH1cblxuICBnZXRSb290Q2xhc3NOYW1lKCl7XG4gICAgaWYgKHRoaXMuc3RhdGUub3B0aW9ucyA9PSBudWxsKXsgcmV0dXJuIFwicm9vdFwiOyB9XG4gICAgcmV0dXJuIFwicm9vdCBcIiArIHRoaXMuc3RhdGUub3B0aW9ucztcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmdldFJvb3RDbGFzc05hbWUoKX0+XG4gICAgICAgIDxwPnt0aGlzLnN0YXRlLnRpdGxlfTwvcD5cbiAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnZhbHVlfTwvaDE+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5yb290IHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7IG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IHRoZW1lQ29sb3JzLm1lZE11dGVkIH07XG4gICAgICAgICAgICBjb2xvcjogJHsgdGhlbWVDb2xvcnMubWVkTGlnaHQgfTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTcuNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNy41cHggMTIuNXB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYudGludGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IHRoZW1lQ29sb3JzLm1lZERhcmtNdXRlZCB9O1xuICAgICAgICAgICAgY29sb3I6ICR7IHRoZW1lQ29sb3JzLmxpZ2h0IH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/simulator/components/info-card.js */'
      }));
    }
  }]);

  return InfoCard;
}(_react2.default.Component);

exports.default = InfoCard;