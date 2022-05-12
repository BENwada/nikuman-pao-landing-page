import React from "react";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Commitment from "../components/Commitment";
import InfoSection from "../components/InfoSection";
import Access from "../components/Access";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Menu />
      <Commitment />
      <InfoSection />
      <Access />
    </>
  );
};

export default Home;
