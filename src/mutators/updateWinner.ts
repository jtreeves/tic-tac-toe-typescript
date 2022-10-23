import winningCombos from '../data/winningCombos'
import getPoints from '../accessors/getPoints'
import setWinner from '../storers/setWinner'

function updateWinner(): void {
    const points: number[] = getPoints()
    const winner: boolean = winningCombos.some((
        combo: number[]
    ) => {
        const sum: number = points[combo[0]] + points[combo[1]] + points[combo[2]]
        const absoluteSum: number = Math.abs(sum)
        const comboFull: boolean = absoluteSum === 3
        
        return comboFull
    })

    setWinner(winner)
}

export default updateWinner
