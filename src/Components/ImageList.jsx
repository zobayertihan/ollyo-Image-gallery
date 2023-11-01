/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Image from "./Image/Image";

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

// import React from "react";
// import { Droppable, Draggable } from "react-beautiful-dnd";
// import Image from "./Image/Image";

// const ImageList = ({ images, onImageSelect, selectedImages }) => {
//   return (
//     <Droppable droppableId="image-list">
//       {(provided) => (
//         <div
//           className="grid grid-cols-5 gap-4"
//           {...provided.droppableProps}
//           ref={provided.innerRef}
//         >
//           {images.map((image, index) => (
//             <Draggable
//               key={image.id.toString()}
//               draggableId={image.id.toString()}
//               index={index}
//             >
//               {(provided) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.draggableProps}
//                   {...provided.dragHandleProps}
//                 >
//                   <Image
//                     id={image.id}
//                     src={image.src}
//                     isFeatured={image.isFeatured}
//                     onImageSelect={onImageSelect}
//                     isSelected={selectedImages.includes(image.id)}
//                   />
//                 </div>
//               )}
//             </Draggable>
//           ))}
//           {provided.placeholder}
//         </div>
//       )}
//     </Droppable>
//   );
// };

// export default ImageList;
