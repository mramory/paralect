import { ChooseField } from "./ChooseField/ChooseField";
import { Button } from "@mantine/core";
import { Salary } from "./Salary/Salary";
import cross from "/cross.svg";
import s from "./Filter.module.css";
import { vacanciesAPI } from "../../API/vacanciesAPI";
import { catalogueVacancyType, vacancyType } from "../../types";

type PropsType = {
  catalogues: Array<catalogueVacancyType>
  setVacancies: (vacancies: Array<vacancyType>) => void
  search: string | null
  setSearch: (value: string | null) => void
  catalogue: string | null
  salaryFrom: number | null | ''
  salaryTo: number | null | ""
  setCatalogue: (value: string | null) => void
  setSalaryFrom: (value: number | null |'') => void
  setSalaryTo: (value: number | null | '') => void
  setIsLoading: (value: boolean) =>void
}

export const Filter = (props: PropsType) => {
  


  const onFilterSearch = async () => {
    props.setIsLoading(true)
    const res = await vacanciesAPI.getFiteredVacancies(props.catalogue, props.salaryFrom, props.salaryTo, props.search)
    props.setVacancies(res)
    props.setIsLoading(false)
  }

  const onClear = async () => {
    props.setIsLoading(true)
    props.setSalaryFrom('')
    props.setSalaryTo('')
    props.setCatalogue(null)
    props.setSearch('')
    const res = await vacanciesAPI.getFiteredVacancies(null, "", "", "")
    props.setVacancies(res)
    props.setIsLoading(false)
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
            <ChooseField catalogue={props.catalogue} setCatalogue={props.setCatalogue} catalogues={props.catalogues} />
          </div>
        </div>
        <div className={s.salary}>
          <div className={s.salary_text}>Оклад</div>
          <div>
            <Salary salaryFrom={props.salaryFrom} salaryTo={props.salaryTo} setSalaryFrom={props.setSalaryFrom} setSalaryTo={props.setSalaryTo} />
          </div>
        </div>
        <div>
          <Button data-elem="search-button" onClick={onFilterSearch} fullWidth radius="md">Применить</Button>
        </div>
      </div>
    </div>
  );
};
