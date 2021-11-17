import styled from "styled-components";
import Character from "../images/h1Bg.svg";
import Bubble from "../images/bubble.svg";
import { BurgerMenuData } from "../data";

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
  margin-bottom: 80px;
  }
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
  width: 100%;
  max-width: 1000px;
  flex-direction: ${(props) => (props.id % 2 !== 0 ? "row-reverse" : "row")};
  margin: ${(props) => (props.id % 2 !== 0 ? "0 0 0 -100px" : "0 -100px 0 0")};
  &:not(first-child) {
    margin-top: -55px;
  }
`;

const MenuContentContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.id % 2 === 0 ? "flex-end" : "flex-start"};
  margin-top: 5em;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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
  margin-bottom: -0.3em;

  &::after {
    content: url(${(props) =>
      props.hard === "true" ? "../images/hard.svg" : ""});
    vertical-align: middle;
    padding-left: 5px;
  }
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
`;

const MenuImg = styled.img`
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const MenuRecommend = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  right: ${(props) => (props.id % 2 !== 0 ? "0" : "")};
  left: ${(props) => (props.id % 2 !== 0 ? "" : "0")};
  display: flex;
  position: absolute;
  display: ${(props) => (props.recommendation === "false" ? "none" : "0")};
`;

const SpeechBubble = styled.img`
  height: 3em;
  transform: scale(${(props) => (props.id % 2 !== 0 ? "" : "-1, 1")});
`;

const Speech = styled.p`
  font-family: "RocknRoll One", sans-serif;
  font-weight: ;
  color: white;
  font-size: 1.08em;
  margin-left: 0.6em;
  margin-top: 0.4em;
  position: absolute;
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
              <MenuContentWrapper key={index} id={item.id}>
                <MenuContentContainer id={item.id}>
                  <ContentWrapper>
                    <Description>
                      {item.descriptionLine1}
                      <br />
                      {item.descriptionLine2}
                    </Description>
                    <MenuName hard={item.hard}>{item.name}</MenuName>
                    <Price>
                      {item.price}
                      <Tax>円（税込）</Tax>
                    </Price>
                  </ContentWrapper>
                </MenuContentContainer>
                <MenuImageWrapper>
                  <MenuImg src={item.image} id={item.id} alt={item.alt} />
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
      </Wrapper>
    </Container>
  );
};

export default Menu;
