import getValue from '../../src/accessors/getValue'

describe('getValue accessor', () => {
    const testKey: string = 'turn'
    const testValue: string = '1'

    beforeEach(() => {
        localStorage.setItem(testKey, testValue)
    })

    it('should return a string', () => {
        const result: any = getValue(testKey)
        expect(typeof result).toBe('string')
    })

    it('should return a value matching the one initially set', () => {
        const result: string = getValue(testKey)
        expect(result).toBe(testValue)
    })
})
