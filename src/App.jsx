import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Routing from "./routes/Routing/Routing";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="app-container">
        <Sidebar />

        <main className="main-content">
          <Routing />
        </main>
      </div>
    </>
  );
};

export default App;
