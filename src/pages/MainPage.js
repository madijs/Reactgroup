import React,{useState} from 'react';
import styles from "../assets/MainPage.module.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Task from "../components/Task";


const MainPage = () => {

    const [state,setState] = useState([]);
    const [currentValue,setCurrentValue] = useState('');
    const [currentValue2,setCurrentValue2] = useState('');
    const [trigger,setTrigger] = useState(false);
    const [idOfUpdatedElement,setId] = useState('');

    //CRUD - CREATE READ UPDATE DELETE

    const handleAddClicked = () => {
        const copy = [...state];
        copy.push({
            id: state.length > 0 ? state[state.length-1].id+1 : 1,
            text: currentValue
        });
        setState(copy);
        setCurrentValue('');
    };

    const handleDeleteClicked = (id) => {
        const newArr = state.filter(item => item.id !==id);
        setState(newArr);
    };

    const handleUpdateClicked = (id) => {
        let updateElement = '';
        for (let i=0;i<state.length;i++){
            if (id === state[i].id){
                updateElement = state[i].text
            }
        }
        setTrigger(true);
        setCurrentValue(updateElement);
        setId(id)
    };

    const update = () => {
        const copy = [...state];
        for (let i=0;i<state.length;i++){
            if (idOfUpdatedElement === state[i].id){
                copy[i].text = currentValue;
            }
        }
        setState(copy);
        setTrigger(false);
        setCurrentValue('');
    };


    return(
        <div className={styles.container}>
            <div className={styles.add}>
            <TextField
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
                id="standard-required"
                label="Enter your task"
            />
                {trigger ? (
                    <Button
                        onClick={update}
                        variant="contained"
                        color="primary">
                        YES
                    </Button>
                ):(
                    <Button
                        onClick={handleAddClicked}
                        variant="contained"
                        color="primary">
                        ADD
                    </Button>
                )}
            </div>
            <div className={styles.task_list}>
                {state.map((el,index)=>(
                    <Task
                        handleUpdateClicked={handleUpdateClicked}
                        handleDeleteClicked={handleDeleteClicked}
                        key={index} id={el.id}
                        text={el.text}/>
                ))}
            </div>
        </div>
    )
};

export default MainPage;