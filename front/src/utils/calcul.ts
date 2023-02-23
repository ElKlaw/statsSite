export const getPourcentage = (a: number, b: number) : number =>  {
    return Number((a/(b !==0 ? b: 1) *100).toFixed(2))
}

export const getTotal = (array: Array<any>, accessor: string) : number =>  {
    return array.reduce((a : any, b : any) => Number(a) + Number(b[accessor]) , 0)
}