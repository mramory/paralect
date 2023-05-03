import loading from "/loading.svg"
import s from "./LoadingPage.module.css"

export const LoadingPage = () => {
    return(
        <div className={s.container}>
            <img src={loading}></img>
        </div>
    )
}