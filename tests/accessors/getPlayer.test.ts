import getPlayer from '../../src/accessors/getPlayer'

describe('getPlayer accessor', () => {
    const testKey: string = 'player'
    const testValue: string = '1'

    beforeEach(() => {
        localStorage.setItem(testKey, testValue)
    })

    it('should return a number', () => {
        const result: any = getPlayer()
        expect(typeof result).toBe('number')
    })

    it('should return a value matching the one initially set, but as a numerical coercion', () => {
        const result: number = getPlayer()
        expect(result).toBe(Number(testValue))
    })
})
