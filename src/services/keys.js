export function returnKeyByDoc(doc){

    let key = {
            key: doc.data().key,
            isKey: doc.data().isKey,
    }

    return key
}