import styled from "styled-components";
import Character from "../images/h1Bg.svg";
import Bubble from "../images/bubble.svg";
import { MenuData } from "../data";
import Character1 from "../images/chara1.svg";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #000;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  overflow: hidden;
  font-size: 23px;

  @media screen and (max-width: 768px) {
    font-size: 19px;
  }
`;

const MenuH1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 30px;
  margin-bottom: 80px;

  @media screen and (max-width: 370px) {
    margin-bottom: 10px;
  }
`;

const MenuH1 = styled.h1`
  font-size: 1.2em;
  text-align: center;
  color: #fff;
  font-weight: normal;
  top: 1.5em;
  line-height: 1.3em;
  position: absolute;

  @media screen and (max-width: 768px) {
    top: 1.2em;
  }
`;

const MenuCharacter = styled.img`
  height: 6em;
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

const MenuP = styled.p`
  font-weight: normal;
  margin-top: 20px;
  font-size: 0.9em;
  line-height: 1.8em;
  text-align: center;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
  max-width: 1000px;
  flex-direction: ${(props) => (props.id % 2 !== 0 ? "row-reverse" : "row")};

  &:not(first-child) {
    margin-top: -40px;
  }
  @media screen and (max-width: 370px) {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    &:not(first-child) {
      margin-top: 0px;
      margin-bottom: 30px;
    }
  }
`;

const MenuContentContainer = styled.div`
  flex: 5;
  height: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.id % 2 === 0 ? "flex-end" : "flex-start"};
`;

const ContentWrapper = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 13px;
  position: relative;
`;

const Description = styled.p`
  font-family: "Zen-Kaku-Gothic New", sans-serif;
  font-size: 0.7em;
  font-feature-settings: "palt";
`;

const MenuName = styled.h2`
  font-size: 1.2em;
  color: #f83d05;
  font-weight: normal;
  line-height: 1.2em;
  margin-top: 0.1em;
  position: relative;

  &::after {
    content: url(${(props) => props.hard === "on" && "../images/hard.svg"});
    display: ${(props) => props.hard === "off" && "none"};
    top: 0.2em;
    right: 0em;
    position: absolute;
  }
`;

const Ruby = styled.p`
  font-size: 0.4em;
  line-height: 100%;
  position: relative;
  top: 0.3em;
`;

const Price = styled.h3`
  display: flex;
  align-items: baseline;
  font-weight: normal;
  font-size: 1.4em;
`;

const Tax = styled.p`
  font-size: 0.6em;

  small {
    margin-left: -0.4em;
  }
`;

const MenuImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: ${(props) =>
    props.id % 2 !== 0 ? "flex-end" : "flex-start"};
`;

const MenuImg = styled.img`
  width: 500px;
  margin: 0 15px;

  @media screen and (max-width: 768px) {
    margin: ${(props) =>
      props.id % 2 !== 0 ? "0 0 0 -100px" : "0 -100px 0 0"};
    width: 300px;
  }

  @media screen and (max-width: 370px) {
    margin: 0 auto;
  }
`;

const MenuRecommend = styled.div`
  position: absolute;
  display: ${(props) => props.recommendation === "off" && "none"};
`;

const SpeechBubble = styled.img`
  height: 3em;
  transform: scale(${(props) => (props.id % 2 !== 0 ? "" : "-1, 1")});
`;

const Speech = styled.p`
  font-weight: normal;
  top: 0;
  left: 0.6em;
  color: white;
  font-size: 1.08em;
  margin-top: 0.4em;
  position: absolute;
`;

const MenuInfo = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: flex-end;
  background-color: white;
`;

const PandaCharacter = styled.div`
  margin-left: 20px;
`;
const CharacterImg = styled.img`
  height: 200px;

  @media screen and (max-width: 780px) {
    height: 120px;
  }
`;

const Info = styled.div`
  flex: 3;
  height: 100%;
  width: 100%;
  padding-bottom: 3em;

  @media screen and (max-width: 768px) {
    padding-bottom: 1em;
  }
`;

const InfoText = styled.p`
  padding: 10px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 0.7em;
  }
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <MenuH1Wrapper>
          <MenuH1>
            手づくり
            <br />
            中華まん
          </MenuH1>
          <MenuCharacter src={Character} alt="パオキャラクター" />
          <MenuP>
            ふっくら、もちもち、
            <br />
            毎日生地から練り上げる
            <br />
            PAO自慢の味！
          </MenuP>
        </MenuH1Wrapper>
        <MenuContainer>
          {MenuData.map((item) => {
            return (
              <MenuContentWrapper key={item.id} id={item.id}>
                <MenuContentContainer id={item.id}>
                  <ContentWrapper>
                    <Description>
                      {item.descriptionLine1}
                      <br />
                      {item.descriptionLine2}
                    </Description>
                    <MenuName hard={item.hard}>
                      <Ruby>{item.ruby}</Ruby>
                      {item.name}
                      {item.nameLine1}
                      <br />
                      {item.nameLine2}
                    </MenuName>
                    <Price key={item.id}>
                      {item.price}
                      <Tax>
                        円<small>（税込）</small>
                      </Tax>
                    </Price>
                  </ContentWrapper>
                </MenuContentContainer>
                <MenuImageWrapper id={item.id}>
                  <MenuImg src={item.image} alt={item.alt} id={item.id} />
                  <MenuRecommend
                    recommendation={item.recommendation}
                    id={item.id}
                  >
                    <SpeechBubble src={Bubble} id={item.id} alt="吹き出し" />
                    <Speech>おすすめ</Speech>
                  </MenuRecommend>
                </MenuImageWrapper>
              </MenuContentWrapper>
            );
          })}
        </MenuContainer>
        <MenuInfo>
          <PandaCharacter>
            <CharacterImg src={Character1} alt="パオキャラクター" />
          </PandaCharacter>
          <Info>
            <InfoText>●この他にもメニューがたくさんございます。</InfoText>
          </Info>
        </MenuInfo>
      </Wrapper>
    </Container>
  );
};

export default Menu;
