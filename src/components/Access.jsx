import styled from "styled-components";
import MapImageP from "../images/map.svg";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 11px;
  } ;
`;

const MapDesc = styled.p`
  font-size: 1.5em;
  text-align: center;
  line-height: 2em;
  padding: 2em 0;
`;
const Map = styled.a`
  cursor: pointer;
`;
const MapImage = styled.img`
  width: 500px;
  margin-bottom: 6em;

  @media screen and (max-width: 768px) {
    width: 80vw;
    padding: 10px;
  } ;
`;

const Access = () => {
  return (
    <Container>
      <Wrapper>
        <MapDesc>
          ちょっとおなかが空いたとき。
          <br />ç 今日はたっぷり食べたいなというとき。
          <br />
          PAOはいつでもあなたの味方。
          <br />
          手づくりのおいしさをたくさん用意して
          <br />
          お待ちしております。
        </MapDesc>
        <Map href="https://goo.gl/maps/7pWxxpaexZzhgCKT6" target="_blank">
          <MapImage src={MapImageP} />
        </Map>
      </Wrapper>
    </Container>
  );
};

export default Access;
