import { authInstanse } from "."


export const vacanciesAPI = {
    getAllVacancies(){
        return authInstanse.get("vacancies/")
        .then(res => res.data.objects)
        .catch(e => e)
    },
    getVacanciesCount(){
        return authInstanse.get("vacancies/")
        .then(res => res.data.total)
        .catch(e => e)
    },
    getOneVacancy(id: string){
        return authInstanse.get(`vacancies/${id}`)
        .then(res => res.data)
        .catch(e => e)
    },
    getCatalogues(){
        return authInstanse.get("catalogues/")
        .then(res => res.data)
        .catch(e => e)
    },
    getFiteredVacancies(catalogues: string | null, payment_from: number | '' | null | undefined, payment_to: number | '' | null | undefined, keyword: string | null){
        return authInstanse.get(`vacancies/?published=1&catalogues=${catalogues}&payment_from=${payment_from}&payment_to=${payment_to}&keyword=${keyword}`)
        .then(res => res.data.objects)
        .catch(e => e)
    },
    getFavoriteVacancies(){
        return authInstanse.get(`favorites`)
        .then(res => res.data.objects)
        .catch(e => e)
    },
    createFavoriteVacancy(id: number){
        return authInstanse.post(`favorites/${id}/`)
        .then(res => res.data.objects)
        .catch(e => e)
    },
    deleteFavoriteVacancy(id: number){
        return authInstanse.delete(`favorites/${id}/`)
        .then(res => res.data.objects)
        .catch(e => e)
    },
}