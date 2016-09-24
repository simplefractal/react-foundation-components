'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

exports.default = createWrapperComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWrapperComponent() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$displayName = _ref.displayName;
  var displayName = _ref$displayName === undefined ? 'Wrapper' : _ref$displayName;
  var _ref$styles = _ref.styles;
  var styles = _ref$styles === undefined ? {} : _ref$styles;
  var _ref$propTypes = _ref.propTypes;
  var propTypes = _ref$propTypes === undefined ? {} : _ref$propTypes;
  var _ref$mapPropsToClassN = _ref.mapPropsToClassNames;
  var mapPropsToClassNames = _ref$mapPropsToClassN === undefined ? function () {
    return {};
  } : _ref$mapPropsToClassN;
  var _ref$mapPropsToStyle = _ref.mapPropsToStyle;
  var mapPropsToStyle = _ref$mapPropsToStyle === undefined ? function () {
    return {};
  } : _ref$mapPropsToStyle;
  var _ref$mapPropsToProps = _ref.mapPropsToProps;
  var mapPropsToProps = _ref$mapPropsToProps === undefined ? function (props) {
    return props;
  } : _ref$mapPropsToProps;
  var _ref$defaultComponent = _ref.defaultComponentClass;
  var defaultComponentClass = _ref$defaultComponent === undefined ? 'span' : _ref$defaultComponent;

  var cxStyles = _bind2.default.bind(styles);

  var Wrapper = function (_Component) {
    (0, _inherits3.default)(Wrapper, _Component);

    function Wrapper() {
      (0, _classCallCheck3.default)(this, Wrapper);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Wrapper).apply(this, arguments));
    }

    (0, _createClass3.default)(Wrapper, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var baseClassName = _props.className;
        var maybeComponentClass = _props.componentClass;
        var baseStyle = _props.style;
        var restProps = (0, _objectWithoutProperties3.default)(_props, ['className', 'componentClass', 'style']);

        var ComponentClass = maybeComponentClass || defaultComponentClass;
        var classNames = (0, _classnames2.default)(baseClassName, cxStyles(mapPropsToClassNames(restProps)));
        var style = (0, _extends3.default)({}, baseStyle, mapPropsToStyle(restProps));
        var props = (0, _extends3.default)({}, restProps, mapPropsToProps(restProps));

        return _react2.default.createElement(ComponentClass, (0, _extends3.default)({}, props, { className: classNames, style: style }));
      }
    }]);
    return Wrapper;
  }(_react.Component);

  Wrapper.displayName = displayName;
  Wrapper.propTypes = (0, _extends3.default)({
    className: _react.PropTypes.string,
    componentClass: _elementType2.default,
    style: _react.PropTypes.object
  }, propTypes);


  return Wrapper;
}