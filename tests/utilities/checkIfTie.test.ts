import checkIfTie from '../../src/utilities/checkIfTie'

describe('checkIfTie utility', () => {
    it('should return false if any zeroes exist in the points array', () => {
        const points: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 0]
        const tie: boolean = checkIfTie(points)
        expect(tie).toBe(false)
    })
    
    it('should return true if there are no longer any zeroes in the points array', () => {
        const points: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1]
        const tie: boolean = checkIfTie(points)
        expect(tie).toBe(true)
    })
})
