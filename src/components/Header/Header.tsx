import logo from "/logo.svg";
import s from "./Header.module.css";
import {NavLink, useLocation, useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState("search")
  const location = useLocation()
  
  useEffect(() => {
    if(location.pathname === "/favorites"){
      setSelected('fav')
    }
    if(location.pathname === "/"){
      setSelected('search')
    }
  },[location])

  const navigate = useNavigate()
  
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div onClick={() => navigate("/")} className={s.logo}>
          <img src={logo}></img>
          <div className={s.logo_text}>Jobored</div>
        </div>
        <div className={s.nav}>
          <NavLink style={{ textDecoration: 'none', color: '#232134' }} to={"/"}><div className={`${s.nav_first_child} ${selected === "search"?s.selected:null}`}>Поиск Вакансий</div></NavLink>
          <NavLink style={{ textDecoration: 'none', color: '#232134' }} to={"/favorites"}><div className={selected === "fav"?s.selected:undefined}>Избранное</div></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
