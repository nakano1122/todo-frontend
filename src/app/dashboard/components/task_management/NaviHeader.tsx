"use client";

import { useState } from "react";

const NaviHeader = () => {
  const [activeTab, setActiveTab] = useState("すべて");

  const tabs = ["すべて", "進行中", "完了済み", "仕事", "個人"];

  return (
    <>
      <nav className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded-md font-medium text-sm ${
              activeTab === tab
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            } transition-colors`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </>
  );
};

export default NaviHeader;
