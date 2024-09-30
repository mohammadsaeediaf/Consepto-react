import Header from "./component/Header.jsx";
import HeroSection from "./component/HeroSection.jsx";
import HeroCaption from "./component/HeroCaption.jsx";
import HeroPreview from "./component/HeroPreview.jsx";
import Main from "./component/Main.jsx";
import Nav from "./component/Nav.jsx";
import NavLinks from "./component/NavLinks.jsx";
import InfoSection from "./component/InfoSection.jsx";
import BusinessSection from "./component/BusinessSection.jsx";
import Category from "./component/Category.jsx";
import PopularCompany from "./component/PopularCompany.jsx";
import JobOffer from "./component/JobOffer.jsx";
import News from "./component/News.jsx";
import RecentEvent from "./component/RecentEvent.jsx";
import Footer from "./component/Footer.jsx";
import PageLinks from "./component/PageLinks.jsx";
import FooterLinks from "./component/FooterLinks.jsx";
import Consecpto from "./component/Consecpto.jsx";
import FooterInfo from "./component/FooterInfo.jsx";
import Copyright from "./component/Copyright.jsx";
import ContactUs from "./component/ContactUs.jsx";

function App() {
  return (
    <>
      <Header>
        <Nav />
        <NavLinks />
      </Header>

      <Main>
        <HeroSection>
          <HeroCaption />
          <HeroPreview />
        </HeroSection>
        <InfoSection />
        <BusinessSection />
        <Category />
        <PopularCompany />
        <JobOffer />
        <News />
        <RecentEvent />
      </Main>

      <Footer>
        <PageLinks />

        <div className="container">
          <div className="wrapper">
            <div>
              <div className="footer-menu">
                <FooterLinks />
              </div>
              <Consecpto />
            </div>
            <div>
              <FooterInfo />
            </div>
          </div>
        </div>

        <Copyright />
      </Footer>
    </>
  );
}

export default App;
