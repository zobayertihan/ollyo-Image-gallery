/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Image from "./Image";

const ImageList = ({ images, onDelete, onFeature }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <Image
          key={image.id}
          id={image.id}
          src={image.src}
          isFeatured={image.isFeatured}
          onDelete={onDelete}
          onFeature={onFeature}
        />
      ))}
    </div>
  );
};

export default ImageList;
