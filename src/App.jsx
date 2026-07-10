import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Routing from "./routes/Routing/Routing";

const App = () => {
  const isLoggedIn = false; // Placeholder for authentication state

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      <div className="app-container">
        <Sidebar isLoggedIn={isLoggedIn} />
        <main className={`main-content ${isLoggedIn ? "" : "logged-out"}`}>
          <Routing />
        </main>
      </div>
    </>
  );
};

export default App;
