/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ImageList from "./ImageList";
import imagesData from "../images.json";

const Gallery = () => {
  const [images, setImages] = useState(imagesData);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (id) => {
    const isSelected = selectedImages.includes(id);
    if (isSelected) {
      const updatedSelection = selectedImages.filter(
        (selectedId) => selectedId !== id
      );
      setSelectedImages(updatedSelection);
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  const handleBatchDelete = () => {
    // Create a copy of the images array
    const updatedImages = [...images];

    // Get the IDs of selected images
    const selectedImageIds = selectedImages.slice();

    // Iterate over the selectedImageIds and remove corresponding images
    selectedImageIds.forEach((id) => {
      const index = updatedImages.findIndex((image) => image.id === id);
      if (index !== -1) {
        updatedImages.splice(index, 1);
      }
    });

    // Clear the selectedImages array after deletion
    setSelectedImages([]);

    // Update the state with the updated images array
    setImages(updatedImages);

    // Check if there are remaining images and set the first image as featured
    if (updatedImages.length > 0) {
      updatedImages[0].isFeatured = true;
      setImages(updatedImages);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between mb-5">
        <div className="text-lg font-bold">
          {selectedImages.length > 0
            ? `Selected Items: ${selectedImages.length}`
            : "Gallery"}
        </div>
        <div className="">
          {selectedImages.length > 0 && (
            <button
              onClick={handleBatchDelete}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          )}
        </div>
      </div>
      <ImageList
        images={images}
        onImageSelect={handleImageSelect}
        selectedImages={selectedImages}
      />
    </div>
  );
};

export default Gallery;
