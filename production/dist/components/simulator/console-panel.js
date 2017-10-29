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

var _consoleMessage = require('./components/console-message.js');

var _consoleMessage2 = _interopRequireDefault(_consoleMessage);

var _colors = require('../../styles/shared/colors.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConsolePanel = function (_React$Component) {
  (0, _inherits3.default)(ConsolePanel, _React$Component);

  function ConsolePanel(props) {
    (0, _classCallCheck3.default)(this, ConsolePanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConsolePanel.__proto__ || (0, _getPrototypeOf2.default)(ConsolePanel)).call(this, props));

    _this.state = {
      input: {
        value: ""
      },
      messages: []
    };

    _this.sendSocketMessage = props.sendSocketMessage;
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ConsolePanel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.data.hasOwnProperty('message')) {
        var newMessage = nextProps.data.message;
        var messages = this.appendMessage({ sender: "system", text: newMessage });
        this.setState(function (state) {
          state.messages = messages;
          return state;
        });
      }

      if (nextProps.data.hasOwnProperty('console-command')) {
        if (nextProps.data["console-command"] == "clear-previous") {
          this.setState(function (state) {
            state.messages = [];
            return state;
          });
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      this.sendSocketMessage(this.state.input.value);
      var messages = this.appendMessage({ sender: "user", text: this.state.input.value });
      this.setState(function (state) {
        state.messages = messages;
        state.input.value = "";
        return state;
      });
    }
  }, {
    key: 'appendMessage',
    value: function appendMessage(msg) {
      var messages = this.state.messages.concat([msg]);
      if (messages.length > 150) {
        messages.splice(0, messages.length - 150);
      }
      return messages;
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      event.persist();
      this.setState(function (state) {
        state.input.value = event.target.value;return state;
      });
    }
  }, {
    key: 'getMessages',
    value: function getMessages() {
      var messages = [];
      this.state.messages.forEach(function (message) {
        messages.push(_react2.default.createElement(_consoleMessage2.default, { sender: message.sender, text: message.text }));
      });
      return messages;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'root', 'data-jsx': 4192191637
      }, _react2.default.createElement(_panel2.default, { title: 'CONSOLE' }, _react2.default.createElement('div', { className: 'content', 'data-jsx': 4192191637
      }, this.getMessages(), _react2.default.createElement('span', { ref: function ref(element) {
          _this2.messagesEnd = element;
        }, 'data-jsx': 4192191637
      })), _react2.default.createElement('div', { className: 'input-bar', 'data-jsx': 4192191637
      }, _react2.default.createElement('form', { onSubmit: this.handleSubmit, 'data-jsx': 4192191637
      }, _react2.default.createElement('input', { type: 'text', value: this.state.input.value, onChange: this.handleInputChange, 'data-jsx': 4192191637
      })))), _react2.default.createElement(_style2.default, {
        styleId: 4192191637,
        css: 'div.content[data-jsx="4192191637"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow-y:scroll;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-flex:1;-ms-flex:1;flex:1;padding-bottom:10px}div.input-bar[data-jsx="4192191637"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:' + _colors.themeColors.darkMuted + ';padding:5px 10px;margin:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:0 0 20px 20px}div.input-bar[data-jsx="4192191637"] form[data-jsx="4192191637"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1}div.input-bar[data-jsx="4192191637"] input[data-jsx="4192191637"]{-webkit-flex:1;-ms-flex:1;flex:1;width:auto;margin:0;border:0;background-color:' + _colors.themeColors.medLightMuted + ';border-radius:10px;height:30px;outline:0;padding:0 10px;color:' + _colors.themeColors.darkMuted + ';font-family:"Muli",sans-serif;font-weight:300;font-size:20px;-webkit-transition-duration:0.2s;transition-duration:0.2s}div.input-bar[data-jsx="4192191637"] input[data-jsx="4192191637"]:focus{outline:0;background-color:' + _colors.themeColors.light + '}div.input-bar[data-jsx="4192191637"] input[data-jsx="4192191637"]:hover{background-color:' + _colors.themeColors.light + '}'
      }));
    }
  }]);

  return ConsolePanel;
}(_react2.default.Component);

exports.default = ConsolePanel;