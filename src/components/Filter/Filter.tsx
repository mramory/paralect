import { ChooseField } from "./ChooseField/ChooseField";
import { Button } from "@mantine/core";
import { Salary } from "./Salary/Salary";
import cross from "/cross.svg";
import s from "./Filter.module.css";
import { useState} from "react"
import { vacanciesAPI } from "../../API/vacanciesAPI";
import { catalogueVacancyType, vacancyType } from "../../types";

type PropsType = {
  catalogues: Array<catalogueVacancyType>
  setVacancies: (vacancies: Array<vacancyType>) => void
  search: string | null
  setSearch: (value: string | null) => void
}

export const Filter = (props: PropsType) => {
  const [catalogue, setCatalogue] = useState<string | null>('')
  const [salaryFrom, setSalaryFrom] = useState<number | null | ''>('')
  const [salaryTo, setSalaryTo] = useState<number | null | ''>('')


  const onFilterSearch = async () => {
    const res = await vacanciesAPI.getFiteredVacancies(catalogue, salaryFrom, salaryTo, props.search)
    props.setVacancies(res)
  }

  const onClear = () => {
    setSalaryFrom('')
    setSalaryTo('')
    setCatalogue(null)
    props.setSearch('')
  }


  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.label}>
          <div className={s.filter}>Фильтры</div>
          <div onClick={onClear} className={s.reset}>
            <div>Сбросить все</div>
            <img style={{ cursor: "pointer" }} src={cross}></img>
          </div>
        </div>
        <div className={s.field}>
          <div className={s.field_text}>Отрасль</div>
          <div>
            <ChooseField catalogue={catalogue} setCatalogue={setCatalogue} catalogues={props.catalogues} />
          </div>
        </div>
        <div className={s.salary}>
          <div className={s.salary_text}>Оклад</div>
          <div>
            <Salary salaryFrom={salaryFrom} salaryTo={salaryTo} setSalaryFrom={setSalaryFrom} setSalaryTo={setSalaryTo} />
          </div>
        </div>
        <div>
          <Button onClick={onFilterSearch} fullWidth radius="md">Применить</Button>
        </div>
      </div>
    </div>
  );
};
