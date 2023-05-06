import { useEffect, useState } from "react"
import { Vacancies } from "../../components/Vacancies/Vacancies"
import s from "./FavoritesPage.module.css"
import { vacanciesAPI } from "../../API/vacanciesAPI"
import { vacancyType } from "../../types"
import { EmptyPage } from "../EmptyPage/EmptyPage"
import { LoadingPage } from "../LoadingPage/LoadingPage"


export const FavoritesPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [favorite, setFavorite] = useState<vacancyType[]>([])

    useEffect(() => {
        const FetchData = async () => {
            const res =  await vacanciesAPI.getFavoriteVacancies()
            return res
        }
        FetchData().then(res => {
            setFavorite(res)
            setIsLoading(false)
        })
    },[])
    if(isLoading){
        return(
            <LoadingPage />
        )
    }
    if(favorite.length === 0){
        return(
            <EmptyPage />
        )
    }
    return(
        <div className={s.container}>
            <div>
                <Vacancies page={1} setPage={() => {}} vacancies={favorite} setFavorite={setFavorite} />
            </div>
        </div>
    )
}