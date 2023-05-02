import { useState } from "react";
import s from "./Vacancy.module.css";
import not_selected_star from "/not_selected_star.svg";
import selected_star from "/selected_star.svg";
import location from "/location.svg";
import {useNavigate} from "react-router-dom"
import { vacancyType } from "../../../types";
import { vacanciesAPI } from "../../../API/vacanciesAPI";

type PropsType = {
  vacancy: vacancyType
  setFavorite: (value: Array<vacancyType>) => void
}

export const Vacancy = (props: PropsType) => {

  const [isSelected, setIsSelected] = useState<boolean | null>(null);

  const changeIsSelected = async () => {
    if (props.vacancy.favorite) {
      setIsSelected(isSelected === null?false:isSelected?false:true);
      await vacanciesAPI.deleteFavoriteVacancy(props.vacancy.id)
      vacanciesAPI.getFavoriteVacancies()
      .then(res => props.setFavorite(res))
    } 
    if (!props.vacancy.favorite) {
      setIsSelected(isSelected === null?true:isSelected?false:true);
      await vacanciesAPI.createFavoriteVacancy(props.vacancy.id)
      vacanciesAPI.getFavoriteVacancies()
      .then(res => props.setFavorite(res))
    } 
  };

  const navigate = useNavigate()

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.label}>
          <div className={s.title} onClick={() => navigate("/vacancies/"+props.vacancy.id)}>{props.vacancy.profession}</div>
          <div onClick={changeIsSelected} className={s.favorite_icon}>
            {props.vacancy.favorite && isSelected === null ? (
              <img src={selected_star}></img>
            ) : isSelected ? (
              <img src={selected_star}></img>
            ) : (
              <img src={not_selected_star}></img>
            )}
          </div>
        </div>
        <div className={s.info}>
          <div className={s.salary}>
            {props.vacancy.agreement
              ? "з/п по договоренности"
              : !props.vacancy.payment_from
              ? `з/п до ${props.vacancy.payment_to} ${props.vacancy.currency}`
              : !props.vacancy.payment_to
              ? `з/п от ${props.vacancy.payment_from} ${props.vacancy.currency}`
              : props.vacancy.payment_from === props.vacancy.payment_to
              ? `з/п ${props.vacancy.payment_from}`
              : `з/п ${props.vacancy.payment_from}-${props.vacancy.payment_to} ${props.vacancy.currency}`}
          </div>
          <div className={s.dot}>•</div>
          <div className={s.busy}>{props.vacancy.type_of_work.title}</div>
        </div>
        <div className={s.adres}>
          <div>
            <img src={location}></img>
          </div>
          <div className={s.location}>{props.vacancy.town.title}</div>
        </div>
      </div>
    </div>
  );
};
