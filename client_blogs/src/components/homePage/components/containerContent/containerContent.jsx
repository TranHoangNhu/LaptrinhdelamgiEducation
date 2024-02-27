import clsx from "clsx";

import style from "./containerContent.module.scss";

import Courses from "./Courses/courses";
import Blogs from "./Blogs/blogs";

function ContainerContent() {
  return (
    <div className={clsx(style.containerContent)}>
      <Courses />
      <Blogs />
    </div>
  );
}

export default ContainerContent;
