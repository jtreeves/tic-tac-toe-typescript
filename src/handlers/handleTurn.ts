import getTurn from '../accessors/getTurn'
import getPlayer from '../accessors/getPlayer'
import updateCurrentStates from '../mutators/updateCurrentStates'
import extractIndexFromId from '../utilities/extractIndexFromId'
import playOpponent from '../utilities/playOpponent'

function handleTurn(
    event: Event
): void {
    const target: HTMLElement = event.target as HTMLElement
    const player: number = getPlayer()
    const turn: number = getTurn()

    if (target.textContent !== '' || player !== turn) {
        return
    } else {
        const id: string = target.id
        const index: number = extractIndexFromId(id)
        const text: string = turn === 1 ? 'X' : 'O'

        target.textContent = text
        updateCurrentStates(index, turn)
        setTimeout(() => {
            playOpponent()
        }, 1000)
    }
}

export default handleTurn
