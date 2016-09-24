'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

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

var ProgressBar = exports.ProgressBar = function (_Component) {
  (0, _inherits3.default)(ProgressBar, _Component);

  function ProgressBar() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProgressBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(ProgressBar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProgressBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var color = _props.color;
      var max = _props.max;
      var meterClassName = _props.meterClassName;
      var meterStyle = _props.meterStyle;
      var min = _props.min;
      var value = _props.value;

      var classNames = (0, _classnames2.default)(className, cxStyles('progress', (0, _defineProperty3.default)({}, color, (0, _includes2.default)(_constants.COMPONENT_COLORS, color))));
      var meterClassNames = (0, _classnames2.default)(meterClassName, cxStyles('progress-meter'));
      var boundedValue = Math.min(Math.max(min, value), max);
      var percent = (boundedValue - min) / (max - min);
      var width = Math.round(percent * 100 * 1000) / 1000;
      var label = this.renderMeterText(percent, boundedValue, min, max);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, this.props, {
          'aria-valuemax': max,
          'aria-valuemin': min,
          'aria-valuenow': boundedValue,
          'aria-valuetext': label,
          className: classNames,
          role: 'progressbar'
        }),
        _react2.default.createElement(
          'span',
          { className: meterClassNames, style: (0, _extends3.default)({}, meterStyle, { width: width + '%' }) },
          label
        )
      );
    }
  }]);
  return ProgressBar;
}(_react.Component);

ProgressBar.propTypes = {
  className: _react.PropTypes.string,
  color: _react.PropTypes.oneOf(_constants.COMPONENT_COLORS),
  labelFormatter: _react.PropTypes.func,
  max: _react.PropTypes.number,
  meterClassName: _react.PropTypes.string,
  meterStyle: _react.PropTypes.object,
  meterTextClassName: _react.PropTypes.string,
  meterTextStyle: _react.PropTypes.object,
  min: _react.PropTypes.number,
  value: _react.PropTypes.number
};
ProgressBar.defaultProps = {
  max: 100,
  min: 0,
  value: 0
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.renderMeterText = function () {
    var _props2 = _this2.props;
    var labelFormatter = _props2.labelFormatter;
    var meterTextClassName = _props2.meterTextClassName;
    var meterTextStyle = _props2.meterTextStyle;

    var result = null;

    if (labelFormatter) {
      var meterTextClassNames = (0, _classnames2.default)(meterTextClassName, cxStyles('progress-meter-text'));

      result = _react2.default.createElement(
        'span',
        { className: meterTextClassNames, style: meterTextStyle },
        labelFormatter.apply(undefined, arguments)
      );
    }

    return result;
  };
};

exports.default = ProgressBar;