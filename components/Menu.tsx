"use client";

import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import React, { useState } from "react";

function Menu() {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const handleToogle = () => {
    setToggleHamburger((prev) => !prev);
  };

  const handleOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setToggleHamburger(false);
    }
  };

  return (
    <>
      {toggleHamburger && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 transition-opacity duration-300"
          onClick={handleOutside}
        />
      )}
      <div
        className={`fixed top-0 right-0 w-full h-[40%] rounded bg-gray-200 transition-transform duration-300 ${
          toggleHamburger ? "translate-x-0" : "translate-x-full"
        } sm:hidden z-50 bg-opacity-95 shadow-sm`}
      >
        <div>
          <span className="flex items-center justify-between py-4 px-2">
            <div>Sidebar Content</div>
            <PanelRightOpen
              className="sm:hidden duration-1000"
              onClick={handleToogle}
            />
          </span>
        </div>
      </div>

      {!toggleHamburger && (
        <PanelLeftOpen
          className="sm:hidden duration-150"
          onClick={handleToogle}
        />
      )}
    </>
  );
}

export default Menu;
