function SectionTitle({ children, recentEvent }) {
  return (
    <div className="category-title">
      <h4>{children}</h4>
      {recentEvent && <span>مشاهده بیشتر</span>}
      <img
        src={require("../images/main/category/chevron-left.png")}
        alt="chvron-left"
      />
    </div>
  );
}

export default SectionTitle;
