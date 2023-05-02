import { useEffect, useState } from "react"
import { Vacancies } from "../../components/Vacancies/Vacancies"
import s from "./FavoritesPage.module.css"
import { vacanciesAPI } from "../../API/vacanciesAPI"
import { vacancyType } from "../../types"


export const FavoritesPage = () => {

    const [favorite, setFavorite] = useState<vacancyType[]>([])

    useEffect(() => {
        vacanciesAPI.getFavoriteVacancies()
        .then(res => setFavorite(res))
    },[])

    return(
        <div className={s.container}>
            <div>
                <Vacancies vacancies={favorite} setFavorite={setFavorite} />
            </div>
        </div>
    )
}