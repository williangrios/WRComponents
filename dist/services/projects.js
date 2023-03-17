"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returnProjectByDoc = returnProjectByDoc;
function returnProjectByDoc(doc) {
  var proj = {
    projectId: doc.data().projectId,
    projectName: doc.data().projectName,
    projectSite: doc.data().projectSite,
    //projectStars: "gs://web3projects-8427e.appspot.com/star" + doc.data().projectStars + ".png"
    projectStars: doc.data().projectStars
  };
  return proj;
}