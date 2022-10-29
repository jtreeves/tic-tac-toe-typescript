import getTurn from '../accessors/getTurn'
import getPlayer from '../accessors/getPlayer'
import getWinner from '../accessors/getWinner'
import getTie from '../accessors/getTie'
import determineMessageContent from '../utilities/determineMessageContent'

function updateMessage(): void {
    const message: HTMLElement | null = document.querySelector('p')
    
    if (message) {
        const turn: number = getTurn()
        const player: number = getPlayer()
        const winner: boolean = getWinner()
        const tie: boolean = getTie()
        const turnIsPlayer: boolean = turn === player
        const text: string = determineMessageContent(winner, tie, turnIsPlayer)
        
        message.textContent = text
    } else {
        throw new Error('No message currently on screen')
    }
}

export default updateMessage
