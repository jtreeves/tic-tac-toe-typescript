import findEmptyIndexInNearlyFullCombo from '../../../src/utilities/findEmptyIndexInNearlyFullCombo'

describe('findEmptyIndexInNearlyFullCombo utility', () => {
    it('should return 0 if points at indices 1 and 2 are both 1 and multiplier is 1', () => {
        const points: number[] = [0, 1, 1, 0, 0, 0, 0, 0, 0]
        const result: number = findEmptyIndexInNearlyFullCombo(points, 1)
        expect(result).toBe(0)
    })
    
    it('should return 1 if points at indices 0 and 2 are both 1 and multiplier is 1', () => {
        const points: number[] = [1, 0, 1, 0, 0, 0, 0, 0, 0]
        const result: number = findEmptyIndexInNearlyFullCombo(points, 1)
        expect(result).toBe(1)
    })
    
    it('should return 2 if points at indices 0 and 1 are both 1 and multiplier is 1', () => {
        const points: number[] = [1, 1, 0, 0, 0, 0, 0, 0, 0]
        const result: number = findEmptyIndexInNearlyFullCombo(points, 1)
        expect(result).toBe(2)
    })
    
    it('should return -1 if no nearly winning combos for the multiplier provided by the parameter are found', () => {
        const points: number[] = [1, 1, 0, 0, 0, 0, 0, 0, 0]
        const result: number = findEmptyIndexInNearlyFullCombo(points, -1)
        expect(result).toBe(-1)
    })
    
    it('should return -1 if all points are 0', () => {
        const points: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        const result: number = findEmptyIndexInNearlyFullCombo(points, 1)
        expect(result).toBe(-1)
    })
})
