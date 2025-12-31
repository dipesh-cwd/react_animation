import React from "react";
import { Drag, Sample, Simple, Variants } from "./components/index.js";
import { Buttons } from "./pages/index.js";
const App = () => {
  return (
    <div className=" h-screen w-screen flex flex-col gap-5 justify-center items-center ">
      {/* <Simple /> */}
      {/* <Sample /> */}
      {/* <Buttons /> */}
      {/* <Variants /> */}
      <Drag />
    </div>
  );
};

export default App;
