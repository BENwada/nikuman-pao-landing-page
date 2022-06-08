import { ReactComponent as DrinkChar } from "../svg/drinkChar.svg";
import { ReactComponent as AlcoholeH1 } from "../svg/alcoholH1.svg";
import { ReactComponent as PaoCharAlc } from "../svg/paoCharAlc.svg";
import { ReactComponent as Shaoxing5 } from "../svg/shaoxing5.svg";
import { ReactComponent as Shaoxing15 } from "../svg/shaoxing15.svg";
import Bubble from "../svg/bubble.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 780px) {
    padding-top: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    gap: 20px;
  }
`;

const SoftDrinks = styled.div`
  display: flex;
  align-items: space-around;
  height: 100%;
  width: 100%;
  max-width: 400px;
  padding: 15px;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 450px) {
    max-width: 100%;
  }

  .DChara {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;

    .drink {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .softDrink {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 10px;
    }
    .noneAlcohol .dPrice {
      text-align: right;
    }
  }
`;

const DRecommend = styled.li`
  flex-direction: column;
  align-self: flex-start;
  justify-self: flex-start;
  background-color: #ffe6c3;
  padding: 10px;
  margin: 10px 0px;
  position: relative;

  @media screen and (max-width: 450px) {
    width: 100%;
  }

  ::before {
    content: "おすすめ";
    position: absolute;
    top: 2px;
    right: 10px;
    z-index: 9;
    color: white;
  }

  ::after {
    content: url(${Bubble});
    position: absolute;
    top: -5px;
    right: -5px;
    width: 90px;
    z-index: 8;
  }

  .RPrice {
    text-align: right;
    line-height: 5px;
    margin-bottom: 10px;
  }
`;

const Alcohol = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  max-width: 400px;
  background: #fffcde;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 450px) {
    max-width: 100%;
  }

  h1 {
    display: none;
  }

  ul {
    list-style: none;
  }

  .alc-char {
    position: absolute;
    top: 50px;
    right: -20px;
  }

  .alcJpWrapper {
    display: flex;
    justify-content: space-between;

    .aNameJp {
      font-size: 22px;

      span {
        font-size: 17px;
      }
    }
  }

  .alcJpWrapper .aPrice {
    margin-left: 26px;
  }

  .shaoxing-wine {
    width: 100%;
    height: 100%;
    background: white;
    padding: 10px 15px;

    .desc {
      font-family: "Zen Kaku Gothic New", sans-serif;
      font-weight: 700;
    }
    .priceWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .priceLeft {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 5px;
        width: 100%;
        height: 100%;
      }

      .aPrice span {
        margin-left: -5px;
      }

      .priceRight {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 5px;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const DName = styled.h3`
  font-size: 25px;
  color: #b54214;
  line-height: 30px;
  white-space: nowrap;

  span {
    font-size: 18px;
    margin-left: -5px;
  }
`;

const DPrice = styled.h3`
  color: #251e1c;
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-size: 37px;
  line-height: 38px;
  white-space: nowrap;

  span {
    font-size: 20px;

    small {
      margin-left: -7px;
    }
  }
`;

const NtDrinkMenu = () => {
  return (
    <Container>
      <Wrapper>
        <SoftDrinks>
          <div className="DChara">
            <DrinkChar />
          </div>
          <ul className="drinks">
            <li className="drink">
              <DName className="dName">
                ウーロン茶<span>（ICE）</span>
              </DName>
              <DPrice className="dPrice">
                180
                <span>
                  円<small>（税込）</small>
                </span>
              </DPrice>
            </li>
            <li className="drink">
              <DName className="dName">
                コーヒー<span>（HOT）</span>
              </DName>
              <DPrice className="dPrice">
                200
                <span>
                  円<small>（税込）</small>
                </span>
              </DPrice>
            </li>
            <DRecommend>
              <p className="desc">厳選した茶葉の香り高い味わいを。</p>
              <DName className="dName">
                ジャスミン茶（グラス）
                <br />
                <span>（ICE・HOT）</span>
              </DName>
              <DPrice className="RPrice">
                180
                <span>
                  円<small>（税込）</small>
                </span>
              </DPrice>
            </DRecommend>
            <li className="softDrink">
              <DName className="dName">
                ●オレンジ
                <br />
                ●リンゴ
                <br />
                ●コーラ
              </DName>
              <DPrice className="dPrice">
                <span>各</span>180
                <span>
                  円<small>（税込）</small>
                </span>
              </DPrice>
            </li>
            <li className="noneAlcohol">
              <DName className="dName">
                ノンアルコールビール<span>（334ml）</span>
              </DName>
              <DPrice className="dPrice">
                300
                <span>
                  円<small>（税込）</small>
                </span>
              </DPrice>
            </li>
          </ul>
        </SoftDrinks>
        <Alcohol>
          <h1>アルコールドリンク</h1>
          <AlcoholeH1 />
          <span className="alc-char">
            <PaoCharAlc width={140} />
          </span>
          <ul>
            <li className="alcohol">
              <DName className="aName">
                ビール<span>（中瓶・500ml）</span>
              </DName>
              <DPrice className="aPrice">
                480
                <span>
                  円<small>（税込）</small>
                </span>
              </DPrice>
            </li>
            <li className="alcohol">
              <DName className="aName">
                青島ビール<span>（瓶・330ml） </span>
              </DName>
              <DPrice className="aPrice">
                530
                <span>
                  円<small>（税込）</small>
                </span>
              </DPrice>
            </li>
            <li className="alcohol">
              <DName className="aName">
                日本酒<span>（小瓶・300ml） </span>
              </DName>
              <div className="alcJpWrapper">
                <span className="leftJp">
                  <h4 className="aNameJp">
                    ●笹の川 <span>辛口</span>
                  </h4>
                  <DPrice className="aPrice">
                    580
                    <span>
                      円<small>（税込）</small>
                    </span>
                  </DPrice>
                </span>
                <span className="rightJp">
                  <h4 className="aNameJp">
                    ●笹の川 <span>純米酒</span>
                  </h4>
                  <DPrice className="aPrice">
                    680
                    <span>
                      円<small>（税込）</small>
                    </span>
                  </DPrice>
                </span>
              </div>
            </li>
            <li className="shaoxing-wine">
              <p className="desc">
                長期熟成するほど、まろやかな味わいと、
                <br />
                豊かな香りが楽しめます。
              </p>
              <DName className="aName">
                紹興酒
                <span>（グラス）</span>
              </DName>
              <div className="priceWrapper">
                <span className="priceLeft">
                  <div className="brewing">
                    <Shaoxing5 width={"50px"} />
                  </div>
                  <DPrice className="aPrice">
                    380
                    <span>
                      <ruby>
                        円 <rt>（税込）</rt>
                      </ruby>
                    </span>
                  </DPrice>
                </span>
                <span className="priceRight">
                  <div className="brewing">
                    <Shaoxing15 width={"50px"} />
                  </div>
                  <DPrice className="aPrice">
                    580
                    <span>
                      <ruby>
                        円 <rt>（税込）</rt>
                      </ruby>
                    </span>
                  </DPrice>
                </span>
              </div>
            </li>
          </ul>
        </Alcohol>
      </Wrapper>
    </Container>
  );
};

export default NtDrinkMenu;
