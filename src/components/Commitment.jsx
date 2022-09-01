import styled from "styled-components";
import titleBgW from "../images/titleBg-w.svg";

const Container = styled.div`
  font-family: "RocknRoll One", sans-serif;
  font-size: 14px;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  align-items: center;

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

const CommitmentContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  padding: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3ede7;

  @media screen and (max-width: 480px) {
    padding: 2em 1em;
  } ;
`;

const CommitmentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  @media screen and (max-width: 370px) {
    flex-direction: column;
  }
`;

const CommitmentH1 = styled.h1`
  font-size: 2.5em;
  color: #1e55c8;

  &::before {
    content: "\\\\";
    font-size: 1em;
    font-family: "Courier New", Courier, monospace;
    font-weight: lighter;
    padding: 0 0.3em;
  }

  &::after {
    content: "/";
    font-size: 1em;
    font-family: "Courier New", Courier, monospace;
    font-weight: lighter;
    padding: 0 0.3em;
  }
`;

const Left = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 2em;
`;

const LeftH2 = styled.h2`
  color: #1e55c8;
  font-size: 2em;
  text-align: center;
  position: absolute;
  top: 18%;
  line-height: 1.5em;
`;

const LeftCharacter = styled.img`
  width: 15em;

  @media screen and (max-width: 480px) {
    width: 40vw;
    padding: 7px;
  }

  @media screen and (max-width: 370px) {
    width: 48vw;
  }
`;

const LeftDisc = styled.p`
  text-align: center;
  margin-top: 1.2em;
  font-size: 1.3em;
  line-height: 2em;

  @media screen and (max-width: 480px) {
    margin-top: 1em;
    line-height: 2em;
  } ;
`;

const Right = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 2em;
`;

const RightH2 = styled.h2`
  color: #1e55c8;
  font-size: 2em;
  text-align: center;
  position: absolute;
  top: 18%;
  line-height: 1.5em;
`;

const RightCharacter = styled.img`
  width: 15em;

  @media screen and (max-width: 480px) {
    width: 40vw;
    padding: 7px;
  }

  @media screen and (max-width: 370px) {
    width: 48vw;
  }
`;

const RightDisc = styled.p`
  text-align: center;
  margin-top: 1.2em;
  font-size: 1.3em;
  line-height: 2em;

  @media screen and (max-width: 480px) {
    margin-top: 1em;
    line-height: 2em;
  } ;
`;

const InfoSection = () => {
  return (
    <Container>
      <CommitmentContainer>
        <CommitmentH1>PAOのこだわり</CommitmentH1>
        <CommitmentWrapper>
          <Left>
            <LeftH2>
              手づくりの
              <br />
              やさしさ
            </LeftH2>
            <LeftCharacter src={titleBgW} alt="パオキャラクター" />
            <LeftDisc>
              PAOの料理は
              <br />
              中国の素朴な家庭の味。
              <br />
              手づくりのやさしい味です。
            </LeftDisc>
          </Left>
          <Right>
            <RightH2>
              生地の
              <br />
              もちもち感
            </RightH2>
            <RightCharacter src={titleBgW} alt="パオキャラクター" />
            <RightDisc>
              中華まんの生地も手づくり。
              <br />
              もちもちっとした食感を
              <br />
              お楽しみください。
            </RightDisc>
          </Right>
        </CommitmentWrapper>
      </CommitmentContainer>
    </Container>
  );
};

export default InfoSection;
