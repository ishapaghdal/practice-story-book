import { useState } from "react";
import { ChevronDown, ChevronUp, File, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonStyles } from "../button/buttonStyles";

const Sidebar = ({ onSelectedStyle }) => {
  console.log(buttonStyles);

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
