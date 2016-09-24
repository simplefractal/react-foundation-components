'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.Column = exports.Row = undefined;

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

var _screenSize = require('../util/screen-size');

var _flex = require('../flex');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Row = exports.Row = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var collapse = _props.collapse;
      var expanded = _props.expanded;
      var unstack = _props.unstack;

      var classNames = (0, _classnames2.default)(className, cxStyles('row', (0, _screenSize.createScreenSizeClassNamesFromProps)(_constants.FLEX_GRID_ROW_CLASS_NAMES, this.props), (0, _defineProperty3.default)({
        collapse: collapse,
        expanded: expanded
      }, unstack + '-unstack', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, unstack))));

      return _react2.default.createElement(_flex.FlexParent, (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return Row;
}(_react.Component);

Row.propTypes = (0, _extends3.default)({}, (0, _screenSize.createScreenSizePropTypes)(_constants.FLEX_GRID_ROW_CLASS_NAMES), {
  className: _react.PropTypes.string,
  collapse: _react.PropTypes.bool,
  expanded: _react.PropTypes.bool,
  unstack: _react.PropTypes.oneOf(_constants.SCREEN_SIZES)
});

var Column = exports.Column = function (_Component2) {
  (0, _inherits3.default)(Column, _Component2);

  function Column() {
    (0, _classCallCheck3.default)(this, Column);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Column).apply(this, arguments));
  }

  (0, _createClass3.default)(Column, [{
    key: 'render',
    value: function render() {
      var _cxStyles2;

      var _props2 = this.props;
      var className = _props2.className;
      var expand = _props2.expand;
      var shrink = _props2.shrink;

      var classNames = (0, _classnames2.default)(className, cxStyles('column', (0, _screenSize.createScreenSizeClassNamesFromProps)(_constants.FLEX_GRID_COLUMN_CLASS_NAMES, this.props), (_cxStyles2 = {}, (0, _defineProperty3.default)(_cxStyles2, expand + '-expand', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, expand)), (0, _defineProperty3.default)(_cxStyles2, 'shrink', shrink), _cxStyles2)));

      return _react2.default.createElement(_flex.FlexChild, (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return Column;
}(_react.Component);

Column.propTypes = (0, _extends3.default)({}, (0, _screenSize.createScreenSizePropTypes)(_constants.FLEX_GRID_COLUMN_CLASS_NAMES), {
  className: _react.PropTypes.string,
  shrink: _react.PropTypes.bool,
  expand: _react.PropTypes.oneOf(_constants.SCREEN_SIZES)
});
var Grid = exports.Grid = { Row: Row, Column: Column };

exports.default = Grid;