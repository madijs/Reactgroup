import './App.css';
import React,{useState} from 'react'
import MainPage from "./pages/MainPage"
import ClassComponentMainPage from "./pages/ClassComponentMainPage";

function App() {

    const [bool,setBool] = useState(true);


    const handleColorChange = () =>{
        setBool(!bool);
        console.log('color');
    };

  return (
    <div className="App">
        <div style={bool ? {backgroundColor:'red'} : {backgroundColor:'blue'}}>
            Hello
        </div>
        <MainPage action={handleColorChange} title={{name: "Hello", lastName: "World"}}/>
        {/*<ClassComponentMainPage action={handleColorChange} title={{name:"Hello", lastName:"World"}}/>*/}
    </div>
  );
}

export default App;
