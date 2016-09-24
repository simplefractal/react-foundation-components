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

var _reactDom = require('react-dom');

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _RootCloseWrapper = require('react-overlays/lib/RootCloseWrapper');

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

var _Overlay = require('react-overlays/lib/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mouseOverOut(event, callback) {
  var target = event.currentTarget;
  var related = event.relatedTarget || event.nativeEvent.toElement;

  if (!related || related !== target && !(0, _contains2.default)(target, related)) {
    callback(event);
  }
}

var OverlayTrigger = function (_Component) {
  (0, _inherits3.default)(OverlayTrigger, _Component);

  function OverlayTrigger() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, OverlayTrigger);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(OverlayTrigger)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(OverlayTrigger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mountNode = document.createElement('div');
      this.renderOverlay();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this._mountNode) {
        this.renderOverlay();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _reactDom.unmountComponentAtNode)(this._mountNode);
      this._mountNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var show = this.state.show;

      var childProps = {
        'aria-expanded': show,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onMouseOut: this.handleMouseOut,
        onMouseOver: this.handleMouseOver,
        ref: this.setTargetRef
      };
      var newChild = null;

      if ((0, _react.isValidElement)(children)) {
        newChild = (0, _react.cloneElement)(children, childProps);
      } else {
        newChild = _react2.default.createElement(
          'span',
          childProps,
          children
        );
      }

      this._overlay = this.createOverlay();

      return _react2.default.createElement(
        _RootCloseWrapper2.default,
        { noWrap: true, onRootClose: this.handleRootClose },
        newChild
      );
    }
  }]);
  return OverlayTrigger;
}(_react.Component);

OverlayTrigger.propTypes = {
  children: _react.PropTypes.node,
  closeOnClickOutside: _react.PropTypes.bool,
  onBlur: _react.PropTypes.func,
  onClick: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onMouseOut: _react.PropTypes.func,
  onMouseOver: _react.PropTypes.func,
  overlay: _react.PropTypes.node,
  position: _react.PropTypes.oneOf(_constants.OVERLAY_POSITIONS),
  transition: _elementType2.default,
  triggerClick: _react.PropTypes.bool,
  triggerFocus: _react.PropTypes.bool,
  triggerHover: _react.PropTypes.bool
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = {
    show: false
  };

  this.setTargetRef = function (ref) {
    _this2._targetRef = ref;
  };

  this.getTargetRefDOMNode = function () {
    return (0, _reactDom.findDOMNode)(_this2._targetRef);
  };

  this._clicked = false;
  this._lastRootClose = new Date();

  this.handleShow = function () {
    return _this2.setState({ show: true });
  };

  this.handleHide = function () {
    if (!_this2._clicked) {
      _this2.setState({ show: false });
    }
  };

  this.handleAnyClick = function () {
    var show = _this2.state.show;


    if (show) {
      if (_this2._clicked) {
        _this2._clicked = false;
        _this2.handleHide();
      } else {
        _this2._clicked = true;
      }
    } else {
      _this2._clicked = true;
      _this2.handleShow();
    }
  };

  this.handleRootClose = function () {
    var closeOnClickOutside = _this2.props.closeOnClickOutside;


    if (closeOnClickOutside) {
      var now = new Date();
      var diff = now - _this2._lastRootClose;

      _this2._lastRootClose = now;

      if (_this2._clicked && diff < 50) {
        _this2.handleAnyClick();
      }
    }
  };

  this.handleClick = function () {
    var _props = _this2.props;
    var onClick = _props.onClick;
    var triggerClick = _props.triggerClick;


    if (triggerClick) {
      _this2.handleAnyClick();

      if (onClick) {
        onClick.apply(undefined, arguments);
      }
    }
  };

  this.handleBlur = function () {
    var _props2 = _this2.props;
    var onBlur = _props2.onBlur;
    var triggerFocus = _props2.triggerFocus;


    if (triggerFocus) {
      _this2.handleHide();

      if (onBlur) {
        onBlur.apply(undefined, arguments);
      }
    }
  };

  this.handleFocus = function () {
    var _props3 = _this2.props;
    var onFocus = _props3.onFocus;
    var triggerFocus = _props3.triggerFocus;


    if (triggerFocus) {
      _this2.handleShow();

      if (onFocus) {
        onFocus.apply(undefined, arguments);
      }
    }
  };

  this.handleMouseOut = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _props4 = _this2.props;
    var onMouseOut = _props4.onMouseOut;
    var triggerHover = _props4.triggerHover;


    if (triggerHover) {
      var event = args[0];


      mouseOverOut(event, function () {
        _this2.handleHide();

        if (onMouseOut) {
          onMouseOut.apply(undefined, args);
        }
      });
    }
  };

  this.handleMouseOver = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var _props5 = _this2.props;
    var onMouseOver = _props5.onMouseOver;
    var triggerHover = _props5.triggerHover;
    var event = args[0];


    if (triggerHover) {
      mouseOverOut(event, function () {
        _this2.handleShow();

        if (onMouseOver) {
          onMouseOver.apply(undefined, args);
        }
      });
    }
  };

  this.createOverlay = function () {
    var _props6 = _this2.props;
    var overlay = _props6.overlay;
    var position = _props6.position;
    var transition = _props6.transition;
    var show = _this2.state.show;


    return _react2.default.createElement(
      _Overlay2.default,
      {
        onHide: _this2.handleRootClose,
        placement: position,
        rootClose: true,
        show: show,
        target: _this2.getTargetRefDOMNode,
        transition: transition
      },
      overlay
    );
  };

  this.renderOverlay = function () {
    return (0, _reactDom.unstable_renderSubtreeIntoContainer // eslint-disable-line camelcase
    )(_this2, _this2._overlay, _this2._mountNode);
  };
};

exports.default = OverlayTrigger;