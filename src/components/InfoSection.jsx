import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import nightPartImg from "../images/horoyoImg.png";

const Container = styled.div`
  width: 100vw;
  background-color: #000;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  background-image: linear-gradient(
    0deg,
    rgba(79, 6, 134, 1),
    rgba(4, 26, 76, 1) 99%
  );
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
`;

const Title = styled.h2`
  color: white;
  font-size: 28px;

  span {
    font-size: 40px;
  }
`;

const Description = styled.p`
  color: white;
  margin: 20px 0px;
  font-size: 16px;
  font-weight: light;
`;

const InfoButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  width: 200px;
  padding: 10px;
  background-color: #a90606;
  border: none;
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  &:hover {
    background-color: #ba0a0a;
  }
`;
const InfoLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const InfoImg = styled.img`
  width: 100%;
`;

const InfoSection = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>
            夜の営業は<span>「ほろ酔いパオ」</span> に変身！
          </Title>
          <Description>
            パオ特製の一品料理を中心に、自家製麺を使った麺料理やお酒を提供します。
          </Description>
          <InfoLink to="/night-part">
            <InfoButton>
              ほろ酔いパオ
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </InfoButton>
          </InfoLink>
        </Left>
        <Right>
          <InfoImg src={nightPartImg}></InfoImg>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default InfoSection;
