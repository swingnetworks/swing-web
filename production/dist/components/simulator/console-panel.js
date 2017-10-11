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

var _globalReferences = require('../shared/global-references.js');

var _colors = require('../../styles/shared/colors.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stevenxie/Programs/active-projects/swing-networks/swing-web/components/simulator/console-panel.js';


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

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ConsolePanel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.socket = new WebSocket(_globalReferences.socketAddress);
      this.socket.onopen = function () {
        console.log("Socket opened successfully...");
      };
      this.socket.onmessage = function (event) {
        var messages = _this2.appendMessage({ sender: "system", text: event.data });
        _this2.setState(function (state) {
          state.messages = messages;
          return state;
        });
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      this.socket.send(this.state.input.value);
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
        messages.push(_react2.default.createElement(_consoleMessage2.default, { sender: message.sender, text: message.text, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }));
      });
      return messages;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { className: 'root', 'data-jsx': 4192191637,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_panel2.default, { title: 'CONSOLE', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', { className: 'content', 'data-jsx': 4192191637,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.getMessages(), _react2.default.createElement('span', { ref: function ref(element) {
          _this3.messagesEnd = element;
        }, 'data-jsx': 4192191637,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), _react2.default.createElement('div', { className: 'input-bar', 'data-jsx': 4192191637,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('form', { onSubmit: this.handleSubmit, 'data-jsx': 4192191637,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('input', { type: 'text', value: this.state.input.value, onChange: this.handleInputChange, 'data-jsx': 4192191637,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      })))), _react2.default.createElement(_style2.default, {
        styleId: 4192191637,
        css: 'div.content[data-jsx="4192191637"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow-y:scroll;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-flex:1;-ms-flex:1;flex:1;padding-bottom:10px}div.input-bar[data-jsx="4192191637"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:' + _colors.themeColors.darkMuted + ';padding:5px 10px;margin:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:0 0 20px 20px}div.input-bar[data-jsx="4192191637"] form[data-jsx="4192191637"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1}div.input-bar[data-jsx="4192191637"] input[data-jsx="4192191637"]{-webkit-flex:1;-ms-flex:1;flex:1;width:auto;margin:0;border:0;background-color:' + _colors.themeColors.medLightMuted + ';border-radius:10px;height:30px;outline:0;padding:0 10px;color:' + _colors.themeColors.darkMuted + ';font-family:"Muli",sans-serif;font-weight:300;font-size:20px;-webkit-transition-duration:0.2s;transition-duration:0.2s}div.input-bar[data-jsx="4192191637"] input[data-jsx="4192191637"]:focus{outline:0;background-color:' + _colors.themeColors.light + '}div.input-bar[data-jsx="4192191637"] input[data-jsx="4192191637"]:hover{background-color:' + _colors.themeColors.light + '}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2ltdWxhdG9yL2NvbnNvbGUtcGFuZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZvQixBQUcwQixBQVNBLEFBVUEsQUFLTixBQWlCRyxBQUtvQyxVQUpBLHVCQWpCbkMsV0FDRixFQXFCWCxPQXBCVyxHQWdCWCxNQWZnRCxZQTNCeEIsQUFTd0IsQUFVdkMsaUNBQ1QsQ0FRcUIsWUFsQkYsT0FtQkwsVUFsQkgsRUFtQkMsT0FsQmEsR0FtQlIsR0E5QkcsWUErQmlCLE1BOUJoQiw2QkErQlksOEJBQ2YsZUEvQlQsQ0FVWSxBQXNCSixlQUNVLGlCQWhDTCxvQkFDdEIscUJBZ0NBLG9CQXZCOEIsNEJBQzlCIiwiZmlsZSI6ImNvbXBvbmVudHMvc2ltdWxhdG9yL2NvbnNvbGUtcGFuZWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N0ZXZlbnhpZS9Qcm9ncmFtcy9hY3RpdmUtcHJvamVjdHMvc3dpbmctbmV0d29ya3Mvc3dpbmctd2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhbmVsIGZyb20gJy4vY29tcG9uZW50cy9wYW5lbC5qcydcbmltcG9ydCBDb25zb2xlTWVzc2FnZSBmcm9tICcuL2NvbXBvbmVudHMvY29uc29sZS1tZXNzYWdlLmpzJ1xuaW1wb3J0IHsgc29ja2V0QWRkcmVzcyB9IGZyb20gJy4uL3NoYXJlZC9nbG9iYWwtcmVmZXJlbmNlcy5qcydcbmltcG9ydCB7IHRoZW1lQ29sb3JzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3NoYXJlZC9jb2xvcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHNvY2tldEFkZHJlc3MpO1xuICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9ICgpPT57XG4gICAgICBjb25zb2xlLmxvZyhcIlNvY2tldCBvcGVuZWQgc3VjY2Vzc2Z1bGx5Li4uXCIpO1xuICAgIH1cbiAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpPT57XG4gICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuYXBwZW5kTWVzc2FnZSh7c2VuZGVyOiBcInN5c3RlbVwiLCB0ZXh0OiBldmVudC5kYXRhfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSk9PntcbiAgICAgICAgc3RhdGUubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgdGhpcy5tZXNzYWdlc0VuZC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc29ja2V0LnNlbmQodGhpcy5zdGF0ZS5pbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLmFwcGVuZE1lc3NhZ2Uoe3NlbmRlcjogXCJ1c2VyXCIsIHRleHQ6IHRoaXMuc3RhdGUuaW5wdXQudmFsdWV9KTtcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSk9PntcbiAgICAgIHN0YXRlLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG4gICAgICBzdGF0ZS5pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRNZXNzYWdlKG1zZykge1xuICAgIHZhciBtZXNzYWdlcyA9IHRoaXMuc3RhdGUubWVzc2FnZXMuY29uY2F0KFttc2ddKTtcbiAgICBpZiAobWVzc2FnZXMubGVuZ3RoID4gMTUwKSB7XG4gICAgICBtZXNzYWdlcy5zcGxpY2UoMCwgKG1lc3NhZ2VzLmxlbmd0aCAtIDE1MCkpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudCl7XG4gICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKT0+e3N0YXRlLmlucHV0LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlOyByZXR1cm4gc3RhdGV9KTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VzKCl7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlLm1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpPT57XG4gICAgICBtZXNzYWdlcy5wdXNoKDxDb25zb2xlTWVzc2FnZSBzZW5kZXI9e21lc3NhZ2Uuc2VuZGVyfSB0ZXh0PXttZXNzYWdlLnRleHR9IC8+KTtcbiAgICB9KTtcbiAgICByZXR1cm4obWVzc2FnZXMpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgIDxQYW5lbCB0aXRsZT1cIkNPTlNPTEVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIHt0aGlzLmdldE1lc3NhZ2VzKCl9XG4gICAgICAgICAgICA8c3BhbiByZWY9eyhlbGVtZW50KT0+e3RoaXMubWVzc2FnZXNFbmQgPSBlbGVtZW50fX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJhclwiPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXQudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYuY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2LmlucHV0LWJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgdGhlbWVDb2xvcnMuZGFya011dGVkIH07XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2LmlucHV0LWJhciBmb3JtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdi5pbnB1dC1iYXIgaW5wdXQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgdGhlbWVDb2xvcnMubWVkTGlnaHRNdXRlZCB9O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHsgdGhlbWVDb2xvcnMuZGFya011dGVkIH07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNdWxpXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYuaW5wdXQtYmFyIGlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyB0aGVtZUNvbG9ycy5saWdodCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdi5pbnB1dC1iYXIgaW5wdXQ6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgdGhlbWVDb2xvcnMubGlnaHQgfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/simulator/console-panel.js */'
      }));
    }
  }]);

  return ConsolePanel;
}(_react2.default.Component);

exports.default = ConsolePanel;