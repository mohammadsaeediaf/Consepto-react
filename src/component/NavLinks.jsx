function NavLinks() {
  return (
    <div className="container">
      <ul className="nav-links">
        <li className="nav-items">
          <a href="/#">شرکت ها</a>
        </li>
        <li className="nav-items">
          <a href="/#">فرصت های شغلی</a>
        </li>
        <li className="nav-items">
          <a href="/#">اخبار و رویداد ها</a>
        </li>
        <li className="nav-items">
          <a href="/#">درباره ما</a>
        </li>
        <li className="nav-items">
          <a href="/#">تماس با ما</a>
        </li>
      </ul>

      <div className="nav-search-md">
        <input type="text" placeholder="جست و جو کسب و کار" />
      </div>
    </div>
  );
}

export default NavLinks;
