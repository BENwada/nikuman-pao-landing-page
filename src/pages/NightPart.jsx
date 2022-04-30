import React from "react";
import NightPao from "../images/paonight.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NoContent = styled.div`
  width: 100vw;
  height: 100%;
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

const MenuImg = styled.img`
  width: 100%;
  height: 100%;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  margin-top: 20px;
  padding: 30px;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
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
          <NavLink to="/">
            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /> */}
            <p>お昼の情報はこちら</p>
          </NavLink>
        </NcWrapper>
      </NoContent>
    </div>
  );
};

export default NightPart;
