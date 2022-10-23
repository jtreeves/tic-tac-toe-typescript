import handleReset from '../handlers/handleReset'

function createResetButton(): HTMLElement {
    const button: HTMLElement = document.createElement('button')
    
    button.textContent = 'Reset'
    button.addEventListener('click', handleReset)

    return button
}

export default createResetButton
