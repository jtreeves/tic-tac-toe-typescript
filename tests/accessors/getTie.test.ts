import getTie from '../../src/accessors/getTie'

describe('getTie accessor', () => {
    const testKey: string = 'tie'
    const testTrueValue: string = 'true'
    const testFalseValue: string = 'false'

    it('should return a boolean', () => {
        localStorage.setItem(testKey, testFalseValue)
        const result: any = getTie()
        expect(typeof result).toBe('boolean')
    })

    it('should return false if value initially set was a string equal to false', () => {
        localStorage.setItem(testKey, testFalseValue)
        const result: any = getTie()
        expect(result).toBe(false)
    })

    it('should return true if value initially set was a string equal to true', () => {
        localStorage.setItem(testKey, testTrueValue)
        const result: any = getTie()
        expect(result).toBe(true)
    })
})
