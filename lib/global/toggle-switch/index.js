'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleSwitch = exports.ToggleSwitchItem = undefined;

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

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

var _batching = require('uncontrollable/batching');

var _batching2 = _interopRequireDefault(_batching);

var _isNil = require('lodash/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

var _isBlank = require('underscore.string/isBlank');

var _isBlank2 = _interopRequireDefault(_isBlank);

var _constants = require('../../util/constants');

var _float = require('../float');

var _callout = require('../callout');

var _button = require('../button');

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var ToggleSwitchItem = exports.ToggleSwitchItem = function (_Component) {
  (0, _inherits3.default)(ToggleSwitchItem, _Component);

  function ToggleSwitchItem() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ToggleSwitchItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(ToggleSwitchItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ToggleSwitchItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var containerClassName = _props.containerClassName;
      var containerStyle = _props.containerStyle;
      var id = _props.id;
      var labelClassName = _props.labelClassName;
      var labelStyle = _props.labelStyle;

      var classNames = (0, _classnames2.default)(className, cxStyles('switch-toggle-input'));
      var labelClassNames = (0, _classnames2.default)(labelClassName, cxStyles('switch-toggle-label'));

      return _react2.default.createElement(
        'div',
        { className: containerClassName, style: containerStyle },
        _react2.default.createElement('input', (0, _extends3.default)({}, this.props, {
          children: null,
          className: classNames,
          onChange: this.handleInputChange,
          ref: this.setInputRef,
          type: 'checkbox'
        })),
        _react2.default.createElement(
          'label',
          {
            className: labelClassNames,
            htmlFor: id,
            onClick: this.handleLabelClick,
            style: labelStyle
          },
          children
        )
      );
    }
  }]);
  return ToggleSwitchItem;
}(_react.Component);

ToggleSwitchItem.propTypes = {
  checked: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.object,
  eventKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  labelClassName: _react.PropTypes.string,
  labelStyle: _react.PropTypes.object,
  onChange: _react.PropTypes.func,
  onToggle: _react.PropTypes.func
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.setInputRef = function (inputRef) {
    _this4._inputRef = inputRef;
  };

  this.handleLabelClick = function () {
    var _props3 = _this4.props;
    var checked = _props3.checked;
    var eventKey = _props3.eventKey;
    var id = _props3.id;
    var onChange = _props3.onChange;
    var onToggle = _props3.onToggle;


    if (onChange) {
      onChange.apply(undefined, arguments);
    }

    if ((0, _isBlank2.default)(id)) {
      if ((0, _isNil2.default)(checked)) {
        _this4._inputRef.click();
      } else if (onToggle) {
        onToggle(eventKey);
      }
    }
  };

  this.handleInputChange = function () {
    var _props4 = _this4.props;
    var eventKey = _props4.eventKey;
    var id = _props4.id;
    var onChange = _props4.onChange;
    var onToggle = _props4.onToggle;


    if (onChange) {
      onChange.apply(undefined, arguments);
    }

    if (!(0, _isBlank2.default)(id) && onToggle) {
      onToggle(eventKey);
    }
  };
};

var ToggleSwitchControlled = function (_Component2) {
  (0, _inherits3.default)(ToggleSwitchControlled, _Component2);

  function ToggleSwitchControlled() {
    var _Object$getPrototypeO2;

    var _temp2, _this2, _ret2;

    (0, _classCallCheck3.default)(this, ToggleSwitchControlled);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO2 = (0, _getPrototypeOf2.default)(ToggleSwitchControlled)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _initialiseProps2.call(_this2), _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
  }

  (0, _createClass3.default)(ToggleSwitchControlled, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props;
      var activeKey = _props2.activeKey;
      var children = _props2.children;
      var className = _props2.className;
      var paddleClassName = _props2.paddleClassName;
      var paddleColor = _props2.paddleColor;
      var paddleStyle = _props2.paddleStyle;

      var classNames = (0, _classnames2.default)(className, cxStyles('switch-toggle'));
      var paddleClassNames = (0, _classnames2.default)(paddleClassName, cxStyles('switch-toggle-paddle'));
      var childrenCount = _react.Children.count(children);
      var newChildren = null;
      var paddle = null;

      if (childrenCount > 0) {
        (function () {
          var width = 100 / childrenCount;
          var selectedIndex = null;

          newChildren = _react.Children.map(children, function (child, index) {
            if ((0, _react.isValidElement)(child) && !(0, _isBlank2.default)(child.props.eventKey)) {
              var checked = child.props.eventKey === activeKey;

              if (checked) {
                selectedIndex = index;
              }

              return (0, _react.cloneElement)(child, {
                checked: checked,
                onToggle: _this3.handleToggle,
                labelStyle: (0, _extends3.default)({}, child.props.labelStyle, { width: width + '%' })
              });
            }

            return child;
          });

          if ((0, _isInteger2.default)(selectedIndex)) {
            paddle = _react2.default.createElement(_button.Button, {
              className: paddleClassNames,
              color: paddleColor,
              style: (0, _extends3.default)({}, paddleStyle, { width: width + '%', left: width * selectedIndex + '%' })
            });
          }
        })();
      }

      return _react2.default.createElement(
        _float.ClearFix,
        (0, _extends3.default)({}, this.props, { componentClass: _callout.Callout, className: classNames }),
        newChildren,
        paddle
      );
    }
  }]);
  return ToggleSwitchControlled;
}(_react.Component);

ToggleSwitchControlled.propTypes = {
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  onSelect: _react.PropTypes.func,
  paddleClassName: _react.PropTypes.string,
  paddleColor: _react.PropTypes.oneOf(_constants.COMPONENT_COLORS),
  paddleStyle: _react.PropTypes.object
};

var _initialiseProps2 = function _initialiseProps2() {
  var _this5 = this;

  this.handleToggle = function () {
    var onSelect = _this5.props.onSelect;


    if (onSelect) {
      onSelect.apply(undefined, arguments);
    }
  };
};

var ToggleSwitch = exports.ToggleSwitch = (0, _batching2.default)(ToggleSwitchControlled, { activeKey: 'onSelect' });
ToggleSwitch.displayName = 'ToggleSwitch';

ToggleSwitch.Item = ToggleSwitchItem;

exports.default = ToggleSwitch;