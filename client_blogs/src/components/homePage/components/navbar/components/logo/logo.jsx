import clsx from "clsx";

import style from './logo.module.scss';

const logoPath = process.env.PUBLIC_URL + "/img/logo.png";


function Logo() {
  return (
    <a className={clsx(style.containerLogo, 'd-flex-c')} href="/">
      <img src={logoPath} alt="logo.png" />
    </a>
  );
}

export default Logo;
