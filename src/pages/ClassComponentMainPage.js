import React from "react"
import styles from "../assets/Class.module.css"
import styles2 from "../assets/MainPage.module.css"

//class component

class ClassComponentMainPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {
        let {title,action} = this.props;
        return(
            <div className={styles2.text}>
                <div>{this.state.value}</div>
                <button onClick={()=>{
                    this.setState({
                        value: this.state.value+1
                    })
                }}>Change in Class Component</button>
            </div>
        )
    }


}
export default ClassComponentMainPage;