"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var WRContent = function WRContent(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divMain
  }, children);
};
var styles = {
  divMain: {
    display: "flex",
    maxWidth: "1200px",
    minHeight: "400px",
    paddingTop: "20px",
    paddingBottom: "20px",
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};
var _default = WRContent;
exports["default"] = _default;