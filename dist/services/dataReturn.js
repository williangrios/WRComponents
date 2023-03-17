"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returnRegistersFromSnapshot = returnRegistersFromSnapshot;
var _keys = require("./keys");
var _projects = require("./projects");
function returnRegistersFromSnapshot(snapshot, object) {
  var data = [];
  var isCollectionEmpty = snapshot.size === 0;
  if (!isCollectionEmpty) {
    snapshot.forEach(function (doc) {
      if (object === 'projects') {
        data.push((0, _projects.returnProjectByDoc)(doc));
      }
      if (object === 'privateKeys') {
        data.push((0, _keys.returnKeyByDoc)(doc));
      }
    });
    return data;
  } else {
    return null;
  }
}