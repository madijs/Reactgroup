import './App.css';
import React,{useState} from 'react'
import MainPage from "./pages/MainPage"
import ClassComponentMainPage from "./pages/ClassComponentMainPage";

function App() {



  return (
    <div className="App">
        <MainPage/>
        {/*<ClassComponentMainPage action={handleColorChange} title={{name:"Hello", lastName:"World"}}/>*/}
    </div>
  );
}

export default App;
