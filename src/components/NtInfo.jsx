import { ReactComponent as Balloon } from "../svg/nt-balloon.svg";
import { ReactComponent as PaoDrank } from "../svg/paoCarInfo.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  gap: 30px;

  @media screen and (min-width: 780px) {
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;

  @media screen and (min-width: 780px) {
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-weight: 900;
  font-size: 34px;
  letter-spacing: initial;
  color: #6f2d37;
  line-height: 78px;

  @media screen and (min-width: 780px) {
    font-size: 60px;
  }

  @media screen and (max-width: 780px) {
    br {
      display: none;
    }
  }
`;

const Char = styled.div`
  position: relative;
  display: flex;

  gap: 10px;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  p {
    position: absolute;
    font-family: "Zen Kaku Gothic New", sans-serif;
    font-weight: 900;
    color: white;
    font-size: 31px;
    line-height: 34px;
    top: 20px;
    text-justify: distribute;
  }
  span {
    color: #f7e000;
    font-family: "Zen Kaku Gothic New", sans-serif;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Disc = styled.p`
  margin-top: -40px;
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;

  @media screen and (min-width: 780px) {
    br {
      display: none;
    }
    margin: -15px auto 20px auto;
    font-size: 20px;
  }
`;

const NtInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          夜の営業
          <br />
          始めました。
        </Title>
        <Char>
          <Left>
            <Balloon />
            <p>
              その名も
              <br />
              <span>“ほろ酔パオ”</span>
            </p>
          </Left>
          <Right>
            <PaoDrank />
          </Right>
        </Char>
      </Wrapper>
      <Disc>
        自家製の中華一品料理を中心に
        <br />
        手打ち麺を使った麺料理もご提供！
        <br />
        もちろんおいしいお酒もご用意しております！
      </Disc>
    </Container>
  );
};

export default NtInfo;
