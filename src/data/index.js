import ImageOne from "../images/nikuman.png";
import ImageTwo from "../images/gomokuman.png";
import ImageThree from "../images/mara-man.png";
import ImageFour from "../images/tamanegiman.png";
import ImageFive from "../images/kiriboshi.png";
import ImageSix from "../images/sausage.png";
import ImageSeven from "../images/anko.png";
import ImageEight from "../images/roastedPorkFillet.png";
import ImageNine from "../images/ShrimpChili.png";
import ImageTen from "../images/SweetAndSourPork.png";

export const MenuData = [
  {
    id: "1",
    name: "肉まん",
    price: "280",
    recommendation: "on",
    hard: "off",
    image: ImageOne,
    descriptionLine1: "肉汁たっぷり、",
    descriptionLine2: "当店イチオシ！！",
    alt: "肉まん",
  },
  {
    id: "2",
    name: "五目まん",
    price: "390",
    recommendation: "on",
    hard: "off",
    image: ImageTwo,
    descriptionLine1: "豚肉、エビ、人参、青菜、",
    descriptionLine2: "たけのこ等の彩り♫",
    alt: "五目まん",
  },
  {
    id: "3",
    name: "麻辣まん",
    ruby: "マーラー",
    price: "280",
    recommendation: "off",
    hard: "on",
    image: ImageThree,
    descriptionLine1: "辛味を効かせた",
    descriptionLine2: "特製そぼろ豆腐。",
    alt: "麻辣まん",
  },
  {
    id: "4",
    name: "玉ねぎまん",
    price: "280",
    recommendation: "off",
    hard: "off",
    image: ImageFour,
    descriptionLine1: "玉ねぎとお肉の",
    descriptionLine2: "絶妙なハーモニー。",
    alt: "玉ねぎまん",
  },
  {
    id: "5",
    name: "切り干し大根まん",
    price: "280",
    recommendation: "off",
    hard: "off",
    image: ImageFive,
    descriptionLine1: "コリコリ食感の",
    descriptionLine2: "和風お惣菜まん。",
    alt: "切り干し大根まん",
  },
  {
    id: "6",
    name: "ソーセージまん",
    price: "280",
    recommendation: "off",
    hard: "off",
    image: ImageSix,
    descriptionLine1: "ホットドッグ感覚で",
    descriptionLine2: "ガブリとどうぞ！",
    alt: "ソーセージまん",
  },
  {
    id: "7",
    name: "あんまん",
    price: "280",
    recommendation: "off",
    hard: "off",
    image: ImageSeven,
    descriptionLine1: "紫イモの生地で練ごま入りの",
    descriptionLine2: "あんこをサンド。",
    alt: "あんまん",
  },
];
export const BurgerMenuData = [
  {
    id: "8",
    nameLine1: "チャーシュー",
    nameLine2: "バーガー",
    price: "390",
    recommendation: "on",
    hard: "off",
    image: ImageEight,
    descriptionLine1: "厚切り焼豚が",
    descriptionLine2: "食べ応え抜群！",
    alt: "肉まん",
  },
  {
    id: "9",
    nameLine1: "エビチリ",
    nameLine2: "バーガー",
    price: "390",
    recommendation: "on",
    hard: "off",
    image: ImageNine,
    descriptionLine1: "プリバーガーエビを",
    descriptionLine2: "甘辛ダレで。",
    alt: "エビチリバーガー",
  },
  {
    id: "10",
    nameLine1: "酢豚",
    nameLine2: "バーガー",
    price: "390",
    recommendation: "off",
    hard: "off",
    image: ImageTen,
    descriptionLine1: "黒酢でマイルドに仕上",
    descriptionLine2: "げた豚肉が旨し！",
    alt: "酢豚バーガー",
  },
];
