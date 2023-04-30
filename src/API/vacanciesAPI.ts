import { authInstanse } from "."


export const vacanciesAPI = {
    getAllVacancies(){
        return authInstanse.get("vacancies/")
        .then(res => res.data.objects)
        .catch(e => e)
    },
}