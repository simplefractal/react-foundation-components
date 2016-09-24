'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexVideo = undefined;

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

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var FlexVideo = exports.FlexVideo = function (_Component) {
  (0, _inherits3.default)(FlexVideo, _Component);

  function FlexVideo() {
    (0, _classCallCheck3.default)(this, FlexVideo);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FlexVideo).apply(this, arguments));
  }

  (0, _createClass3.default)(FlexVideo, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var containerClassName = _props.containerClassName;
      var containerStyle = _props.containerStyle;
      var vimeo = _props.vimeo;
      var widescreen = _props.widescreen;

      var classNames = (0, _classnames2.default)(containerClassName, cxStyles('flex-video', { vimeo: vimeo, widescreen: widescreen }));

      return _react2.default.createElement(
        'div',
        { className: classNames, style: containerStyle },
        _react2.default.createElement('iframe', this.props)
      );
    }
  }]);
  return FlexVideo;
}(_react.Component);

FlexVideo.propTypes = {
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.object,
  vimeo: _react.PropTypes.bool,
  widescreen: _react.PropTypes.bool
};
exports.default = FlexVideo;