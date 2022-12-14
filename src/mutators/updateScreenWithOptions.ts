import createOptionButtons from '../generators/createOptionButtons'

function updateScreenWithOptions(): void {
    const body: HTMLElement | null = document.querySelector('body')
    const p: HTMLElement | null = document.querySelector('p')
    const button: HTMLElement | null = document.querySelector('button')
    
    if (body && p && button) {
        const div: HTMLElement = createOptionButtons()
        p.textContent = 'Which option do you want to play?'
        button.remove()
        body.appendChild(div)
    } else {
        throw new Error('No screen')
    }
}

export default updateScreenWithOptions
