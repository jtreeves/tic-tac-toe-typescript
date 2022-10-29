import setPoints from '../../src/storers/setPoints'

describe('setPoints storer', () => {
    const testValue: number[] = [0, 1, 0, -1, 0, -1, 0, 0, 1]

    let retrievedItem: string | null

    beforeEach(() => {
        setPoints(testValue)
        retrievedItem = localStorage.getItem('points')
    })

    it('should add a key of points to localStorage, with a string value when accessed via getItem', () => {
        expect(typeof retrievedItem).toBe('string')
    })

    it('should add a key of points to localStorage, with a string value containing 1 less comma then the lenght of the provided array', () => {
        const commas: number = Number(retrievedItem?.match(/,/g)?.length)
        expect(commas).toBe(testValue.length - 1)
    })
})
