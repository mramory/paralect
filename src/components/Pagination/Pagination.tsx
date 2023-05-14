import { Pagination } from '@mantine/core';

type PropsType = {
    page: number
    setPage: (page: number) => void
    count: number
}

export const MyPagination = (props: PropsType) => {
    return(
        <div>
            <Pagination value={props.page} onChange={props.setPage} total={125} />
        </div>
    )
}