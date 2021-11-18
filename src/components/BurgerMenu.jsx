import styled from "styled-components";
import Character from "../images/h1Bg.svg";
import Bubble from "../images/bubble.svg";
import { BurgerMenuData } from "../data";
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
    font-size: 17px;
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
  margin-bottom: 60px;
`;

const MenuH1 = styled.h1`
  font-family: "RocknRoll One", sans-serif;
  font-size: 1em;
  text-align: center;
  color: #fff;
  font-weight: normal;
  margin-top: 2em;
  line-height: 1.3em;
  position: absolute;
`;

const MenuCharacter = styled.img`
  height: 6em;
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

const MenuP = styled.p`
  font-family: "RocknRoll One", sans-serif;
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
  /* margin: ${(props) =>
    props.id % 2 !== 0 ? "0 0 0 -100px" : "0 -100px 0 0"}; */
  &:not(first-child) {
    margin-top: -30px;
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
`;

const Description = styled.p`
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-size: 0.7em;
`;

const MenuName = styled.h2`
  font-family: "RocknRoll One", sans-serif;
  font-size: 1.2em;
  color: #f83d05;
  font-weight: normal;
  line-height: 1.2em;
  margin-bottom: -0.3em;

  &::after {
    content: url(${(props) =>
      props.hard === "true" ? "../images/hard.svg" : ""});
    vertical-align: middle;
    padding-left: 5px;
`;

const Price = styled.h3`
  font-family: "RocknRoll One", sans-serif;
  display: flex;
  align-items: baseline;
  font-weight: normal;
  font-size: 1.4em;
`;

const Tax = styled.p`
  font-family: "RocknRoll One", sans-serif;
  font-size: 0.6em;
`;

const MenuImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: ${(props) =>
    props.id % 2 !== 0 ? "flex-end" : "flex-start"};
`;

const MenuImg = styled.img`
  width: 500px;
  margin: 15px;

  @media screen and (max-width: 768px) {
    width: 300px;
    margin: ${(props) =>
      props.id % 2 !== 0 ? "0 0 0 -100px" : "0 -100px 0 0"};
  }
`;

const MenuRecommend = styled.div`
  position: absolute;
  display: ${(props) => (props.recommendation === "false" ? "none" : "0")};
`;

const SpeechBubble = styled.img`
  height: 3em;
  transform: scale(${(props) => (props.id % 2 !== 0 ? "" : "-1, 1")});
`;

const Speech = styled.p`
  font-family: "RocknRoll One", sans-serif;
  font-weight: normal;
  top: 0;
  left: 0.6em;
  color: white;
  font-size: 1.08em;
  margin-top: 0.4em;
  position: absolute;
`;

const MenuInfo = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -3em;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const PandaCharacter = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
const CharacterImg = styled.img`
  height: 300px;

  @media screen and (max-width: 768px) {
    height: 120px;
  }
`;

const Info = styled.div`
  flex: 3;
  height: 100%;
  padding-bottom: 3em;

  @media screen and (max-width: 768px) {
    padding-bottom: 2em;
  }
`;

const InfoText = styled.p`
  font-family: "RocknRoll One", sans-serif;
  text-align: center;

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
            PAO風
            <br />
            バーガー
          </MenuH1>
          <MenuCharacter src={Character} />
          <MenuP>
            もちもちの生地で
            <br />
            人気の中華をサンドした
            <br />
            オリジナルバーガー
          </MenuP>
        </MenuH1Wrapper>
        <MenuContainer>
          {BurgerMenuData.map((item, index) => {
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
                      {item.nameLine1}
                      <br />
                      {item.nameLine2}
                    </MenuName>
                    <Price>
                      {item.price}
                      <Tax>円（税込）</Tax>
                    </Price>
                  </ContentWrapper>
                </MenuContentContainer>
                <MenuImageWrapper id={item.id}>
                  <MenuImg src={item.image} alt={item.alt} id={item.id} />
                  <MenuRecommend
                    recommendation={item.recommendation}
                    id={item.id}
                  >
                    <SpeechBubble src={Bubble} id={item.id} />
                    <Speech>おすすめ</Speech>
                  </MenuRecommend>
                </MenuImageWrapper>
              </MenuContentWrapper>
            );
          })}
        </MenuContainer>
        <MenuInfo>
          <PandaCharacter>
            <CharacterImg src={Character1} />
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
