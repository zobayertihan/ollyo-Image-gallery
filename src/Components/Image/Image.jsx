/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Image.css";

const Image = ({ id, src, isFeatured, onImageSelect, isSelected }) => {
  const [hovered, setHovered] = useState(false);
  const handleCheckboxChange = () => {
    onImageSelect(id);
  };
  return (
    <div
      className={`relative image border rounded cursor-pointer ${
        isFeatured ? "row-span-2 col-span-2" : ""
      } ${hovered ? "hover:shadow-lg" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered || isSelected ? (
        <div className="absolute top-2 left-2">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500 cursor-pointer"
            onChange={handleCheckboxChange}
            checked={isSelected}
          />
        </div>
      ) : null}
      <div>
        <img src={src} alt={`Image ${id}`} className="w-full h-auto" />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Image;
