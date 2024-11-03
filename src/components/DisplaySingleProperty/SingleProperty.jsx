import React, { useEffect } from "react";
import Description from "./Description";
import { useParams } from "react-router-dom";
import data from "../../data";
import Title from "./Title";
import Details from "./Details";
import RecentProperties from "./RecentProperties";
import Nav from "../Nav/Nav";
import Offer from "./Offer";
import PopularTags from "./PopularTags";
import Location from "./Location";
import Gallery from "./Gallery";
import AgentInformation from "./AgentInformation";
import Footer from "../Footer/Footer";
import "./SingleProperty.css";

const SingleProperty = () => {
  const { id } = useParams();

  const displaySingleProduct = data.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Nav display="singleproperty" />
      <div className="container">
        <div
          className="left-side"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Title item={displaySingleProduct} />
          <Gallery item={displaySingleProduct} />
          <Description item={displaySingleProduct} />
          <Details item={displaySingleProduct} />
          <Location />
        </div>
        <div
          className="right-side"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <AgentInformation />
          <RecentProperties />
          <Offer />
          <PopularTags />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProperty;
