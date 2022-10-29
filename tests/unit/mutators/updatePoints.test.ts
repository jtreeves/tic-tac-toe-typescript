import updatePoints from '../../../src/mutators/updatePoints'

describe('updatePoints mutator', () => {
    it('should update points stored in localStorage to a string with the number after the comma indicated by the first parameter equal to the second parameter', () => {
        localStorage.setItem('points', '0,0,0,0,0,0,0,0,0')
        updatePoints(2, 1)
        const points: string | null = localStorage.getItem('points')
        expect(points).toBe('0,0,1,0,0,0,0,0,0')
    })

    it('should update a point even if the original point was non-zero', () => {
        localStorage.setItem('points', '1,1,1,1,1,1,1,1,1')
        updatePoints(2, -1)
        const points: string | null = localStorage.getItem('points')
        expect(points).toBe('1,1,-1,1,1,1,1,1,1')
    })
})
