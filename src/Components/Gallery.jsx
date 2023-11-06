/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import ImageList from "./ImageList/ImageList";
import imagesData from "../images.json";

const Gallery = () => {
  const [images, setImages] = useState(imagesData);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (id, e) => {
    console.log(e);
    setSelectedImages((prevSelectedImages) => {
      const isSelected = prevSelectedImages.includes(id);
      if (isSelected) {
        return prevSelectedImages.filter((imageId) => imageId !== id);
      } else {
        return [...prevSelectedImages, id];
      }
    });
  };
  console.log(selectedImages);

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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) {
      return;
    }

    const oldIndex = images.findIndex((image) => image.id === active.id);
    const newIndex = images.findIndex((image) => image.id === over.id);

    const reorderedImages = arrayMove(images, oldIndex, newIndex);
    setImages(reorderedImages);
  };

  return (
    <div className="border p-5 shadow-md">
      <div className=" bg-white p-5 mb-3">
        <div className="flex justify-between w-full">
          <div className="text-lg font-bold">
            {selectedImages.length > 0 ? (
              <div className="flex gap-2 items-center">
                <img
                  className="w-5 h-5"
                  src="./../../public/assets/images/checkbox.png"
                  alt=""
                />
                {`Selected Items: ${selectedImages.length}`}
              </div>
            ) : (
              "Gallery"
            )}
          </div>
          <div className="">
            {selectedImages.length > 0 && (
              <button
                onClick={handleBatchDelete}
                className={`bg-red-500 text-white px-4 py-2 rounded ${
                  selectedImages.length > 0
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>

      <DndContext
        onDragEnd={onDragEnd}
        sensors={sensors}
        collisionDetection={closestCenter}
      >
        <SortableContext items={images} strategy={rectSortingStrategy}>
          <ImageList
            images={images}
            onImageSelect={handleImageSelect}
            selectedImages={selectedImages}
          />
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Gallery;
