import getPlayer from '../accessors/getPlayer'

function createPlayerReminder(): HTMLElement {
    const h2: HTMLElement = document.createElement('h2')
    const player: number = getPlayer()
    const text: string = player === 1 ? 'X' : 'O'
    const reminder: string = `You are playing ${text}`

    h2.textContent = reminder

    return h2
}

export default createPlayerReminder
