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
      return _react2.default.createElement('div', { className: 'root', style: { height: this.getHeight() }, 'data-jsx': 1404893465
      }, _react2.default.createElement('div', { className: 'title-bar', 'data-jsx': 1404893465
      }, _react2.default.createElement('h2', {
        'data-jsx': 1404893465
      }, this.state.title)), _react2.default.createElement('div', { className: 'content', 'data-jsx': 1404893465
      }, this.props.children), _react2.default.createElement(_style2.default, {
        styleId: 1404893465,
        css: 'div.root[data-jsx="1404893465"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:20px;background-color:' + _colors.themeColors.medLight + ';-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px;width:40vw;max-width:550px;min-width:400px;min-height:250px;box-sizing:border-box;box-shadow:0 5px 10px rgba(0,0,0,.35)}div.title-bar[data-jsx="1404893465"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:' + _colors.themeColors.medDarkMuted + ';border-radius:20px 20px 0 0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:7.5px 0}div.title-bar[data-jsx="1404893465"] h2[data-jsx="1404893465"]{margin:0;font-family:"Ubuntu",sans-serif;font-size:20px;font-weight:500;color:' + _colors.themeColors.medLight + '}div.content[data-jsx="1404893465"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;overflow-x:hidden;overflow-y:scroll}@media screen and (max-width:900px){div.root[data-jsx="1404893465"]{margin:10px;min-width:0;max-width:750px;width:90vw}}'
      }));
    }
  }]);

  return Panel;
}(_react2.default.Component);

exports.default = Panel;