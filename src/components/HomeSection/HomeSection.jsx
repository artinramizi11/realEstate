import React, { useContext, useRef, useState } from "react";
import wallpaper from "../../assets/images/bg.avif";
import { Link, useNavigate } from "react-router-dom";
import { FilterContext } from "../FilterContext";
import "./HomeSection.css";

const HomeSection = () => {
  const {
    keyword,
    setKeyword,
    setPropertyType,
    setLocation,
    filteredData,
    resetFilterBtn,
  } = useContext(FilterContext);

  return (
    <div
      style={{
        backgroundImage: `url(${wallpaper})`,
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>We Have Over Million Properties For You</h1>
      <h6>Find Your Dream Home</h6>
      <div className="searchForm">
        <input
          type="text"
          placeholder="Enter Keyword..."
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <select onChange={(e) => setPropertyType(e.target.value)}>
          <option value="">Property Type</option>
          <option value="for sale">For Sale</option>
          <option value="for rent">For Rent</option>
        </select>

        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="">Location</option>
          <option value="chicago il">Chicago</option>
          <option value="miami">Miami</option>
          <option value="san francisco">San Francisco</option>
          <option value="toronto ca">Toronto</option>
        </select>

        <Link
          to="listings"
          style={{
            color: "white",
            backgroundColor: "black",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          Check for availability
        </Link>
      </div>
    </div>
  );
};

export default HomeSection;
