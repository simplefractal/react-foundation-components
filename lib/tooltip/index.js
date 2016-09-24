'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWithTooltip = exports.Tooltip = undefined;

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

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../util/constants');

var _overlayTrigger = require('../util/overlay-trigger');

var _overlayTrigger2 = _interopRequireDefault(_overlayTrigger);

var _fade = require('../fade');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Tooltip = exports.Tooltip = function (_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip() {
    (0, _classCallCheck3.default)(this, Tooltip);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tooltip).apply(this, arguments));
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var position = _props.position;

      var classNames = (0, _classnames2.default)(className, cxStyles('tooltip', (0, _defineProperty3.default)({}, position, (0, _includes2.default)(_constants.OVERLAY_POSITIONS_INTERNAL, position))));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames, role: 'tooltip' }));
    }
  }]);
  return Tooltip;
}(_react.Component);

Tooltip.propTypes = {
  className: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(_constants.OVERLAY_POSITIONS)
};
Tooltip.defaultProps = {
  position: 'bottom'
};

var LinkWithTooltip = exports.LinkWithTooltip = function (_Component2) {
  (0, _inherits3.default)(LinkWithTooltip, _Component2);

  function LinkWithTooltip() {
    (0, _classCallCheck3.default)(this, LinkWithTooltip);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LinkWithTooltip).apply(this, arguments));
  }

  (0, _createClass3.default)(LinkWithTooltip, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var tooltipClassName = _props2.tooltipClassName;
      var tooltipContent = _props2.tooltipContent;
      var tooltipIndicator = _props2.tooltipIndicator;
      var tooltipId = _props2.tooltipId;
      var tooltipPosition = _props2.tooltipPosition;
      var tooltipStyle = _props2.tooltipStyle;

      var childProps = {
        'aria-haspopup': true,
        'aria-describedby': tooltipId
      };
      var childClassNames = cxStyles({ 'has-tip': tooltipIndicator });
      var newChild = null;

      if ((0, _react.isValidElement)(children)) {
        newChild = (0, _react.cloneElement)(children, (0, _extends3.default)({}, childProps, {
          className: (0, _classnames2.default)(children.props.className, childClassNames)
        }));
      } else {
        newChild = _react2.default.createElement(
          'span',
          (0, _extends3.default)({}, childProps, { className: childClassNames }),
          children
        );
      }

      var tooltip = _react2.default.createElement(
        Tooltip,
        {
          className: tooltipClassName,
          id: tooltipId,
          position: tooltipPosition,
          style: tooltipStyle
        },
        tooltipContent
      );

      return _react2.default.createElement(
        _overlayTrigger2.default,
        (0, _extends3.default)({}, this.props, { overlay: tooltip, position: tooltipPosition }),
        newChild
      );
    }
  }]);
  return LinkWithTooltip;
}(_react.Component);

LinkWithTooltip.propTypes = {
  children: _react.PropTypes.node,
  tooltipClassName: _react.PropTypes.string,
  tooltipContent: _react.PropTypes.node,
  tooltipIndicator: _react.PropTypes.bool,
  tooltipId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  tooltipPosition: _react.PropTypes.oneOf(_constants.OVERLAY_POSITIONS),
  tooltipStyle: _react.PropTypes.object
};
LinkWithTooltip.defaultProps = {
  closeOnClickOutside: true,
  tooltipIndicator: true,
  tooltipPosition: 'bottom',
  transition: _fade.Fade,
  triggerClick: true,
  triggerFocus: true,
  triggerHover: true
};


Tooltip.LinkWith = LinkWithTooltip;

exports.default = Tooltip;