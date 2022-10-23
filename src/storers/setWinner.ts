import setValue from './setValue'

function setWinner(
    winner: boolean
): void {
    const stringWinner: string = String(winner)
    
    setValue('winner', stringWinner)
}

export default setWinner
