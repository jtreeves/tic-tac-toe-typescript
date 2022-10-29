import setTie from '../../../src/storers/setTie'

describe('setTie storer', () => {
    const testValue: boolean = false

    let retrievedItem: string | null

    beforeEach(() => {
        setTie(testValue)
        retrievedItem = localStorage.getItem('tie')
    })

    it('should add a key of tie to localStorage, with a value equal to a string coercion of the one supplied the function, which can then be retrieved with getItem when passed a key of tie', () => {
        expect(retrievedItem).toBe(String(testValue))
    })
})
