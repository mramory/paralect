import { Vacancy } from "./Vacancy/Vacancy"
import s from "./Vacancies.module.css"
import { MyPagination } from "../Pagination/Pagination"
import { vacancyType } from "../../types"

type PropsType = {
    vacancies: Array<vacancyType>
}

export const Vacancies = (props: PropsType) => {

    return(
        <div className={s.wrapper}>
            <div>{props.vacancies.map((el: vacancyType) => <div key={el.id} className={s.container}><Vacancy key={el.id} vacancy={el} /></div>)}</div>
            <div className={s.pagination}><MyPagination /></div>
        </div>
    )
}