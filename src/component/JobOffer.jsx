import JobCards from "./JobCards.jsx";
import SectionTitle from "./SectionTitle.jsx";

function JobOffer() {
  return (
    <div className="container">
      <section className="job-offer">
        <SectionTitle>فرصت های شغلی</SectionTitle>
        <div className="job-section">
          <JobCards imageSrc="blue-bank" title="بلوبانک">
            12 فرصت شغلی
          </JobCards>

          <JobCards imageSrc="asyatech" title="آسیاتک">
            16 فرصت شغلی
          </JobCards>

          <JobCards imageSrc="farabi-card-icon" title="کارگزاری فارابی">
            11 فرصت شغلی
          </JobCards>

          <JobCards imageSrc="bime-bazar" title=" بیمه بازار">
            14 فرصت شغلی
          </JobCards>

          <JobCards imageSrc="ali-baba" title="بلوبانک">
            17 فرصت شغلی
          </JobCards>
        </div>
      </section>
    </div>
  );
}

export default JobOffer;
