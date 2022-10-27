import getTurn from '../accessors/getTurn'
import getPlayer from '../accessors/getPlayer'
import updateCurrentStates from '../mutators/updateCurrentStates'
import extractIndexFromId from '../utilities/extractIndexFromId'
import playOpponent from '../utilities/playOpponent'

function handleTurn(
    event: Event
): void {
    const target: EventTarget | null = event.target
    const player: number = getPlayer()
    const turn: number = getTurn()

    if (target && target instanceof HTMLElement) {
        const htmlTarget: HTMLElement = target as HTMLElement

        if (htmlTarget.textContent === '' && player === turn) {
            const id: string = htmlTarget.id
            const index: number = extractIndexFromId(id)
            const text: string = turn === 1 ? 'X' : 'O'
    
            htmlTarget.textContent = text
            updateCurrentStates(index, turn)
            setTimeout(() => {
                playOpponent()
            }, 1000)
        } else {
            return
        }
    } else {
        throw new Error('No target found, or target not of proper type')
    }
}

export default handleTurn
