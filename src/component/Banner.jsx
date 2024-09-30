function PopularCompany({ children, title }) {
  return (
    <section className="popular-company">
      <div className="container">
        <div className="popular-caption">
          <p>{title}</p>
          <p className="see-more">مشاهده همه</p>
        </div>

        <div className="popular-cards">{children}</div>
      </div>
    </section>
  );
}

export default PopularCompany;
