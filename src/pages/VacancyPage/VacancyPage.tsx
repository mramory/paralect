import { AboutVacancy } from "../../components/SelectedVacancy/AboutVacancy/AboutVacancy"
import { HeaderVacancy } from "../../components/SelectedVacancy/HeaderVacancy/HeaderVacancy"
import s from "./VacancyPage.module.css"


export const VacancyPage = () => {
    return(
        <div className={s.container}>
            <HeaderVacancy />
            <AboutVacancy />
        </div>
    )
}