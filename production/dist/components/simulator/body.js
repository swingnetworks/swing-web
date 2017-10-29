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

var _consolePanel = require('./console-panel.js');

var _consolePanel2 = _interopRequireDefault(_consolePanel);

var _infoPanel = require('./info-panel.js');

var _infoPanel2 = _interopRequireDefault(_infoPanel);

var _globalReferences = require('../shared/global-references.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function (_React$Component) {
  (0, _inherits3.default)(Body, _React$Component);

  function Body(props) {
    (0, _classCallCheck3.default)(this, Body);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Body.__proto__ || (0, _getPrototypeOf2.default)(Body)).call(this, props));

    _this.state = {
      consoleData: null,
      infoData: null
    };

    _this.sendSocketMessage = _this.sendSocketMessage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Body, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.socket = new WebSocket(_globalReferences.socketAddress);
      this.socket.onopen = function () {
        console.log("Socket opened successfully...");
      };
      this.socket.onmessage = function (event) {
        var json = JSON.parse(event.data);
        if (json.hasOwnProperty('message') || json.hasOwnProperty('console-command')) {
          _this2.setState(function (state) {
            state.consoleData = json;
            return state;
          });
        } else {
          _this2.setState(function (state) {
            state.infoData = json;
            return state;
          });
        }
      };
    }
  }, {
    key: 'sendSocketMessage',
    value: function sendSocketMessage(msg) {
      this.socket.send(msg);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'root', 'data-jsx': 643766682
      }, _react2.default.createElement(_consolePanel2.default, { data: this.state.consoleData, sendSocketMessage: this.sendSocketMessage }), _react2.default.createElement(_infoPanel2.default, { data: this.state.infoData }), _react2.default.createElement(_style2.default, {
        styleId: 643766682,
        css: 'div.root[data-jsx="643766682"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:25px 0}@media screen and (max-width:900px){div.root[data-jsx="643766682"]{padding:5px 0}}'
      }));
    }
  }]);

  return Body;
}(_react2.default.Component);

exports.default = Body;