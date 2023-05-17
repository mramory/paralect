import { Pagination } from '@mantine/core';

type PropsType = {
    page: number
    setPage: (page: number) => void
    count: number
}

export const MyPagination = (props: PropsType) => {
    return(
        <div>
            <Pagination value={props.page} onChange={props.setPage} total={props.count!==500?Math.ceil(props.count/4):500/4} />
        </div>
    )
}