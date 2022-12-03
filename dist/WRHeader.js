"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _logo = _interopRequireDefault(require("../assets/logo.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var WRHeader = function WRHeader(props) {
  return /*#__PURE__*/_react["default"].createElement("header", {
    style: styles.header
  }, props.image && /*#__PURE__*/_react["default"].createElement("img", {
    src: _logo["default"],
    style: styles.logo
  }), /*#__PURE__*/_react["default"].createElement("h2", {
    style: styles.headerH2
  }, props.title));
};
var styles = {
  header: {
    marginTop: "5px",
    paddingTop: "20px",
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    boxShadow: "rgba(0, 0, 0, .5) 6px 6px 12px 0px",
    borderRadius: "5px",
    justifyContent: "space-around",
    backgroundColor: "#b90b0b",
    alignItems: "center",
    padding: "0.55m 2em"
  },
  headerH2: {
    color: "#fff",
    fontFamily: "'Courier New', Courier, monospace"
  },
  logo: {
    fontSize: "1.2em",
    padding: "15px",
    maxWidth: "100px"
  }
};
var _default = WRHeader;
exports["default"] = _default;