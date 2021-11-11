import styled from "styled-components";
import image01 from "../images/image01.png";
import image02 from "../images/image02.png";
import image03 from "../images/BG-seiro.png";
import image04 from "../images/image04.png";
import image05 from "../images/image05.png";
import image06 from "../images/image06.png";
import logo from "../images/logo.svg";
import main from "../images/bg.png";

const HeroContainer = styled.div`
  background-color: #000;
  /* align-items: center; */
  /* justify-content: center; */

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  align-items: center;
  position: relative;
`;

const HeroLogo = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 100px;
  position: absolute;
  z-index: 99;
`;

const HeroBg = styled.section`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Grid = styled.div`
  /* position: relative; */
`;

const Img = styled.img`
  /* position: absolute; */
  vertical-align: top;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MainImgWrapper = styled.div`
  /* display: flex; */
  width: 100%;
  /* max-width: 1000px; */
  background-color: #000;
  position: relative;
`;

const MainImg = styled.img`
  vertical-align: top;
  height: 70%;
  margin-bottom: 0;
  margin-right: 0px;
  margin-left: auto;
  z-index: 3;
  /* position: absolute; */
`;

const HeroContent = styled.div`
  /* display: flex; */
  position: absolute;
  align-items: center;
`;

const HeroH1 = styled.h1`
  display: none;
`;

const HeroP = styled.p`
  z-index: 100;
  font-family: "Shippori Mincho", serif;
  font-size: 13.5px;
  color: #fff;
  margin-top: 20px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroH1>手づくり肉まんの店パオ</HeroH1>
      <HeroWrapper>
        <HeroLogo src={logo} />
        <HeroBg>
          <Grid>
            <Img src={image01} alt="肉まんを包む" />
          </Grid>
          <Grid>
            <Img src={image02} alt="手づくり生地" />
          </Grid>
          <Grid>
            <Img src={image03} alt="肉まんを蒸す" />
          </Grid>
          <Grid>
            <Img src={image04} alt="五目まんを包む" />
          </Grid>
          <Grid>
            <Img src={image05} alt="バーガー3種類" />
          </Grid>
          <Grid>
            <Img src={image06} alt="手づくりのたれ" />
          </Grid>
        </HeroBg>
        <MainImgWrapper>
          <HeroContent>
            <HeroP>
              「手づくり」にこだわって、 一つ一つ生地から手づくりしています。
              <br />
              素朴で体にやさしい中国の家庭の味です。
              <br />
              どうぞたっぷりとお楽しみください。
            </HeroP>
          </HeroContent>
          <MainImg src={main} />
        </MainImgWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
