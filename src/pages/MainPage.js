import React,{useState} from 'react';
import styles from "../assets/MainPage.module.css";
import Text from "./Text";
import Person from "../components/Person";

//jsx

// functional component

const MainPage = ({title,action}) => {

    // task 1
    const [text,setText] = useState('');


    //task3
    const [data,setData] = useState({
        name: '',
        lastName: '',
        fatherName: '',
    });

    //task 4
    const [colors] = useState(['red','blue','yellow','pink']);
    const [currentColor,setCurrentColor] = useState('');

    const handleChange = event => {
        const copy = {...data};
        copy[event.target.name] = event.target.value;
        setData(copy);
    };


    // task 6
    const [isShow,setShow] = useState(true);


    //task 7

    const [isDisabled,setDisabled] = useState(false);


    //props.task1

    const [person] = useState([
        {
            name: 'Andrey',
            lastName: 'SON',
            age: 20
        },
        {
            name: 'Jerry',
            lastName: 'DON',
            age: 25
        },
        {
            name: 'Tom',
            lastName: 'QWE',
            age: 28
        },
        {
            name: 'Harry',
            lastName: 'ASD',
            age: 30
        },
        {
            name: 'Jack',
            lastName: 'ZXC',
            age: 32
        }
        ]
    );

    return(
        <div>
            <h1 style={{color:"red",border:'1px solid red',borderRadius:'10px'}}>TASK 1</h1>
            <p>{text}</p>
            <input onChange={e=>setText(e.target.value)}  type="text"/>
            <h1>TASK 2</h1>
            <p>{text.toUpperCase()}</p>

            <h1>TASK 3</h1>
            <p>{data.name} {data.lastName} {data.fatherName}</p>
            <input name={"name"} onChange={e=>handleChange(e)} type="text"/>
            <input name={"lastName"} onChange={e=>handleChange(e)} type="text"/>
            <input name={"fatherName"} onChange={e=>handleChange(e)} type="text"/>

            <h1>TASK 4</h1>
            <p style={{backgroundColor: currentColor}}>COLORS</p>
            <select onChange={(event)=>setCurrentColor(event.target.value)} name="" id="">
                {colors.map((el,index)=>(
                    <option key={index} value={el}>{el}</option>
                ))}
            </select>

            <h1>task 6</h1>
            {isShow && (
                <p>Im visible</p>
            )}
            <input checked={isShow} onChange={()=>setShow(!isShow)} type="checkbox"/>


            <h1>TASK 7</h1>
            <input disabled={isDisabled} type="text"/>
            <input checked={isDisabled} onChange={()=>setDisabled(!isDisabled)} type="checkbox"/>

            <h1>PROPS.TASK1</h1>
            {person.map((el,index)=>(
                <Person key={index} name={el.name} age={el.age} lastName={el.lastName}/>
            ))}
        </div>
    )
};

export default MainPage;