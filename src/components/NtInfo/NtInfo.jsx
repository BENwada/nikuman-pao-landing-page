import "./ntInfo.css";
import { ReactComponent as Balloon } from "../../svg/nt-balloon.svg";
import { ReactComponent as PaoHoroyoi } from "../../svg/paoCharHoroyoi.svg";

const NtInfo = () => {
  return (
    <div className="nti-container">
      <div className="nti-wrapper">
        <h1 className="nti-title">夜の営業始めました。</h1>
        <div className="char">
          <div className="left">
            <Balloon />
            <p>
              その名も
              <br />
              <span>“ほろ酔パオ”</span>
            </p>
          </div>
          <div className="right">
            <PaoHoroyoi />
          </div>
        </div>
        <p>
          自家製の中華一品料理を中心に
          <br />
          手打ち麺を使った麺料理もご提供！
          <br />
          もちろんおいしいお酒もご用意しております！
        </p>
      </div>
    </div>
  );
};

export default NtInfo;
