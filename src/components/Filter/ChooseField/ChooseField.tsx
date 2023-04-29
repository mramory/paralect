import { useState } from 'react';
import { Select } from '@mantine/core';
import { createStyles, Menu, rem } from '@mantine/core';
import ddbtn from "/dropDownBtn.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const data = [
  { label: 'English' },
  { label: 'German' },
  { label: 'Italian' },
  { label: 'French' },
  { label: 'Polish' },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(200),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: 'background-color 150ms ease',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: 'transform 150ms ease',
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
  },
}));

export function ChooseField() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Select
      onDropdownClose={() => setOpened(false)}
      onDropdownOpen={() => setOpened(true)}
      placeholder="Выберете отрасль"
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSection={<img className={classes.icon} src={ddbtn}></img>}
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}