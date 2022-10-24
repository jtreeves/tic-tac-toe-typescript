import updateWinner from '../../src/mutators/updateWinner'

describe('updateWinner mutator', () => {
    it('should keep winner as false if no winning combo filled', () => {
        localStorage.setItem('points', '0,0,0,0,1,0,0,0,0')
        updateWinner()
        const winner: string | null = localStorage.getItem('winner')
        expect(winner).toBe('false')
    })
    
    it('should change winner to true if X gets a winning combo filled', () => {
        localStorage.setItem('points', '1,1,1,0,0,0,0,0,0')
        updateWinner()
        const winner: string | null = localStorage.getItem('winner')
        expect(winner).toBe('true')
    })
    
    it('should change winner to true if O gets a winning combo filled', () => {
        localStorage.setItem('points', '-1,-1,-1,0,0,0,0,0,0')
        updateWinner()
        const winner: string | null = localStorage.getItem('winner')
        expect(winner).toBe('true')
    })
})
