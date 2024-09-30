import SocialItem from "./SocialItem";
import ContactUs from "./ContactUs.jsx";

function FooterInfo() {
  return (
    <>
      <section className="footer-info">
        <ContactUs />

        <div className="info-item">
          <img src={require("../images/main/location.png")} alt="location" />
          <p>آدرس:</p>
          <p>تهران، خیابان ولیعصر، ساختمان کانسپتو</p>
        </div>

        <div className="info-item">
          <img src={require("../images/main/location.png")} alt="location" />
          <p>شماره تماس :</p>
          <p>۰۹۱۲۳۴۵۶۷۸۹</p>
        </div>
      </section>

      <section className="social-links">
        <div>
          <p>ما را در شبکه های اجتماعی دنبال کنید:</p>
          <div className="social-item">
            <SocialItem imageSrc={"Linkedin"} />
            <SocialItem imageSrc={"Facebook"} />
            <SocialItem imageSrc={"Twitter"} />
            <SocialItem imageSrc={"Instagram"} />
          </div>
        </div>
        <div>
          <img src={require("../images/main/samandehi.png")} alt="samandehi" />
        </div>
      </section>
    </>
  );
}

export default FooterInfo;
