function HeroCaption() {
  return (
    <div className="container">
      <div className="hero-caption">
        <h1>با سرچ کمتر نتیجه بهتر بگیر</h1>
        <p>کاسپتو اولین مرجع معتبر و معرفی استارتاپ ها و شرکت های ایرانی</p>
        <div className="buttons">
          <button>
            <img src={require("../images/nav/thunder.png")} alt="thunder" />
            رایگان شروع کن!
          </button>
          <button className="about-btn">
            درباره کاسپتو
            <img
              src={require("../images/main/hero-section/arrow-left.png")}
              alt="arrow-left"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroCaption;
