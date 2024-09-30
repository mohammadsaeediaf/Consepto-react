function JobCards({ imageSrc, title, children }) {
  return (
    <section className="job-cards">
      <img src={require(`../images/main/${imageSrc}.png`)} alt="" />
      <p className="job-title">{children}</p>
      <p className="company-name">{title}</p>
    </section>
  );
}

export default JobCards;
