'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearFix = exports.Float = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _constants = require('../../util/constants');

var _createWrapperComponent = require('../util/create-wrapper-component');

var _createWrapperComponent2 = _interopRequireDefault(_createWrapperComponent);

var _styles = {};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Float = exports.Float = (0, _createWrapperComponent2.default)({
  displayName: 'Float',
  styles: _styles2.default,
  propTypes: {
    position: _react.PropTypes.oneOf(_constants.FLOAT_POSITIONS).isRequired
  },
  mapPropsToClassNames: function mapPropsToClassNames(_ref) {
    var position = _ref.position;
    return (0, _defineProperty3.default)({}, 'float-' + position, (0, _includes2.default)(_constants.FLOAT_POSITIONS, position));
  },
  defaultComponentClass: 'div'
});

var ClearFix = exports.ClearFix = (0, _createWrapperComponent2.default)({
  displayName: 'ClearFix',
  styles: _styles2.default,
  mapPropsToClassNames: function mapPropsToClassNames() {
    return 'clearfix';
  },
  defaultComponentClass: 'div'
});

Float.ClearFix = ClearFix;

exports.default = Float;