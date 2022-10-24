import updateMessage from '../../src/mutators/updateMessage'

describe('updateMessage mutator', () => {
    beforeEach(() => {
        document.body.innerHTML = `<p>some message</p>`
    })
    
    it('should change message to You win! if winner state is true and turn and player states are equal to 1, representing X win', () => {
        localStorage.setItem('winner', 'true')
        localStorage.setItem('turn', '1')
        localStorage.setItem('player', '1')
        updateMessage()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe('You win!')
    })
    
    it('should change message to You win! if winner state is true and turn and player states are equal to -1, representing O win', () => {
        localStorage.setItem('winner', 'true')
        localStorage.setItem('turn', '-1')
        localStorage.setItem('player', '-1')
        updateMessage()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe('You win!')
    })
    
    it('should change message to You lose! if winner state is true and turn and player states are not equal, with turn at -1 and player at 1, representing X loss', () => {
        localStorage.setItem('winner', 'true')
        localStorage.setItem('turn', '-1')
        localStorage.setItem('player', '1')
        updateMessage()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe('You lose!')
    })
    
    it('should change message to You lose! if winner state is true and turn and player states are not equal, with turn at 1 and player at -1, representing O loss', () => {
        localStorage.setItem('winner', 'true')
        localStorage.setItem('turn', '1')
        localStorage.setItem('player', '-1')
        updateMessage()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe('You lose!')
    })
    
    it('should change message to Tie game! if winner state is false but tie state is true', () => {
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'true')
        updateMessage()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe('Tie game!')
    })
    
    it('should change message to Your turn! if winner and tie states are false and turn and player states are equal to 1, representing turn for X', () => {
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('turn', '1')
        localStorage.setItem('player', '1')
        updateMessage()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe('Your turn!')
    })
    
    it('should change message to Your turn! if winner and tie states are false and turn and player states are equal to -1, representing turn for O', () => {
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('turn', '-1')
        localStorage.setItem('player', '-1')
        updateMessage()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe('Your turn!')
    })
    
    it('should change message to Wait your turn... if winner and tie states are false and turn and player states are not equal, with turn at -1 and player at 1,representing that X must wait', () => {
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('turn', '-1')
        localStorage.setItem('player', '1')
        updateMessage()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe('Wait your turn...')
    })
    
    it('should change message to Wait your turn... if winner and tie states are false and turn and player states are not equal, with turn at 1 and player at -1,representing that O must wait', () => {
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('turn', '1')
        localStorage.setItem('player', '-1')
        updateMessage()
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(message.textContent).toBe('Wait your turn...')
    })
})
