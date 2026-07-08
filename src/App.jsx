import React from "react";

import Routing from "./routes/Routing/Routing"; // The path to the routing file you just edited.
import "./App.css"; 

function App() {
  return (
    <>
      {/* Gọi component Routing để quản lý việc hiển thị trang Dashboard */}
      <Routing />
    </>
  );
}

export default App;
