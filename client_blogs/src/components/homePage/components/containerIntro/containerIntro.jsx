import clsx from "clsx";

import { Link } from "react-router-dom";

import { Fragment } from "react";
import style from "./containerIntro.module.scss";


function ContainerIntro() {
  return (
    <Fragment>
      <div className={clsx(style.container, "d-flex-c")}>
        <p className={clsx(style.text, "d-flex-c")}>
          Chào mừng các bạn đến với Laptrinhdelamgi?
        </p>
        <div className={style.click}>
          <Link to="/homePage">Click here!</Link>
        </div>
      </div>
    </Fragment>
  );
}

export default ContainerIntro;
