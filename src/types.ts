export type vacancyType = {
    id: number
    profession: string
    firm_name: string
    town: townVacancyType
    catalogues: Array<catalogueVacancyType>
    type_of_work: typeOfWorkVacancyType
    payment_to: number
    payment_from: number
    currency: string
    agreement: boolean
    favorite: boolean
    vacancyRichText: string
}

type townVacancyType = {
    declension: string
    genitive: string
    hasMetro: boolean
    id: number
    title: string
}

export type catalogueVacancyType = {
    key: number
    title: string
}

type typeOfWorkVacancyType = {
    id: number
    title: string
} 