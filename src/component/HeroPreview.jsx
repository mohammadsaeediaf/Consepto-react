function HeroPreview() {
  return (
    <div className="container">
      <div className="hero-preview">
        <div className="preview-about">
          <img
            src={require("../images/main/hero-section/preview-about.png")}
            alt="about"
          />
        </div>
        <div className="preview">
          <img
            src={require("../images/main/hero-section/preview.png")}
            alt="preview"
          />
        </div>

        <div className="preview-sm">
          <img
            src={require("../images/main/hero-section/preview-sm.png")}
            alt="preview-sm"
          />
        </div>

        <div className="preview-landscape">
          <img
            src={require("../images/main/hero-section/preview-landscape.png")}
            alt="landscape"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroPreview;
