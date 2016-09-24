'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaObject = exports.MediaObjectSection = undefined;

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

var _flexMock = require('../flex-mock');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);
var IS_FLEX_MODE = false;

var MediaObjectSection = exports.MediaObjectSection = function (_Component) {
  (0, _inherits3.default)(MediaObjectSection, _Component);

  function MediaObjectSection() {
    (0, _classCallCheck3.default)(this, MediaObjectSection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MediaObjectSection).apply(this, arguments));
  }

  (0, _createClass3.default)(MediaObjectSection, [{
    key: 'render',
    value: function render() {
      var _cxStyles;

      var _props = this.props;
      var className = _props.className;
      var main = _props.main;
      var verticalAlignment = _props.verticalAlignment;

      var classNames = (0, _classnames2.default)(className, cxStyles('media-object-section', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, verticalAlignment, !IS_FLEX_MODE && (0, _includes2.default)(_constants.MEDIA_OBJECT_SECTION_ALIGNMENTS, verticalAlignment)), (0, _defineProperty3.default)(_cxStyles, 'main-section', IS_FLEX_MODE && main), _cxStyles)));

      return _react2.default.createElement(_flexMock.FlexChild, (0, _extends3.default)({}, this.props, {
        className: classNames
      }));
    }
  }]);
  return MediaObjectSection;
}(_react.Component);

MediaObjectSection.propTypes = {
  className: _react.PropTypes.string,
  main: _react.PropTypes.bool,
  verticalAlignment: _react.PropTypes.oneOf(IS_FLEX_MODE ? _constants.FLEX_VERTICAL_ALIGNMENTS : _constants.MEDIA_OBJECT_SECTION_ALIGNMENTS)
};

var MediaObject = exports.MediaObject = function (_Component2) {
  (0, _inherits3.default)(MediaObject, _Component2);

  function MediaObject() {
    (0, _classCallCheck3.default)(this, MediaObject);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MediaObject).apply(this, arguments));
  }

  (0, _createClass3.default)(MediaObject, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var stackForSmall = _props2.stackForSmall;

      var classNames = (0, _classnames2.default)(className, cxStyles('media-object', { 'stack-for-small': stackForSmall }));

      return _react2.default.createElement(_flexMock.FlexParent, (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return MediaObject;
}(_react.Component);

MediaObject.propTypes = {
  className: _react.PropTypes.string,
  stackForSmall: _react.PropTypes.bool
};


MediaObject.Section = MediaObjectSection;

exports.default = MediaObject;