import setWinner from '../../src/storers/setWinner'

describe('setWinner storer', () => {
    const testValue: boolean = false

    let retrievedItem: string | null

    beforeEach(() => {
        setWinner(testValue)
        retrievedItem = localStorage.getItem('winner')
    })

    it('should add a key of winner to localStorage, with a value equal to a string coercion of the one supplied the function, which can then be retrieved with getItem when passed a key of winner', () => {
        expect(retrievedItem).toBe(String(testValue))
    })
})
