import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoContainer = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #210842;
`;

const InformationLink = styled(Link)`
  width: 100vw;
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

const Information = styled.div`
  width: 100vw;
  height: 100%;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Info = () => {
  return (
    <>
      <InfoContainer>
        <InformationLink to="/night-part">
          <Information>
            5月12日から夜の営業がスタートします。ページ増設中！
          </Information>
        </InformationLink>
      </InfoContainer>
    </>
  );
};

export default Info;
