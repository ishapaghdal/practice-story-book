import { useState } from "react";
import { ChevronDown, ChevronUp, File, Users } from "lucide-react";

import { buttonStyles } from "../button/buttonStyles";
import { textStyles } from "../Text/Text";
import { Link } from "react-router-dom";

const Sidebar = ({ onSelectedStyle, onSelectedButton, onSelectedTextStyle }) => {

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

              <button
                onClick={() => {
                  onSelectedStyle("primary");
                }}
                className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
              >
                Primary
              </button>
              <button
                onClick={() => {
                  onSelectedStyle("secondary");
                }}
                className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
              >
                Secondary
              </button>
            </div>
          )}
        </div>

        {/* Another Dropdown */}
        <div className="cursor-pointer" onClick={() => toggleDropdown("team")}>
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800">
            <div className="flex items-center space-x-3">
              <Users size={20} />
              <span>Text</span>
            </div>
            {openDropdown === "team" ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>
          {openDropdown === "team" && (
            <div className="ml-6 space-y-2">
             <button
                onClick={() => {
                  onSelectedTextStyle("sm");
                }}
                className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
              >
                 sm
              </button>
              <button
                onClick={() => {
                  onSelectedTextStyle("md");
                }}
                className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
              >
                md
              </button>
              <button
                onClick={() => {
                  onSelectedTextStyle("lg");
                }}
                className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
              >
                lg
              </button>
              <button
                onClick={() => {
                  onSelectedTextStyle("xl");
                }}
                className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
              >
                xl
              </button>
              <button
                onClick={() => {
                  onSelectedTextStyle("2xl");
                }}
                className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
              >
                2xl
              </button>
              <button
                onClick={() => {
                  onSelectedTextStyle("3xl");
                }}
                className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
              >
                3xl
              </button>
              <button
                onClick={() => {
                  onSelectedTextStyle("4xl");
                }}
                className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
              >
                4xl
              </button>
              <button
                onClick={() => {
                  onSelectedTextStyle("5xl");
                }}
                className="block p-2 w-full text-left rounded-lg hover:bg-gray-700"
              >
                5xl
              </button>

            </div>
            
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
