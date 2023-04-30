import s from "./AboutVacancy.module.css";

export const AboutVacancy = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div>
          <div className={s.responsibilities}>Обязанности:</div>
          <div>
            <ul>
              <li>Разработка</li>
              <li>Дизайн</li>
              <li>абоба</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={s.requirements}>Требования:</div>
          <div>
            <ul>
              <li>Разработка</li>
              <li>Дизайн</li>
              <li>абоба</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={s.conditions}>Условия:</div>
          <div>
            <ul>
              <li>Разработка</li>
              <li>Дизайн</li>
              <li>абоба</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
