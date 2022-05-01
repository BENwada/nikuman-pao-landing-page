import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoContainer = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #330f61;
`;

const InformationLink = styled.div`
  width: 100vw;
  height: 100%;
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-item: center;
  justify-content: center;
`;

const Information = styled.span`
  margin-top: 10px;
  font-size: 16px;

  @media screen and (max-width: 480px) {
    margin-top 13px;
    font-size: 14px;
  } ;
`;

const Info = () => {
  return (
    <>
      <InfoContainer>
        <Link to="/night-part" style={{ textDecoration: "none" }}>
          <InformationLink>
            <Information>
              5月12日から夜の営業がスタートします。ページ増設中！
            </Information>
          </InformationLink>
        </Link>
      </InfoContainer>
    </>
  );
};

export default Info;
