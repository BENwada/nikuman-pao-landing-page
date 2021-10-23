import styled from "styled-components";

export const ComingSoonContainer = styled.div`
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
`;

export const ComingSoonLogo = styled.img`
  position: absolute;
  padding: 30px 30px;
  width: 150px;
  height: 150px;
  z-index: 3;
`;

export const ComingSoonH1 = styled.h1`
  font-size: 48px;
  font-weight: 600;
  padding: 70px 0px 0px 200px;
  display: block;
  color: #fff;
  z-index: 1;
  position: absolute;
`;

export const ComingSoonImg = styled.img`
  width: 100%;
  height: 800px;
  object-fit: none;
  object-position: right bottom;
  z-index: 999;
`;
