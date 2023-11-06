/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Image.css";

const Image = ({ id, src, onImageSelect, isSelected }) => {
  const [hovered, setHovered] = useState(false);
  // const handleCheckboxChange = () => {
  //   onImageSelect(id);
  // };
  return (
    <div
      className={`relative image border rounded cursor-pointer ${
        hovered ? "hover:shadow-lg" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={src} alt={`Image ${id}`} className="w-full h-auto" />
      <div className="overlay"></div>
      {hovered || isSelected ? (
        <div className="absolute top-2 left-2">
          <input
            id={id}
            name={id}
            type="checkbox"
            className="form-checkbox text-blue-500 cursor-pointer"
            onChange={() => onImageSelect(id)}
            checked={isSelected}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Image;
