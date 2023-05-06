import { vacancyType } from "../../../types";
import s from "./AboutVacancy.module.css";

type PropsType = {
  vacancy: vacancyType
}

export const AboutVacancy = (props: PropsType) => {

  const parser = new DOMParser
  if(props.vacancy.vacancyRichText){
    const inner = parser.parseFromString(props.vacancy.vacancyRichText, 'text/html')
    const generalText = inner.body.textContent
    console.log(generalText)
    const text1 = generalText?.slice(generalText.indexOf("Обязанности:"), generalText.indexOf("Требования:"))
    console.log(text1)
  }
  
  
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};
