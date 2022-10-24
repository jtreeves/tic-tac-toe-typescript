import updateScreenWithGame from '../../src/mutators/updateScreenWithGame'

describe('updateScreenWithGame mutator', () => {
    beforeEach(() => {
        localStorage.setItem('player', '1')
        document.body.innerHTML = `
            <p>Some message</p>
            <div>Some contents</div>
        `
    })

    it('should add reminder of which side player is playing to the screen', () => {
        updateScreenWithGame()
        const reminder: HTMLElement | null = document.querySelector('h2')
        expect(reminder).toBeTruthy()
    })

    it('should add board to the screen', () => {
        updateScreenWithGame()
        const board: HTMLElement | null = document.querySelector('section')
        expect(board).toBeTruthy()
    })

    it('should add Reset button to the screen', () => {
        updateScreenWithGame()
        const button: HTMLElement | null = document.querySelector('button')
        expect(button?.textContent).toBe('Reset')
    })
})
