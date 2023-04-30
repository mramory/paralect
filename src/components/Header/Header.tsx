import logo from "/logo.svg";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom"
import { useState } from "react";

const Header = () => {

  const [selected, setSelected] = useState("search")
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src={logo}></img>
          <div className={s.logo_text}>Jobored</div>
        </div>
        <div className={s.nav}>
          <NavLink onClick={() => setSelected('search')} style={{ textDecoration: 'none', color: '#232134' }} to={"/"}><div className={`${s.nav_first_child} ${selected === "search"?s.selected:null}`}>Поиск Вакансий</div></NavLink>
          <NavLink onClick={() => setSelected('fav')} style={{ textDecoration: 'none', color: '#232134' }} to={"/favorites"}><div className={selected === "fav"?s.selected:undefined}>Избранное</div></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
