import { Vacancy } from "./Vacancy/Vacancy"
import s from "./Vacancies.module.css"


export const Vacancies = () => {

    const num:Array<number> =  [1,2,3,4]

    return(
        <>
        {num.map((el: number) => <div className={s.container}><Vacancy key={el} /></div>)}
        </>
    )
}