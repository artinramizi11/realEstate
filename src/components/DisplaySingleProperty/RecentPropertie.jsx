import React from "react";
import "./RecentPropertie.css";
import { useNavigate } from "react-router-dom";

const RecentPropertie = ({ item }) => {
  const Navigate = useNavigate();

  return (
    <div onClick={() => Navigate(`/find/${item.id}`)}>
      <div
        className="product"
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}
      >
        <div className="image">
          <img src={item.wallpaper} style={{ width: "100%" }} />
        </div>
        <div
          className="text"
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentPropertie;
