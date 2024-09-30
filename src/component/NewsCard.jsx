function NewsCard({ title, description, avatar, day, authorName, imageSrc }) {
  return (
    <div className="news-card-item">
      <div className="card-header">
        <img src={require(`../images/main/${imageSrc}.png`)} alt="" />
      </div>
      <div className="card-main">
        <span>تجارت الکترونیک</span>
        <p>{title}</p>
        <p>
          <span>{description}</span>
        </p>
      </div>
      <div className="news-card-footer">
        <div>
          <img
            src={require(`../images/main/${avatar}.png`)}
            alt="author-image"
          />
          <span>{authorName}</span>
        </div>
        <div>
          <img src={require("../images/main/date-icon.png")} alt="date" />
          <span>۱۴۰۲/۱۲/{day}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
