/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";
// import Image from "../Image/Image";
// import { GridDropZone, GridItem } from "react-grid-dnd";
// import "./ImageLsit.css";

// const ImageList = ({ images, onImageSelect, selectedImages }) => {
//   const gap = "10px";

//   return (
//     <GridDropZone
//       id="items"
//       boxesPerRow={5}
//       rowHeight={300}
//       style={{
//         height: 300 * Math.ceil(images.length / 4),
//       }}
//     >
//       {images.map((image, index) => (
//         <GridItem key={image.id}>
//           <Image
//             id={image.id}
//             src={image.src}
//             isFeatured={image.isFeatured}
//             onImageSelect={onImageSelect}
//             isSelected={selectedImages.includes(image.id)}
//           />
//         </GridItem>
//       ))}
//     </GridDropZone>
//   );
// };

// export default ImageList;

import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Image from "../Image/Image";
// import "./ImageLsit.css";

const ImageList = ({ images, onImageSelect, selectedImages }) => {
  // const columnCount = 5;
  return (
    <Droppable droppableId="image-list">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div
            className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5"
            // className="image-ist"
          >
            {images.map((image, index) => (
              <Draggable
                key={image.id}
                draggableId={image.id.toString()}
                index={index}
              >
                {(provided) => (
                  // <div className="">
                  <div
                    className={` border-2  ${
                      index === 0
                        ? "row-span-2 col-span-2 "
                        : "row-span-1 col-span-1"
                    } `}
                    // className={`image-item`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Image
                      id={image.id}
                      src={image.src}
                      onImageSelect={onImageSelect}
                      isSelected={selectedImages.includes(image.id)}
                    />
                  </div>
                  // </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default ImageList;
