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

var _default = require('../styles/shared/default.js');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _meta = require('../components/shared/meta.js');

var _navigation = require('../components/shared/navigation.js');

var _intro = require('../components/index/intro.js');

var _intro2 = _interopRequireDefault(_intro);

var _description = require('../components/index/description.js');

var _description2 = _interopRequireDefault(_description);

var _footer = require('../components/shared/footer.js');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'root' }, _react2.default.createElement(_meta.Meta, { title: '$: home' }), _react2.default.createElement(_navigation.Navbar, { selection: 'home' }), _react2.default.createElement(_intro2.default, null), _react2.default.createElement(_description2.default, null), _react2.default.createElement(_footer2.default, null), _react2.default.createElement(_style2.default, {
        styleId: _default.display.__hash,
        css: _default.display
      }), _react2.default.createElement(_style2.default, {
        styleId: _default.text.__hash,
        css: _default.text
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;