import { Vacancy } from "./Vacancy/Vacancy"
import s from "./Vacancies.module.css"
import { MyPagination } from "../Pagination/Pagination"
import { vacancyType } from "../../types"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { EmptyPage } from "../../pages/EmptyPage/EmptyPage"


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
            {props.vacancies.length !== 0?<div>{props.vacancies?.slice(page * 4 - 4, page * 4).map((el: vacancyType) => <div key={el.id} className={s.container}><Vacancy setFavorite={props.setFavorite} key={el.id} vacancy={el} /></div>)}</div>:<EmptyPage isVacancies={true} />}
            <div className={s.pagination}><MyPagination count={props.count} setPage={location.pathname==="/"?props.setPage:setPage} page={location.pathname==="/"?props.page:page} /></div>
        </div>
    )
}