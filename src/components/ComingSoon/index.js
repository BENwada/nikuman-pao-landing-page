import React from "react";
import {
  ComingSoonContainer,
  ComingSoonWrapper,
  ComingSoonImg,
  ComingSoonMoji,
  ComingSoonLogo,
} from "./ComingSoonElements";
import logo from "../../images/logo.svg";
import moji from "../../images/moji.png";
import bg from "../../images/bg.png";

const ComingSoon = () => {
  return (
    <ComingSoonContainer>
      <ComingSoonWrapper>
        <ComingSoonLogo src={logo} />
        <ComingSoonMoji src={moji} />
        <ComingSoonImg src={bg} />
      </ComingSoonWrapper>
    </ComingSoonContainer>
  );
};

export default ComingSoon;
