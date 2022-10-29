import getPoints from '../accessors/getPoints'
import setWinner from '../storers/setWinner'
import checkIfWinner from '../utilities/checkIfWinner'

function updateWinner(): void {
    const points: number[] = getPoints()
    const winner: boolean = checkIfWinner(points)

    setWinner(winner)
}

export default updateWinner
