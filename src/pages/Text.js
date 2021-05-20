import React from "react"
import styles from "../assets/MainPage.module.css"


//jsx

const Text = (props) => {
    console.log(props);
    return(
        <div className={styles.text1}>
            <p>
            {props.text && (
                <>{props.text}</>
            )}
            </p>
            {props.price && (
                <>{props.price}</>
            )}
        </div>
    )
};

export default Text;