import updateTurn from '../../src/mutators/updateTurn'

describe('updateTurn mutator', () => {
    it('should change turn from 1 to -1 if no winner or tie', () => {
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('turn', '1')
        updateTurn()
        const turn: string | null = localStorage.getItem('turn')
        expect(turn).toBe('-1')
    })
    
    it('should change turn from -1 to 1 if no winner or tie', () => {
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('turn', '-1')
        updateTurn()
        const turn: string | null = localStorage.getItem('turn')
        expect(turn).toBe('1')
    })
    
    it('should not change turn if a winner exists', () => {
        localStorage.setItem('winner', 'true')
        localStorage.setItem('tie', 'false')
        localStorage.setItem('turn', '1')
        updateTurn()
        const turn: string | null = localStorage.getItem('turn')
        expect(turn).toBe('1')
    })
    
    it('should not change turn if a tie exists', () => {
        localStorage.setItem('winner', 'false')
        localStorage.setItem('tie', 'true')
        localStorage.setItem('turn', '1')
        updateTurn()
        const turn: string | null = localStorage.getItem('turn')
        expect(turn).toBe('1')
    })
})
