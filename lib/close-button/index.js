'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseButton = undefined;

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

var _visibility = require('../visibility');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var CloseButton = exports.CloseButton = function (_Component) {
  (0, _inherits3.default)(CloseButton, _Component);

  function CloseButton() {
    (0, _classCallCheck3.default)(this, CloseButton);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CloseButton).apply(this, arguments));
  }

  (0, _createClass3.default)(CloseButton, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var classNames = (0, _classnames2.default)(className, cxStyles('close-button'));

      return _react2.default.createElement(
        'button',
        (0, _extends3.default)({}, this.props, { className: classNames, type: 'button' }),
        _react2.default.createElement(
          _visibility.HideForScreenReader,
          null,
          '×'
        )
      );
    }
  }]);
  return CloseButton;
}(_react.Component);

CloseButton.propTypes = {
  className: _react.PropTypes.string
};
exports.default = CloseButton;