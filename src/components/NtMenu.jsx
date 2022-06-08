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
  font-size: 10px;
  padding: 2em;

  @media screen and (max-width: 480px) {
    font-size: 9px;
  }
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
  font-size: 2em;
  margin-bottom: 2em;

  @media screen and (min-width: 780px) {
    br {
      display: none;
    }
    font-size: 3em;
    margin: 1em 0;
  }
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .ma-bo-nas {
    margin-top: -110px;
  }

  .yodaredori {
    margin-top: -120px;
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

  .ma-ra-men {
    margin-top: -2em;
  }

  .ankakeyakisoba {
    margin-top: -5em;
  }

  @media screen and (min-width: 780px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const MenuImg = styled.img`
  width: ${({ width }) => width}px;
  margin-right: ${({ mr }) => mr}px;
  margin-left: ${({ ml }) => ml}px;
`;

const Price = styled.div`
  bottom: 0;
  color: white;
  display: flex;
  flex-direction: column;

  .hard {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  h4 {
    font-size: 2.5em;
    line-height: 100%;
  }
`;

const MenuName = styled.h2`
  font-size: 4em;
  line-height: 1.1em;
  position: relative;

  rt {
    font-size: 40%;
    line-height: 100%;
    position: relative;
    top: 0.6em;
  }
`;

const MenuDesc = styled.p`
  margin-top: 0.5em;
  font-size: 1.8em;

  rt {
    font-size: 30%;
    line-height: 100%;
    position: relative;
    top: 0.6em;
  }
`;

const Payment = styled.h3`
  margin-top: -0.3em;
  font-size: 7.8em;
  font-family: "Zen Kaku Gothic New", sans-serif;
  color: #d20000;

  span {
    font-size: 50%;
    line-height: 100%;
    margin-left: -0.15em;

    rt {
      font-size: 30%;
      line-height: 100%;
    }
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
          <MenuImg width={750} ml={-170} src={maBoNas} alt="麻婆茄子" />
          <Price className="ma-bo-nas">
            <MenuName>
              <ruby>
                麻<rt>マー</rt>婆<rt>ボー</rt>茄<rt>な</rt>子<rt>す</rt>
              </ruby>
            </MenuName>
            <MenuDesc>
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
            </MenuDesc>
            <Payment>
              750
              <span>
                <ruby>
                  円<rt>（税込）</rt>
                </ruby>
              </span>
            </Payment>
          </Price>
        </Left>
        <Right>
          <MenuImg
            width={680}
            mr={-170}
            src={maRaMen}
            alt="ma"
            className="imgRight"
          />
          <Price className="ma-ra-men">
            <MenuName>
              <ruby>
                麻<rt>マー</rt>辣<rt>ラー</rt>麺<rt>ミェン</rt>
              </ruby>
            </MenuName>
            <span className="hard">
              <h4>自家製手打ち麺</h4>
              <Hard />
            </span>
            <MenuDesc className="desc">
              しびれる辛さの赤いスープ。手打ち麺に
              <br />
              よくからみ、箸が止まらぬ旨さです！
            </MenuDesc>
            <Payment>
              780
              <span>
                <ruby>
                  円<rt>（税込）</rt>
                </ruby>
              </span>
            </Payment>
          </Price>
        </Right>
        <Left>
          <MenuImg
            width={750}
            ml={-170}
            src={yodaredori}
            alt="ma"
            className="imgRight"
          />
          <Price className="yodaredori">
            <MenuName>よだれ鶏</MenuName>
            <MenuDesc className="desc">
              茹でた鶏肉を特製の
              <br />
              辛味ダレでどうぞ。
            </MenuDesc>
            <Payment>
              580
              <span>
                <ruby>
                  円<rt>（税込）</rt>
                </ruby>
              </span>
            </Payment>
          </Price>
        </Left>
        <Right>
          <MenuImg
            width={850}
            mr={-170}
            src={ankakeyakisoba}
            alt="ma"
            className="imgRight"
          />
          <Price className="ankakeyakisoba">
            <MenuName>
              海鮮
              <br />
              あんかけ焼そば
            </MenuName>
            <MenuDesc className="desc">
              えび、イカ、アサリ等の魚介と
              <br />
              野菜がたっぷり。シンプルな塩味で。
            </MenuDesc>
            <Payment>
              880
              <span>
                <ruby>
                  円<rt>（税込）</rt>
                </ruby>
              </span>
            </Payment>
          </Price>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NtMenu;
