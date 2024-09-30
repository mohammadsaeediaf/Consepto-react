function PageLinks() {
  return (
    <div className="container">
      <section className="page-links">
        <div className="get-email">
          <p>برای کسب اطلاعات بیشتر در خبرنامه ما عضو شوید</p>
          <input type="text" placeholder="ایمیل خود را وارد کنید" />
          <button>
            عضویت <img src={require("../images/main/tik.png")} alt="tik" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default PageLinks;
