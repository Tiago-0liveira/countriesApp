export type Currency = {
    code: string,
    name: string,
    symbol: string
}

export interface Country {
    area: number,
    capital: string,
    currencies: Currency[],
    flag: string,
    name: string,
    population: number,
    region: string,
}


/* COMPONENTS PROPS */
export interface HomeProps {
    countries: Country[]
}
/* COMPONENTS PROPS */