"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = ['blue', 'red', 'yellow', 'green'];

var Preloader = function Preloader(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? true : _ref$active,
      size = _ref.size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'blue' : _ref$color,
      _ref$flashing = _ref.flashing,
      flashing = _ref$flashing === void 0 ? false : _ref$flashing,
      className = _ref.className;
  var classes = (0, _classnames.default)('preloader-wrapper', {
    active: active
  }, size);
  var spinners;

  if (flashing) {
    spinners = colors.map(function (color) {
      return /*#__PURE__*/_react.default.createElement(_Spinner.default, {
        color: color,
        only: false,
        key: color
      });
    });
  } else {
    spinners = /*#__PURE__*/_react.default.createElement(_Spinner.default, {
      color: color
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, classes)
  }, spinners);
};

Preloader.propTypes = {
  className: _propTypes.default.string,

  /**
   * The scale of the circle
   * @default 'medium'
   */
  size: _propTypes.default.oneOf(['big', 'small', 'medium']),

  /**
   * Whether to spin
   * @default true
   */
  active: _propTypes.default.bool,

  /**
   * The color of the circle, if not flashing
   * @default 'blue'
   */
  color: _propTypes.default.oneOf(['blue', 'red', 'yellow', 'green']),

  /**
   * Wheter to circle four different colors
   * @default false
   */
  flashing: _propTypes.default.bool
};
var _default = Preloader;
exports.default = _default;