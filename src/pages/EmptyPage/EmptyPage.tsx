import { Button } from "@mantine/core"
import empty from "/empty.svg"
import s from "./EmptyPage.module.css"
import {NavLink} from "react-router-dom"

export const EmptyPage = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <img src={empty}></img>
                <div className={s.description}>Упс, здесь еще ничего нет!</div>
                <NavLink to={"/"} style={{textDecoration: "none"}} ><Button radius="md" variant="light">Поиск Вакансий</Button></NavLink>
            </div>
        </div>
    )
}