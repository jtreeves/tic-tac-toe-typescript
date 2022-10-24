import findEmptyIndexInNearlyFullCombo from '../../src/utilities/findEmptyIndexInNearlyFullCombo'

describe('findEmptyIndexInNearlyFullCombo utility', () => {
    it('should return index in points array with current value of 0 if it is part of a winning combo with two values already filled matches the multiplier provided by the parameter', () => {
        localStorage.setItem('points', '1,1,0,0,0,0,0,0,0')
        const result: number = findEmptyIndexInNearlyFullCombo(1)
        expect(result).toBe(2)
    })
    
    it('should return -1 if no nearly winning combos for the multiplier provided by the parameter are found', () => {
        localStorage.setItem('points', '1,1,0,0,0,0,0,0,0')
        const result: number = findEmptyIndexInNearlyFullCombo(-1)
        expect(result).toBe(-1)
    })
    
    it('should return -1 if all points are 0', () => {
        localStorage.setItem('points', '0,0,0,0,0,0,0,0,0')
        const result: number = findEmptyIndexInNearlyFullCombo(1)
        expect(result).toBe(-1)
    })
})
