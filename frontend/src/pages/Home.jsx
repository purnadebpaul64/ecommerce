import React from "react";
import Hero from "../components/Home/Hero";
import LatestCollection from "../components/Home/LatestCollection";
import BestSeller from "../components/Home/BestSeller";
import OurPolicy from "../components/Home/OurPolicy";

const Home = () => {
  return (
    <section>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
      <OurPolicy></OurPolicy>
    </section>
  );
};

export default Home;
