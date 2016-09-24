'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fade = undefined;

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

var _bind = require('classnames');

var _bind2 = _interopRequireDefault(_bind);

var _Transition = require('react-overlays/lib/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Fade = exports.Fade = function (_React$Component) {
  (0, _inherits3.default)(Fade, _React$Component);

  function Fade() {
    (0, _classCallCheck3.default)(this, Fade);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Fade).apply(this, arguments));
  }

  (0, _createClass3.default)(Fade, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var timeout = _props.timeout;

      var classNames = (0, _classnames2.default)(className, cxStyles('fade'));

      return _react2.default.createElement(_Transition2.default, (0, _extends3.default)({}, this.props, {
        className: classNames,
        enteredClassName: cxStyles('in'),
        enteringClassName: cxStyles('in'),
        timeout: timeout
      }));
    }
  }]);
  return Fade;
}(_react2.default.Component);

Fade.propTypes = {
  className: _react.PropTypes.string,
  timeout: _react.PropTypes.number
};
Fade.defaultProps = {
  timeout: 150
};
exports.default = Fade;