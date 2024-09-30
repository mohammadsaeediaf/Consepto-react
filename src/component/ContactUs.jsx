function PageLinks() {
  return (
    <section className="contact-us">
      <div className="contactus-content">
        <p>از جـدیدتریـن اخبار مطلع شـویـد :</p>
        <input type="text" placeholder="ایمیل خود را وارد کنید" />
        <button>
          عضویت <img src={require("../images/main/tik.png")} alt="tik" />
        </button>
      </div>
    </section>
  );
}

export default PageLinks;
