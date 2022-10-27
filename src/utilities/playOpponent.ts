import getPlayer from '../accessors/getPlayer'
import getWinner from '../accessors/getWinner'
import getTie from '../accessors/getTie'
import updateCurrentStates from '../mutators/updateCurrentStates'
import selectBestCell from './selectBestCell'
import extractIndexFromId from './extractIndexFromId'

function playOpponent(): void {
    const winner: boolean = getWinner()
    const tie: boolean = getTie()
    const player: number = getPlayer()
    const opponent: number = player * -1

    if (!winner && !tie) {
        const cell: HTMLElement | null = selectBestCell(opponent)

        if (cell) {
            const id: string = cell.id
            const index: number = extractIndexFromId(id)
            const text: string = opponent === 1 ? 'X' : 'O'
            
            cell.textContent = text
            updateCurrentStates(index, opponent)
        } else {
            throw new Error('No cells on the current board can be played by the opponent')
        }
    } else {
        return
    }
}

export default playOpponent
