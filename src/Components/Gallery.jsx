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
      const isFeatured = updatedImages[index].isFeatured;
      updatedImages.splice(index, 1);

      // Automatically set the next image as featured if the first image is deleted
      if (isFeatured && updatedImages.length > 0 && index === 0) {
        updatedImages[0].isFeatured = true;
      }
      // Automatically set the first image as featured if the last image is deleted and it was featured
      else if (
        isFeatured &&
        updatedImages.length > 0 &&
        index === updatedImages.length
      ) {
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

    // Move the featured image to the first position in the array
    const index = updatedImages.findIndex((image) => image.id === id);
    if (index !== -1) {
      const [featuredImage] = updatedImages.splice(index, 1);
      updatedImages.unshift(featuredImage);
    }

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
