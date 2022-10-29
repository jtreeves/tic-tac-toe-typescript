import updateCurrentStates from '../../../src/mutators/updateCurrentStates'

describe('updateCurrentStates mutator', () => {
    beforeEach(() => {
        document.body.innerHTML = `<p>some message</p>`
        localStorage.setItem('points', '1,1,0,0,0,0,0,0,0')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('winner', 'false')
        localStorage.setItem('turn', '1')
        localStorage.setItem('player', '1')
    })

    it('should change number after comma indicated by first parameter to value indicated by second parameter in points string, should change winner to true if new points contains a winning combo, and should display You win! message', () => {
        updateCurrentStates(2, 1)
        const points: string | null = localStorage.getItem('points')
        const winner: string | null = localStorage.getItem('winner')
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(points).toBe('1,1,1,0,0,0,0,0,0')
        expect(winner).toBe('true')
        expect(message.textContent).toBe('You win!')
    })

    it('should change number after comma indicated by first parameter to value indicated by second parameter in points string, should change tie to true if new points no longer contains any zeroes, and should display Tie game! message', () => {
        localStorage.setItem('points', '1,0,-1,-1,1,1,1,-1,-1')
        updateCurrentStates(1, 1)
        const points: string | null = localStorage.getItem('points')
        const tie: string | null = localStorage.getItem('tie')
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(points).toBe('1,1,-1,-1,1,1,1,-1,-1')
        expect(tie).toBe('true')
        expect(message.textContent).toBe('Tie game!')
    })

    it('should change number after comma indicated by first parameter to value indicated by second parameter in points string, should change parity of turn if winner and tie still false, and should display Wait your turn... message', () => {
        localStorage.setItem('points', '1,-1,0,0,0,0,0,0,0')
        updateCurrentStates(2, 1)
        const points: string | null = localStorage.getItem('points')
        const tie: string | null = localStorage.getItem('tie')
        const winner: string | null = localStorage.getItem('winner')
        const turn: string | null = localStorage.getItem('turn')
        const message: HTMLElement = document.querySelector('p') as HTMLElement
        expect(points).toBe('1,-1,1,0,0,0,0,0,0')
        expect(tie).toBe('false')
        expect(winner).toBe('false')
        expect(turn).toBe('-1')
        expect(message.textContent).toBe('Wait your turn...')
    })
})
