import { useState } from 'react';
import { Select } from '@mantine/core';
import { createStyles, rem } from '@mantine/core';
import ddbtn from "/dropDownBtn.svg"
import { catalogueVacancyType } from '../../../types';


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


type PropsType = {
  catalogues: Array<catalogueVacancyType>
  catalogue: string | null
  setCatalogue: (value: string | null) => void
}

export function ChooseField(props: PropsType) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });

  return (
    <Select
      data-elem="industry-select"
      value={props.catalogue}
      onChange={(value) => props.setCatalogue(value)}
      onDropdownClose={() => setOpened(false)}
      onDropdownOpen={() => setOpened(true)}
      placeholder="Выберете отрасль"
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSection={<img className={classes.icon} src={ddbtn}></img>}
      data={props.catalogues.map((el) => {
        return { value: `${el.key}`, label: el.title }
      })
      }
    />
  );
}