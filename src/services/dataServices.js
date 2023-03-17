import {db} from "./firebaseConnection"

import {
  collection,
  getDocs,
  getDoc,
  doc,
  where,
  query,
  orderBy,
  limit,
} from "firebase/firestore";


class DataService {

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

  getDoc = (colecao, id) => {
    const dataDoc = doc(db, colecao, id);
    return getDoc(dataDoc);
  };
}

export default new DataService();