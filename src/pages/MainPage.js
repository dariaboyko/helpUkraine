import MainNavigation from "../components/Navigation";
import MainInformation from "../components/MainInformation";
import ContentWrapper from "../components/ContentWrapper";
import Logo from "../components/Logo";
function MainPage() {
  return (
    <ContentWrapper>
      <MainInformation />
      <MainNavigation />
      <Logo/>
    </ContentWrapper>
  );
}

export default MainPage;
