/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";
import images from ".././images.json";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (id, e) => {
    const selectedImages = [...images];
    const res = selectedImages.find((item) => item.id == e.target.value);
    res.checked = !res.checked;

    setSelectedImages(selectedImages);
    console.log(selectedImages);
    // console.log(e.target.value);
    // if (e.target.checked) {
    //   // Add the value to the array if checked
    //   setSelectedImages((prevValues) => [...prevValues, e.target.value]);
    // } else {
    //   // Remove the value from the array if unchecked
    //   setSelectedImages((prevValues) =>
    //     prevValues.filter((value) => value !== e.target.value)
    //   );
    // }
    // setSelectedImages((prevSelectedImages) => {
    //   const isSelected = prevSelectedImages.includes(id);
    //   if (isSelected) {
    //     return prevSelectedImages.filter((imageId) => imageId !== id);
    //   } else {
    //     return [...prevSelectedImages, id];
    //   }
    // });
  };

  return (
    <ImageContext.Provider
      value={{ selectedImages, handleImageSelect, setSelectedImages }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  return useContext(ImageContext);
};
