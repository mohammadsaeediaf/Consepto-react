import FooterList from "./FooterList";
import ListItem from "./ListItem";

function FooterLinks() {
  return (
    <>
      <FooterList>
        <ListItem>کانسپتو</ListItem>
        <ListItem>درباره ما</ListItem>
        <ListItem>تماس با ما </ListItem>
        <ListItem>اتاق خبر </ListItem>
        <ListItem> قوانین و مقررات </ListItem>
      </FooterList>

      <FooterList>
        <ListItem> خدمات مشتریان</ListItem>
        <ListItem>حساب کاربری</ListItem>
        <ListItem>سوالات متداول </ListItem>
        <ListItem> راهنمای کار با سایت </ListItem>
        <ListItem> گزارش باگ </ListItem>
      </FooterList>

      <FooterList>
        <ListItem>پیشنهاد کانسپتو</ListItem>
        <ListItem> لیست استارتاپ های ایرانی</ListItem>
        <ListItem> ارزش گذاری استارتاپ</ListItem>
        <ListItem> ایده های استارتاپی </ListItem>
        <ListItem> محبوب ترین شرکت ها</ListItem>
      </FooterList>
    </>
  );
}

export default FooterLinks;
