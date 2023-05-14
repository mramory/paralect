import { vacancyType } from "../../../types";
import s from "./AboutVacancy.module.css";

type PropsType = {
  vacancy: vacancyType
}

export const AboutVacancy = (props: PropsType) => {
  
  return (
    <div className={s.wrapper}>
      <div dangerouslySetInnerHTML={{__html: props.vacancy.vacancyRichText}} className={s.container}>
      </div>
    </div>
  );
};
