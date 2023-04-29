import { NumberInput } from '@mantine/core';

export const Salary = () => {
    return(
        <>
        <NumberInput
        placeholder="От"
        max={1000000}
        min={0}
        step={1000}
      />
        <NumberInput
        placeholder="До"
        max={1000000}
        min={0}
        step={1000}
      />
      </>
    )
}