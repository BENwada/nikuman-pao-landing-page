import styled from "styled-components";
import thaShu from "../images/tha-shu.webp";
import shumai from "../images/shumai.webp";
import maBo from "../images/ma-bo.webp";
import ebichiri from "../images/ebichiri.webp";

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
    padding: 10px;
  } ;
`;

const Images = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1em;
  column-gap: 1em;

  @media screen and (max-width: 480px) {
    padding: 5px;
  }

  @media screen and (max-width: 370px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 49%;
  height: 100%;
  height: 100%auto;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    width: 40vw;
  }
  @media screen and (max-width: 370px) {
    width: 80vw;
  }
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
