import { useEffect, useState } from "react"
import { AboutVacancy } from "../../components/SelectedVacancy/AboutVacancy/AboutVacancy"
import { HeaderVacancy } from "../../components/SelectedVacancy/HeaderVacancy/HeaderVacancy"
import { vacancyType } from "../../types"
import s from "./VacancyPage.module.css"
import { useParams } from "react-router-dom"
import { vacanciesAPI } from "../../API/vacanciesAPI"
import { LoadingPage } from "../LoadingPage/LoadingPage"


export const VacancyPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [vacancy, setVacancy] = useState<vacancyType>({} as vacancyType)
    const {id} = useParams()
    useEffect(() => {
        vacanciesAPI.getOneVacancy(id as string)
        .then(data => {
            setVacancy(data)
            setIsLoading(false)
        })
    }, [])
    if(isLoading){ return <LoadingPage />}
    else return(
        <div className={s.container}>
            <HeaderVacancy vacancy={vacancy} />
            <AboutVacancy vacancy={vacancy} />
        </div>
    )
}