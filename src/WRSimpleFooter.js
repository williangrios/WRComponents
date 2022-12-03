import React from "react";
import logo from '../assets/logo.png';


const WRSimpleFooter = (props) => {
    return (
      <footer style={styles.footer}>
        
          <div style={styles.wrdata}>
              {props.image &&  (
                <img src={logo} style={styles.logo}/>
              )}
              <p style={styles.paragrafo}>{props.text}</p>
          </div>
          
      </footer>
    )
  };

  const styles = {

    logo: {
        fontSize: "1.2em",
        padding: "15px",
        maxWidth: "30px",
        maxHeight: "30px"
    },

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
        marginBottom: "20px",
        marginTop: "20px",
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

  export default WRSimpleFooter;