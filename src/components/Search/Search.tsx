import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextInput } from "@mantine/core";
import s from "./Search.module.css";

export const Search = () => {
  return (
    <div className={s.container}>
      <TextInput
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        radius="md"
        size="lg"
        placeholder="Search questions"
      />
      <Button className={s.btn}>Поиск</Button>
    </div>
  );
};
