import getValue from './getValue'

function getPoints(): number[] {
    const singleString: string = getValue('points')
    const arrayOfStrings: string[] = singleString.split(',')
    const arrayOfNumbers: number[] = arrayOfStrings.map((
        item: string
    ) => {
        const numberValue: number = Number(item)
        
        return numberValue
    })

    return arrayOfNumbers
}

export default getPoints
