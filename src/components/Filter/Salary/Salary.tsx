import { NumberInput } from '@mantine/core';

type PropsType = {
  setSalaryFrom: (salaryFrom: number | null | '') => void
  setSalaryTo: (salaryTo: number | null | '') => void
  salaryFrom: number | '' | null
  salaryTo: number | '' | null
}

export const Salary = (props: PropsType) => {
    return(
        <>
        <NumberInput
        data-elem="salary-from-input"
        value={props.salaryFrom as number | '' | undefined} 
        onChange={(value) => props.setSalaryFrom(value)}
        hideControls
        placeholder="От"
        max={1000000}
        min={0}
        step={1000}
      />
        <NumberInput
        data-elem="salary-to-input"
        value={props.salaryTo as number | '' | undefined} 
        onChange={(value) => props.setSalaryTo(value)}
        hideControls
        placeholder="До"
        max={1000000}
        min={0}
        step={1000}
      />
      </>
    )
}