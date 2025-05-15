import styled from "styled-components";
import { LunchMenuData } from "../data";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: black;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  @media screen and (max-width: 480px) {
    font-size: 9px;
  }
`;

const Title = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  h1 {
    font-size: 5.5em;
    line-height: 110%;
    margin-bottom: 10px;
  }

  h2 {
    text-align: center;
    font-size: 2.5em;
    line-height: 110%;
    small {
      font-size: 0.8em;
    }
  }

  p {
    font-size: 1.5em;
  }

  @media screen and (min-width: 780px) {
    br {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: white;
  display: flex;
  flex-direction: column
  gap: 20px;

  @media screen and (max-width: 780px) {
  padding: 10px 0;
  }
`;

const LunchMenus = styled.div`
  display: flex;
  // flex-direction: ${(props) => (props.id % 2 !== 0 ? "row-reverse" : "row")};

  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
  }
`;

const LunchMenuImage = styled.div`
  width: 100%;
  height: 100%;
  flex: 2;
  padding: -20px 0;

  img {
    width: 100%;
    height: 110%;
    object-fit: cover;
  }
  justify-content: center;
`;

const LunchMenuContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;

  h1 {
    font-size: 30px;
    line-height: 40px;
    color: black;
    font-feature-settings: "palt";
    span {
      font-size: 23px;
    }
  }
  ul {
    font-size: 18px;
    list-style: none;
    left: 15%;

    li {
      font-family: "Zen Kaku Gothic New", sans-serif;
      font-weight: 500;
    }
  }

  h3 {
    font-size: 2rem;

    span {
      font-family: "Zen Kaku Gothic New", sans-serif;
      font-size: 20px;
    }
    small {
      font-family: "Zen Kaku Gothic New", sans-serif;
      font-size: 25px;
    }
  }
  @media screen and (max-width: 780px) {
    h1 {
      font-size: 3em;
      color: black;
      font-feature-settings: "palt";
    }
    div {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 20px;
    }
  }
`;

const LunchMenu = () => {
  return (
    <Container>
      <Title>
        <h1>パオのランチ</h1>
        <h2>
          水曜〜金曜
          <br />
          <small> AM</small>11:00〜<small>PM</small>14:30
        </h2>
        <p>※土・日・祝はランチメニューはお休みさせていただきます。</p>
      </Title>
      {LunchMenuData.map((item) => (
        <Wrapper key={item.id}>
          <LunchMenus id={item.id}>
            <LunchMenuImage>
              <img src={item.img} alt={item.name} />
            </LunchMenuImage>
            <LunchMenuContent>
              <h1>{item.name}</h1>
              <div>
                <ul>
                  {item.setContents.map((content) => (
                    <li key={content}>●{content}</li>
                  ))}
                </ul>
                <h3>
                  {item.price}
                  <small>円</small>
                  <span>{item.tax}</span>
                </h3>
              </div>
            </LunchMenuContent>
          </LunchMenus>
        </Wrapper>
      ))}
    </Container>
  );
};

export default LunchMenu;
