"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetID = resetID;
exports.default = idgen;

var _uuid = require("uuid");

function resetID() {}

function idgen() {
  return (0, _uuid.v4)();
}