'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBar = exports.TitleBarMenuIcon = exports.TitleBarTitle = exports.TitleBarItem = undefined;

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

var _menuIcon = require('../menu-icon');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var TitleBarItem = exports.TitleBarItem = function (_Component) {
  (0, _inherits3.default)(TitleBarItem, _Component);

  function TitleBarItem() {
    (0, _classCallCheck3.default)(this, TitleBarItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TitleBarItem).apply(this, arguments));
  }

  (0, _createClass3.default)(TitleBarItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var position = _props.position;

      var classNames = (0, _classnames2.default)(className, cxStyles((0, _defineProperty3.default)({}, 'title-bar-' + position, (0, _includes2.default)(_constants.TITLE_BAR_POSITIONS, position))));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return TitleBarItem;
}(_react.Component);

TitleBarItem.propTypes = {
  className: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(_constants.TITLE_BAR_POSITIONS).isRequired
};

var TitleBarTitle = exports.TitleBarTitle = function (_Component2) {
  (0, _inherits3.default)(TitleBarTitle, _Component2);

  function TitleBarTitle() {
    (0, _classCallCheck3.default)(this, TitleBarTitle);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TitleBarTitle).apply(this, arguments));
  }

  (0, _createClass3.default)(TitleBarTitle, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var classNames = (0, _classnames2.default)(className, cxStyles('title-bar-title'));

      return _react2.default.createElement('span', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return TitleBarTitle;
}(_react.Component);

TitleBarTitle.propTypes = {
  className: _react.PropTypes.string
};

var TitleBarMenuIcon = exports.TitleBarMenuIcon = function (_Component3) {
  (0, _inherits3.default)(TitleBarMenuIcon, _Component3);

  function TitleBarMenuIcon() {
    (0, _classCallCheck3.default)(this, TitleBarMenuIcon);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TitleBarMenuIcon).apply(this, arguments));
  }

  (0, _createClass3.default)(TitleBarMenuIcon, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var dark = _props2.dark;

      var classNames = (0, _classnames2.default)(className, cxStyles('menu-icon', { dark: dark }));

      return _react2.default.createElement(_menuIcon.MenuIcon, (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return TitleBarMenuIcon;
}(_react.Component);

TitleBarMenuIcon.propTypes = {
  className: _react.PropTypes.string,
  dark: _react.PropTypes.bool
};

var TitleBar = exports.TitleBar = function (_Component4) {
  (0, _inherits3.default)(TitleBar, _Component4);

  function TitleBar() {
    (0, _classCallCheck3.default)(this, TitleBar);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TitleBar).apply(this, arguments));
  }

  (0, _createClass3.default)(TitleBar, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var classNames = (0, _classnames2.default)(className, cxStyles('title-bar'));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return TitleBar;
}(_react.Component);

TitleBar.propTypes = {
  className: _react.PropTypes.string
};


TitleBar.Item = TitleBarItem;
TitleBar.Title = TitleBarTitle;
TitleBar.MenuIcon = TitleBarMenuIcon;

exports.default = TitleBar;