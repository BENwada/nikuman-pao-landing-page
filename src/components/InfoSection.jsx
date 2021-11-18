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
`;

const Images = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 800px;
  height: 300px;
  padding: 20px;
  object-fit: cover;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentH1 = styled.h1`
  text-align: center;

  font-size: 2.5em;
`;

const ContentP = styled.p`
  text-align: center;
  font-size: 1.5em;
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
            餃子、シューマイ等の点心から、エビチリ、麻婆豆腐等の一品料理、
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
