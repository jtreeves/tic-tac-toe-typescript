import setTurn from '../../../src/storers/setTurn'

describe('setTurn storer', () => {
    const testValue: number = 1

    let retrievedItem: string | null

    beforeEach(() => {
        setTurn(testValue)
        retrievedItem = localStorage.getItem('turn')
    })

    it('should add a key of turn to localStorage, with a value equal to a string coercion of the one supplied the function, which can then be retrieved with getItem when passed a key of turn', () => {
        expect(retrievedItem).toBe(String(testValue))
    })
})
