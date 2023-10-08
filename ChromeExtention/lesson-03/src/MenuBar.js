import React, { useState } from "react";
import marker from "./assets/marker.svg";

const markerWidthConfig = {
  mw1: 2,
  mw2: 3,
  mw3: 4,
  mw4: 5,
};

const MenuBar = ({ onMarkerWidthChange }) => {
  const [isMarkerMenuOpen, setIsMarkerMenuOpen] = useState(false);
  const [activeClass, setActiveClass] = useState("mw1");
  const handleMarkerToggle = () => {
    setIsMarkerMenuOpen((prevState) => !prevState);
  };
  const handleWidthSelection = (widthCass) => {
    onMarkerWidthChange(markerWidthConfig[widthCass]);
    setActiveClass(widthCass);
    handleMarkerToggle();
  };
  return (
    <div className="menu">
      <ul>
        <li className="markerList">
          <img
            className="icon marker"
            src={marker}
            onClick={handleMarkerToggle}
          />
          <span className={`markerListWidth ${activeClass}`}></span>
          {isMarkerMenuOpen && (
            <ul className="markerWidthDropdown">
              <li onClick={() => handleWidthSelection("mw1")}>
                <span
                  className={`mw1 ${activeClass === "mw1" ? "active" : ""}`}
                ></span>
              </li>
              <li onClick={() => handleWidthSelection("mw2")}>
                <span
                  className={`mw2 ${activeClass === "mw2" ? "active" : ""}`}
                ></span>
              </li>
              <li onClick={() => handleWidthSelection("mw3")}>
                <span
                  className={`mw3 ${activeClass === "mw3" ? "active" : ""}`}
                ></span>
              </li>
              <li onClick={() => handleWidthSelection("mw4")}>
                <span
                  className={`mw4 ${activeClass === "mw4" ? "active" : ""}`}
                ></span>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
