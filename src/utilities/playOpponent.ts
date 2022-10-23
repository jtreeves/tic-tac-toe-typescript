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

    if (winner || tie) {
        return
    } else {
        const cell: HTMLElement = selectBestCell(opponent)
        const id: string = cell.id
        const index: number = extractIndexFromId(id)
        const text: string = opponent === 1 ? 'X' : 'O'
        
        cell.textContent = text
        updateCurrentStates(index, opponent)
    }
}

export default playOpponent
