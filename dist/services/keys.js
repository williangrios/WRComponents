"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returnKeyByDoc = returnKeyByDoc;
function returnKeyByDoc(doc) {
  var key = {
    key: doc.data().key,
    isKey: doc.data().isKey
  };
  return key;
}