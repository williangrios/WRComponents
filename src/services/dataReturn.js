import { returnKeyByDoc } from "./keys";
import { returnProjectByDoc } from "./projects";

export function returnRegistersFromSnapshot(snapshot, object){
    let data =[];
    
    const isCollectionEmpty = snapshot.size === 0
    if (!isCollectionEmpty){
        snapshot.forEach((doc) => {
            if(object === 'projects'){
                data.push(returnProjectByDoc(doc))
            }
            if(object === 'privateKeys'){
                data.push(returnKeyByDoc(doc))
            }
        })
        return data;
    } else {
        return null;
    }
}