'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OffCanvasContainer = exports.OffCanvasContent = exports.OffCanvas = undefined;

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

var OffCanvas = exports.OffCanvas = function (_Component) {
  (0, _inherits3.default)(OffCanvas, _Component);

  function OffCanvas() {
    (0, _classCallCheck3.default)(this, OffCanvas);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(OffCanvas).apply(this, arguments));
  }

  (0, _createClass3.default)(OffCanvas, [{
    key: 'render',
    value: function render() {
      var _cxStyles;

      var _props = this.props;
      var className = _props.className;
      var position = _props.position;
      var revealFor = _props.revealFor;

      var classNames = (0, _classnames2.default)(className, cxStyles('off-canvas', (_cxStyles = {}, (0, _defineProperty3.default)(_cxStyles, 'position-' + position, (0, _includes2.default)(_constants.OFF_CANVAS_POSITIONS, position)), (0, _defineProperty3.default)(_cxStyles, 'reveal-for-' + revealFor, (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, revealFor)), _cxStyles)));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return OffCanvas;
}(_react.Component);

OffCanvas.propTypes = {
  className: _react.PropTypes.string,
  position: _react.PropTypes.oneOf(_constants.OFF_CANVAS_POSITIONS),
  revealFor: _react.PropTypes.oneOf(_constants.LARGER_SCREEN_SIZES)
};

var OffCanvasContent = exports.OffCanvasContent = function (_Component2) {
  (0, _inherits3.default)(OffCanvasContent, _Component2);

  function OffCanvasContent() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, OffCanvasContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(OffCanvasContent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.handleContentBlockerClick = function () {
      var onContentBlockerClick = _this2.props.onContentBlockerClick;


      if (onContentBlockerClick) {
        onContentBlockerClick();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(OffCanvasContent, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var blocked = _props2.blocked;
      var children = _props2.children;
      var className = _props2.className;
      var contentBlockerClassName = _props2.contentBlockerClassName;
      var contentBlockerStyle = _props2.contentBlockerStyle;

      var classNames = (0, _classnames2.default)(className, cxStyles('off-canvas-content'));
      var contentBlockerClassNames = (0, _classnames2.default)(contentBlockerClassName, cxStyles('js-off-canvas-exit'));

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, this.props, { className: classNames }),
        children,
        _react2.default.createElement('div', {
          className: contentBlockerClassNames,
          onClick: this.handleContentBlockerClick,
          style: blocked ? (0, _extends3.default)({}, contentBlockerStyle, { display: 'block' }) : contentBlockerStyle
        })
      );
    }
  }]);
  return OffCanvasContent;
}(_react.Component);

OffCanvasContent.propTypes = {
  blocked: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  contentBlockerClassName: _react.PropTypes.string,
  contentBlockerStyle: _react.PropTypes.object,
  onContentBlockerClick: _react.PropTypes.func
};

var OffCanvasContainer = exports.OffCanvasContainer = function (_Component3) {
  (0, _inherits3.default)(OffCanvasContainer, _Component3);

  function OffCanvasContainer() {
    (0, _classCallCheck3.default)(this, OffCanvasContainer);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(OffCanvasContainer).apply(this, arguments));
  }

  (0, _createClass3.default)(OffCanvasContainer, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var children = _props3.children;
      var className = _props3.className;
      var innerClassName = _props3.innerClassName;
      var innerStyle = _props3.innerStyle;
      var open = _props3.open;

      var openValid = (0, _includes2.default)(_constants.OFF_CANVAS_POSITIONS, open);
      var classNames = (0, _classnames2.default)(className, cxStyles('off-canvas-wrapper'));
      var innerClassNames = (0, _classnames2.default)(innerClassName, cxStyles('off-canvas-wrapper-inner', (0, _defineProperty3.default)({}, 'is-open-' + open, openValid)));
      var newChildren = _react.Children.map(children, function (child) {
        if ((0, _react.isValidElement)(child)) {
          return (0, _react.cloneElement)(child, { blocked: openValid });
        }

        return child;
      });

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, this.props, { className: classNames }),
        _react2.default.createElement(
          'div',
          { className: innerClassNames, style: innerStyle },
          newChildren
        )
      );
    }
  }]);
  return OffCanvasContainer;
}(_react.Component);

OffCanvasContainer.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  innerClassName: _react.PropTypes.string,
  innerStyle: _react.PropTypes.object,
  open: _react.PropTypes.oneOf(_constants.OFF_CANVAS_POSITIONS)
};


OffCanvas.Content = OffCanvasContent;
OffCanvas.Container = OffCanvasContainer;

exports.default = OffCanvas;