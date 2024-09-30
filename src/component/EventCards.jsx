function EventCards({ imageSrc, title, description, location, date }) {
  return (
    <div className="card-item">
      <div className="event-photo">
        <img src={require(`../images/main/${imageSrc}.png`)} alt="" />
      </div>

      <div className="card-content">
        <p>{title}</p>
        <span>{description}</span>

        <div className="event-card-footer">
          <div>
            <img
              src={require("../images/main/location.png")}
              alt="location-icon"
            />
            <span>{location}</span>
          </div>

          <div>
            <img
              src={require("../images/main/date-icon.png")}
              alt="date-icon"
            />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCards;
