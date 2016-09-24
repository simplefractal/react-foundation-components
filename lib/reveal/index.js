'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reveal = undefined;

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

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _Modal = require('react-overlays/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _constants = require('../util/constants');

var _fade = require('../fade');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Reveal = exports.Reveal = function (_Component) {
  (0, _inherits3.default)(Reveal, _Component);

  function Reveal() {
    (0, _classCallCheck3.default)(this, Reveal);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Reveal).apply(this, arguments));
  }

  (0, _createClass3.default)(Reveal, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var containerClassName = _props.containerClassName;
      var containerStyle = _props.containerStyle;
      var revealClassName = _props.revealClassName;
      var revealStyle = _props.revealStyle;
      var overlay = _props.overlay;
      var overlayClassName = _props.overlayClassName;
      var overlayStyle = _props.overlayStyle;
      var size = _props.size;

      var revealClassNames = (0, _classnames2.default)(revealClassName, cxStyles('reveal', (0, _defineProperty3.default)({}, size, (0, _includes2.default)(_constants.MODAL_SIZES, size))));
      var overlayClassNames = (0, _classnames2.default)(overlayClassName, cxStyles('reveal-overlay'));
      var containerStyleMerged = (0, _extends3.default)({}, containerStyle, {
        bottom: 0,
        left: 0,
        overflowY: 'scroll',
        position: 'fixed',
        right: 0,
        top: 0
      });

      return _react2.default.createElement(
        _Modal2.default,
        (0, _extends3.default)({}, this.props, {
          backdrop: overlay,
          backdropClassName: overlayClassNames,
          backdropStyle: { overlayStyle: overlayStyle, display: 'block' },
          className: containerClassName,
          style: containerStyleMerged
        }),
        _react2.default.createElement(
          'div',
          { className: revealClassNames, style: (0, _extends3.default)({}, revealStyle, { display: 'block' }) },
          children
        )
      );
    }
  }]);
  return Reveal;
}(_react.Component);

Reveal.propTypes = {
  children: _react.PropTypes.node,
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.object,
  overlay: _react.PropTypes.bool,
  overlayClassName: _react.PropTypes.string,
  overlayStyle: _react.PropTypes.object,
  revealClassName: _react.PropTypes.string,
  revealStyle: _react.PropTypes.object,
  size: _react.PropTypes.oneOf(_constants.MODAL_SIZES),
  transition: _elementType2.default
};
Reveal.defaultProps = {
  overlay: true,
  transition: _fade.Fade
};
exports.default = Reveal;