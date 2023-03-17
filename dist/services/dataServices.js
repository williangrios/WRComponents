"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _firebaseConnection = require("./firebaseConnection");
var _firestore = require("firebase/firestore");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DataService = /*#__PURE__*/_createClass(function DataService() {
  _classCallCheck(this, DataService);
  _defineProperty(this, "getAllDocs", function (colecao) {
    var ordemPor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var ascDesc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var dataCollectionRef = (0, _firestore.collection)(_firebaseConnection.db, colecao);
    if (ordemPor !== '' && ascDesc !== '') {
      return (0, _firestore.getDocs)((0, _firestore.query)(dataCollectionRef, (0, _firestore.orderBy)(ordemPor, ascDesc)));
    } else {
      return (0, _firestore.getDocs)(dataCollectionRef);
    }
  });
  _defineProperty(this, "getDocsLimit", function (colecao) {
    var ordemPor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var ascDesc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var limitNum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var dataCollectionRef = (0, _firestore.collection)(_firebaseConnection.db, colecao);
    var queryConstraints = [];
    if (ordemPor != '') {
      queryConstraints.push((0, _firestore.orderBy)(ordemPor, ascDesc));
    }
    if (limitNum != 0) {
      queryConstraints.push((0, _firestore.limit)(limitNum));
    }
    var snapshot = (0, _firestore.getDocs)(_firestore.query.apply(void 0, [dataCollectionRef].concat(queryConstraints)));
    return snapshot;
  });
  _defineProperty(this, "getDocsFilter", function (colecao, campo, operador, valor, ordemPor, ascDesc) {
    var limitNum = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var dataCollectionRef = (0, _firestore.collection)(_firebaseConnection.db, colecao);
    var snapshot;
    if (limitNum === 0) {
      snapshot = (0, _firestore.getDocs)((0, _firestore.query)(dataCollectionRef, (0, _firestore.where)(campo, operador, valor), (0, _firestore.orderBy)(ordemPor, ascDesc)));
    } else {
      snapshot = (0, _firestore.getDocs)((0, _firestore.query)(dataCollectionRef, (0, _firestore.where)(campo, operador, valor), (0, _firestore.orderBy)(ordemPor, ascDesc), (0, _firestore.limit)(limitNum)));
    }
    return snapshot;
  });
  _defineProperty(this, "getDoc", function (colecao, id) {
    var dataDoc = (0, _firestore.doc)(_firebaseConnection.db, colecao, id);
    return (0, _firestore.getDoc)(dataDoc);
  });
});
var _default = new DataService();
exports["default"] = _default;