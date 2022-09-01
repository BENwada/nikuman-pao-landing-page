import { ReactComponent as NightTime } from "../svg/nightTime.svg";
import { ReactComponent as Rogo } from "../svg/rogo.svg";
import { ReactComponent as SyuboRogo } from "../svg/syuboRogo.svg";
import { ReactComponent as NtTitle } from "../svg/ntTitle.svg";
import bgImg from "../images/blendImg.webp";
import image1 from "../images/ma-bo-nas-img.webp";
import image2 from "../images/ankakeyakisoba-img.webp";
import image3 from "../images/ma-ra-men-img.webp";
import image4 from "../images/yodaredori-img.webp";
import image5 from "../images/beel.webp";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
// import "./ntHeader.css";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: url(${bgImg}), #6f2d37;
  background-blend-mode: multiply;
  background-repeat: repeat;
  overflow: hidden;
  z-index: 0;
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
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.4);

  z-index: 10;
`;

const NightLink = styled(Link)`
  width: 120px;
  height: 40px;
  padding: 5px;
  font-size: 12px;
  text-decoration: none;
  color: #000;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: white;

  :hover {
    background-color: #c4ceee;
  }
`;

const Wrapper = styled.div`
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 0px;
  flex-direction: column;
  gap: 30px;
`;

const Logos = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  z-index: 1;
`;

const Images = styled.div`
  overflow: hidden;
  z-index: 2;
`;

const Img1 = styled.img`
  position: absolute;
  top: -50px;
  left: -80px;
  width: 60%;
  max-width: 350px;
  opacity: 0.7;
`;

const Img2 = styled.img`
  position: absolute;
  top: 30%;
  left: -80px;
  width: 50%;
  max-width: 350px;
  opacity: 0.7;

  @media screen and (min-width: 800px) {
    left: 8%;
    top: 33%;
  }
`;

const Img3 = styled.img`
  position: absolute;
  top: 35%;
  right: -70px;
  width: 50%;
  max-width: 350px;
  opacity: 0.7;

  @media screen and (min-width: 800px) {
    right: 2%;
    top: 23%;
  }
`;

const Img4 = styled.img`
  position: absolute;
  top: 700px;
  left: -80px;
  width: 60%;
  max-width: 400px;
  opacity: 0.7;
`;

const Img5 = styled.img`
  position: absolute;
  top: 630px;
  right: -70px;
  width: 60%;
  max-width: 400px;

  @media screen and (min-width: 800px) {
    right: 12%;
  }
`;

const NtHeader = () => {
  return (
    <Container>
      <SwitchPage>
        <NightTime height={"60px"} />
        <NightLink to="/">
          Daytime part
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </NightLink>
      </SwitchPage>
      <Wrapper>
        <Logos className="nt-logo">
          <Rogo />
          <SyuboRogo />
          <NtTitle />
        </Logos>
        <Images className="images">
          <Img1 src={image1} alt="麻婆茄子" />
          <Img2 src={image2} alt="五目あんかけ焼きそば" />
          <Img3 src={image3} alt="麻辣麺" className="image3" />
          <Img4 src={image4} alt="よだれ鶏" className="image4" />
          <Img5 src={image5} alt="ビール" className="image5" />
        </Images>
      </Wrapper>
    </Container>
  );
};

export default NtHeader;
