import React from "react";
import { Sample, Simple, Variants } from "./components/index.js";
import { Buttons } from "./pages/index.js";
const App = () => {
  return (
    <div className=" h-screen w-screen flex flex-col gap-5 justify-center items-center ">
      {/* <Simple /> */}
      {/* <Sample /> */}
      {/* <Buttons /> */}
      <Variants />
    </div>
  );
};

export default App;
