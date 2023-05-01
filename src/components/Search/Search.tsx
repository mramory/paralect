import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextInput } from "@mantine/core";
import s from "./Search.module.css";

type PropsType = {
  setSearch: (value: string) => void
  search: string | null
}

export const Search = (props: PropsType) => {
  return (
    <div className={s.container}>
      <TextInput
        value={props.search as string | number | readonly string[] | undefined}
        onChange={(value) => props.setSearch(value.currentTarget.value)}
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        radius="md"
        size="lg"
        placeholder="Введите название вакансии"
      />
      <Button className={s.btn}>Поиск</Button>
    </div>
  );
};
