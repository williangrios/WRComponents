export function returnProjectByDoc(doc){

    let proj = {
            projectId: doc.data().projectId,
            projectName: doc.data().projectName,
            projectSite: doc.data().projectSite,
            //projectStars: "gs://web3projects-8427e.appspot.com/star" + doc.data().projectStars + ".png"
            projectStars: doc.data().projectStars 
    }

    return proj   
}