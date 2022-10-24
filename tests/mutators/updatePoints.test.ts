import updatePoints from '../../src/mutators/updatePoints'

describe('updatePoints mutator', () => {
    it('should return tie as false if any zeroes remain in the array', () => {
        localStorage.setItem('points', '1,1,1,1,1,1,1,1,0')
        updatePoints(2, 1)
        const tie: string | null = localStorage.getItem('tie')
        expect(tie).toBe('false')
    })
    
    it('should change tie to true if there are no longer any zeroes in the array', () => {
        localStorage.setItem('points', '1,1,1,1,1,1,1,1,1')
        updatePoints(2, -1)
        const tie: string | null = localStorage.getItem('tie')
        expect(tie).toBe('true')
    })
})
