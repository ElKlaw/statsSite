export const randomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

export const randomDate = (from: Date, to: Date) => {
    const fromTime = from.getTime()
    const toTime = to.getTime()
    return new Date(fromTime + Math.random() * (toTime - fromTime))
}


export const getListRandomDate = (size: number, from: Date, to: Date) => {
    return Array.from({length: size}, (value, key) => key).map(el => randomDate(from, to)).sort((a: Date, b: Date) => a.valueOf() - b.valueOf())
}

export const range = (start: number, end: number) => Array.from({length: end -start},(value: any,index : any)=>start + index)