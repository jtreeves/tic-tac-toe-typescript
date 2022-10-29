import getTurn from '../../../src/accessors/getTurn'

describe('getTurn accessor', () => {
    const testKey: string = 'turn'
    const testValue: string = '1'

    beforeEach(() => {
        localStorage.setItem(testKey, testValue)
    })

    it('should return a number', () => {
        const result: any = getTurn()
        expect(typeof result).toBe('number')
    })

    it('should return a value matching the one initially set, but as a numerical coercion', () => {
        const result: number = getTurn()
        expect(result).toBe(Number(testValue))
    })
})
