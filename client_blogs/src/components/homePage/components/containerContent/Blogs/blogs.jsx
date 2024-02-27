import clsx from "clsx";

import style from "./blogs.module.scss";

import Blog from "./blog/blog";

function Blogs() {
  return (
    <div className={style.sectionBlogs}>
      <p className={clsx(style.text)}>Blogs </p>
      <div className={clsx(style.containerBlogs)}>
        <Blog
          bgPath={
            "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
          }
          title={"HTML - CSS"}
        />
        <Blog
          bgPath={"https://files.fullstack.edu.vn/f8-prod/courses/7.png"}
          title={"Nhập môn lập trình"}
        />
        <Blog
          bgPath={"https://files.fullstack.edu.vn/f8-prod/courses/7.png"}
          title={"Nhập môn lập trình"}
        />
        <Blog
          bgPath={"https://files.fullstack.edu.vn/f8-prod/courses/7.png"}
          title={"Nhập môn lập trình"}
        />
        <Blog
          bgPath={"https://files.fullstack.edu.vn/f8-prod/courses/7.png"}
          title={"Nhập môn lập trình"}
        />
        <Blog
          bgPath={"https://files.fullstack.edu.vn/f8-prod/courses/7.png"}
          title={"Nhập môn lập trình"}
        />
      </div>
    </div>
  );
}

export default Blogs;
