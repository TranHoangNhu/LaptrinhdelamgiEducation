import clsx from "clsx";
import { Link } from "react-router-dom";

import style from "./systemUser.module.scss";

function SystemUser() {
  return (
    <div className={clsx(style.containerSystemUser, "d-flex-c_horizontal")}>
      <button className={clsx("d-flex-c", style.Btn, style.login)}>
        <p>LOGIN</p>
        <Link to={"/login"}> </Link>
      </button>
      <button className={clsx("d-flex-c", style.Btn, style.register)}>
        <p>REGISTER</p>
        <Link to={"/register"}> </Link>
      </button>
    </div>
  );
}

export default SystemUser;
