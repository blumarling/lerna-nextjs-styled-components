"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledHW = _styledComponents.default.div.withConfig({
  displayName: "HelloWorld__StyledHW",
  componentId: "b2jn2a-0"
})(["\n  display: block;\n  background-color:#000;\n  color:#fff\n"]);

var _default = function _default() {
  return _react.default.createElement(StyledHW, null, "Hello World!!!");
};

exports.default = _default;