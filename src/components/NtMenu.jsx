import maBoNas from "../images/ma-bo-nas.png";
import maRaMen from "../images/ma-ra-men.png";
import yodaredori from "../images/yodaredori.png";
import ankakeyakisoba from "../images/ankakeyakisoba.png";
import { ReactComponent as Hard } from "../svg/hard.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #020202;

  padding: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Zen Kaku Gothic New", sans-serif;
  color: #fcef73;
  display: flex;
  justify-content: center;
  font-size: 23px;
  margin-bottom: 20px;

  @media screen and (min-width: 780px) {
    br {
      display: none;
    }
    font-size: 30px;
    margin: 30px 0;
  }
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 800px;
    margin-left: -150px;
  }

  .ma-bo-nas {
    margin-top: -120px;
  }

  .yodaredori {
    margin-top: -140px;
  }

  @media screen and (min-width: 780px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  img {
    width: 800px;
    margin-right: -150px;
  }

  .ma-ra-men {
    margin-top: -20px;
  }

  .ankakeyakisoba {
    margin-top: -50px;
  }
  @media screen and (min-width: 780px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const Price = styled.div`
  bottom: 0;
  color: white;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 40px;
    line-height: 45px;
    margin-bottom: 5px;

    rt {
      font-size: 15px;
      line-height: 17px;
    }
  }
  .hard {
    display: flex;
    gap: 10px;
    font-size: 40px;
  }

  h3 {
    margin-top: -20px;
    font-size: 78px;
    font-family: "Zen Kaku Gothic New", sans-serif;
    color: #d20000;

    span {
      font-size: 40px;
      line-height: 40px;
      margin-left: -5px;

      rt {
        font-size: 13px;
      }
    }
  }

  h4 {
    font-size: 25px;
  }

  p {
    font-size: 16px;
  }
`;

const NtMenu = () => {
  return (
    <Container>
      <Title>
        夜限定メニューもいろいろ！
        <br />
        ごゆっくりお楽しみください。
      </Title>
      <Wrapper>
        <Left>
          <img src={maBoNas} alt="麻婆茄子" />
          <Price className="ma-bo-nas">
            <h2>
              <ruby>
                麻<rt>マー</rt>婆<rt>ボー</rt>茄<rt>な</rt>子<rt>す</rt>
              </ruby>
            </h2>
            <p className="desc">
              <ruby>
                甜麺醤<rt>てんめんじゃん</rt>
              </ruby>
              と
              <ruby>
                豆板醤<rt>とうばんじゃん</rt>
              </ruby>
              の特製ダレで
              <br />
              甘辛く炒めました。
            </p>
            <h3>
              750
              <span>
                <ruby>
                  円<rt>（税込）</rt>
                </ruby>
              </span>
            </h3>
          </Price>
        </Left>
        <Right>
          <img src={maRaMen} alt="ma" className="imgRight" />
          <Price className="ma-ra-men">
            <h2>
              <ruby>
                麻<rt>マー</rt>辣<rt>ラー</rt>麺<rt>ミェン</rt>
              </ruby>
            </h2>
            <span className="hard">
              <h4>自家製手打ち麺</h4>
              <Hard />
            </span>
            <p className="desc">
              しびれる辛さの赤いスープ。手打ち麺に
              <br />
              よくからみ、箸が止まらぬ旨さです！
            </p>
            <h3>
              780
              <span>
                <ruby>
                  円<rt>（税込）</rt>
                </ruby>
              </span>
            </h3>
          </Price>
        </Right>
        <Left>
          <img src={yodaredori} alt="ma" className="imgRight" />
          <Price className="yodaredori">
            <h2>よだれ鶏</h2>
            <p className="desc">
              茹でた鶏肉を特製の
              <br />
              辛味ダレでどうぞ。
            </p>
            <h3>
              580
              <span>
                <ruby>
                  円<rt>（税込）</rt>
                </ruby>
              </span>
            </h3>
          </Price>
        </Left>
        <Right>
          <img src={ankakeyakisoba} alt="ma" className="imgRight" />
          <Price className="ankakeyakisoba">
            <h2>
              海鮮
              <br />
              あんかけ焼そば
            </h2>
            <p className="desc">
              えび、イカ、アサリ等の魚介と
              <br />
              野菜がたっぷり。シンプルな塩味で。
            </p>
            <h3>
              880
              <span>
                <ruby>
                  円<rt>（税込）</rt>
                </ruby>
              </span>
            </h3>
          </Price>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NtMenu;
