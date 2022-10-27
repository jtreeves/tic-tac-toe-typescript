import createTitle from './createTitle'
import createMessage from './createMessage'
import createStartButton from './createStartButton'

function createInitialScreen(): void {
    const body: HTMLElement | null = document.querySelector('body')
    const h1: HTMLElement = createTitle()
    const p: HTMLElement = createMessage()
    const button: HTMLElement = createStartButton()

    if (body) {
        body.appendChild(h1)
        body.appendChild(p)
        body.appendChild(button)
    } else {
        throw new Error('No screen')
    }
}

export default createInitialScreen
