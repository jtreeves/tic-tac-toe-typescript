import yourTurnMessage from '../data/yourTurnMessage'
import waitTurnMessage from '../data/waitTurnMessage'
import getTurn from '../accessors/getTurn'
import getPlayer from '../accessors/getPlayer'
import getWinner from '../accessors/getWinner'
import getTie from '../accessors/getTie'

function updateMessage(): void {
    const message: HTMLElement | null = document.querySelector('p')
    const turn: number = getTurn()
    const player: number = getPlayer()
    const winner: boolean = getWinner()
    const tie: boolean = getTie()
    const turnIsPlayer: boolean = turn === player

    if (message !== null) {
        if (winner) {
            message.textContent = turnIsPlayer ? 'You win!' : 'You lose!'
        } else if (tie) {
            message.textContent = 'Tie game!'
        } else {
            if (turnIsPlayer) {
                message.textContent = yourTurnMessage
            } else {
                message.textContent = waitTurnMessage
            }
        }
    }
}

export default updateMessage
