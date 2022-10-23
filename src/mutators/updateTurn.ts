import getTie from '../accessors/getTie'
import getTurn from '../accessors/getTurn'
import getWinner from '../accessors/getWinner'
import setTurn from '../storers/setTurn'

function updateTurn(): void {
    const winner: boolean = getWinner()
    const tie: boolean = getTie()
    const turn: number = getTurn()
    const newTurn: number = turn * -1

    if (winner || tie) {
        return
    } else {
        setTurn(newTurn)
    }
}

export default updateTurn
