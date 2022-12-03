import React from "react";

const defaultPrivateKey="3asjdfijasdoifjaods";

const WRInfo = (props) => (
    <div style={styles.divContainer}>
        <div style={styles.divContainerCenter}>
            <h3 style={styles.toolsH3}>Infos</h3>
        </div>

        {props.chain &&
            <p style={styles.paragrafo}>Chain: {props.chain}</p>
        }
        {props.privateKey == "default" ?
            <p style={styles.paragrafo}>Private Key (to test): {defaultPrivateKey} - please, dont get my fake coins :(</p>
            : 
            <p style={styles.paragrafo}>Private Key (to test): {props.privateKey} - please, dont get my fake coins :(</p>
        }
        {props.contract &&
            <p style={styles.paragrafo}>Contract: {props.contract}</p>
        }
        {props.obs &&
            <p style={styles.paragrafo}>Obs: {props.obs}</p>
        }
    </div>    
);

const styles = {

    divContainer: {
        backgroundColor: "#cfcfcf",
        maxWidth: "1200px",
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        borderRadius: "7px",
        marginTop: "20px",
        alignItems: "start",
        justifyContent: "flex-start",
        marginBottom: "20px",
        boxShadow: "rgba(0, 0, 0, .5) 6px 6px 12px 0px",
    },

    divContainerCenter: {
        display: "flex",
        width: "100%",
        margin: "auto",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },


    toolsH3: {
        color: "#000",
        fontFamily: "'Courier New', Courier, monospace"
    },

    paragrafo: {
        fontFamily: "'Courier New', Courier, monospace",
        marginLeft: "20px"
    }
};

export default WRInfo;
