'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormField = exports.FormFieldButton = exports.FormFieldInline = exports.FormFieldHelp = exports.FormFieldError = exports.FormFieldLabel = exports.FormFieldInput = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _isBlank = require('underscore.string/isBlank');

var _isBlank2 = _interopRequireDefault(_isBlank);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _constants = require('../util/constants');

var _textAlignment = require('../text-alignment');

var _button = require('../button');

var _grid = require('../grid-flex');

var _styles = require('./_styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cxStyles = _bind2.default.bind(_styles2.default);

var FormFieldInputBase = function (_Component) {
  (0, _inherits3.default)(FormFieldInputBase, _Component);

  function FormFieldInputBase() {
    (0, _classCallCheck3.default)(this, FormFieldInputBase);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldInputBase).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldInputBase, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var error = _props.error;
      var formFieldId = _props.formFieldId;
      var id = _props.id;
      var inline = _props.inline;
      var type = _props.type;

      var classNames = (0, _classnames2.default)(className, cxStyles({ 'is-invalid-input': error, 'input-group-field': inline }));
      var restProps = { className: classNames, id: (0, _isBlank2.default)(formFieldId) ? id : formFieldId };
      var ComponentClass = null;

      switch (type) {
        case 'select':
          ComponentClass = 'select';
          break;
        case 'textarea':
          ComponentClass = 'textarea';
          break;
        case 'static':
          ComponentClass = 'p';
          break;
        default:
          ComponentClass = 'input';
      }

      return _react2.default.createElement(ComponentClass, (0, _extends3.default)({}, this.props, restProps));
    }
  }]);
  return FormFieldInputBase;
}(_react.Component);

FormFieldInputBase.propTypes = {
  className: _react.PropTypes.string,
  error: _react.PropTypes.bool,
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  inline: _react.PropTypes.bool,
  type: _react.PropTypes.string
};
FormFieldInputBase.defaultProps = {
  type: 'text'
};

var FormFieldLabelBase = function (_Component2) {
  (0, _inherits3.default)(FormFieldLabelBase, _Component2);

  function FormFieldLabelBase() {
    (0, _classCallCheck3.default)(this, FormFieldLabelBase);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldLabelBase).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldLabelBase, [{
    key: 'render',
    value: function render() {
      var _cxStyles;

      var _props2 = this.props;
      var className = _props2.className;
      var middle = _props2.middle;
      var error = _props2.error;
      var formFieldId = _props2.formFieldId;
      var htmlFor = _props2.htmlFor;
      var id = _props2.id;
      var inline = _props2.inline;

      var classNames = (0, _classnames2.default)(className, cxStyles((_cxStyles = {
        middle: middle && !(0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, middle)
      }, (0, _defineProperty3.default)(_cxStyles, middle + '-middle', (0, _includes2.default)(_constants.LARGER_SCREEN_SIZES, middle)), (0, _defineProperty3.default)(_cxStyles, 'is-invalid-label', error), (0, _defineProperty3.default)(_cxStyles, 'input-group-label', inline), _cxStyles)));

      return _react2.default.createElement(_textAlignment.TextAlignment, (0, _extends3.default)({}, this.props, {
        componentClass: 'label',
        className: classNames,
        htmlFor: (0, _isBlank2.default)(formFieldId) ? htmlFor : formFieldId,
        id: (0, _isBlank2.default)(formFieldId) ? id : formFieldId + 'Label'
      }));
    }
  }]);
  return FormFieldLabelBase;
}(_react.Component);

FormFieldLabelBase.propTypes = {
  className: _react.PropTypes.string,
  middle: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_constants.SCREEN_SIZES)]),
  error: _react.PropTypes.bool,
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  htmlFor: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  inline: _react.PropTypes.bool
};

var FormFieldErrorBase = function (_Component3) {
  (0, _inherits3.default)(FormFieldErrorBase, _Component3);

  function FormFieldErrorBase() {
    (0, _classCallCheck3.default)(this, FormFieldErrorBase);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldErrorBase).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldErrorBase, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var className = _props3.className;
      var error = _props3.error;
      var formFieldId = _props3.formFieldId;
      var id = _props3.id;

      var classNames = (0, _classnames2.default)(className, cxStyles('form-error', { 'is-visible': error }));

      return _react2.default.createElement('span', (0, _extends3.default)({}, this.props, {
        className: classNames,
        id: (0, _isBlank2.default)(formFieldId) ? id : formFieldId + 'Error'
      }));
    }
  }]);
  return FormFieldErrorBase;
}(_react.Component);

FormFieldErrorBase.propTypes = {
  className: _react.PropTypes.string,
  error: _react.PropTypes.bool,
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var FormFieldHelpBase = function (_Component4) {
  (0, _inherits3.default)(FormFieldHelpBase, _Component4);

  function FormFieldHelpBase() {
    (0, _classCallCheck3.default)(this, FormFieldHelpBase);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldHelpBase).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldHelpBase, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props;
      var className = _props4.className;
      var formFieldId = _props4.formFieldId;
      var id = _props4.id;

      var classNames = (0, _classnames2.default)(className, cxStyles('help-text'));

      return _react2.default.createElement('p', (0, _extends3.default)({}, this.props, {
        className: classNames,
        id: (0, _isBlank2.default)(formFieldId) ? id : formFieldId + 'Help'
      }));
    }
  }]);
  return FormFieldHelpBase;
}(_react.Component);

FormFieldHelpBase.propTypes = {
  className: _react.PropTypes.string,
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var FormFieldInlineBase = function (_Component5) {
  (0, _inherits3.default)(FormFieldInlineBase, _Component5);

  function FormFieldInlineBase() {
    (0, _classCallCheck3.default)(this, FormFieldInlineBase);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldInlineBase).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldInlineBase, [{
    key: 'render',
    value: function render() {
      var _props5 = this.props;
      var children = _props5.children;
      var className = _props5.className;
      var error = _props5.error;
      var formFieldId = _props5.formFieldId;
      var id = _props5.id;

      var classNames = (0, _classnames2.default)(className, cxStyles('input-group'));
      var newChildren = _react.Children.map(children, function (child) {
        if ((0, _react.isValidElement)(child)) {
          return (0, _react.cloneElement)(child, {
            error: error,
            inline: true,
            formFieldId: formFieldId
          });
        }

        return child;
      });

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, this.props, {
          className: classNames,
          id: (0, _isBlank2.default)(formFieldId) ? id : formFieldId + 'Group'
        }),
        newChildren
      );
    }
  }]);
  return FormFieldInlineBase;
}(_react.Component);

FormFieldInlineBase.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  error: _react.PropTypes.bool,
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var FormFieldButtonBase = function (_Component6) {
  (0, _inherits3.default)(FormFieldButtonBase, _Component6);

  function FormFieldButtonBase() {
    (0, _classCallCheck3.default)(this, FormFieldButtonBase);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldButtonBase).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldButtonBase, [{
    key: 'render',
    value: function render() {
      var _props6 = this.props;
      var containerClassName = _props6.containerClassName;
      var containerStyle = _props6.containerStyle;
      var formFieldId = _props6.formFieldId;
      var id = _props6.id;
      var inline = _props6.inline;

      var content = _react2.default.createElement(_button.Button, (0, _extends3.default)({}, this.props, { id: (0, _isBlank2.default)(formFieldId) ? id : formFieldId + 'Button' }));

      if (inline) {
        var containerClassNames = (0, _classnames2.default)(containerClassName, cxStyles('input-group-button'));

        return _react2.default.createElement(
          'div',
          { className: containerClassNames, style: containerStyle },
          content
        );
      }

      return content;
    }
  }]);
  return FormFieldButtonBase;
}(_react.Component);

FormFieldButtonBase.propTypes = {
  containerClassName: _react.PropTypes.string,
  containerStyle: _react.PropTypes.object,
  formFieldId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  inline: _react.PropTypes.bool
};

var ColumnWrapper = function (_Component7) {
  (0, _inherits3.default)(ColumnWrapper, _Component7);

  function ColumnWrapper() {
    (0, _classCallCheck3.default)(this, ColumnWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ColumnWrapper).apply(this, arguments));
  }

  (0, _createClass3.default)(ColumnWrapper, [{
    key: 'render',
    value: function render() {
      var _props7 = this.props;
      var column = _props7.column;
      var columnClassName = _props7.columnClassName;
      var columnStyle = _props7.columnStyle;
      var ComponentClass = _props7.componentClass;


      var content = _react2.default.createElement(ComponentClass, this.props);

      if (column) {
        return _react2.default.createElement(
          _grid.Column,
          (0, _extends3.default)({}, this.props, {
            className: columnClassName,
            style: columnStyle,
            componentClass: null,
            id: null,
            type: null
          }),
          content
        );
      }

      return content;
    }
  }]);
  return ColumnWrapper;
}(_react.Component);

ColumnWrapper.propTypes = {
  column: _react.PropTypes.bool,
  columnClassName: _react.PropTypes.string,
  columnStyle: _react.PropTypes.object,
  componentClass: _elementType2.default
};
ColumnWrapper.defaultProps = {
  componentClass: 'span'
};

var FormFieldInput = exports.FormFieldInput = function (_Component8) {
  (0, _inherits3.default)(FormFieldInput, _Component8);

  function FormFieldInput() {
    (0, _classCallCheck3.default)(this, FormFieldInput);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldInput).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, this.props, { componentClass: FormFieldInputBase }));
    }
  }]);
  return FormFieldInput;
}(_react.Component);

var FormFieldLabel = exports.FormFieldLabel = function (_Component9) {
  (0, _inherits3.default)(FormFieldLabel, _Component9);

  function FormFieldLabel() {
    (0, _classCallCheck3.default)(this, FormFieldLabel);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldLabel).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldLabel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, this.props, { componentClass: FormFieldLabelBase }));
    }
  }]);
  return FormFieldLabel;
}(_react.Component);

var FormFieldError = exports.FormFieldError = function (_Component10) {
  (0, _inherits3.default)(FormFieldError, _Component10);

  function FormFieldError() {
    (0, _classCallCheck3.default)(this, FormFieldError);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldError).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldError, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, this.props, { componentClass: FormFieldErrorBase }));
    }
  }]);
  return FormFieldError;
}(_react.Component);

var FormFieldHelp = exports.FormFieldHelp = function (_Component11) {
  (0, _inherits3.default)(FormFieldHelp, _Component11);

  function FormFieldHelp() {
    (0, _classCallCheck3.default)(this, FormFieldHelp);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldHelp).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldHelp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, this.props, { componentClass: FormFieldHelpBase }));
    }
  }]);
  return FormFieldHelp;
}(_react.Component);

var FormFieldInline = exports.FormFieldInline = function (_Component12) {
  (0, _inherits3.default)(FormFieldInline, _Component12);

  function FormFieldInline() {
    (0, _classCallCheck3.default)(this, FormFieldInline);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldInline).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldInline, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, this.props, { componentClass: FormFieldInlineBase }));
    }
  }]);
  return FormFieldInline;
}(_react.Component);

var FormFieldButton = exports.FormFieldButton = function (_Component13) {
  (0, _inherits3.default)(FormFieldButton, _Component13);

  function FormFieldButton() {
    (0, _classCallCheck3.default)(this, FormFieldButton);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormFieldButton).apply(this, arguments));
  }

  (0, _createClass3.default)(FormFieldButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(ColumnWrapper, (0, _extends3.default)({}, this.props, { componentClass: FormFieldButtonBase }));
    }
  }]);
  return FormFieldButton;
}(_react.Component);

var FormField = exports.FormField = function (_Component14) {
  (0, _inherits3.default)(FormField, _Component14);

  function FormField() {
    (0, _classCallCheck3.default)(this, FormField);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormField).apply(this, arguments));
  }

  (0, _createClass3.default)(FormField, [{
    key: 'render',
    value: function render() {
      var _props8 = this.props;
      var children = _props8.children;
      var className = _props8.className;
      var error = _props8.error;
      var id = _props8.id;
      var grid = _props8.grid;

      var ComponentClass = grid ? _grid.Row : 'div';
      var classNames = (0, _classnames2.default)(className, cxStyles('form-field'));
      var newChildren = _react.Children.map(children, function (child) {
        if ((0, _react.isValidElement)(child)) {
          return (0, _react.cloneElement)(child, {
            error: error,
            formFieldId: id,
            column: grid
          });
        }

        return child;
      });

      return _react2.default.createElement(
        ComponentClass,
        (0, _extends3.default)({}, this.props, {
          className: classNames,
          id: (0, _isBlank2.default)(id) ? null : id + 'Container'
        }),
        newChildren
      );
    }
  }]);
  return FormField;
}(_react.Component);

FormField.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  error: _react.PropTypes.bool,
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  grid: _react.PropTypes.bool
};


FormField.Input = FormFieldInput;
FormField.Label = FormFieldLabel;
FormField.Help = FormFieldHelp;
FormField.Error = FormFieldError;
FormField.Inline = FormFieldInline;
FormField.Button = FormFieldButton;

exports.default = FormField;