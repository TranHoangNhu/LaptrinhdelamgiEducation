import { Fragment } from "react";

import style from "./homePage.module.scss";

import Navbar from "./components/navbar/navbar";
// import ContainerIntro from "./components/containerIntro/containerIntro";
import ContainerContent from "./components/containerContent/containerContent";

function HomePage() {
  return (
    <Fragment>
      <div className={style.containerHomePage}>
        <Navbar />
        <ContainerContent />
        {/* <ContainerIntro /> */}
      </div>
    </Fragment>
  );
}

export default HomePage;
