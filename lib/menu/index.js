'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = exports.Menu = undefined;

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

var Menu = exports.Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    (0, _classCallCheck3.default)(this, Menu);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Menu).apply(this, arguments));
  }

  (0, _createClass3.default)(Menu, [{
    key: 'render',
    value: function render() {
      var _cxStyles;

      var _props = this.props;
      var centerContainerClassName = _props.centerContainerClassName;
      var centerContainerStyle = _props.centerContainerStyle;
      var className = _props.className;
      var expanded = _props.expanded;
      var horizontal = _props.horizontal;
      var horizontalAlignment = _props.horizontalAlignment;
      var iconTop = _props.iconTop;
      var nested = _props.nested;
      var simple = _props.simple;
      var vertical = _props.vertical;

      var classNames = (0, _classnames2.default)(className, cxStyles('menu', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, 'align-' + horizontalAlignment, !IS_FLEX_MODE && horizontalAlignment !== _constants.CENTER_POSITION && (0, _includes2.default)(_constants.MENU_ALIGNMENTS, horizontalAlignment)), (0, _defineProperty3.default)(_cxStyles, 'expanded', expanded), (0, _defineProperty3.default)(_cxStyles, horizontal + '-horizontal', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, horizontal)), (0, _defineProperty3.default)(_cxStyles, 'icon-top', iconTop), (0, _defineProperty3.default)(_cxStyles, 'nested', nested), (0, _defineProperty3.default)(_cxStyles, 'simple', simple), (0, _defineProperty3.default)(_cxStyles, 'vertical', vertical && !(0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, vertical)), (0, _defineProperty3.default)(_cxStyles, vertical + '-vertical', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, vertical)), _cxStyles)));

      var content = _react2.default.createElement(_flexMock.FlexParent, (0, _extends3.default)({}, this.props, {
        className: classNames,
        componentClass: 'ul'
      }));

      if (!IS_FLEX_MODE && horizontalAlignment === _constants.CENTER_POSITION) {
        var centerContainerClassNames = (0, _classnames2.default)(centerContainerClassName, cxStyles('menu-centered'));

        return _react2.default.createElement(
          'div',
          { className: centerContainerClassNames, style: centerContainerStyle },
          content
        );
      }

      return content;
    }
  }]);
  return Menu;
}(_react.Component);

Menu.propTypes = {
  centerContainerClassName: _react.PropTypes.string,
  centerContainerStyle: _react.PropTypes.object,
  className: _react.PropTypes.string,
  expanded: _react.PropTypes.bool,
  horizontal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_constants.SCREEN_SIZES)]),
  horizontalAlignment: _react.PropTypes.oneOf(IS_FLEX_MODE ? _constants.FLEX_HORIZONTAL_ALIGNMENTS : _constants.MENU_ALIGNMENTS),
  iconTop: _react.PropTypes.bool,
  nested: _react.PropTypes.bool,
  simple: _react.PropTypes.bool,
  vertical: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_constants.SCREEN_SIZES)])
};

var MenuItem = exports.MenuItem = function (_Component2) {
  (0, _inherits3.default)(MenuItem, _Component2);

  function MenuItem() {
    (0, _classCallCheck3.default)(this, MenuItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MenuItem).apply(this, arguments));
  }

  (0, _createClass3.default)(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var active = _props2.active;
      var className = _props2.className;
      var text = _props2.text;


      var classNames = (0, _classnames2.default)(className, cxStyles({
        active: active,
        'menu-text': text
      }));

      return _react2.default.createElement(_flexMock.FlexChild, (0, _extends3.default)({}, this.props, { className: classNames, componentClass: 'li' }));
    }
  }]);
  return MenuItem;
}(_react.Component);

MenuItem.propTypes = {
  active: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  text: _react.PropTypes.bool
};


Menu.Item = MenuItem;

exports.default = Menu;