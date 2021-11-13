import styled from "styled-components";
import image01 from "../images/image01.png";
import image02 from "../images/image02.png";
import image03 from "../images/BG-seiro.png";
import image04 from "../images/image04.png";
import image05 from "../images/image05.png";
import image06 from "../images/image06.png";
import logo from "../images/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1000px;
  align-items: center;
`;

const HeroH1 = styled.h1`
  display: none;
`;

const HeroLogo = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 100px;
  position: absolute;
  z-index: 99;

  @media screen and (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
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
  grid-area: img;
  vertical-align: top;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const HeroSection = () => {
  return (
    <Container>
      <Wrapper>
        <HeroH1>手づくり肉まんの店パオ</HeroH1>
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
      </Wrapper>
    </Container>
  );
};

export default HeroSection;
