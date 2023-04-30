import { Filter } from "../../components/Filter/Filter"
import { Search } from "../../components/Search/Search"
import { Vacancies } from "../../components/Vacancies/Vacancies"
import s from "./MainPage.module.css"


export const MainPage = () => {
    return(
        <div className={s.container}>
            <div className={s.filter}><Filter /></div>
            <div>
                <div className={s.search}><Search /></div>
                <div><Vacancies /></div>
            </div>
        </div>
    )
}