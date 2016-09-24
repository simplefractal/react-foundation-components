'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;

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

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Table = exports.Table = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    (0, _classCallCheck3.default)(this, Table);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Table).apply(this, arguments));
  }

  (0, _createClass3.default)(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var containerClassName = _props.containerClassName;
      var containerStyle = _props.containerStyle;
      var hover = _props.hover;
      var scroll = _props.scroll;
      var scrollContainerClassName = _props.scrollContainerClassName;
      var scrollContainerStyle = _props.scrollContainerStyle;
      var stack = _props.stack;

      var containerClassNames = (0, _classnames2.default)(containerClassName, cxStyles('table'));
      var classNames = (0, _classnames2.default)(className, cxStyles({ hover: hover, stack: stack }));
      var table = _react2.default.createElement('table', (0, _extends3.default)({}, this.props, { className: classNames }));

      if (scroll) {
        var scrollContainerClassNames = (0, _classnames2.default)(scrollContainerClassName, cxStyles('table-scroll'));

        table = _react2.default.createElement(
          'div',
          { className: scrollContainerClassNames, style: scrollContainerStyle },
          table
        );
      }

      return _react2.default.createElement(
        'div',
        { className: containerClassNames, style: containerStyle },
        table
      );
    }
  }]);
  return Table;
}(_react.Component);

Table.propTypes = {
  className: _react.PropTypes.string,
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.object,
  hover: _react.PropTypes.bool,
  scroll: _react.PropTypes.bool,
  scrollContainerClassName: _react.PropTypes.string,
  scrollContainerStyle: _react.PropTypes.object,
  stack: _react.PropTypes.bool
};
exports.default = Table;