import { ChooseField } from "./ChooseField/ChooseField";
import { Button } from "@mantine/core";
import { Salary } from "./Salary/Salary";
import cross from "/cross.svg";
import s from "./Filter.module.css";

export const Filter = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.label}>
          <div className={s.filter}>Фильтры</div>
          <div className={s.reset}>
            <div>Сбросить все</div>
            <img style={{ cursor: "pointer" }} src={cross}></img>
          </div>
        </div>
        <div className={s.field}>
          <div className={s.field_text}>Отрасль</div>
          <div>
            <ChooseField />
          </div>
        </div>
        <div className={s.salary}>
          <div className={s.salary_text}>Оклад</div>
          <div>
            <Salary />
          </div>
        </div>
        <div>
          <Button fullWidth radius="md">Применить</Button>
        </div>
      </div>
    </div>
  );
};
