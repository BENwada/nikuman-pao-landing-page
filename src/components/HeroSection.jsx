import styled from "styled-components";
import image01 from "../images/image01.png";
import image02 from "../images/image02.png";
import image03 from "../images/BG-seiro.png";
import image04 from "../images/image04.png";
import image05 from "../images/image05.png";
import image06 from "../images/image06.png";
import logo from "../images/logo.svg";
import main from "../images/bg.png";
import { ReactComponent as DayTime } from "../svg/DayTime.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 100%;
  width: 100vw;
  position: relative;
`;

const SwitchPage = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  gap: 10px;
  padding: 10px;
  top: 0px;
  right: 0px;
  border-bottom-left-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  transition: 0.5s;
  z-index: 10;
`;

const NightLink = styled(Link)`
  width: 120px;
  height: 40px;
  padding: 5px;
  font-size: 13px;
  text-decoration: none;
  color: white;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #6f2d37;

  :hover {
    background-color: #8a3542;
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
    margin-top: 110px;
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
  height: 400px;
  width: 100%;
  background-image: url(${main});
  background-size: contain;
  background-position: right 0 bottom 0%;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
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

const HeroSection = () => {
  return (
    <Container>
      <SwitchPage>
        <DayTime height={"50px"} />
        <NightLink to="night-part">
          Night Part
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </NightLink>
      </SwitchPage>
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
      </MainWrapper>
    </Container>
  );
};

export default HeroSection;
