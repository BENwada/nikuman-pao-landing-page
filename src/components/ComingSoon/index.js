import React from "react";
import {
  ComingSoonContainer,
  ComingSoonH1,
  ComingSoonImg,
  ComingSoonLogo,
} from "./ComingSoonElements";
import logo from "../../images/logo.png";
import bg from "../../images/bg.png";

const ComingSoon = () => {
  return (
    <ComingSoonContainer>
      <ComingSoonH1>近日リリース！</ComingSoonH1>
      <ComingSoonLogo src={logo} />
      <ComingSoonImg src={bg} />
    </ComingSoonContainer>
  );
};

export default ComingSoon;
