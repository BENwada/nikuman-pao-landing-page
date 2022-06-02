import "./ntMenu.css";
import maBoNas from "../../images/ma-bo-nas.png";
import maRaMen from "../../images/ma-ra-men.png";
import yodaredori from "../../images/yodaredori.png";
import ankakeyakisoba from "../../images/ankakeyakisoba.png";
import { ReactComponent as Hard } from "../../svg/hard.svg";

const NtMenu = () => {
  return (
    <div className="ntm-container">
      <div className="ntm-wrapper">
        <h1>
          夜限定メニューもいろいろ！
          <br />
          ごゆっくりお楽しみください。
        </h1>
        <div className="ntMenu">
          <div className="menuLeft">
            <img src={maBoNas} alt="麻婆茄子" />
            <div className="price">
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
            </div>
          </div>
          <div className="menuRight">
            <img src={maRaMen} alt="ma" className="imgRight" />
            <div className="price">
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
            </div>
          </div>
          <div className="menuLeft">
            <img src={yodaredori} alt="ma" className="imgRight" />
            <div className="price">
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
            </div>
          </div>
          <div className="menuRight">
            <img src={ankakeyakisoba} alt="ma" className="imgRight" />
            <div className="price">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NtMenu;
