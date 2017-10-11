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

var _jsxFileName = '/Users/stevenxie/Programs/active-projects/swing-networks/swing-web/components/simulator/components/panel.js';


var Panel = function (_React$Component) {
  (0, _inherits3.default)(Panel, _React$Component);

  function Panel(props) {
    (0, _classCallCheck3.default)(this, Panel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).call(this, props));

    _this.state = {
      window: { width: '0', height: '0' },
      title: props.title
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Panel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({ title: props.title });
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      var heightDifference = Math.abs(window.innerHeight - this.state.window.height);
      if (!iOS || heightDifference < 10 || heightDifference > 100) {
        this.setState(function (state) {
          state.window.height = window.innerHeight;
          state.window.width = window.innerWidth;
          return state;
        });
      }
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      if (this.state.window.width <= 750) {
        return this.state.window.height - 150;
      } else {
        return this.state.window.height - 230;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'root', style: { height: this.getHeight() }, 'data-jsx': 1404893465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('div', { className: 'title-bar', 'data-jsx': 1404893465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h2', {
        'data-jsx': 1404893465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, this.state.title)), _react2.default.createElement('div', { className: 'content', 'data-jsx': 1404893465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.props.children), _react2.default.createElement(_style2.default, {
        styleId: 1404893465,
        css: 'div.root[data-jsx="1404893465"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:20px;background-color:' + _colors.themeColors.medLight + ';-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px;width:40vw;max-width:550px;min-width:400px;min-height:250px;box-sizing:border-box;box-shadow:0 5px 10px rgba(0,0,0,.35)}div.title-bar[data-jsx="1404893465"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:' + _colors.themeColors.medDarkMuted + ';border-radius:20px 20px 0 0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:7.5px 0}div.title-bar[data-jsx="1404893465"] h2[data-jsx="1404893465"]{margin:0;font-family:"Ubuntu",sans-serif;font-size:20px;font-weight:500;color:' + _colors.themeColors.medLight + '}div.content[data-jsx="1404893465"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;overflow-x:hidden;overflow-y:scroll}@media screen and (max-width:900px){div.root[data-jsx="1404893465"]{margin:10px;min-width:0;max-width:750px;width:90vw}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2ltdWxhdG9yL2NvbXBvbmVudHMvcGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURvQixBQUcwQixBQWVBLEFBUUosQUFRSSxBQVNDLFNBaEJtQixHQWlCbkIsWUFDSSxnQkFDTCxDQWxCRSxVQW1CZixLQWxCZ0IsZ0JBQ21CLEVBMUJoQixBQWUyQixBQWdCeEIsbUJBOUJ3QixjQTBCaEQsYUFYOEIsbUJBZE4sU0FlQyxJQWVoQixpQ0FDVyxrQkFDQSxjQS9CSyxJQWdDekIsMEJBakJrQixnQkFDbEIscURBZmMsWUFDRCxXQUNLLGdCQUNBLGdCQUNBLGlCQUNNLHNCQUNtQixzQ0FDM0MiLCJmaWxlIjoiY29tcG9uZW50cy9zaW11bGF0b3IvY29tcG9uZW50cy9wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3RldmVueGllL1Byb2dyYW1zL2FjdGl2ZS1wcm9qZWN0cy9zd2luZy1uZXR3b3Jrcy9zd2luZy13ZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdGhlbWVDb2xvcnMgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvc2hhcmVkL2NvbG9ycy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3aW5kb3c6IHt3aWR0aDogJzAnLCBoZWlnaHQ6ICcwJ30sXG4gICAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKXtcbiAgICB0aGlzLnNldFN0YXRlKHt0aXRsZTogcHJvcHMudGl0bGV9KTtcbiAgfVxuXG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gICAgY29uc3QgaU9TID0gL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbTtcbiAgICBjb25zdCBoZWlnaHREaWZmZXJlbmNlID0gTWF0aC5hYnMod2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5zdGF0ZS53aW5kb3cuaGVpZ2h0KTtcbiAgICBpZiAoIWlPUyB8fCBoZWlnaHREaWZmZXJlbmNlIDwgMTAgfHwgaGVpZ2h0RGlmZmVyZW5jZSA+IDEwMCl7XG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSk9PntcbiAgICAgICAgc3RhdGUud2luZG93LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgc3RhdGUud2luZG93LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEhlaWdodCgpe1xuICAgIGlmICh0aGlzLnN0YXRlLndpbmRvdy53aWR0aCA8PSA3NTApe1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUud2luZG93LmhlaWdodCAtIDE1MDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLndpbmRvdy5oZWlnaHQgLSAyMzA7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCIgc3R5bGU9e3toZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KCl9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1iYXJcIj5cbiAgICAgICAgICA8aDI+e3RoaXMuc3RhdGUudGl0bGV9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LnJvb3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyB0aGVtZUNvbG9ycy5tZWRMaWdodCB9O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQgMjUwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIC4zNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2LnRpdGxlLWJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgdGhlbWVDb2xvcnMubWVkRGFya011dGVkIH07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA3LjVweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdi50aXRsZS1iYXIgaDJ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogJHsgdGhlbWVDb2xvcnMubWVkTGlnaHQgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYuY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xuICAgICAgICAgICAgZGl2LnJvb3Qge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/simulator/components/panel.js */'
      }));
    }
  }]);

  return Panel;
}(_react2.default.Component);

exports.default = Panel;