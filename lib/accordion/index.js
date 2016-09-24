'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = exports.AccordionItem = undefined;

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

var _batching = require('uncontrollable/batching');

var _batching2 = _interopRequireDefault(_batching);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _isNil = require('lodash/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

var _isBlank = require('underscore.string/isBlank');

var _isBlank2 = _interopRequireDefault(_isBlank);

var _collapse = require('../collapse');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var AccordionItemControlled = function (_Component) {
  (0, _inherits3.default)(AccordionItemControlled, _Component);

  function AccordionItemControlled() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AccordionItemControlled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(AccordionItemControlled)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTitleClick = function (event) {
      var _this$props = _this.props;
      var eventKey = _this$props.eventKey;
      var onToggle = _this$props.onToggle;


      event.preventDefault();

      if (onToggle) {
        onToggle(eventKey);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AccordionItemControlled, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var active = _props.active;
      var children = _props.children;
      var className = _props.className;
      var contentClassName = _props.contentClassName;
      var contentStyle = _props.contentStyle;
      var id = _props.id;
      var title = _props.title;
      var titleClassName = _props.titleClassName;
      var titleStyle = _props.titleStyle;

      var classNames = (0, _classnames2.default)(className, cxStyles('accordion-item', { 'is-active': active }));
      var titleClassNames = (0, _classnames2.default)(titleClassName, cxStyles('accordion-title'));
      var contentClassNames = (0, _classnames2.default)(contentClassName, cxStyles('accordion-content'));
      var labelId = null;
      var contentId = null;

      if (!(0, _isBlank2.default)(id)) {
        labelId = id + '-label';
        contentId = id + '-content';
      }

      return _react2.default.createElement(
        'li',
        (0, _extends3.default)({}, this.props, { className: classNames }),
        _react2.default.createElement(
          'a',
          {
            'aria-controls': contentId,
            'aria-expanded': active,
            'aria-selected': active,
            className: titleClassNames,
            href: '#',
            id: labelId,
            onClick: this.handleTitleClick,
            role: 'tab',
            style: titleStyle
          },
          title
        ),
        _react2.default.createElement(
          _collapse.Collapse,
          { 'in': active },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              {
                'aria-hidden': !active,
                'aria-labelledby': labelId,
                className: contentClassNames,
                id: contentId,
                role: 'tabpanel',
                style: (0, _extends3.default)({}, contentStyle, { display: 'block' })
              },
              children
            )
          )
        )
      );
    }
  }]);
  return AccordionItemControlled;
}(_react.Component);

AccordionItemControlled.propTypes = {
  active: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  contentClassName: _react.PropTypes.string,
  contentStyle: _react.PropTypes.object,
  eventKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  onToggle: _react.PropTypes.func,
  title: _react.PropTypes.node,
  titleClassName: _react.PropTypes.string,
  titleStyle: _react.PropTypes.object
};
var AccordionItem = exports.AccordionItem = (0, _batching2.default)(AccordionItemControlled, { active: 'onToggle' });
AccordionItem.displayName = 'AccordionItem';

function getActiveKeyFromProps(props) {
  var allowAllClosed = props.allowAllClosed;
  var children = props.children;
  var defaultActiveKey = props.defaultActiveKey;
  var multiExpand = props.multiExpand;

  var activeKey = null;

  if (multiExpand) {
    if (Array.isArray(defaultActiveKey)) {
      activeKey = defaultActiveKey;
    } else if ((0, _isBlank2.default)(defaultActiveKey)) {
      activeKey = [];
    } else {
      activeKey = [defaultActiveKey];
    }
  } else if (Array.isArray(defaultActiveKey)) {
    if (defaultActiveKey.length > 0) {
      activeKey = defaultActiveKey[0];
    } else {
      activeKey = null;
    }
  } else if ((0, _isBlank2.default)(defaultActiveKey)) {
    activeKey = null;
  } else {
    activeKey = defaultActiveKey;
  }

  if (!allowAllClosed && (multiExpand && activeKey.length === 0 || (0, _isNil2.default)(activeKey))) {
    (function () {
      var firstChildEventKey = null;

      _react.Children.forEach(children, function (child) {
        if ((0, _isNil2.default)(firstChildEventKey) && (0, _react.isValidElement)(child) && !(0, _isBlank2.default)(child.props.eventKey)) {
          firstChildEventKey = child.props.eventKey;
        }
      });

      if (!(0, _isBlank2.default)(firstChildEventKey)) {
        if (multiExpand) {
          activeKey = [firstChildEventKey];
        } else {
          activeKey = firstChildEventKey;
        }
      }
    })();
  }

  return activeKey;
}

var Accordion = exports.Accordion = function (_Component2) {
  (0, _inherits3.default)(Accordion, _Component2);

  function Accordion() {
    var _Object$getPrototypeO2;

    var _temp2, _this2, _ret3;

    (0, _classCallCheck3.default)(this, Accordion);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret3 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO2 = (0, _getPrototypeOf2.default)(Accordion)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _initialiseProps.call(_this2), _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret3);
  }

  (0, _createClass3.default)(Accordion, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return !this._isChanging;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props;
      var propActiveKey = _props2.activeKey;
      var children = _props2.children;
      var className = _props2.className;
      var stateActiveKey = this.state.activeKey;

      var classNames = (0, _classnames2.default)(className, cxStyles('accordion'));
      var activeKey = stateActiveKey;

      if (Array.isArray(propActiveKey) || !(0, _isBlank2.default)(propActiveKey)) {
        activeKey = propActiveKey;
      }

      var newChildren = _react.Children.map(children, function (child) {
        if ((0, _react.isValidElement)(child) && !(0, _isBlank2.default)(child.props.eventKey)) {
          return (0, _react.cloneElement)(child, {
            active: Array.isArray(activeKey) ? (0, _includes2.default)(activeKey, child.props.eventKey) : activeKey === child.props.eventKey,
            onToggle: _this3.handleToggle
          });
        }

        return child;
      });

      return _react2.default.createElement(
        'ul',
        (0, _extends3.default)({}, this.props, { className: classNames, role: 'tablist' }),
        newChildren
      );
    }
  }]);
  return Accordion;
}(_react.Component);

Accordion.propTypes = {
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]))]),
  allowAllClosed: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  defaultActiveKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]))]),
  multiExpand: _react.PropTypes.bool,
  onSelect: _react.PropTypes.func
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.state = { activeKey: getActiveKeyFromProps(this.props) };

  this.handleToggle = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var _props3 = _this4.props;
    var allowAllClosed = _props3.allowAllClosed;
    var multiExpand = _props3.multiExpand;
    var onSelect = _props3.onSelect;
    var prevActiveKey = _this4.state.activeKey;


    if (onSelect) {
      _this4._isChanging = true;
      onSelect.apply(undefined, args);
      _this4._isChanging = false;
    }

    var selectedKey = args[0];


    if (!(0, _isBlank2.default)(selectedKey)) {
      var activeKey = null;

      if (multiExpand) {
        if ((0, _includes2.default)(prevActiveKey, selectedKey)) {
          if (prevActiveKey.length > 1 || allowAllClosed) {
            activeKey = prevActiveKey.filter(function (item) {
              return item !== selectedKey;
            });
          } else {
            activeKey = prevActiveKey;
          }
        } else {
          activeKey = prevActiveKey.concat([selectedKey]);
        }
      } else if (prevActiveKey === selectedKey) {
        if (allowAllClosed) {
          activeKey = null;
        } else {
          activeKey = selectedKey;
        }
      } else {
        activeKey = selectedKey;
      }

      _this4.setState({ activeKey: activeKey });
    }
  };
};

Accordion.Item = AccordionItem;

exports.default = Accordion;