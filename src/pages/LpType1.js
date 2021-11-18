import React from "react";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import BurgerMenu from "../components/BurgerMenu";
import Commitment from "../components/Commitment";
import InfoSection from "../components/InfoSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Menu />
      <BurgerMenu />
      <Commitment />
      <InfoSection />
    </>
  );
};

export default Home;
