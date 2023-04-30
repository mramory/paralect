import { Vacancies } from "../../components/Vacancies/Vacancies"
import s from "./FavoritesPage.module.css"


export const FavoritesPage = () => {
    return(
        <div className={s.container}>
            <div>
                <Vacancies />
            </div>
        </div>
    )
}