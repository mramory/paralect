import { Vacancy } from "./Vacancy/Vacancy"
import s from "./Vacancies.module.css"
import { MyPagination } from "../Pagination/Pagination"
import { vacancyType } from "../../types"
import { useState, useEffect } from "react"
import { vacanciesAPI } from "../../API/vacanciesAPI"

type PropsType = {
    vacancies: Array<vacancyType>
    setFavorite: (value: Array<vacancyType>) => void
    page: number
    setPage: (page: number) => void
}



export const Vacancies = (props: PropsType) => {
    
    const [count, setCount] = useState(0)
    useEffect(() => {
        vacanciesAPI.getVacanciesCount().then(res => setCount(res))
    },[props.page])
    
    return(
        <div className={s.wrapper}>
            <div>{props.vacancies.slice(props.page*4-4, props.page*4).map((el: vacancyType) => <div key={el.id} className={s.container}><Vacancy setFavorite={props.setFavorite} key={el.id} vacancy={el} /></div>)}</div>
            <div className={s.pagination}><MyPagination count={count} setPage={props.setPage} page={props.page} /></div>
        </div>
    )
}