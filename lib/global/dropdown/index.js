'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWithDropdown = exports.Dropdown = undefined;

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

var _overlayTrigger = require('../util/overlay-trigger');

var _overlayTrigger2 = _interopRequireDefault(_overlayTrigger);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Dropdown = exports.Dropdown = function (_Component) {
  (0, _inherits3.default)(Dropdown, _Component);

  function Dropdown() {
    (0, _classCallCheck3.default)(this, Dropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Dropdown).apply(this, arguments));
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'render',
    value: function render() {
      var _cxStyles;

      var _props = this.props;
      var className = _props.className;
      var position = _props.position;
      var size = _props.size;

      var classNames = (0, _classnames2.default)(className, cxStyles('dropdown-pane', 'is-open', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, position, (0, _includes2.default)(_constants.OVERLAY_POSITIONS_INTERNAL, position)), (0, _defineProperty3.default)(_cxStyles, size, (0, _includes2.default)(_constants.COMPONENT_SIZES, size)), _cxStyles)));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  className: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(_constants.OVERLAY_POSITIONS),
  size: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES)
};
Dropdown.defaultProps = {
  position: 'bottom'
};

var LinkWithDropdown = exports.LinkWithDropdown = function (_Component2) {
  (0, _inherits3.default)(LinkWithDropdown, _Component2);

  function LinkWithDropdown() {
    (0, _classCallCheck3.default)(this, LinkWithDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LinkWithDropdown).apply(this, arguments));
  }

  (0, _createClass3.default)(LinkWithDropdown, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var dropdownClassName = _props2.dropdownClassName;
      var dropdownContent = _props2.dropdownContent;
      var dropdownId = _props2.dropdownId;
      var dropdownPosition = _props2.dropdownPosition;
      var dropdownSize = _props2.dropdownSize;
      var dropdownStyle = _props2.dropdownStyle;

      var childProps = {
        'aria-haspopup': true,
        'aria-controls': dropdownId
      };
      var labelledBy = null;
      var newChild = null;

      if ((0, _react.isValidElement)(children)) {
        labelledBy = children.props.id;
        newChild = (0, _react.cloneElement)(children, childProps);
      } else {
        newChild = _react2.default.createElement(
          'span',
          childProps,
          children
        );
      }

      var dropdown = _react2.default.createElement(
        Dropdown,
        {
          'aria-labelledby': labelledBy,
          className: dropdownClassName,
          id: dropdownId,
          position: dropdownPosition,
          size: dropdownSize,
          style: dropdownStyle
        },
        dropdownContent
      );

      return _react2.default.createElement(
        _overlayTrigger2.default,
        (0, _extends3.default)({}, this.props, { overlay: dropdown, position: dropdownPosition }),
        newChild
      );
    }
  }]);
  return LinkWithDropdown;
}(_react.Component);

LinkWithDropdown.propTypes = {
  children: _react.PropTypes.node,
  dropdownClassName: _react.PropTypes.string,
  dropdownContent: _react.PropTypes.node,
  dropdownId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  dropdownPosition: _react.PropTypes.oneOf(_constants.OVERLAY_POSITIONS),
  dropdownSize: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES),
  dropdownStyle: _react.PropTypes.object
};
LinkWithDropdown.defaultProps = {
  dropdownPosition: 'bottom',
  triggerClick: true
};


Dropdown.LinkWith = LinkWithDropdown;

exports.default = Dropdown;