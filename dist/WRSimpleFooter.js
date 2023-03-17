"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _logo = _interopRequireDefault(require("../assets/logo.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    marginBottom: "20px",
    marginTop: "20px",
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