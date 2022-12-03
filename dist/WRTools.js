"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _WILLOK = _interopRequireDefault(require("../assets/WILLOK.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var WRTools = function WRTools(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divContainer
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    style: styles.toolsH3
  }, "Tools"), /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divTools
  }, props.react && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "React")), props.javascript && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://pcodinomebzero.neocities.org/Imagens/javascript1.png",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Javascript")), props.css && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://logospng.org/download/css-3/logo-css-3-2048.png",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "CSS")), props.bootstrap && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Bootstrap")), props.solidity && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://solidity-portuguese.readthedocs.io/pt/latest/_images/logo.svg",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Solidity")), props.hardhat && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Hardhat")), props.alchemy && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/03/Alchemy-logo-blue-gradient.png",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Alchemy")), props.infura && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/blkhxycyoyj4zk4trcjo",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Infura")), props.ethersjs && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Ethers.js")), props.truffle && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://seeklogo.com/images/T/truffle-logo-2DC7EBABF2-seeklogo.com.png",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Truffle")), props.ganache && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Ganache")), props.drizzle && /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://seeklogo.com/images/D/drizzle-logo-7D6FE5DB33-seeklogo.com.png",
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Drizzle")), /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.divCardTool
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _WILLOK["default"],
    style: styles.imgm
  }), /*#__PURE__*/_react["default"].createElement("p", {
    style: styles.smallfont
  }, "WR Components"))));
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
    marginBottom: "20px",
    boxShadow: "rgba(0, 0, 0, .5) 6px 6px 12px 0px"
  },
  toolsH3: {
    color: "#000",
    fontFamily: "'Courier New', Courier, monospace",
    textAlign: "center",
    width: "100%"
  },
  imgm: {
    width: "60px",
    height: "60px"
  },
  smallfont: {
    fontSize: "0.7em"
  },
  divTools: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "15px"
  },
  divCardTool: {
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "7px",
    width: "83px",
    height: "83px",
    margin: "0px 10px"
  }
};
var _default = WRTools;
exports["default"] = _default;