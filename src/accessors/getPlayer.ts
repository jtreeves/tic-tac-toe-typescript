import getValue from './getValue'

function getPlayer(): number {
    const stringValue: string = getValue('player')
    const numberValue: number = Number(stringValue)

    return numberValue
}

export default getPlayer
