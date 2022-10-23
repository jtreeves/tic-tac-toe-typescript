import updateScreenWithOptions from '../mutators/updateScreenWithOptions'

function createStartButton(): HTMLElement {
    const button: HTMLElement = document.createElement('button')
    
    button.textContent = 'Start'
    button.addEventListener('click', updateScreenWithOptions)

    return button
}

export default createStartButton
