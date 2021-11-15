import styled from "styled-components";
import image01 from "../images/image01.png";
import image02 from "../images/image02.png";
import image03 from "../images/BG-seiro.png";
import image04 from "../images/image04.png";
import image05 from "../images/image05.png";
import image06 from "../images/image06.png";
import logo from "../images/logo.svg";
import main from "../images/bg.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 100%;
  width: 100vw;
  }
`;

const BgWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  position: relative;
`;

const HeroH1 = styled.h1`
  display: none;
`;

const HeroLogo = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 100px;
  position: absolute;
  z-index: 3;

  @media screen and (max-width: 768px) {
    margin-top: 50%;
    width: 180px;
    height: 180px;
  }
`;

const HeroBg = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Grid = styled.div`
  height: 100%;
  width: 100%;
`;

const BgImg = styled.img`
  vertical-align: top;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  max-width: 1000px;
  position: relative;
`;

const HeroContent = styled.div`
  margin: auto;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 3;
`;

const HeroP = styled.p`
  font-family: "Shippori Mincho", serif;
  font-size: 20px;
  color: #fff;
  padding: 50px 0 0 0;
  text-align: center;
  line-height: 3rem;

  @media screen and (max-width: 768px) {
    padding: 20px 0 0 0;
    font-size: 13.5px;
    line-height: 1.8rem;
  }
`;

const MainImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: #000;
`;

const MainImg = styled.img`
  object-fit: cover;
  /* position: absolute; */
  height: 100%;
  width: 60%;
  vertical-align: top;
`;

const HeroSection = () => {
  return (
    <Container>
      <BgWrapper>
        <HeroH1>手づくり肉まんの店パオ</HeroH1>
        <HeroLogo src={logo} />
        <HeroBg>
          <Grid>
            <BgImg src={image01} alt="肉まんを包む" />
          </Grid>
          <Grid>
            <BgImg src={image02} alt="手づくり生地" />
          </Grid>
          <Grid>
            <BgImg src={image03} alt="肉まんを蒸す" />
          </Grid>
          <Grid>
            <BgImg src={image04} alt="五目まんを包む" />
          </Grid>
          <Grid>
            <BgImg src={image05} alt="バーガー3種類" />
          </Grid>
          <Grid>
            <BgImg src={image06} alt="手づくりのたれ" />
          </Grid>
        </HeroBg>
      </BgWrapper>
      <MainWrapper>
        <HeroContent>
          <HeroP>
            「手づくり」にこだわって、
            <br /> 一つ一つ生地から手づくりしています。
            <br />
            素朴で体にやさしい中国の家庭の味です。
            <br />
            どうぞたっぷりとお楽しみください。
          </HeroP>
        </HeroContent>
        <MainImgWrapper>
          <MainImg src={main} />
        </MainImgWrapper>
      </MainWrapper>
    </Container>
  );
};

export default HeroSection;
