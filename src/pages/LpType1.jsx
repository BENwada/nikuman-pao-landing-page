import React from "react";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Commitment from "../components/Commitment";
import InfoSection from "../components/InfoSection";
import Exclusive from "../components/Exclusive";
import NtFooter from "../components/NtFooter";
import ToggleButton from "../components/ToggleButton";

const Home = () => {
  return (
    <>
      <ToggleButton />
      <HeroSection />
      <Menu />
      <Exclusive />
      <Commitment />
      <InfoSection />
      <NtFooter />
      {/* <Access /> */}
    </>
  );
};

export default Home;
