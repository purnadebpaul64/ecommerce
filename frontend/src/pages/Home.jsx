import React from "react";
import Hero from "../components/Home/Hero";
import LatestCollection from "../components/Home/LatestCollection";
import BestSeller from "../components/Home/BestSeller";

const Home = () => {
  return (
    <section>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
    </section>
  );
};

export default Home;
