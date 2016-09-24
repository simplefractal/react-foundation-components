'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = undefined;

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

var ButtonGroup = exports.ButtonGroup = function (_Component) {
  (0, _inherits3.default)(ButtonGroup, _Component);

  function ButtonGroup() {
    (0, _classCallCheck3.default)(this, ButtonGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var _cxStyles;

      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var color = _props.color;
      var expanded = _props.expanded;
      var size = _props.size;
      var stack = _props.stack;

      var classNames = (0, _classnames2.default)(className, cxStyles('button-group', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, color, (0, _includes2.default)(_constants.COMPONENT_COLORS, color)), (0, _defineProperty3.default)(_cxStyles, 'expanded', expanded), (0, _defineProperty3.default)(_cxStyles, size, (0, _includes2.default)(_constants.COMPONENT_SIZES, size)), (0, _defineProperty3.default)(_cxStyles, 'stacked', stack && !(0, _includes2.default)(_constants.BUTTON_GROUP_STACK_SCREEN_SIZES, stack)), (0, _defineProperty3.default)(_cxStyles, 'stacked-for-' + stack, (0, _includes2.default)(_constants.BUTTON_GROUP_STACK_SCREEN_SIZES, stack)), _cxStyles)));

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, this.props, { className: classNames }),
        _react.Children.map(children, function (child) {
          return (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, { className: (0, _classnames2.default)(child.props.className, cxStyles('button')) }) : child;
        })
      );
    }
  }]);
  return ButtonGroup;
}(_react.Component);

ButtonGroup.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  color: _react.PropTypes.oneOf(_constants.COMPONENT_COLORS),
  expanded: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES),
  stack: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_constants.BUTTON_GROUP_STACK_SCREEN_SIZES)])
};
exports.default = ButtonGroup;