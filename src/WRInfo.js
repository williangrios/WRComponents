import React, { useState, useEffect } from "react";
import dataServices from "./services/dataServices";
import { returnRegistersFromSnapshot } from "./services/dataReturn";

const WRInfo = (props) => {

    const [keysList, setKeysList] = useState([]);

    useEffect( () => {

        async function getPrivateKeys(){
          let snapshotKeys = await dataServices.getAllDocs('privateKeys', 'isKey', 'desc');  
          let keysToTable = returnRegistersFromSnapshot(snapshotKeys, 'privateKeys');
          setKeysList(keysToTable);
        }
  
        getPrivateKeys()
        
      }, [])

    return(

    <div style={styles.divContainer}>
        <div style={styles.divContainerCenter}>
            <h3 style={styles.toolsH3}>Infos</h3>
        </div>

        {(props.chain) &&
            <p style={styles.paragrafo}>Chain: {props.chain} //  <a target="_blank" href={`https://chainlist.org/?search=${props.chain}&testnets=${props.testnet}`}>Click here to add</a></p> 
        }
        {props.contract &&
            <p style={styles.paragrafo}>Contract: {props.contract}</p>
        } 

        {keysList.map((item) => { 
            return(
            <p key={item.key} style={styles.paragrafo}>{item.key}</p>)
        })}
        
        {props.obs &&
            <p style={styles.paragrafo}>Obs: {props.obs}</p>
        }
    </div>    
)};

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
