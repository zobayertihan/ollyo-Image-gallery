/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ImageList from "./ImageList";
import imagesData from "../images.json";

const Gallery = () => {
  const [images, setImages] = useState(imagesData);

  const handleDelete = (id) => {
    let updatedImages = [...images];
    const index = updatedImages.findIndex((image) => image.id === id);
    if (index !== -1) {
      updatedImages.splice(index, 1);
      if (index === 0 && updatedImages.length > 0) {
        updatedImages[0].isFeatured = true;
      }
      setImages(updatedImages);
    }
  };

  const handleReorder = (startIndex, endIndex) => {
    const reorderedImages = Array.from(images);
    const [reorderedImage] = reorderedImages.splice(startIndex, 1);
    reorderedImages.splice(endIndex, 0, reorderedImage);
    setImages(reorderedImages);
  };

  const handleFeature = (id) => {
    const updatedImages = images.map((image) => {
      return {
        ...image,
        isFeatured: image.id === id,
      };
    });
    setImages(updatedImages);
  };

  return (
    <div className="">
      <ImageList
        images={images}
        onDelete={handleDelete}
        onReorder={handleReorder}
        onFeature={handleFeature}
      />
    </div>
  );
};

export default Gallery;
