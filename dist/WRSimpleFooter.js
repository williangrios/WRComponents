"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _logo = _interopRequireDefault(require("../assets/logo.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var WRSimpleFooter = function WRSimpleFooter(props) {
  return /*#__PURE__*/_react["default"].createElement("footer", {
    style: styles.footer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.wrdata
  }, props.image && /*#__PURE__*/_react["default"].createElement("img", {
    src: _logo["default"],
    style: styles.logo
  }), /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, props.text)));
};
var styles = {
  logo: {
    fontSize: "1.2em",
    padding: "15px",
    maxWidth: "30px",
    maxHeight: "30px"
  },
  footer: {
    marginTop: "5px",
    marginBottom: "20px",
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    boxShadow: "rgba(0, 0, 0, .5) 6px 6px 12px 0px",
    borderRadius: "5px",
    justifyContent: "space-between",
    backgroundColor: "#b90b0b",
    alignItems: "center",
    padding: "0.55m 2em",
    flexDirection: "column"
  },
  photo: {
    marginTop: "20px",
    width: "90px",
    height: "90px",
    borderRadius: "50%"
  },
  imgLinks: {
    width: "40px",
    height: "40px",
    marginLeft: "8px",
    borderRadius: "7px"
  },
  wrdata: {
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  medias: {
    display: "flex",
    flexDirection: "row",
    borderLeft: "10px",
    alignItems: "center"
  },
  paragrafo: {
    color: "white",
    fontFamily: "'Courier New', Courier, monospace"
  }
};
var _default = WRSimpleFooter;
exports["default"] = _default;