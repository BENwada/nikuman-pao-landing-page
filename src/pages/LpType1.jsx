import React from "react";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Commitment from "../components/Commitment";
import Exclusive from "../components/Exclusive";
import NtFooter from "../components/NtFooter";
import ScrollToTop from "../components/ScrollToTop";
import LunchMenu from "../components/LunchMenu";

const Home = () => {
  return (
    <>
      <ScrollToTop>
        <HeroSection />
        <Menu />
        <Exclusive />
        <LunchMenu />
        <Commitment />
        <NtFooter />
      </ScrollToTop>
    </>
  );
};

export default Home;
