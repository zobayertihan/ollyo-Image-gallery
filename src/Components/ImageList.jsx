/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Image from "./Image";

const ImageList = ({ images, onImageSelect, selectedImages }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {images.map((image) => (
        <Image
          key={image.id}
          id={image.id}
          src={image.src}
          isFeatured={image.isFeatured}
          onImageSelect={onImageSelect}
          isSelected={selectedImages.includes(image.id)}
        />
      ))}
    </div>
  );
};

export default ImageList;
