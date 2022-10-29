import winningCombos from '../data/winningCombos'

function checkIfWinner(
    points: number[]
): boolean {
    const winner: boolean = winningCombos.some((
        combo: number[]
    ): boolean => {
        const sum: number = points[combo[0]] + points[combo[1]] + points[combo[2]]
        const absoluteSum: number = Math.abs(sum)
        const comboFull: boolean = absoluteSum === 3
        
        return comboFull
    })

    return winner
}

export default checkIfWinner
