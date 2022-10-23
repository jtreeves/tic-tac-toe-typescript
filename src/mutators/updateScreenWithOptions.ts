import createOptionButtons from '../generators/createOptionButtons'

function updateScreenWithOptions(): void {
    const body: HTMLElement = document.querySelector('body') as HTMLElement
    const p: HTMLElement = document.querySelector('p') as HTMLElement
    const button: HTMLElement = document.querySelector('button') as HTMLElement
    const article: HTMLElement = createOptionButtons()

    p.textContent = 'Which option do you want to play?'
    button.remove()
    body.appendChild(article)   
}

export default updateScreenWithOptions
