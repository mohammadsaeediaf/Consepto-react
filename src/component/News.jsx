import Banner from "./Banner.jsx";
import NewsCard from "./NewsCard.jsx";
function News() {
  return (
    <section className="news-section">
      <Banner title="تازه ترین اخبار">
        <div className="container">
          <div className="news-card">
            <NewsCard
              imageSrc={"snapp-news"}
              title={"اسنپ رکورد خود را با بیش از ۵ میلیون سفر روزانه شکست"}
              description={
                "در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار و ۶۵ سفر روزانه در سرویس خودرو و باکس را زد."
              }
              avatar={"author-farhad"}
              authorName={"فرهاد رئوفی"}
              day={"۱۱"}
            />

            <NewsCard
              imageSrc={"sanppFood-news"}
              title={"بار دیگر اسنپ فود به دلیل مشکل فنی از دسترس خارج شد"}
              description={
                "بار دیگر اسنپ‌فود به‌دلیل مشکل فنی از دسترس کاربران خارج شد. این مشکل اوایل بهمن هم تکرار شده بود و رفع آن ساعت‌ها طول کشید."
              }
              avatar={"author-amir"}
              authorName={"امیر بختیاری"}
              day={"۵"}
            />

            <NewsCard
              imageSrc={"alibaba-news"}
              title={
                "رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد: ثبت 2 خدمت در هر ثانیه"
              }
              description={
                "با نزدیکی به سال نو و افزایش سفرهای بین شهری، رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد."
              }
              avatar={"author-atoosa"}
              authorName={"آتوسا صفوی زاده"}
              day={"۳"}
            />
          </div>
        </div>
      </Banner>
    </section>
  );
}

export default News;
