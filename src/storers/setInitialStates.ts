import setPoints from './setPoints'
import setTurn from './setTurn'
import setTie from './setTie'
import setWinner from './setWinner'

function setInitialStates(): void {
    const points: number[] = Array(9).fill(0)
    const turn: number = 1
    const tie: boolean = false
    const winner: boolean = false

    setPoints(points)
    setTurn(turn)
    setTie(tie)
    setWinner(winner)
}

export default setInitialStates
