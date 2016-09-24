'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collapse = undefined;

var _parseInt = require('babel-runtime/core-js/number/parse-int');

var _parseInt2 = _interopRequireDefault(_parseInt);

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

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _capitalize = require('underscore.string/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);
var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

var Collapse = exports.Collapse = function (_React$Component) {
  (0, _inherits3.default)(Collapse, _React$Component);

  function Collapse() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Collapse)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var dimension = _props.dimension;
      var timeout = _props.timeout;

      var classNames = (0, _classnames2.default)(className, cxStyles(dimension));

      return _react2.default.createElement(_Transition2.default, (0, _extends3.default)({}, this.props, {
        className: classNames,
        enteredClassName: cxStyles('collapsible', 'in'),
        enteringClassName: cxStyles('collapsing'),
        exitedClassName: cxStyles('collapsible'),
        exitingClassName: cxStyles('collapsing'),
        onEnter: this.handleEnter,
        onEntered: this.handleEntered,
        onEntering: this.handleEntering,
        onExit: this.handleExit,
        onExiting: this.handleExiting,
        timeout: timeout
      }));
    }
  }]);
  return Collapse;
}(_react2.default.Component);

Collapse.propTypes = {
  className: _react.PropTypes.string,
  dimension: _react.PropTypes.oneOf(['height', 'width']),
  onEnter: _react.PropTypes.func,
  onEntered: _react.PropTypes.func,
  onEntering: _react.PropTypes.func,
  onExit: _react.PropTypes.func,
  onExiting: _react.PropTypes.func,
  timeout: _react.PropTypes.number
};
Collapse.defaultProps = {
  dimension: 'height',
  timeout: 350
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleEnter = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _props2 = _this2.props;
    var dimension = _props2.dimension;
    var onEnter = _props2.onEnter;
    var elem = args[0];


    elem.style[dimension] = '0';

    if (onEnter) {
      onEnter.apply(undefined, args);
    }
  };

  this.handleEntered = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var _props3 = _this2.props;
    var dimension = _props3.dimension;
    var onEntered = _props3.onEntered;
    var elem = args[0];


    elem.style[dimension] = null;

    if (onEntered) {
      onEntered.apply(undefined, args);
    }
  };

  this.handleEntering = function () {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    var _props4 = _this2.props;
    var dimension = _props4.dimension;
    var onEntering = _props4.onEntering;
    var elem = args[0];

    var size = elem['scroll' + (0, _capitalize2.default)(dimension)];

    elem.style[dimension] = size + 'px';

    if (onEntering) {
      onEntering.apply(undefined, args);
    }
  };

  this.handleExit = function () {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    var _props5 = _this2.props;
    var dimension = _props5.dimension;
    var onExit = _props5.onExit;
    var elem = args[0];

    var baseValue = elem['offset' + (0, _capitalize2.default)(dimension)];
    var margins = MARGINS[dimension];
    var value = baseValue + (0, _parseInt2.default)((0, _style2.default)(elem, margins[0]), 10) + (0, _parseInt2.default)((0, _style2.default)(elem, margins[1]), 10);

    elem.style[dimension] = value + 'px';

    if (onExit) {
      onExit.apply(undefined, args);
    }
  };

  this.handleExiting = function () {
    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    function triggerBrowserReflow(node) {
      return node.offsetHeight;
    }

    var _props6 = _this2.props;
    var dimension = _props6.dimension;
    var onExiting = _props6.onExiting;
    var elem = args[0];


    triggerBrowserReflow(elem);
    elem.style[dimension] = '0';

    if (onExiting) {
      onExiting.apply(undefined, args);
    }
  };
};

exports.default = Collapse;