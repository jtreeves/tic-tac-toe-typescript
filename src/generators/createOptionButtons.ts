import handleOptionX from '../handlers/handleOptionX'
import handleOptionO from '../handlers/handleOptionO'

function createOptionButtons(): HTMLElement {
    const container: HTMLElement = document.createElement('div')
    const optionX: HTMLElement = document.createElement('button')
    const optionO: HTMLElement = document.createElement('button')

    optionX.textContent = 'Play X'
    optionO.textContent = 'Play O'

    optionX.addEventListener('click', handleOptionX)
    optionO.addEventListener('click', handleOptionO)

    container.appendChild(optionX)
    container.appendChild(optionO)

    return container
}

export default createOptionButtons
