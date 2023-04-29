import { NumberInput } from '@mantine/core';

export const Salary = () => {
    return(
        <>
        <NumberInput
        hideControls
        placeholder="От"
        max={1000000}
        min={0}
        step={1000}
      />
        <NumberInput
        hideControls
        placeholder="До"
        max={1000000}
        min={0}
        step={1000}
      />
      </>
    )
}