import BackArrow from "../components/BackArrow";
import ContentWrapper from "../components/ContentWrapper";
import Logo from "../components/Logo";
import ForeignerChecks from "../components/ForeignerChecks";
import ForeignerCryptoDonations from "../components/ForeignerCryptoDonations";
import LinkToSwift from "../components/LinkToSwift";
import LinkToCrypto from "../components/LinkToCrypto";
function ForeignerPage() {
  return (
    <>
      <BackArrow />
      <ContentWrapper>
        <a name="swift"></a>
        <ForeignerChecks />
        <ForeignerCryptoDonations />
        <a name="crypto"></a>
        <Logo />
      </ContentWrapper>
      <LinkToSwift />
      <LinkToCrypto />
    </>
  );
}

export default ForeignerPage;
