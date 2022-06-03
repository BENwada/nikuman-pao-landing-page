import { ReactComponent as NightTime } from "../../svg/nightTime.svg";
import { ReactComponent as Rogo } from "../../svg/rogo.svg";
import { ReactComponent as SyuboRogo } from "../../svg/syuboRogo.svg";
import { ReactComponent as NtTitle } from "../../svg/ntTitle.svg";
import image1 from "../../images/ma-bo-nas-img.png";
import image2 from "../../images/ankakeyakisoba-img.png";
import image3 from "../../images/ma-ra-men-img.png";
import image4 from "../../images/yodaredori-img.png";
import image5 from "../../images/beel.png";
import "./ntHeader.css";

const NtHeader = () => {
  return (
    <div className="ntComponent">
      <div className="ntWrapper">
        <span className="nightTime">
          <NightTime />
        </span>
        <span className="nt-logo">
          <Rogo />
          <SyuboRogo />
          <NtTitle />
        </span>
        <div className="images">
          <img src={image1} alt="麻婆茄子" className="image1" />
          <img src={image2} alt="五目あんかけ焼きそば" className="image2" />
          <img src={image3} alt="麻辣麺" className="image3" />
          <img src={image4} alt="よだれ鶏" className="image4" />
          <img src={image5} alt="ビール" className="image5" />
        </div>
      </div>
    </div>
  );
};

export default NtHeader;
