import waitTurnMessage from '../data/waitTurnMessage'
import yourTurnMessage from '../data/yourTurnMessage'
import createPlayerReminder from '../generators/createPlayerReminder'
import createBoard from '../generators/createBoard'
import createResetButton from '../generators/createResetButton'
import getPlayer from '../accessors/getPlayer'
import playOpponent from '../utilities/playOpponent'

function updateScreenWithGame(): void {
    const body: HTMLElement | null = document.querySelector('body')
    const p: HTMLElement = document.querySelector('p') as HTMLElement
    const div: HTMLElement = document.querySelector('div') as HTMLElement
    const reminder: HTMLElement = createPlayerReminder()
    const board: HTMLElement = createBoard()
    const resetButton: HTMLElement = createResetButton()
    const player: number = getPlayer()
    const message: string = player === 1 ? yourTurnMessage : waitTurnMessage

    p.textContent = message
    p.remove()
    div.remove()

    if (body !== null) {
        body.appendChild(reminder)
        body.appendChild(p)
        body.appendChild(board)
        body.appendChild(resetButton)
    }

    if (player === -1) {
        setTimeout(() => {
            playOpponent()
        }, 1000)
    }
}

export default updateScreenWithGame
