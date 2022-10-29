import getWinner from '../../src/accessors/getWinner'

describe('getWinner accessor', () => {
    const testKey: string = 'winner'
    const testTrueValue: string = 'true'
    const testFalseValue: string = 'false'

    it('should return a boolean', () => {
        localStorage.setItem(testKey, testFalseValue)
        const result: any = getWinner()
        expect(typeof result).toBe('boolean')
    })

    it('should return false if value initially set was a string equal to false', () => {
        localStorage.setItem(testKey, testFalseValue)
        const result: boolean = getWinner()
        expect(result).toBe(false)
    })

    it('should return true if value initially set was a string equal to true', () => {
        localStorage.setItem(testKey, testTrueValue)
        const result: boolean = getWinner()
        expect(result).toBe(true)
    })
})
