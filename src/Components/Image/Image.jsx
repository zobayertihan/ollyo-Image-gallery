/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Image.css";
import { useImageContext } from "../../Context/ImageContext";

const Image = ({ id, src, isSelected }) => {
  const { handleImageSelect } = useImageContext();
  const [hovered, setHovered] = useState(false);
  // const [isSelected, setIsSelected] = useState(false);
  // useEffect(() => {
  //   if (selectedImages.includes(id)) {
  //     setIsSelected(true);
  //   }
  // }, [id, selectedImages]);
  console.log(isSelected);
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
        <div className="absolute top-2 left-2 z-50">
          <input
            id={id}
            name={id}
            type="checkbox"
            className="form-checkbox text-blue-500 cursor-pointer w-8 h-8"
            onChange={(e) => handleImageSelect(id, e)}
            checked={isSelected}
            value={id}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Image;
