import React from "react";
import photo from "../assets/WILLOK.png";
import github from "../assets/github.png";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import site from "../assets/site.png";
import dataServices from "./services/dataServices";
import { returnRegistersFromSnapshot } from "./services/dataReturn";
import { useEffect, useState } from "react";
import star1 from '../assets/star1.png';
import star2 from '../assets/star2.png';
import star3 from '../assets/star3.png';
import star4 from '../assets/star4.png';

const WRFooter = () => {

    const [projectsList, setProjectsList] = useState([]);

    useEffect( () => {

      async function getProjects(){
        let snapshotProjects = await dataServices.getAllDocs('projects', 'projectId', 'desc');
        let projectsToTable = returnRegistersFromSnapshot(snapshotProjects, 'projects');
        setProjectsList(projectsToTable);
      }

      getProjects()
      
    }, [])
    

    return (
      <footer style={styles.footer}>
          <div style={styles.wrdata}>
              <img  src={photo} style={styles.photo}/>
              <p style={styles.paragrafo}>Willian Rios - Web3 Developer</p>
              <div style={styles.medias}>
                <a href='https://www.linkedin.com/in/solidity-developer/' target={'_blank'}><img src={linkedin} style={styles.imgLinks} /> </a>
                <a href='https://github.com/williangrios/' target={'_blank'}><img src={github} style={styles.imgLinks} /></a>
                <a href='https://twitter.com/willian_btc' target={'_blank'}><img src={twitter} style={styles.imgLinks} /></a>
                <a href='https://api.whatsapp.com/send?phone=5537988083717&text=Hi' target={'_blank'}><img src={whatsapp} style={styles.imgLinks} /></a>
                <a href='https://wrsolucoesdigitais.com.br' target={'_blank'}><img src={site} style={styles.imgLinks} /></a>
              </div>
          </div>
          {projectsList.map((item) => { 
            let stars;
            if (item.projectStars == 1){
              stars = star1;
            }else if (item.projectStars == 2){
              stars = star2;
            }else if (item.projectStars == 3){
              stars = star3;
            }else if (item.projectStars == 4){
              stars = star4;
            }
            
            return(
                <p key={item.projectId} style={styles.paragrafo}>{item.projectId} - {item.projectName} / <img style={styles.estrelas} src={stars} /> / <a href={item.projectSite} target="_blank"> LINK </a> </p>)
              })}
          
      </footer>
    )
  };

  const styles = {

    footer: {
        marginTop: "5px",
        marginBottom: "20px",
        maxWidth: "1200px",
        margin: "auto",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, .5) 6px 6px 12px 0px",
        borderRadius: "5px",
        justifyContent: "space-between",
        backgroundColor: "#b90b0b",
        alignItems: "center",
        padding: "0.55m 2em",
        flexDirection: "column"
      },

      photo: {
        marginTop: "20px",
        width: "90px",
        height: "90px",
        borderRadius: "50%"
      },

      imgLinks: {
        width: "40px",
        height: "40px",
        marginLeft: "8px",
        borderRadius: "7px"
      },

    wrdata: {
        marginBottom: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    medias: {
      display: "flex",
      flexDirection: "row",
      borderLeft: "10px",
      alignItems: "center"
    },

    estrelas: {
      height: "15px"
    },

    paragrafo: {
        color: "white",
        fontFamily: "'Courier New', Courier, monospace"
    },

    projs: {
      display: "flex",
      flexDirection: "row"
    }

}

  export default WRFooter;