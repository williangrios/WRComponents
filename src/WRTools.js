import React from "react";
import photo from "../assets/WILLOK.png";
import ipfs from "../assets/ipfslogo.svg";

const WRTools = (props) => (
    <div style={styles.divContainer}>
        <h3 style={styles.toolsH3}>Tools</h3>
        <div style={styles.divTools}>
            {props.react &&
                <div style={styles.divCardTool}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" style={styles.imgm}/>
                    <p>React</p>
                </div>
            }
            {props.javascript &&
                <div style={styles.divCardTool}>
                    <img src="https://pcodinomebzero.neocities.org/Imagens/javascript1.png" style={styles.imgm}/>
                    <p>Javascript</p>
                </div>
            }
            {props.typescript &&
                <div style={styles.divCardTool}>
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919832.png" style={styles.imgm}/>
                    <p>Typescript</p>
                </div>
            }
            {props.css &&
                <div style={styles.divCardTool}>
                    <img src="https://logospng.org/download/css-3/logo-css-3-2048.png" style={styles.imgm}/>
                    <p>CSS</p>
                </div>
            }
            {props.bootstrap &&
                <div style={styles.divCardTool}>
                    <img src="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png" style={styles.imgm}/>
                    <p>Bootstrap</p>
                </div>
            }
            {props.solidity &&
                <div style={styles.divCardTool}>
                    <img src="https://solidity-portuguese.readthedocs.io/pt/latest/_images/logo.svg" style={styles.imgm}/>
                    <p>Solidity</p>
                </div>
            }
            {props.hardhat &&
                <div style={styles.divCardTool}>
                    <img src="https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png" style={styles.imgm}/>
                    <p>Hardhat</p>
                </div>
            }
            {props.alchemy &&
                <div style={styles.divCardTool}>
                    <img src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/03/Alchemy-logo-blue-gradient.png" style={styles.imgm}/>
                    <p>Alchemy</p>
                </div>
            }
            {props.infura &&
                <div style={styles.divCardTool}>
                    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/blkhxycyoyj4zk4trcjo" style={styles.imgm}/>
                    <p>Infura</p>
                </div>
            }
            {props.ethersjs &&
                <div style={styles.divCardTool}>
                    <img src="https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png" style={styles.imgm}/>
                    <p>Ethers.js</p>
                </div>
            }

            {props.truffle &&
                <div style={styles.divCardTool}>
                    <img src="https://seeklogo.com/images/T/truffle-logo-2DC7EBABF2-seeklogo.com.png" style={styles.imgm}/>
                    <p>Truffle</p>
                </div>        
            }
            {props.ganache &&
                <div style={styles.divCardTool}>
                    <img src="https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png" style={styles.imgm}/>
                    <p>Ganache</p>
                </div>
            }
            {props.drizzle &&
                <div style={styles.divCardTool}>
                    <img src="https://seeklogo.com/images/D/drizzle-logo-7D6FE5DB33-seeklogo.com.png" style={styles.imgm}/>
                    <p>Drizzle</p>
                </div>
            }
            {props.ipfs &&
                <div style={styles.divCardTool}>
                    <img src={ipfs} style={styles.imgm}/>
                    <p>IPFS</p>
                </div>
            }

            <div style={styles.divCardTool}>
                <img src={photo} style={styles.imgm}/>
                <p style={styles.smallfont}>WR Components</p>
            </div>

        </div>
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
        marginBottom: "20px",
        boxShadow: "rgba(0, 0, 0, .5) 6px 6px 12px 0px",
    },

    toolsH3: {
        color: "#000",
        fontFamily: "'Courier New', Courier, monospace",
        textAlign: "center",
        width: "100%"
    },

    imgm: {
        width: "60px",
        height: "60px"
    },

    smallfont: {
        fontSize: "0.7em"
    },

    divTools: {
        padding: "20px",
        justifyContent: "center",
        justifyItems: "center",
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))"


        // display: "flex",
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        // width: "100%",
        // padding: "15px",
    },
    
    divCardTool: {
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "7px",
        width: "83px",
        height: "83px",
        margin: "0px 10px"
    }
};

export default WRTools;
