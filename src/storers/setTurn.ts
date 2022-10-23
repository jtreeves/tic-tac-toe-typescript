import setValue from './setValue'

function setTurn(
    newTurn: number
): void {
    const stringTurn: string = String(newTurn)

    setValue('turn', stringTurn)
}

export default setTurn
