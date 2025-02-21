import "./App.css";
import MainComponent from "./components/main/MainComponent";
import SideBarComponent from "./components/side-bar/SideBarComponent";
import { useState } from "react";

import "./App.css";

function App() {
  const [selectedStyle, setSelectedStyle] = useState("primary");
  const [selectedButton, setSelecteButton] = useState("button");
  const [selectedTextStyle, setSelectedTextStyle] = useState("sm");

  const onSelectedButoon = (vlaue: string) => {
    setSelecteButton(vlaue);
  };
  const onSelectedStyle = (value: string) => {
    setSelectedStyle(value);
  };

  const onSelectedTextStyle = (value: any) => {
    setSelectedTextStyle(value);
    console.log("on selected text style changed in app", value);
  };

  return (
    <div className="flex h-screen bg-gray-100">

      <MainComponent
        selectedStyle={selectedStyle}
        selectedButton={selectedButton}
      />
      <SideBarComponent
        onSelectedStyle={onSelectedStyle}
        onSelectedButton={onSelectedButoon}
      />
    </div>
  );
}

export default App;
