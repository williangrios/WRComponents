"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var defaultPrivateKey = "3asjdfijasdoifjaods";
var WRInfo = function WRInfo(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divContainerCenter
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    style: styles.toolsH3
  }, "Infos")), props.chain && /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, "Chain: ", props.chain), props.privateKey == "default" ? /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, "Private Key (to test): ", defaultPrivateKey, " - please, dont get my fake coins :(") : /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, "Private Key (to test): ", props.privateKey, " - please, dont get my fake coins :("), props.contract && /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, "Contract: ", props.contract), props.obs && /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, "Obs: ", props.obs));
};
var styles = {
  divContainer: {
    backgroundColor: "#cfcfcf",
    maxWidth: "1200px",
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    borderRadius: "7px",
    marginTop: "20px",
    alignItems: "start",
    justifyContent: "flex-start",
    marginBottom: "20px",
    boxShadow: "rgba(0, 0, 0, .5) 6px 6px 12px 0px"
  },
  divContainerCenter: {
    display: "flex",
    width: "100%",
    margin: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  toolsH3: {
    color: "#000",
    fontFamily: "'Courier New', Courier, monospace"
  },
  paragrafo: {
    fontFamily: "'Courier New', Courier, monospace",
    marginLeft: "20px"
  }
};
var _default = WRInfo;
exports["default"] = _default;