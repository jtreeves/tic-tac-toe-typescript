import updateTie from '../../src/mutators/updateTie'

describe('updateTie mutator', () => {
    it('should return tie as false if any zeroes remain in the array', () => {
        localStorage.setItem('points', '1,1,1,1,1,1,1,1,0')
        updateTie()
        const tie: string | null = localStorage.getItem('tie')
        expect(tie).toBe('false')
    })
    
    it('should change tie to true if there are no longer any zeroes in the array', () => {
        localStorage.setItem('points', '1,1,1,1,1,1,1,1,1')
        updateTie()
        const tie: string | null = localStorage.getItem('tie')
        expect(tie).toBe('true')
    })
})
