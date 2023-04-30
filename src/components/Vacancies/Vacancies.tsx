import { Vacancy } from "./Vacancy/Vacancy"
import s from "./Vacancies.module.css"
import { MyPagination } from "../Pagination/Pagination"


export const Vacancies = () => {

    const num:Array<number> =  [1,2,3,4]

    return(
        <div className={s.wrapper}>
            <div>{num.map((el: number) => <div className={s.container}><Vacancy key={el} /></div>)}</div>
            <div className={s.pagination}><MyPagination /></div>
        </div>
    )
}