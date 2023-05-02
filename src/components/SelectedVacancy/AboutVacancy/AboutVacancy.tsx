import { vacancyType } from "../../../types";
import s from "./AboutVacancy.module.css";

type PropsType = {
  vacancy: vacancyType
}

export const AboutVacancy = (props: PropsType) => {
  
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div>
          <div className={s.responsibilities}>Обязанности:</div>
          <div>
            <ul>
              <li>Дизайн</li>
              <li>Дизайн</li>
              <li>абоба</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={s.requirements}>Требования:</div>
          <div>
            <ul>
              <li>Дизайн</li>
              <li>Дизайн</li>
              <li>абоба</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={s.conditions}>Условия:</div>
          <div>
            <ul>
              <li>Дизайн</li>
              <li>Дизайн</li>
              <li>абоба</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
