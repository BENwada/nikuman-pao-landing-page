import styled from "styled-components";

const HeroContainer = styled.div`
  background-color: azure;
  display: flex;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;
  max-height: 800px;
`;

const HeroLogo = styled.div``;

const HeroBg = styled.div``;

const HeroContent = styled.div``;

const HeroH1 = styled.h1`
  display: none;
`;
const HeroP = styled.p`
  font-family: "Shippori Mincho", serif;
  font-size: 13.5px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroLogo>
        <HeroBg></HeroBg>
      </HeroLogo>
      <HeroContent>
        <HeroH1>手づくり肉まんの店パオ</HeroH1>
        <HeroP>
          「手づくり」にこだわって、 一つ一つ生地から手づくりしています。
          <br />
          素朴で体にやさしい中国の家庭の味です。
          <br />
          どうぞたっぷりとお楽しみください。
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
