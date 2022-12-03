import React from "react";

const WRContent = ({children}) => {
    return(
        <div style={styles.divMain}>
            {children}
        </div>
    )
};

const styles = {

    divMain: {
        display: "flex",
        maxWidth: "1200px",
        minHeight: "400px",
        paddingTop: "20px",
        paddingBottom: "20px",
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
}

export default WRContent;