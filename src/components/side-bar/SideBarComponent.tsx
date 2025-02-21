import { useState } from "react";
import { ChevronDown, ChevronUp, File, Users } from "lucide-react";

import { buttonStyles } from "../button/buttonStyles";
import { textStyles } from "../Text/Text";
import { Link } from "react-router-dom";
import { linkStyles } from "../link/linkStyles";

const Sidebar = ({ onSelectedStyle, onSelectedButton }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4 overflow-y-auto">
      {/* Logo */}
      <div className="mb-6 flex items-center justify-center ">
        <img src="/logo2.png" alt="Logo" className="h-12 w-12" />
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {/* Butoon*/}
        <div
          className="cursor-pointer"
          onClick={() => toggleDropdown("buttons")}
        >
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800">
            <div className="flex items-center space-x-3">
              <File size={20} />
              <span>Button</span>
            </div>
            {openDropdown === "buttons" ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>
          {/* {buttonStyles.} */}
          {openDropdown === "buttons" && (
            <div className="ml-6 space-y-2">
              {Object.keys(buttonStyles).map((key) => (
                <button
                  onClick={() => {
                    onSelectedStyle(key);
                    onSelectedButton("button");
                  }}
                  className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
                >
                  {key}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="cursor-pointer" onClick={() => toggleDropdown("links")}>
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800">
            <div className="flex items-center space-x-3">
              <File size={20} />
              <span>Link</span>
            </div>
            {openDropdown === "links" ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>
          {/* {link styles.} */}
          {openDropdown === "links" && (
            <div className="ml-6 space-y-2">
              {Object.keys(linkStyles).map((key) => (
                <button
                  onClick={() => {
                    onSelectedStyle(key);
                    onSelectedButton("link");
                  }}
                  className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
                >
                  {key}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="cursor-pointer" onClick={() => toggleDropdown("texts")}>
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800">
            <div className="flex items-center space-x-3">
              <File size={20} />
              <span>Text</span>
            </div>
            {openDropdown === "texts" ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>
          {openDropdown === "texts" && (
            <div className="ml-6 space-y-2">
              {Object.keys(textStyles).map((key) => (
                <button
                  onClick={() => {
                    onSelectedStyle(key);
                    onSelectedButton("text");
                  }}
                  className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
                >
                  {key}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
