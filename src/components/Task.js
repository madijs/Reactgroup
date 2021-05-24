import React from "react";
import styles from "../assets/MainPage.module.css";
import Button from "@material-ui/core/Button";

const Task = ({id,text,handleDeleteClicked,handleUpdateClicked}) => {



    return(
        <div className={styles.task}>
            {text}
            <Button
                onClick={()=>handleDeleteClicked(id)}
                variant="contained"
                color="secondary">
                DELETE
            </Button>
            <Button
                onClick={()=>handleUpdateClicked(id)}
                variant="contained"
                color="primary">
                UPDATE
            </Button>
        </div>
    )
};

export default Task;