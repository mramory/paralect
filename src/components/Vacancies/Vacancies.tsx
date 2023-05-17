import { Vacancy } from "./Vacancy/Vacancy"
import s from "./Vacancies.module.css"
import { MyPagination } from "../Pagination/Pagination"
import { vacancyType } from "../../types"
import { useState } from "react"
import { useLocation } from "react-router-dom"


type PropsType = {
    vacancies: Array<vacancyType>
    setFavorite: (value: Array<vacancyType>) => void
    page: number
    setPage: (page: number) => void
    count: number
}



export const Vacancies = (props: PropsType) => {

    const location = useLocation()
    const [page, setPage] = useState(1)
    
    return(
        <div className={s.wrapper}>
            <div>{props.vacancies.slice(page * 4 - 4, page * 4).map((el: vacancyType) => <div key={el.id} className={s.container}><Vacancy setFavorite={props.setFavorite} key={el.id} vacancy={el} /></div>)}</div>
            <div className={s.pagination}><MyPagination count={props.count} setPage={location.pathname==="/"?props.setPage:setPage} page={location.pathname==="/"?props.page:page} /></div>
        </div>
    )
}