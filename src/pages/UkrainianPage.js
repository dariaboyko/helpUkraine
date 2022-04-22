import ContentWrapper from "../components/ContentWrapper";
import Logo from "../components/Logo";
import UkrainianChecks from "../components/UkrainianChecks";
import UkrainianCrypto from "../components/UkrainianCrypto";
import UkrainianSupport from "../components/UkrainianSupport";
import BackArrow from "../components/BackArrow";
function UkrainianPage() {
  return (
    <>
      <BackArrow />
      <ContentWrapper>
        <UkrainianChecks />
        <UkrainianCrypto />
        <UkrainianSupport />
        <Logo />
      </ContentWrapper>
    </>
  );
}

export default UkrainianPage;
