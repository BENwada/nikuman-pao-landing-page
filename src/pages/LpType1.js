import React from "react";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import BurgerMenu from "../components/BurgerMenu";
import Commitment from "../components/Commitment";
import InfoSection from "../components/InfoSection";
import Access from "../components/Access";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Menu />
      <BurgerMenu />
      <Commitment />
      <InfoSection />
      <Access />
    </>
  );
};

export default Home;