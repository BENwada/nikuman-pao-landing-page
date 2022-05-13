import { faMap, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 5px;
`;
const MapImage = styled.img`
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 80vw;
    padding: 10px;
  } ;
`;
const AddressBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 40px 0px 60px 0px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 40px;
  }
`;

const OpeningInfo = styled.div``;

const Title = styled.h3`
  font-size: 25px;
  margin-bottom: 5px;
  font-weight: bold;
`;

const OpeningItem = styled.p`
  font-size: 18px;
  line-height: center;
  span {
    font-weight: bold;
  }
`;

const ReserveBox = styled.div``;

const Reserve = styled.a`
  font-size: 25px;
  text-decoration: none;
  color: #a90606;
  span {
    margin-left: 5px;
  }
`;

const Copyright = styled.div`
  width: 100vw;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  small {
    color: white;
    font-size: 14px;
  }
`;

const Access = () => {
  return (
    <Container>
      <Wrapper>
        <MapDesc>
          ちょっとおなかが空いたとき。
          <br />
          今日はたっぷり食べたいなというとき。
          <br />
          PAOはいつでもあなたの味方。
          <br />
          手づくりのおいしさをたくさん用意して
          <br />
          お待ちしております。
        </MapDesc>
        <Map href="https://goo.gl/maps/7pWxxpaexZzhgCKT6" target="_blank">
          <MapImage src={MapImageP} />
          <span>
            Google Mapで見る
            <FontAwesomeIcon icon={faMap} />
          </span>
        </Map>
        <AddressBox>
          <OpeningInfo>
            <Title>営業時間</Title>
            <OpeningItem>
              <span>◎昼 </span>: 11:00〜15:00
            </OpeningItem>
            <OpeningItem>
              <span>◎夜 </span>: 17:30〜21:00
            </OpeningItem>
            <OpeningItem>
              <span>定休日 </span>: 月曜日・火曜日
            </OpeningItem>
          </OpeningInfo>
          <ReserveBox>
            <Title>お問い合わせ / ご予約</Title>
            <Reserve href="tel:024-954-9980">
              <FontAwesomeIcon icon={faPhoneVolume} />
              <span>024-954-9980</span>
            </Reserve>
          </ReserveBox>
        </AddressBox>
      </Wrapper>
      <Copyright>
        <small>© 2021 手づくり肉まんの店パオ</small>
      </Copyright>
    </Container>
  );
};

export default Access;
