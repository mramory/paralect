import { useState } from "react";
import s from "./HeaderVacancy.module.css";
import not_selected_star from "/not_selected_star.svg";
import selected_star from "/selected_star.svg";
import location from "/location.svg";
import { vacancyType } from "../../../types";

type PropsType = {
  vacancy: vacancyType
}

export const HeaderVacancy = (props: PropsType) => {
  const [isSelected, setIsSelected] = useState(false);

  const changeIsSelected = () => {
    if (isSelected) setIsSelected(false);
    if (!isSelected) setIsSelected(true);
  };
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.label}>
            <div className={s.title}>{props.vacancy.profession}</div>
            <div onClick={changeIsSelected} className={s.favorite_icon}>
              {isSelected ? (
                <img src={selected_star}></img>
              ) : (
                <img src={not_selected_star}></img>
              )}
            </div>
          </div>
          <div className={s.info}>
            <div className={s.salary}>{props.vacancy.agreement
              ? "з/п по договоренности"
              : !props.vacancy.payment_from
              ? `з/п до ${props.vacancy.payment_to} ${props.vacancy.currency}`
              : !props.vacancy.payment_to
              ? `з/п от ${props.vacancy.payment_from} ${props.vacancy.currency}`
              : props.vacancy.payment_from === props.vacancy.payment_to
              ? `з/п ${props.vacancy.payment_from}`
              : `з/п ${props.vacancy.payment_from}-${props.vacancy.payment_to} ${props.vacancy.currency}`}</div>
            <div className={s.dot}>•</div>
            <div className={s.busy}>{props.vacancy.type_of_work?.title}</div>
          </div>
          <div className={s.adres}>
            <div>
              <img src={location}></img>
            </div>
            <div className={s.location}>{props.vacancy.town?.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
