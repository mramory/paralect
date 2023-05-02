import { useEffect } from "react"
import { Vacancies } from "../../components/Vacancies/Vacancies"
import s from "./FavoritesPage.module.css"
import { vacanciesAPI } from "../../API/vacanciesAPI"


export const FavoritesPage = () => {

    useEffect(() => {
        vacanciesAPI.getFavoriteVacancies()
    },[])

    return(
        <div className={s.container}>
            <div>
                <Vacancies vacancies={[]} />
            </div>
        </div>
    )
}