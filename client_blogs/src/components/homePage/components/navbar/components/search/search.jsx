import { Fragment } from "react";
import style from "./search.module.scss";

function Search() {
  return (
    <Fragment>
        <input className={style.search} type="text" placeholder={'Searching...'} />
    </Fragment>
  );
}

export default Search;
