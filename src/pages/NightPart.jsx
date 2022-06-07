import NtDrinkMenu from "../components/NtDrinkMenu";
import NtFooter from "../components/NtFooter";
import NtHeader from "../components/NtHeader";
import NtInfo from "../components/NtInfo";
import NtMenu from "../components/NtMenu";
import ScrollToTop from "../components/ScrollToTop";

const NightPart = () => {
  return (
    <>
      <ScrollToTop>
        <NtHeader />
        <NtInfo />
        <NtMenu />
        <NtDrinkMenu />
        <NtFooter />
      </ScrollToTop>
    </>
  );
};

export default NightPart;
