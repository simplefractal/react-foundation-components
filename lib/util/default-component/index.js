'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultComponent = function (_Component) {
  (0, _inherits3.default)(DefaultComponent, _Component);

  function DefaultComponent() {
    (0, _classCallCheck3.default)(this, DefaultComponent);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DefaultComponent).apply(this, arguments));
  }

  (0, _createClass3.default)(DefaultComponent, [{
    key: 'render',
    value: function render() {
      var ComponentClass = this.props.componentClass;


      return _react2.default.createElement(ComponentClass, this.props);
    }
  }]);
  return DefaultComponent;
}(_react.Component);

DefaultComponent.propTypes = {
  componentClass: _elementType2.default
};
DefaultComponent.defaultProps = {
  componentClass: 'div'
};
exports.default = DefaultComponent;