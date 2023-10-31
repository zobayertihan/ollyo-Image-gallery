// eslint-disable-next-line no-unused-vars
import React from "react";
import Gallery from "./Components/Gallery";
import "./App.css";

function App() {
  return (
    <div className="max-w-full mx-auto">
      <h1 className="font-bold text-blue-600 text-2xl mb-5">
        Ollyo Image Gallery
      </h1>
      <Gallery />
    </div>
  );
}

export default App;
