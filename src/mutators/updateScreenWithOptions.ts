import createOptionButtons from '../generators/createOptionButtons'

function updateScreenWithOptions(): void {
    const body: HTMLElement | null = document.querySelector('body')
    const p: HTMLElement = document.querySelector('p') as HTMLElement
    const button: HTMLElement = document.querySelector('button') as HTMLElement
    const div: HTMLElement = createOptionButtons()

    p.textContent = 'Which option do you want to play?'
    button.remove()

    if (body) {
        body.appendChild(div)
    } else {
        throw new Error('No screen')
    }
}

export default updateScreenWithOptions
