function createMessage(): HTMLElement {
    const p: HTMLElement = document.createElement('p')
    
    p.textContent = 'Would you like to play a game?'
    
    return p
}

export default createMessage
