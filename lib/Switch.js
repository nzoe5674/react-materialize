"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _idgen = _interopRequireDefault(require("./idgen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Switch = function Switch(_ref) {
  var id = _ref.id,
      offLabel = _ref.offLabel,
      onLabel = _ref.onLabel,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["id", "offLabel", "onLabel", "onChange", "checked"]);

  var finalIdRef = (0, _react.useRef)(id || "Switch-".concat((0, _idgen.default)()));
  var finalId = finalIdRef.current;

  var handleChange = function handleChange(e) {
    // Uncomment the next line if you need to stop event propagation:
    // e.stopPropagation();
    // Pass the new checked state to the onChange handler
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "switch"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: finalId
  }, offLabel, /*#__PURE__*/_react.default.createElement("input", _extends({
    id: finalId,
    type: "checkbox",
    checked: checked,
    onChange: handleChange
  }, props)), /*#__PURE__*/_react.default.createElement("span", {
    className: "lever"
  }), onLabel));
};

Switch.propTypes = {
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  offLabel: _propTypes.default.string.isRequired,
  onLabel: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  checked: _propTypes.default.bool
};
var _default = Switch;
exports.default = _default;