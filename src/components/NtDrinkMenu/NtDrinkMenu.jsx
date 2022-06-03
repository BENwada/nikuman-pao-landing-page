import "./ntDrinkMenu.css";
import { ReactComponent as DrinkChar } from "../../svg/drinkChar.svg";
import { ReactComponent as AlcoholeH1 } from "../../svg/alcoholH1.svg";
import { ReactComponent as PaoCharAlc } from "../../svg/paoCharAlc.svg";
import { ReactComponent as Shaoxing5 } from "../../svg/shaoxing5.svg";
import { ReactComponent as Shaoxing15 } from "../../svg/shaoxing15.svg";

const NtDrinkMenu = () => {
  return (
    <div className="ntd-container">
      <div className="drinks-container">
        <div className="ntd-wrapper">
          <DrinkChar />
          <ul className="drinks">
            <li className="drink">
              <h3 className="dName">
                ウーロン茶<span>（ICE）</span>
              </h3>
              <h3 className="dPrice">
                180<span>円（税込）</span>
              </h3>
            </li>
            <li className="drink">
              <h3 className="dName">
                コーヒー<span>（HOT）</span>
              </h3>
              <h3 className="dPrice">
                200<span>円（税込）</span>
              </h3>
            </li>
            <li className="drink-recommend">
              <p className="desc">厳選した茶葉の香り高い味わいを。</p>
              <h3 className="dName">
                ジャスミン茶（グラス）
                <br />
                <span>（ICE・HOT）</span>
              </h3>
              <h3 className="dPrice">
                180<span>円（税込）</span>
              </h3>
            </li>
            <li className="softDrink">
              <h3 className="dName">
                ●オレンジ
                <br />
                ●リンゴ
                <br />
                ●コーラ
              </h3>
              <h3 className="dPrice">
                <span>各</span>180<span>円（税込）</span>
              </h3>
            </li>
            <li className="noneAlcohol">
              <h3 className="dName">
                ノンアルコールビール<span>（334ml）</span>
              </h3>
              <h3 className="dPrice">
                300<span>円（税込）</span>
              </h3>
            </li>
          </ul>
        </div>
        <div className="alcoholWrapper">
          <h1>アルコールドリンク</h1>
          <AlcoholeH1 />
          <span className="alc-char">
            <PaoCharAlc />
          </span>
          <ul className="alcohols">
            <li className="alcohol">
              <h3 className="aName">
                ビール<span>（中瓶・500ml）</span>
              </h3>
              <h3 className="aPrice">
                480<span>円（税込）</span>
              </h3>
            </li>
            <li className="alcohol">
              <h3 className="aName">
                青島ビール<span>（瓶・330ml） </span>
              </h3>
              <h3 className="aPrice">
                530<span>円（税込）</span>
              </h3>
            </li>
            <li className="alcohol">
              <h3 className="aName">
                日本酒<span>（小瓶・300ml） </span>
              </h3>
              <div className="alcJpWrapper">
                <span className="leftJp">
                  <h4 className="aNameJp">
                    ●笹の川 <span>辛口</span>
                  </h4>
                  <h3 className="aPrice">
                    580<span>円（税込）</span>
                  </h3>
                </span>
                <span className="rightJp">
                  <h4 className="aNameJp">
                    ●笹の川 <span>純米酒</span>
                  </h4>
                  <h3 className="aPrice">
                    680<span>円（税込）</span>
                  </h3>
                </span>
              </div>
            </li>
            <li className="shaoxing-wine">
              <p className="desc">
                長期熟成するほど、まろやかな味わいと、
                <br />
                豊かな香りが楽しめます。
              </p>
              <h3 className="aName">
                紹興酒
                <span>（グラス）</span>
              </h3>
              <div className="priceWrapper">
                <span className="priceLeft">
                  <div className="brewing">
                    <Shaoxing5 width={"50px"} />
                  </div>
                  <h3 className="aPrice">
                    380
                    <span>
                      <ruby>
                        円 <rt>（税込）</rt>
                      </ruby>
                    </span>
                  </h3>
                </span>
                <span className="priceRight">
                  <div className="brewing">
                    <Shaoxing15 width={"50px"} />
                  </div>
                  <h3 className="aPrice">
                    580
                    <span>
                      <ruby>
                        円 <rt>（税込）</rt>
                      </ruby>
                    </span>
                  </h3>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NtDrinkMenu;
