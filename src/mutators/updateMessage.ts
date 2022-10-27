import yourTurnMessage from '../data/yourTurnMessage'
import waitTurnMessage from '../data/waitTurnMessage'
import getTurn from '../accessors/getTurn'
import getPlayer from '../accessors/getPlayer'
import getWinner from '../accessors/getWinner'
import getTie from '../accessors/getTie'

function updateMessage(): void {
    const message: HTMLElement | null = document.querySelector('p')
    
    if (message) {
        const turn: number = getTurn()
        const player: number = getPlayer()
        const winner: boolean = getWinner()
        const tie: boolean = getTie()
        const turnIsPlayer: boolean = turn === player
        
        if (winner) {
            message.textContent = `You ${turnIsPlayer ? 'win' : 'lose'}!`
        } else if (tie) {
            message.textContent = 'Tie game!'
        } else {
            message.textContent = turnIsPlayer ? yourTurnMessage : waitTurnMessage
        }
    } else {
        throw new Error('No message currently on screen')
    }
}

export default updateMessage
