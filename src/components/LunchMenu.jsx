import React from "react";
import styled from "styled-components";
import { ReactComponent as LunchA } from "../svg/lunchA.svg";
import { ReactComponent as LunchB } from "../svg/lunchB.svg";
import { ReactComponent as LunchC } from "../svg/lunchC.svg";
import { ReactComponent as LunchD } from "../svg/lunchD.svg";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: black;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    font-size: 9px;
  } ;
`;

const Title = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

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
  } ;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const LunchMenus = styled.div`
  margin: 20px;
  position: relative;

  h1 {
    font-family: "Zen Kaku Gothic New", sans-serif;
    position: absolute;
    top: 13px;
    left: 145px;
    font-size: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: white;

    span {
      font-size: 23px;
    }
  }
  h2 {
    width: 100%;
    font-family: "Zen Kaku Gothic New", sans-serif;
    position: absolute;
    font-size: 50px;
    line-height: 53px;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
    font-weight: 800;
    transform: scaleX(${({ scalex }) => scalex});
    text-align: center;
  }

  p {
    font-family: "Zen Kaku Gothic New", sans-serif;
    position: absolute;
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    top: 200px;
    left: 50%;
    text-align: center;
    color: orange;
    transform: translateX(-50%);
  }

  ul {
    position: absolute;
    bottom: 50px;
    font-size: 18px;
    list-style: none;
    left: 15%;

    li {
      font-family: "Zen Kaku Gothic New", sans-serif;
      font-weight: 600;
    }
  }
  h3 {
    font-family: "Zen Kaku Gothic New", sans-serif;
    position: absolute;
    font-size: 50px;
    right: 15px;
    bottom: 15px;

    span {
      font-family: "Zen Kaku Gothic New", sans-serif;
      font-size: 25px;
    }
    small {
      font-family: "Zen Kaku Gothic New", sans-serif;
      font-size: 25px;
      margin-left: -10px;
    }
  }
`;

const LunchMenu = () => {
  return (
    <Container>
      <Title>
        <h1>??????????????????</h1>
        <h2>
          ???????????????
          <br />
          <small> AM</small>11:00???<small>PM</small>15:00
        </h2>
        <p>?????????????????????????????????????????????????????????</p>
      </Title>
      <Wrapper>
        <LunchMenus top={140} left={6}>
          <h1>
            A<span>?????????</span>
          </h1>
          <LunchA height={"400px"} width={"350px"} />
          <h2>?????????</h2>
          <p>
            290???????????????
            <br />
            ??????????????????2???
          </p>
          <ul>
            <li>????????????????????????</li>
            <li>????????????????????????</li>
            <li>????????????</li>
          </ul>
          <h3>
            780<span>???</span>
            <small>????????????</small>
          </h3>
        </LunchMenus>
        <LunchMenus top={165} left={6}>
          <h1>
            B<span>?????????</span>
          </h1>
          <LunchB height={"400px"} width={"350px"} />
          <h2 top={0}>?????????</h2>
          <ul>
            <li>????????????????????????</li>
            <li>????????????????????????</li>
            <li>????????????</li>
          </ul>
          <h3>
            680<span>???</span>
            <small>????????????</small>
          </h3>
        </LunchMenus>
        <LunchMenus top={165} left={6}>
          <h1>
            C<span>?????????</span>
          </h1>
          <LunchC height={"400px"} width={"350px"} />
          <h2>
            ?????????
            <br />
          </h2>
          <ul>
            <li>????????????????????????</li>
            <li>????????????????????????</li>
            <li>????????????</li>
          </ul>
          <h3>
            780<span>???</span>
            <small>????????????</small>
          </h3>
        </LunchMenus>
        <LunchMenus top={138} left={8} scalex={0.8}>
          <h1>
            D<span>?????????</span>
          </h1>
          <LunchD height={"400px"} width={"350px"} />
          <h2>
            ?????????????????? <br />
            ????????????
          </h2>
          <ul>
            <li>????????????????????????</li>
            <li>????????????????????????</li>
            <li>????????????</li>
          </ul>
          <h3>
            780<span>???</span>
            <small>????????????</small>
          </h3>
        </LunchMenus>
      </Wrapper>
    </Container>
  );
};

export default LunchMenu;
