"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _sizes = require("./tools/sizes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var extendClassname = function extendClassname(base, classes, namespace) {
  return namespace.split(' ').reduce(function (acc, current) {
    acc["".concat(base, "-").concat(current)] = true;
    return acc;
  }, classes);
};

var Col = function Col(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$node = _ref.node,
      C = _ref$node === void 0 ? 'div' : _ref$node,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      xl = _ref.xl,
      offset = _ref.offset,
      push = _ref.push,
      pull = _ref.pull,
      other = _objectWithoutProperties(_ref, ["children", "className", "node", "s", "m", "l", "xl", "offset", "push", "pull"]);

  var sizes = {
    s: s,
    m: m,
    l: l,
    xl: xl
  };
  var classes = (0, _sizes.sizesClass)({
    col: true
  }, sizes);

  if (typeof offset !== 'undefined') {
    classes = extendClassname('offset', classes, offset);
  }

  if (typeof push !== 'undefined') {
    classes = extendClassname('push', classes, push);
  }

  if (typeof pull !== 'undefined') {
    classes = extendClassname('pull', classes, pull);
  }

  return /*#__PURE__*/_react.default.createElement(C, _extends({}, other, {
    className: (0, _classnames.default)(classes, className)
  }), children);
};

Col.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Columns for extra large size screens (Large Desktop Devices > 1200px)
   */
  xl: _propTypes.default.number,

  /**
   * Columns for large size screens (Desktop Devices > 992px)
   */
  l: _propTypes.default.number,

  /**
   * Columns for middle size screens (Tablet Devices > 600px)
   */
  m: _propTypes.default.number,

  /**
   * Columns for small size screens (Mobile Devices <= 600px)
   */
  s: _propTypes.default.number,

  /**
   * The node to be used for the column
   * @default div
   */
  node: _propTypes.default.node,

  /**
   * To offset/push/pull, simply add s2 to the class where s signifies the screen
   * class-prefix (s = mobile devices, m = tablet devices, l = desktop devices, xl= large desktop devices) and the number after
   * is the number of columns you want to offset/push/pull by.
   */
  offset: _propTypes.default.string,
  push: _propTypes.default.string,
  pull: _propTypes.default.string
};
var _default = Col;
exports.default = _default;