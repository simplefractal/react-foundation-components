'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioSwitch = exports.Switch = exports.SwitchPadelLabel = exports.SwitchUncheckedLabel = exports.SwitchCheckedLabel = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _batching = require('uncontrollable/batching');

var _batching2 = _interopRequireDefault(_batching);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _isNil = require('lodash/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

var _isBlank = require('underscore.string/isBlank');

var _isBlank2 = _interopRequireDefault(_isBlank);

var _constants = require('../util/constants');

var _visibility = require('../visibility');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

function createCheckedLabel(baseClassName) {
  var SwitchCheckedLabel = function (_Component) {
    (0, _inherits3.default)(SwitchCheckedLabel, _Component);

    function SwitchCheckedLabel() {
      (0, _classCallCheck3.default)(this, SwitchCheckedLabel);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SwitchCheckedLabel).apply(this, arguments));
    }

    (0, _createClass3.default)(SwitchCheckedLabel, [{
      key: 'render',
      value: function render() {
        var className = this.props.className;

        var classNames = (0, _classnames2.default)(className, cxStyles(baseClassName));

        return _react2.default.createElement(_visibility.HideForScreenReader, (0, _extends3.default)({}, this.props, { className: classNames }));
      }
    }]);
    return SwitchCheckedLabel;
  }(_react.Component);

  SwitchCheckedLabel.propTypes = {
    className: _react.PropTypes.string
  };


  return SwitchCheckedLabel;
}

var SwitchCheckedLabel = exports.SwitchCheckedLabel = createCheckedLabel('switch-active');
SwitchCheckedLabel.displayName = 'SwitchCheckedLabel';

var SwitchUncheckedLabel = exports.SwitchUncheckedLabel = createCheckedLabel('switch-inactive');
SwitchUncheckedLabel.displayName = 'SwitchUncheckedLabel';

var SwitchPadelLabel = exports.SwitchPadelLabel = function (_Component2) {
  (0, _inherits3.default)(SwitchPadelLabel, _Component2);

  function SwitchPadelLabel() {
    (0, _classCallCheck3.default)(this, SwitchPadelLabel);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SwitchPadelLabel).apply(this, arguments));
  }

  (0, _createClass3.default)(SwitchPadelLabel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_visibility.ShowForScreenReader, this.props);
    }
  }]);
  return SwitchPadelLabel;
}(_react.Component);

var Switch = exports.Switch = function (_Component3) {
  (0, _inherits3.default)(Switch, _Component3);

  function Switch() {
    var _Object$getPrototypeO;

    var _temp, _this3, _ret;

    (0, _classCallCheck3.default)(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Switch)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this3), _initialiseProps.call(_this3), _temp), (0, _possibleConstructorReturn3.default)(_this3, _ret);
  }

  (0, _createClass3.default)(Switch, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var containerClassName = _props.containerClassName;
      var containerStyle = _props.containerStyle;
      var id = _props.id;
      var paddleClassName = _props.paddleClassName;
      var paddleStyle = _props.paddleStyle;
      var size = _props.size;

      var containerClassNames = (0, _classnames2.default)(containerClassName, cxStyles('switch', (0, _defineProperty3.default)({}, size, (0, _includes2.default)(_constants.COMPONENT_SIZES, size))));
      var classNames = (0, _classnames2.default)(className, cxStyles('switch-input'));
      var paddleClassNames = (0, _classnames2.default)(paddleClassName, cxStyles('switch-paddle'));

      return _react2.default.createElement(
        'div',
        { className: containerClassNames, style: containerStyle },
        _react2.default.createElement('input', (0, _extends3.default)({}, this.props, {
          children: null,
          className: classNames,
          onChange: this.handleInputChange,
          ref: this.setInputRef,
          size: null,
          type: 'checkbox'
        })),
        _react2.default.createElement(
          'label',
          {
            className: paddleClassNames,
            htmlFor: id,
            onClick: this.handleLabelClick,
            style: paddleStyle
          },
          children
        )
      );
    }
  }]);
  return Switch;
}(_react.Component);

Switch.propTypes = {
  checked: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.object,
  eventKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  onChange: _react.PropTypes.func,
  onToggle: _react.PropTypes.func,
  paddleClassName: _react.PropTypes.string,
  paddleStyle: _react.PropTypes.object,
  size: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES)
};

var _initialiseProps = function _initialiseProps() {
  var _this6 = this;

  this.setInputRef = function (inputRef) {
    _this6._inputRef = inputRef;
  };

  this.handleLabelClick = function () {
    var _props3 = _this6.props;
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
        _this6._inputRef.click();
      } else if (onToggle) {
        onToggle(eventKey);
      }
    }
  };

  this.handleInputChange = function () {
    var _props4 = _this6.props;
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

var RadioSwitchControlled = function (_Component4) {
  (0, _inherits3.default)(RadioSwitchControlled, _Component4);

  function RadioSwitchControlled() {
    var _Object$getPrototypeO2;

    var _temp2, _this4, _ret2;

    (0, _classCallCheck3.default)(this, RadioSwitchControlled);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO2 = (0, _getPrototypeOf2.default)(RadioSwitchControlled)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this4), _initialiseProps2.call(_this4), _temp2), (0, _possibleConstructorReturn3.default)(_this4, _ret2);
  }

  (0, _createClass3.default)(RadioSwitchControlled, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props2 = this.props;
      var activeKey = _props2.activeKey;
      var children = _props2.children;
      var size = _props2.size;

      var newChildren = _react.Children.map(children, function (child) {
        if ((0, _react.isValidElement)(child) && !(0, _isBlank2.default)(child.props.eventKey)) {
          return (0, _react.cloneElement)(child, {
            checked: child.props.eventKey === activeKey,
            onToggle: _this5.handleToggle,
            size: size
          });
        }

        return child;
      });

      return _react2.default.createElement(
        'div',
        this.props,
        newChildren
      );
    }
  }]);
  return RadioSwitchControlled;
}(_react.Component);

RadioSwitchControlled.propTypes = {
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  children: _react.PropTypes.node,
  onSelect: _react.PropTypes.func,
  size: _react.PropTypes.oneOf(_constants.COMPONENT_SIZES)
};

var _initialiseProps2 = function _initialiseProps2() {
  var _this7 = this;

  this.handleToggle = function () {
    var onSelect = _this7.props.onSelect;


    if (onSelect) {
      onSelect.apply(undefined, arguments);
    }
  };
};

var RadioSwitch = exports.RadioSwitch = (0, _batching2.default)(RadioSwitchControlled, { activeKey: 'onSelect' });
RadioSwitch.displayName = 'RadioSwitch';

Switch.Radio = RadioSwitch;
Switch.CheckedLabel = SwitchCheckedLabel;
Switch.UncheckedLabel = SwitchUncheckedLabel;
Switch.PadelLabel = SwitchPadelLabel;

exports.default = Switch;