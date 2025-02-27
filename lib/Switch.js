"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _idgen = _interopRequireDefault(require("./idgen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Switch = function Switch(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? "Switch-".concat((0, _idgen.default)()) : _ref$id,
      offLabel = _ref.offLabel,
      onLabel = _ref.onLabel,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      props = _objectWithoutProperties(_ref, ["id", "offLabel", "onLabel", "onChange"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "switch"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, offLabel, /*#__PURE__*/_react.default.createElement("input", _extends({
    id: id,
    type: "checkbox"
  }, props)), /*#__PURE__*/_react.default.createElement("span", {
    className: "lever"
  }), onLabel));
};

Switch.propTypes = {
  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,
  className: _propTypes.default.string,

  /**
   * label for off
   */
  offLabel: _propTypes.default.string.isRequired,

  /**
   * label for on
   */
  onLabel: _propTypes.default.string.isRequired,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * initialise checkbox checked
   */
  checked: _propTypes.default.bool
};
var _default = Switch;
exports.default = _default;