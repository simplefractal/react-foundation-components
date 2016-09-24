'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = undefined;

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

var _isBlank = require('underscore.string/isBlank');

var _isBlank2 = _interopRequireDefault(_isBlank);

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var Tab = exports.Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab() {
    (0, _classCallCheck3.default)(this, Tab);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tab).apply(this, arguments));
  }

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var active = _props.active;
      var className = _props.className;
      var id = _props.id;

      var classNames = (0, _classnames2.default)(className, cxStyles('tabs-panel', { 'is-active': active }));
      var labelId = null;

      if (!(0, _isBlank2.default)(id)) {
        labelId = id + '-label';
      }

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, {
        'aria-hidden': !active,
        'aria-labelledby': labelId,
        className: classNames,
        role: 'tabpanel'
      }));
    }
  }]);
  return Tab;
}(_react.Component);

Tab.propTypes = {
  active: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var TabsContent = function (_Component2) {
  (0, _inherits3.default)(TabsContent, _Component2);

  function TabsContent() {
    (0, _classCallCheck3.default)(this, TabsContent);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TabsContent).apply(this, arguments));
  }

  (0, _createClass3.default)(TabsContent, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var classNames = (0, _classnames2.default)(className, cxStyles('tabs-content'));

      return _react2.default.createElement('div', (0, _extends3.default)({}, this.props, { className: classNames }));
    }
  }]);
  return TabsContent;
}(_react.Component);

TabsContent.propTypes = {
  className: _react.PropTypes.string
};

var TabTitle = function (_Component3) {
  (0, _inherits3.default)(TabTitle, _Component3);

  function TabTitle() {
    var _Object$getPrototypeO;

    var _temp, _this3, _ret;

    (0, _classCallCheck3.default)(this, TabTitle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(TabTitle)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this3), _this3.handleClick = function (event) {
      var _this3$props = _this3.props;
      var eventKey = _this3$props.eventKey;
      var panelId = _this3$props.panelId;
      var onSelect = _this3$props.onSelect;


      if ((0, _isBlank2.default)(panelId)) {
        event.preventDefault();
      }

      if (onSelect) {
        onSelect(eventKey);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this3, _ret);
  }

  (0, _createClass3.default)(TabTitle, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var active = _props2.active;
      var containerClassName = _props2.containerClassName;
      var containerStyle = _props2.containerStyle;
      var panelId = _props2.panelId;

      var classNames = (0, _classnames2.default)(containerClassName, cxStyles('tabs-title', { 'is-active': active }));
      var href = '#' + ((0, _isBlank2.default)(panelId) ? '' : panelId);

      return _react2.default.createElement(
        'li',
        {
          className: classNames,
          role: 'presentation',
          style: containerStyle
        },
        _react2.default.createElement('a', (0, _extends3.default)({}, this.props, {
          'aria-controls': panelId,
          'aria-selected': active,
          href: href,
          onClick: this.handleClick,
          role: 'tab'
        }))
      );
    }
  }]);
  return TabTitle;
}(_react.Component);

TabTitle.propTypes = {
  active: _react.PropTypes.bool,
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.object,
  eventKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  onSelect: _react.PropTypes.func,
  panelId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var TabsHeader = function (_Component4) {
  (0, _inherits3.default)(TabsHeader, _Component4);

  function TabsHeader() {
    (0, _classCallCheck3.default)(this, TabsHeader);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TabsHeader).apply(this, arguments));
  }

  (0, _createClass3.default)(TabsHeader, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var activeKey = _props3.activeKey;
      var children = _props3.children;
      var className = _props3.className;
      var onSelect = _props3.onSelect;
      var vertical = _props3.vertical;

      var classNames = (0, _classnames2.default)(className, cxStyles('tabs', { vertical: vertical }));
      var newChildren = _react.Children.map(children, function (child) {
        if ((0, _react.isValidElement)(child) && !(0, _isBlank2.default)(child.props.eventKey)) {
          return (0, _react.cloneElement)(child, {
            active: activeKey === child.props.eventKey,
            onSelect: onSelect
          });
        }

        return child;
      });

      return _react2.default.createElement(
        'ul',
        (0, _extends3.default)({}, this.props, { className: classNames }),
        newChildren
      );
    }
  }]);
  return TabsHeader;
}(_react.Component);

TabsHeader.propTypes = {
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  onSelect: _react.PropTypes.func,
  vertical: _react.PropTypes.bool
};

var TabsControlled = function (_Component5) {
  (0, _inherits3.default)(TabsControlled, _Component5);

  function TabsControlled() {
    (0, _classCallCheck3.default)(this, TabsControlled);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TabsControlled).apply(this, arguments));
  }

  (0, _createClass3.default)(TabsControlled, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props;
      var activeKey = _props4.activeKey;
      var children = _props4.children;

      var headerChildren = _react.Children.map(children, function (child) {
        var id = null;
        var panelId = null;

        if ((0, _react.isValidElement)(child) && !(0, _isBlank2.default)(child.props.id)) {
          panelId = child.props.id;
          id = panelId + '-label';
        }

        return _react2.default.createElement(
          TabTitle,
          (0, _extends3.default)({}, child.props ? child.props : {}, { id: id, panelId: panelId }),
          child.props ? child.props.title : null
        );
      });
      var contentChildren = _react.Children.map(children, function (child) {
        if ((0, _react.isValidElement)(child) && !(0, _isBlank2.default)(child.props.eventKey)) {
          return (0, _react.cloneElement)(child, {
            active: activeKey === child.props.eventKey
          });
        }

        return child;
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          TabsHeader,
          this.props,
          headerChildren
        ),
        _react2.default.createElement(
          TabsContent,
          null,
          contentChildren
        )
      );
    }
  }]);
  return TabsControlled;
}(_react.Component);

TabsControlled.propTypes = {
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  children: _react.PropTypes.node
};
var Tabs = exports.Tabs = (0, _batching2.default)(TabsControlled, { activeKey: 'onSelect' });
Tabs.displayName = 'Tabs';

Tabs.Tab = Tab;

exports.default = Tabs;