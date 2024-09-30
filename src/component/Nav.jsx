function Nav() {
  return (
    <nav className="container">
      <div className="nav-logo">
        <div className="hamburger-icon">
          <img src={require("../images/nav/hamburger-icon.png")} alt="menu" />
        </div>
        <img src={require("../images/nav/logo.png")} alt="logo" />

        <div className="nav-search">
          <input type="text" placeholder="جست و جو کسب و کار" />
        </div>
      </div>

      <div className="nav-buttons">
        <button>
          <img src={require("../images/nav/thunder.png")} alt="thunder" />
          <span>رایگان شروع کن!</span>
        </button>

        <button className="nav-login">
          <img src={require("../images/nav/login.png")} alt="login" />
          <span>ورود / ثبت نام</span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
