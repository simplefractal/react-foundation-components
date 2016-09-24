'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopBar = exports.TopBarTitle = exports.TopBarContent = exports.TopBarItem = undefined;

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
var IS_FLEX_MODE = true;

var TopBarItem = exports.TopBarItem = function (_Component) {
  (0, _inherits3.default)(TopBarItem, _Component);

  function TopBarItem() {
    (0, _classCallCheck3.default)(this, TopBarItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TopBarItem).apply(this, arguments));
  }

  (0, _createClass3.default)(TopBarItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var position = _props.position;

      var classNames = (0, _classnames2.default)(className, cxStyles((0, _defineProperty3.default)({}, 'top-bar-' + position, (0, _includes2.default)(_constants.TOP_BAR_POSITIONS, position))));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return TopBarItem;
}(_react.Component);

TopBarItem.propTypes = {
  className: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(_constants.TOP_BAR_POSITIONS).isRequired
};

var TopBarContent = exports.TopBarContent = function (_Component2) {
  (0, _inherits3.default)(TopBarContent, _Component2);

  function TopBarContent() {
    (0, _classCallCheck3.default)(this, TopBarContent);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TopBarContent).apply(this, arguments));
  }

  (0, _createClass3.default)(TopBarContent, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var classNames = (0, _classnames2.default)(className, cxStyles({ 'top-bar-content': IS_FLEX_MODE }));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return TopBarContent;
}(_react.Component);

TopBarContent.propTypes = {
  className: _react.PropTypes.string
};

var TopBarTitle = exports.TopBarTitle = function (_Component3) {
  (0, _inherits3.default)(TopBarTitle, _Component3);

  function TopBarTitle() {
    (0, _classCallCheck3.default)(this, TopBarTitle);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TopBarTitle).apply(this, arguments));
  }

  (0, _createClass3.default)(TopBarTitle, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var classNames = (0, _classnames2.default)(className, cxStyles('top-bar-title'));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return TopBarTitle;
}(_react.Component);

TopBarTitle.propTypes = {
  className: _react.PropTypes.string
};

var TopBar = exports.TopBar = function (_Component4) {
  (0, _inherits3.default)(TopBar, _Component4);

  function TopBar() {
    (0, _classCallCheck3.default)(this, TopBar);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TopBar).apply(this, arguments));
  }

  (0, _createClass3.default)(TopBar, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var stack = _props2.stack;

      var classNames = (0, _classnames2.default)(className, cxStyles('top-bar', (0, _defineProperty3.default)({}, 'stacked-for-' + stack, (0, _includes2.default)(_constants.SCREEN_SIZES, stack))));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return TopBar;
}(_react.Component);

TopBar.propTypes = {
  className: _react.PropTypes.string,
  stack: _react.PropTypes.oneOf(_constants.SCREEN_SIZES)
};
TopBar.defaultProps = {
  stack: _constants.SCREEN_SIZE_SMALL
};


TopBar.Content = TopBarContent;
TopBar.Item = TopBarItem;
TopBar.Title = TopBarTitle;

exports.default = TopBar;