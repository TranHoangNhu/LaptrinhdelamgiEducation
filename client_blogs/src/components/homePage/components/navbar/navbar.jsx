import clsx from "clsx";
import style from "./navbar.module.scss";

import Search from "./components/search/search";
import SystemUser from "./components/systemUser/systemUser";
import Logo from "./components/logo/logo";

function Navbar() {
  return (
    <div className={clsx(style.navbar, "d-flex-around")}>
      <Logo />
      <Search />
      <SystemUser />
    </div>
  );
}

export default Navbar;
