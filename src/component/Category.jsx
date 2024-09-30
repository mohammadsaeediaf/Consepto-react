import CategoryItem from "./CategoryItem";
import SectionTitle from "./SectionTitle";

function Category() {
  return (
    <div className="container">
      <section className="category">
        <SectionTitle>دسته بندی ها</SectionTitle>
        <div className="container">
          <div className="category-section">
            <CategoryItem imgSrc={"ai"} title={"هوش مصنوعی"} />
            <CategoryItem imgSrc={"programing"} title={"برنامه نویسی"} />
            <CategoryItem imgSrc={"digital-currency"} title={"ارز دیجیتال"} />
            <CategoryItem imgSrc={"accounting"} title={"حسابداری"} />
            <CategoryItem imgSrc={"graphic"} title={"گرافیک"} />
            <CategoryItem imgSrc={"media"} title={"رسانه ها"} />
            <CategoryItem imgSrc={"aerospace"} title={"هوافضا"} />
          </div>
        </div>
      </section>

      <section className="category">
        <div className="container">
          <div className="category-section">
            <CategoryItem imgSrc={"medicine"} title={"پزشکی"} />
            <CategoryItem imgSrc={"business-img"} title={"تجارت الکترونیک"} />
            <CategoryItem imgSrc={"scientific"} title={"علمی"} />
            <CategoryItem imgSrc={"music"} title={"موسیقی"} />
            <CategoryItem imgSrc={"Biotechnology"} title={"بیوتکنولوژی"} />
            <CategoryItem imgSrc={"cinema"} title={"فیلم و سینما"} />
            <CategoryItem imgSrc={"Transportation"} title={"حمل و نقل"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
