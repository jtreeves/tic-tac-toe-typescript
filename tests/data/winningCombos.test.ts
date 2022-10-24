import winningCombos from '../../src/data/winningCombos'

describe('winningCombos data', () => {
    it('should return an array of arrays of numbers', () => {
        expect(winningCombos instanceof Array).toBe(true)
        winningCombos.forEach((combo: any) => {
            expect(combo instanceof Array).toBe(true)
            combo.forEach((element: any) => {
                expect(typeof element).toBe('number')
            })
        })
    })
    
    it('should contain 8 elements', () => {
        expect(winningCombos.length).toBe(8)
    })
    
    it('should contain arrays with 3 elements each', () => {
        winningCombos.forEach((combo: any) => {
            expect(combo.length).toBe(3)
        })
    })
    
    it('should contain an array of [0, 1, 2], representing the first row of the board, as its first element', () => {
        expect(winningCombos[0]).toStrictEqual([0, 1, 2])
    })
})
