"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _WILLOK = _interopRequireDefault(require("../assets/WILLOK.png"));
var _github = _interopRequireDefault(require("../assets/github.png"));
var _whatsapp = _interopRequireDefault(require("../assets/whatsapp.png"));
var _linkedin = _interopRequireDefault(require("../assets/linkedin.png"));
var _twitter = _interopRequireDefault(require("../assets/twitter.png"));
var _site = _interopRequireDefault(require("../assets/site.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var WRFooter = function WRFooter() {
  return /*#__PURE__*/_react["default"].createElement("footer", {
    style: styles.footer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.wrdata
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _WILLOK["default"],
    style: styles.photo
  }), /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, "Willian Rios - Web3 Developer"), /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.medias
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.linkedin.com/in/solidity-developer/",
    target: '_blank'
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _linkedin["default"],
    style: styles.imgLinks
  }), " "), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://github.com/williangrios/",
    target: '_blank'
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _github["default"],
    style: styles.imgLinks
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://twitter.com/willian_btc",
    target: '_blank'
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _twitter["default"],
    style: styles.imgLinks
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://api.whatsapp.com/send?phone=5537988083717&text=Hi",
    target: '_blank'
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _whatsapp["default"],
    style: styles.imgLinks
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://wrsolucoesdigitais.com.br",
    target: '_blank'
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _site["default"],
    style: styles.imgLinks
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.wrdata
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, "Web3 Projects"), /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, "Project 1: ToDo DApp"), /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, "Project 2:"), /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.paragrafo
  }, "Project 3:")));
};
var styles = {
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
var _default = WRFooter;
exports["default"] = _default;