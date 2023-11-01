/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ImageList from "./ImageList";
import imagesData from "../images.json";
import { DragDropContext } from "react-beautiful-dnd";

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
    const updatedImages = [...images];
    const selectedImageIds = selectedImages.slice();
    selectedImageIds.forEach((id) => {
      const index = updatedImages.findIndex((image) => image.id === id);
      if (index !== -1) {
        updatedImages.splice(index, 1);
      }
    });
    setSelectedImages([]);
    setImages(updatedImages);
    if (updatedImages.length > 0) {
      updatedImages[0].isFeatured = true;
    }
    setImages(updatedImages);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const reorderedImages = [...images];
    const [movedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, movedImage);
    setImages(reorderedImages);
  };

  console.log(images);

  return (
    <div className="border p-5 shadow-md">
      <div className=" bg-white p-5">
        <div className="flex justify-between w-full">
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
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <ImageList
          images={images}
          onImageSelect={handleImageSelect}
          selectedImages={selectedImages}
        />
      </DragDropContext>
    </div>
  );
};

export default Gallery;
