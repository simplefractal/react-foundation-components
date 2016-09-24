'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuIcon = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var MenuIcon = exports.MenuIcon = function (_Component) {
  (0, _inherits3.default)(MenuIcon, _Component);

  function MenuIcon() {
    (0, _classCallCheck3.default)(this, MenuIcon);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MenuIcon).apply(this, arguments));
  }

  (0, _createClass3.default)(MenuIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var dark = _props.dark;
      var controls = _props.controls;
      var open = _props.open;

      var classNames = (0, _classnames2.default)(className, cxStyles('menu-icon', { dark: dark }));

      return _react2.default.createElement('button', (0, _extends3.default)({}, this.props, {
        'aria-controls': controls,
        'aria-expanded': open,
        className: classNames,
        type: 'button'
      }));
    }
  }]);
  return MenuIcon;
}(_react.Component);

MenuIcon.propTypes = {
  className: _react.PropTypes.string,
  dark: _react.PropTypes.bool,
  controls: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  open: _react.PropTypes.bool
};
exports.default = MenuIcon;