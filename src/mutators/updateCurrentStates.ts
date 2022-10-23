import updatePoints from './updatePoints'
import updateTie from './updateTie'
import updateWinner from './updateWinner'
import updateTurn from './updateTurn'
import updateMessage from './updateMessage'

function updateCurrentStates(
    index: number, 
    point: number
): void {
    updatePoints(index, point)
    updateTie()
    updateWinner()
    updateTurn()
    updateMessage()
}

export default updateCurrentStates
