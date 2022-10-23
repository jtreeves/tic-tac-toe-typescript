import getValue from './getValue'

function getTurn(): number {
    const stringValue: string = getValue('turn')
    const numberValue: number = Number(stringValue)

    return numberValue
}

export default getTurn
