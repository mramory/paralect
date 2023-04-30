import { useState } from "react";
import s from "./Vacancy.module.css";
import not_selected_star from "/not_selected_star.svg";
import selected_star from "/selected_star.svg";
import location from "/location.svg";
import {NavLink} from "react-router-dom"

export const Vacancy = () => {
  const [isSelected, setIsSelected] = useState(false);

  const changeIsSelected = () => {
    if (isSelected) setIsSelected(false);
    if (!isSelected) setIsSelected(true);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.label}>
        <NavLink to={"/vacancies/1"}><div className={s.title}>Менеджер-дизайнер</div></NavLink>
          <div onClick={changeIsSelected} className={s.favorite_icon}>
            {isSelected ? (
              <img src={selected_star}></img>
            ) : (
              <img src={not_selected_star}></img>
            )}
          </div>
        </div>
        <div className={s.info}>
          <div className={s.salary}>з/п от 70000 rub</div>
          <div className={s.dot}>•</div>
          <div className={s.busy}>Полный рабочий день</div>
        </div>
        <div className={s.adres}>
          <div>
            <img src={location}></img>
          </div>
          <div className={s.location}>Новый Уренгой</div>
        </div>
      </div>
    </div>
  );
};
