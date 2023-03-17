import {db} from "./firebaseConnection"



import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  where,
  query,
  orderBy,
  limit,
} from "firebase/firestore";


class DataService {
  addDoc = (colecao, newDoc) => {
    return addDoc(collection(db, colecao), newDoc);
  };

  setDoc = (colecao, newDoc, id) => {
    return setDoc(doc(db, colecao, id), newDoc);
  };

  updateDoc = (colecao, id, updatedDoc) => {
    const dataDoc = doc(db, colecao, id);
    return updateDoc(dataDoc, updatedDoc);
  };

  deleteDoc = (colecao, id) => {
    const dataDoc = doc(db, colecao, id);
    return deleteDoc(dataDoc);
  };

  getAllDocs = (colecao, ordemPor ='', ascDesc ='') => {
    const dataCollectionRef = collection(db, colecao);

    if(ordemPor !=='' && ascDesc !=='')
    {
      return getDocs( query(dataCollectionRef, orderBy(ordemPor, ascDesc)))
    }
    else{
      return getDocs(dataCollectionRef);
    }
  };


  getDocsLimit = (colecao, ordemPor ='', ascDesc ='', limitNum = 0) => {
    const dataCollectionRef = collection(db, colecao);

    const queryConstraints = [];

    if (ordemPor !=''){
      queryConstraints.push(orderBy(ordemPor, ascDesc))
    }

    if (limitNum != 0){
      queryConstraints.push(limit(limitNum))
    }

    let snapshot =  getDocs( query(dataCollectionRef, ...queryConstraints))

    return snapshot;
    
  };

  getDocsFilter = (colecao, campo, operador, valor, ordemPor, ascDesc, limitNum = 0) => {
    const dataCollectionRef = collection(db, colecao);
    let snapshot ;
    if (limitNum === 0){
      snapshot = getDocs( query(dataCollectionRef, where(campo, operador, valor), orderBy(ordemPor, ascDesc)))
    }else{
      snapshot = getDocs( query(dataCollectionRef, where(campo, operador, valor), orderBy(ordemPor, ascDesc), limit(limitNum)))
    }
    return snapshot;
  };

  getDocsManyFilter = (colecao, arrayWhere, ordemPor, ascDesc, limitNum = 0) => {
    //os campos dos objetos em arrayWhere são
      //campo
      //operador
      //valor

    const queryConstraints = [];

    arrayWhere.forEach(function (arrayItem) {
      queryConstraints.push(where(arrayItem.campo, arrayItem.operador, arrayItem.valor))
    });

    if (ordemPor !=''){
      queryConstraints.push(orderBy(ordemPor, ascDesc))
    }

    if (limitNum != 0){
      queryConstraints.push(limit(limitNum))
    }

    const dataCollectionRef = collection(db, colecao);
    let snapshot =  getDocs( query(dataCollectionRef, ...queryConstraints))

    return snapshot;
  };

 
  getDoc = (colecao, id) => {
    const dataDoc = doc(db, colecao, id);
    return getDoc(dataDoc);
  };
}

export default new DataService();