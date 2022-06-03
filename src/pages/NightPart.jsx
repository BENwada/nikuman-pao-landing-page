import NtDrinkMenu from "../components/NtDrinkMenu/NtDrinkMenu";
import NtFooter from "../components/NtFooter/NtFooter";
import NtHeader from "../components/NtHeader/NtHeader";
import NtInfo from "../components/NtInfo/NtInfo";
import NtMenu from "../components/NtMenu/NtMenu";

const NightPart = () => {
  return (
    <>
      <NtHeader />
      <NtInfo />
      <NtMenu />
      <NtDrinkMenu />
      <NtFooter />
    </>
  );
};

export default NightPart;
