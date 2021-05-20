import React, {useState} from "react"

const Person = ({name,lastName,age}) => {

    return(
        <div style={{border:'1px solid red'}}>
            {name} {lastName} {age}
        </div>
    )
};

export default Person