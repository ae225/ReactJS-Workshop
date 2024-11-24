import React, { useState } from "react";

const AdvertisementCard = ({ ad }) => {
  const { title, description, contact } = ad;
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          marginBottom: "10px",
          overflow: "hidden",
          borderRadius: "5px",
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <h3 style={{ fontSize: "16px", margin: "5px 0" }}>{title}</h3>
        <p style={{ fontSize: "14px", margin: "5px 0" }}>{description}</p>
        <p style={{ fontSize: "14px", margin: "5px 0" }}>
          Contact: {isDetailsVisible ? <span>{contact}</span> : "***"}
        </p>
      </div>

      <button
        onClick={toggleDetails}
        style={{
          fontSize: "14px",
          backgroundColor: "#007BFF",
          color: "#fff",
        }}
      >
        Details
      </button>
    </div>
  );
};

export default AdvertisementCard;
