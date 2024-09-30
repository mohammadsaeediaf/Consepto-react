function BusinessSection() {
  return (
    <div className="container">
      <section className="business">
        <div className="business-card">
          <img
            src={require("../images/main/favorite-company.png")}
            alt="favorite-company"
          />
          <div className="square"></div>
          <p className="business-caption">شرکت مورد علاقت رو پیدا کن</p>
        </div>

        <div className="business-card">
          <img
            src={require("../images/main/business.png")}
            alt="favorite-company"
          />
          <div className="square"></div>
          <p className="business-caption">کسب و کارهای مناسب رو پیدا کن</p>
        </div>

        <div className="business-card">
          <img
            src={require("../images/main/favorite-company.png")}
            alt="favorite-company"
          />
          <div className="square"></div>
          <p className="business-caption">با کسب و کارها ارتباط بگیر</p>
        </div>
      </section>
    </div>
  );
}

export default BusinessSection;
