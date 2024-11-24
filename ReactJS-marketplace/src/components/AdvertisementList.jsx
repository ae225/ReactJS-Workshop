import React from "react";
import AdvertisementCard from "./AdvertisementCard";

const AdvertisementList = () => {
  const ads = [
    {
      id: 1,
      title: "Ad 1",
      description: "This is the first advertisement.",
      contact: "070-123 45 67",
    },
    {
      id: 2,
      title: "Ad 2",
      description: "This is the second advertisement.",
      contact: "073-987 65 43",
    },
    {
      id: 3,
      title: "Ad 3",
      description: "This is the third advertisement.",
      contact: "076-555 12 34",
    },
    {
      id: 4,
      title: "Ad 4",
      description: "This is the fourth advertisement.",
      contact: "072-234 56 78",
    },
    {
      id: 5,
      title: "Ad 5",
      description: "This is the fifth advertisement.",
      contact: "070-876 54 32",
    },
    {
      id: 6,
      title: "Ad 6",
      description: "This is the sixth advertisement.",
      contact: "073-456 78 90",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <h3
        style={{
          fontSize: "25px",
        }}
      >
        Advertisement List
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {ads.map((ad) => (
          <AdvertisementCard key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default AdvertisementList;
