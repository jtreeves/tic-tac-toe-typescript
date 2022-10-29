import setPlayer from '../../src/storers/setPlayer'

describe('setPlayer storer', () => {
    const testValue: number = 1

    let retrievedItem: string | null

    beforeEach(() => {
        setPlayer(testValue)
        retrievedItem = localStorage.getItem('player')
    })

    it('should add a key of player to localStorage, with a value equal to a string coercion of the one supplied the function, which can then be retrieved with getItem when passed a key of player', () => {
        expect(retrievedItem).toBe(String(testValue))
    })
})
