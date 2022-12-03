import React from "react";
import photo from "../assets/WILLOK.png";
import github from "../assets/github.png";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import site from "../assets/site.png";


const WRFooter = () => {
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
  
          <div style={styles.wrdata}>
              <p style={styles.paragrafo}>Web3 Projects</p>
              <p style={styles.paragrafo}>Project 1: ToDo DApp</p>
              <p style={styles.paragrafo}>Project 2:</p>
              <p style={styles.paragrafo}>Project 3:</p>
          </div>
          
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

    paragrafo: {
        color: "white",
        fontFamily: "'Courier New', Courier, monospace"
    }

}

  export default WRFooter;