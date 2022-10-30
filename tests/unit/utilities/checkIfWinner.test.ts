import checkIfWinner from '../../../src/utilities/checkIfWinner'

describe('checkIfWinner utility', () => {
    it('should return false if no winning combo filled', () => {
        const points: number[] = [0, 0, 0, 0, 1, 0, 0, 0, 0]
        const winner: boolean = checkIfWinner(points)
        expect(winner).toBe(false)
    })
    
    it('should return true if X gets a winning combo filled', () => {
        const points: number[] = [1, 1, 1, 0, 0, 0, 0, 0, 0]
        const winner: boolean = checkIfWinner(points)
        expect(winner).toBe(true)
    })
    
    it('should return true if O gets a winning combo filled', () => {
        const points: number[] = [-1, -1, -1, 0, 0, 0, 0, 0, 0]
        const winner: boolean = checkIfWinner(points)
        expect(winner).toBe(true)
    })
})
