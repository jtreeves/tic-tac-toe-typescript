import setValue from '../../../src/storers/setValue'

describe('setValue storer', () => {
    const testKey: string = 'turn'
    const testValue: string = '1'

    let retrievedItem: string | null

    beforeEach(() => {
        setValue(testKey, testValue)
        retrievedItem = localStorage.getItem(testKey)
    })

    it('should add a key-value pair to localStorage, whose value can then be retrieved with getItem when passed the key', () => {
        expect(retrievedItem).toBe(testValue)
    })

    it('should add a key-value pair to localStorage, whose value if retrieved with getItem when passed the key will be a string', () => {
        expect(typeof retrievedItem).toBe('string')
    })
})
