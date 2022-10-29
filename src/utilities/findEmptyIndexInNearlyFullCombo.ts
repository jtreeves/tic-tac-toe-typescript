import winningCombos from '../data/winningCombos'

function findEmptyIndexInNearlyFullCombo(
    points: number[],
    multiplier: number
): number {
    let foundIndex: number = -1

    winningCombos.forEach((
        combo: number[]
    ): void => {
        const sum: number = points[combo[0]] + points[combo[1]] + points[combo[2]]
        const nearlyFull: boolean = sum === multiplier * 2

        if (nearlyFull) {
            if (points[combo[0]] === 0) {
                foundIndex = combo[0]
            } else if (points[combo[1]] === 0) {
                foundIndex = combo[1]
            } else {
                foundIndex = combo[2]
            }
        }
    })

    return foundIndex
}

export default findEmptyIndexInNearlyFullCombo
