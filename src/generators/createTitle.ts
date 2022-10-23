function createTitle(): HTMLElement {
    const h1: HTMLElement = document.createElement('h1')
    
    h1.textContent = 'Tic-Tac-Toe'

    return h1
}

export default createTitle
