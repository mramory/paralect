import logo from "/logo.svg"
import s from "./Header.module.css"

const Header = () => {
    return(
        <div className={s.container}>
            <div className={s.logo}>
                <img src={logo}></img>
                <div className={s.logo_text}>Jobored</div>
            </div>
            <div className={s.nav}>
                <div className={s.nav_first_child}>Поиск Вакансий</div>
                <div>Избранное</div>
            </div>
        </div>
    )
}

export default Header