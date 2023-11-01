/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Image = ({
  id,
  src,
  isFeatured,
  onDelete,
  onFeature,
  onImageSelect,
  isSelected,
}) => {
  const [hovered, setHovered] = useState(false);
  const handleCheckboxChange = () => {
    onImageSelect(id);
  };
  return (
    <div
      className={`relative image border rounded cursor-pointer ${
        isFeatured ? "row-span-2 col-span-2" : ""
      } ${hovered ? "hover:shadow-lg z-10" : ""}`}
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
      <img src={src} alt={`Image ${id}`} className="w-full h-auto z-0" />
    </div>
  );
};

export default Image;
