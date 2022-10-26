import getPlayer from '../accessors/getPlayer'
import getWinner from '../accessors/getWinner'
import getTie from '../accessors/getTie'
import updateCurrentStates from '../mutators/updateCurrentStates'
import selectBestCell from './selectBestCell'
import extractIndexFromId from './extractIndexFromId'
import UnfoundItemError from '../errors/UnfoundItemError'

function playOpponent(): void {
    const winner: boolean = getWinner()
    const tie: boolean = getTie()
    const player: number = getPlayer()
    const opponent: number = player * -1

    if (winner || tie) {
        return
    } else {
        try {
            const cell: HTMLElement | null = selectBestCell(opponent)
    
            if (cell) {
                const id: string = cell.id
                const index: number = extractIndexFromId(id)
                const text: string = opponent === 1 ? 'X' : 'O'
                
                cell.textContent = text
                updateCurrentStates(index, opponent)
            } else {
                throw new UnfoundItemError('No cells on the board are currently playable')
            }
        } catch (error) {
            console.error(error)
            const body: HTMLElement | null = document.querySelector('body')
            const p: HTMLElement | null = document.querySelector('p')
            const backupBody: HTMLElement = document.createElement('body')
            const backupP: HTMLElement = document.createElement('p')
            const text: string = 'The game is over, as there are no longer any currently playable cells; either someone has won or it is a tie game'
            if (p) {
                p.textContent = text
            } else {
                backupP.textContent = text
                if (body) {
                    body.appendChild(backupP)
                } else {
                    backupBody.appendChild(backupP)
                }
            }
        }
    }
}

export default playOpponent
