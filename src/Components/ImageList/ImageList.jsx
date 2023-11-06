/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "../Image/Image";
import { useImageContext } from "../../Context/ImageContext";

const DraggableImage = ({ id, src, isSelected, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className={`border rounded cursor-pointer ${
        isSelected ? "shadow-lg" : ""
      } ${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <Image
        id={id}
        src={src}
        // onImageSelect={onImageSelect}
        isSelected={isSelected}
        index={index}
      />
    </div>
  );
};

const ImageList = ({ images }) => {
  const { selectedImages } = useImageContext();
  // console.log(selectedImages);
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {images.map((image, index) => (
        <DraggableImage
          key={image.id}
          id={image.id}
          src={image.src}
          // onImageSelect={onImageSelect}
          isSelected={selectedImages.some((e) => e.checked)}
          index={index}
        />
      ))}
    </div>
  );
};

export default ImageList;
