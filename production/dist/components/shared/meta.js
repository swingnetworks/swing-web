'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meta = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/stevenxie/Programs/active-projects/swing-networks/swing-web/components/shared/meta.js';
var Meta = exports.Meta = function (_React$Component) {
  (0, _inherits3.default)(Meta, _React$Component);

  function Meta(props) {
    (0, _classCallCheck3.default)(this, Meta);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Meta.__proto__ || (0, _getPrototypeOf2.default)(Meta)).call(this, props));

    _this.state = {
      title: props.title
    };
    return _this;
  }

  (0, _createClass3.default)(Meta, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'root', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, this.state.title), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Muli:200,300,400,600,700,800,900|Ubuntu:300,400,500,700', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })));
    }
  }]);

  return Meta;
}(_react2.default.Component);