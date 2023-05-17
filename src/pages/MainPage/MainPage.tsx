import { useEffect, useState } from "react"
import { Filter } from "../../components/Filter/Filter"
import { Search } from "../../components/Search/Search"
import { Vacancies } from "../../components/Vacancies/Vacancies"
import s from "./MainPage.module.css"
import { vacanciesAPI } from "../../API/vacanciesAPI"
import { vacancyType } from "../../types"
import { LoadingPage } from "../LoadingPage/LoadingPage"


export const MainPage = () => {
    const [catalogue, setCatalogue] = useState<string | null>('')
    const [salaryFrom, setSalaryFrom] = useState<number | null | ''>('')
    const [salaryTo, setSalaryTo] = useState<number | null | ''>('')

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [vacancies, setVacancies] = useState<vacancyType[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)
        const FetchData = async () => {
            const res1 =  await vacanciesAPI.getAllVacancies(page)
            const res2 =  await vacanciesAPI.getCatalogues()
            return {res1,res2}
        }
        FetchData().then(res => {
            setCatalogues(res.res2)
            setVacancies(res.res1)
            setIsLoading(false)
        })
    },[page])

    const [catalogues, setCatalogues] = useState([])

    const [search, setSearch] = useState<string | null>('')
    if(isLoading){
        return(
            <LoadingPage />
        )
    }
    return(
        <div className={s.container}>
            <div className={s.filter}><Filter setIsLoading={setIsLoading} setSalaryTo={setSalaryTo} salaryTo={salaryTo} setSalaryFrom={setSalaryFrom} salaryFrom={salaryFrom} setCatalogue={setCatalogue} catalogue={catalogue} setSearch={setSearch} search={search} setVacancies={setVacancies} catalogues={catalogues} /></div>
            <div>
                <div className={s.search}><Search setIsLoading={setIsLoading} salaryTo={salaryTo} salaryFrom={salaryFrom} catalogue={catalogue} setVacancies={setVacancies} setSearch={setSearch} search={search} /></div>
                <div className={s.vacancies}><Vacancies page={page} count={500} setPage={setPage} setFavorite={() => {}} vacancies={vacancies} /></div>
            </div>
        </div>
    )
}