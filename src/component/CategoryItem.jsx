function CategoryItem({ imgSrc, title }) {
  return (
    <div className="category-item">
      <div className="circle">
        <img
          src={require(`../images/main/category/${imgSrc}.png`)}
          alt="category-image"
        />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default CategoryItem;
