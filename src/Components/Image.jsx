/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Image = ({ id, src, isFeatured, onDelete, onFeature }) => {
  return (
    // <div className="image mb-4 p-4 border rounded">
    <div
      className={`image ${
        isFeatured ? "featured" : ""
      } mb-4 p-4 border rounded ${isFeatured ? "row-span-2 col-span-2" : ""}`}
    >
      <img className="w-full h-auto" src={src} alt={`Image ${id}`} />
      <div className="image-actions mt-2 flex justify-between">
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
        <button
          onClick={() => onFeature(id)}
          className={`px-2 py-1 rounded ${
            isFeatured ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
          } hover:bg-green-700`}
        >
          {isFeatured ? "Featured" : "Set as Featured"}
        </button>
      </div>
    </div>
  );
};

export default Image;
