
// import { Route } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
import './App.css'
import MainComponent from './components/main/MainComponent'
import SideBarComponent from './components/side-bar/SideBarComponent'
import { useState } from 'react'

function App() {

  const [selectedStyle , setSelectedStyle] = useState("primary");
  const [selectedTextStyle , setSelectedTextStyle] = useState("sm");
  const onSelectedStyle = (value : string) =>{
    setSelectedStyle(value);
    console.log("on selected style changed in app" , value);
    
  }

  const onSelectedTextStyle = (value : any) =>{
    setSelectedTextStyle(value);
    console.log("on selected text style changed in app" , value);
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <MainComponent selectedStyle={selectedStyle} selectedTextStyle={selectedTextStyle}/>
      <SideBarComponent onSelectedStyle={onSelectedStyle} onSelectedTextStyle={onSelectedTextStyle}/> 
     
    </div >
  )
}

export default App
