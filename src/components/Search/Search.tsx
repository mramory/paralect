import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextInput } from "@mantine/core";
import s from "./Search.module.css";
import { vacanciesAPI } from "../../API/vacanciesAPI";
import { vacancyType } from "../../types";

type PropsType = {
  setSearch: (value: string) => void
  search: string | null
  setVacancies: (value: vacancyType[]) => void
}

export const Search = (props: PropsType) => {

  const onSearch = () => {
    vacanciesAPI.getFiteredVacancies(null, null, null, props.search)
    .then(res => props.setVacancies(res))
  }

  return (
    <div className={s.container}>
      <TextInput
        data-elem="search-input"
        value={props.search as string | number | readonly string[] | undefined}
        onChange={(value) => props.setSearch(value.currentTarget.value)}
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        radius="md"
        size="lg"
        placeholder="Введите название вакансии"
      />
      <Button data-elem="search-button" onClick={onSearch} className={s.btn}>Поиск</Button>
    </div>
  );
};
