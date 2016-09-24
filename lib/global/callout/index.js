'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Callout = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../../util/constants');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Callout = exports.Callout = function (_Component) {
  (0, _inherits3.default)(Callout, _Component);

  function Callout() {
    (0, _classCallCheck3.default)(this, Callout);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Callout).apply(this, arguments));
  }

  (0, _createClass3.default)(Callout, [{
    key: 'render',
    value: function render() {
      var _cxStyles;

      var _props = this.props;
      var className = _props.className;
      var color = _props.color;
      var size = _props.size;

      var classNames = (0, _classnames2.default)(className, cxStyles('callout', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, color, (0, _includes2.default)(_constants.COMPONENT_COLORS, color)), (0, _defineProperty3.default)(_cxStyles, size, (0, _includes2.default)(_constants.CALLOUT_SIZES, size)), _cxStyles)));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return Callout;
}(_react.Component);

Callout.propTypes = {
  className: _react.PropTypes.string,
  color: _react.PropTypes.oneOf(_constants.COMPONENT_COLORS),
  size: _react.PropTypes.oneOf(_constants.CALLOUT_SIZES)
};
exports.default = Callout;