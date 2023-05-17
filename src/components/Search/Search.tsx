import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextInput } from "@mantine/core";
import s from "./Search.module.css";
import { vacanciesAPI } from "../../API/vacanciesAPI";
import { vacancyType } from "../../types";
import { useMediaQuery } from "@mantine/hooks";

type PropsType = {
  setSearch: (value: string) => void;
  search: string | null;
  setVacancies: (value: vacancyType[]) => void;
  catalogue: string | null
  salaryFrom: number | null | ''
  salaryTo: number | null | ""
  setIsLoading: (value: boolean) =>void
};

export const Search = (props: PropsType) => {
  const onSearch = () => {
    props.setIsLoading(true)
    vacanciesAPI
      .getFiteredVacancies(props.catalogue, props.salaryFrom, props.salaryTo, props.search)
      .then((res) => {
        props.setVacancies(res)
        props.setIsLoading(false)
      });
  };
  const xs = useMediaQuery('(max-width: 390px)');
  return (
    <div className={s.container}>
        <TextInput
          className={s.search}
          data-elem="search-input"
          value={
            props.search as string | number | readonly string[] | undefined
          }
          onChange={(value) => props.setSearch(value.currentTarget.value)}
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          radius="md"
          size={xs?"md":"lg"}
          placeholder="Введите название вакансии"
        />
      <Button size={xs?"xs":undefined} data-elem="search-button" onClick={onSearch} className={s.btn}>
          Поиск
      </Button>
    </div>
  );
};
