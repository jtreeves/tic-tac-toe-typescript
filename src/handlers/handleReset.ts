import setInitialStates from '../storers/setInitialStates'
import updateScreenWithOptions from '../mutators/updateScreenWithOptions'

function handleReset(): void {
    const reminder: HTMLElement | null = document.querySelector('h2')
    const board: HTMLElement | null = document.querySelector('section')
    
    if (reminder) reminder.remove()
    if (board) board.remove()
    
    updateScreenWithOptions()
    setInitialStates()
}

export default handleReset
