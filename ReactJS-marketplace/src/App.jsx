import React from "react";
import Navbar from "./components/Navbar";
import AdvertisementList from "./components/AdvertisementList";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <header
        style={{
          backgroundColor: "#e74c3c",
          padding: "20px",
          color: "#fff",
        }}
      >
        <h2>Marketplace UI!</h2>
      </header>
      <AdvertisementList />
    </div>
  );
};

export default App;
