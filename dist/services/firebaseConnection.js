"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.db = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyCnybq0trzA9sdTp165kntOY2ZrsoUoo4Q",
  authDomain: "web3projects-8427e.firebaseapp.com",
  projectId: "web3projects-8427e",
  storageBucket: "web3projects-8427e.appspot.com",
  messagingSenderId: "448536463378",
  appId: "1:448536463378:web:4372abcb3b09364dbfb0cb"
};
var app = (0, _app.initializeApp)(firebaseConfig);
var db = (0, _firestore.getFirestore)(app);
exports.db = db;
var _default = app;
exports["default"] = _default;