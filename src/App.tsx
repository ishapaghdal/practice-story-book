
import './App.css'
import MainComponent from './components/main/MainComponent'
import SideBarComponent from './components/side-bar/SideBarComponent'
import { useState } from 'react'

function App() {

  const [selectedStyle , setSelectedStyle] = useState("primary");

  const onSelectedStyle = (value : string) =>{
    setSelectedStyle(value);
    console.log("on selected style changed in app" , value);
    
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <MainComponent selectedStyle = {selectedStyle}/>
      <SideBarComponent onSelectedStyle = {onSelectedStyle}/>
    </div >
  )
}

export default App
