import getValue from './getValue'

function getTie(): boolean {
    const stringValue: string = getValue('tie')
    const booleanValue: boolean = stringValue === 'true' ? true : false

    return booleanValue
}

export default getTie
