import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import MapImageP from "../svg/map.svg";
import { ReactComponent as ShopInfo } from "../svg/shopInfo.svg";
import { ReactComponent as ContactAdd } from "../svg/contactAddress.svg";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  line-height: 1.7em;
  padding: 2em 0;
`;
const Map = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 5px;
  margin-bottom: 30px;
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
  align-items: center;
  flex-direction: column;
  background: black;
  gap: 30px;
  padding: 20px 10px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

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
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;

  small {
    color: white;
    font-size: 14px;
  }
`;

const NtFooter = () => {
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
          <ShopInfo />
          <Reserve href="tel:0249549980">
            <ContactAdd width={"100%"} />
          </Reserve>
        </AddressBox>
      </Wrapper>
      <Copyright>
        <small>© 2021 手づくり肉まんの店パオ</small>
      </Copyright>
    </Container>
  );
};

export default NtFooter;
