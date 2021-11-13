import styled from "styled-components";
import main from "../images/bg.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
  max-width: 100vw;
  background-color: black;

  @media screen and (max-width: 765px) {
    height: 300px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 1000px;
  max-width: 1000px;
`;

const MainImg = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

const Img = styled.img`
  object-fit: cover;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: auto;
  /* position: relative; */
  height: 100%;
  width: 80%;
  vertical-align: top;
`;

const HeroContent = styled.div`
  margin: auto;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 100;
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

const MainImage = () => {
  return (
    <Container>
      <Wrapper>
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
        <MainImg>
          <Img src={main} />
        </MainImg>
      </Wrapper>
    </Container>
  );
};

export default MainImage;
