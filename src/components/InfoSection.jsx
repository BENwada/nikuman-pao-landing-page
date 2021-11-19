import styled from "styled-components";
import thaShu from "../images/tha-shu.jpg";
import shumai from "../images/shumai.jpg";
import maBo from "../images/ma-bo.jpg";
import ebichiri from "../images/ebichiri.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  font-size: 14px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;

  @media screen and (max-width: 480px) {
    font-size: 9px;
  } ;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 0px;
  } ;
`;

const Images = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    width: 80%;
    padding: 10px;
  } ;
`;

const Image = styled.img`
  height: 100%;
  width: 500px;
  padding: 10px;

  @media screen and (max-width: 480px) {
    width: 45vw;
    padding: 5px;
  } ;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ContentH1 = styled.h1`
  text-align: center;

  font-size: 2.2em;
`;

const ContentP = styled.p`
  text-align: center;
  font-size: 1.3em;
  line-height: 2em;
`;

const InfoSection = () => {
  return (
    <Container>
      <Wrapper>
        <Images>
          <Image src={thaShu} alt="チャーシュー" />
          <Image src={shumai} alt="シュウマイ" />
        </Images>
        <Contents>
          <ContentH1>点心や一品料理も取り揃えております。</ContentH1>
          <ContentP>
            餃子、シューマイ等の点心から、
            <br />
            エビチリ、麻婆豆腐等の一品料理、
            <br />
            そしてデザートまで豊富なメニューがございます。
          </ContentP>
        </Contents>
        <Images>
          <Image src={maBo} alt="麻婆豆腐" />
          <Image src={ebichiri} alt="エビチリ" />
        </Images>
      </Wrapper>
    </Container>
  );
};

export default InfoSection;
