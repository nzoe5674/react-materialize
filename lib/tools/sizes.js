"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizesClass = sizesClass;

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sizesClass(defaults, sizes) {
  return _constants.default.SIZES.reduce(function (acc, current) {
    if (typeof sizes[current] !== 'undefined') {
      acc["".concat(current).concat(sizes[current])] = true;
    }

    return acc;
  }, defaults);
}