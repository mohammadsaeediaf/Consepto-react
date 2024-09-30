import EventCards from "./EventCards.jsx";
import SectionTitle from "./SectionTitle.jsx";

function RecentEvent() {
  return (
    <div className="container">
      <section className="recent-event-section">
        <div>
          <SectionTitle recentEvent>رویداد های اخیر</SectionTitle>
        </div>
        <div className="event-cards">
          <EventCards
            imageSrc={"digikala-event"}
            title="بوت کمپ برنامه نویسی دیجی کالا"
            description={
              "در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب دیجی‌کالا، بوژان و..."
            }
            location={"تهران، ایران"}
            date={"29 بهمن"}
          />

          <EventCards
            imageSrc={"ghazal-event"}
            title="سکوی پرتاب غزال"
            description={
              "سکوی پرتاب غزال، 27 دی ماه سال جاری با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌های..."
            }
            location={"تهران، ایران"}
            date={"27 دی "}
          />

          <EventCards
            imageSrc={"sakoyePartab-event"}
            title="سکوی پرتاب قزوین"
            description={
              "ویداد تخصصی سرمایه‌گذاری سکوی پرتاب قزوین با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ‌های این ..."
            }
            location={"قزوین، ایران"}
            date={" 24 آبان "}
          />

          <EventCards
            imageSrc={"startup-event"}
            title="فراخوان جذب ایده و استارتاپ"
            description={
              "در حاشیه همایش معدن‌کاری دیجیتال 1401، خانه خلاق و نوآوری دنیای اقتصاد با همکاری مجموعه 100استارت..."
            }
            location={"تهران، ایران"}
            date={"22 شهریور+  "}
          />
        </div>
      </section>
    </div>
  );
}

export default RecentEvent;
