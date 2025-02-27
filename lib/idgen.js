"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetID = resetID;
exports.default = idgen;

var _uuid = require("uuid");

// let id = 0;
// export function resetID() {
//   id = 0;
// }
// export default function idgen() {
//   const oldId = id;
//   id += 1;
//   return oldId;
// }
// Import the UUID v4 function
// Reset function is no longer needed, as UUIDs are unique per call
function resetID() {} // UUID doesn't need resetting, but this can be kept for future adjustments if needed
// Generate and return a unique UUID each time


function idgen() {
  return (0, _uuid.v4)(); // Generate and return a unique UUID
}