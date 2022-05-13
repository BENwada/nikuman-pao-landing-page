import React from "react";
import NightPao from "../images/paonight.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoContent = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
`;

const NcWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`;

const NightPartH1 = styled.h1`
  color: #ddd;
  margin: 10px auto;
  font-size: 25px;
`;
const MenuImg = styled.img`
  width: 100%;
  height: 100%;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  margin-top: 20px;
  padding: 30px;
  text-align: center;
  color: #ddd;
  border: 1px solid #ddd;
  text-decoration: none;

  > p {
    font-size: 19px;
  }

  &:hover {
    opacity: 80%;
  }
`;

const NightPart = () => {
  return (
    <div>
      <NoContent>
        <NcWrapper>
          <MenuImg src={NightPao} />
          <NightPartH1>ほろ酔いパオ情報ページ制作中！</NightPartH1>
          <NavLink to="/">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <p>お昼の情報はこちら</p>
          </NavLink>
        </NcWrapper>
      </NoContent>
    </div>
  );
};

export default NightPart;
