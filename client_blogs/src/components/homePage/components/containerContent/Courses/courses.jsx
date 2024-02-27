import clsx from "clsx";

import style from "./courses.module.scss";

function Courses() {
  return (
    <div className={style.sectionCourses}>
      <p className={clsx(style.text)}>Khóa học</p>
      <div className={clsx(style.containerCourses, 'd-flex-c')}>
        <p>COMING SOON</p>
      </div>
    </div>
  );
}

export default Courses;
