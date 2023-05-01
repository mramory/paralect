import { useEffect, useState } from "react"
import { Filter } from "../../components/Filter/Filter"
import { Search } from "../../components/Search/Search"
import { Vacancies } from "../../components/Vacancies/Vacancies"
import s from "./MainPage.module.css"
import { vacanciesAPI } from "../../API/vacanciesAPI"
import { vacancyType } from "../../types"


export const MainPage = () => {

    const [vacancies, setVacancies] = useState<vacancyType[]>([])

    useEffect(() => {
        vacanciesAPI.getAllVacancies()
        .then((res) => setVacancies(res))
    },[])

    const [catalogues, setCatalogues] = useState([])

    useEffect(() => {
        vacanciesAPI.getCatalogues()
        .then((res) => setCatalogues(res))
    },[])

    const [search, setSearch] = useState<string | null>('')

    return(
        <div className={s.container}>
            <div className={s.filter}><Filter setSearch={setSearch} search={search} setVacancies={setVacancies} catalogues={catalogues} /></div>
            <div>
                <div className={s.search}><Search setSearch={setSearch} search={search} /></div>
                <div><Vacancies vacancies={vacancies} /></div>
            </div>
        </div>
    )
}