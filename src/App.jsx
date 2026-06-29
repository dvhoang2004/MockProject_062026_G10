import React from "react";

import "./App.css";
import Routing from "./routes/Routing/Routing.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
