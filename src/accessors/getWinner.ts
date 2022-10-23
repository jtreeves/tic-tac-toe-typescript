import getValue from './getValue'

function getWinner(): boolean {
    const stringValue: string = getValue('winner')
    const booleanValue: boolean = stringValue === 'true' ? true : false

    return booleanValue
}

export default getWinner
