import React from "react";
import logo from '../assets/logo.png';


const WRHeader = ({props}) => {
    return(
        <header style={styles.header} >
            {props.image &&  (
                <img src={logo} style={styles.logo}/>
            )}
            <h2 style={styles.headerH2}>{props.title}</h2>
        </header>
    )
};

const styles = {

    header: {
        marginTop: "5px",
        paddingTop: "20px",
        maxWidth: "1200px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, .5) 6px 6px 12px 0px",
        borderRadius: "5px",
        justifyContent: "space-around",
        backgroundColor: "#b90b0b",
        alignItems: "center",
        padding: "0.55m 2em"
    },

    headerH2: {
        color: "#fff",
        fontFamily: "'Courier New', Courier, monospace"
    },

    logo: {
        fontSize: "1.2em",
        padding: "15px",
        maxWidth: "100px"
    }
}

export default WRHeader;