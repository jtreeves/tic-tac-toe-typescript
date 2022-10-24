import setInitialStates from '../../src/storers/setInitialStates'

describe('setInitialStates storer', () => {
    let retrievedPoints: string | null
    let retrievedTurn: string | null
    let retrievedTie: string | null
    let retrievedWinner: string | null

    beforeEach(() => {
        setInitialStates()
        retrievedPoints = localStorage.getItem('points')
        retrievedTurn = localStorage.getItem('turn')
        retrievedTie = localStorage.getItem('tie')
        retrievedWinner = localStorage.getItem('winner')
    })

    it('should add keys of points, turn, tie, and winner to localStorage, whose values can be retrieved by calling getItem with those keys, with all their values returned as strings', () => {
        expect(typeof retrievedPoints).toBe('string')
        expect(typeof retrievedTurn).toBe('string')
        expect(typeof retrievedTie).toBe('string')
        expect(typeof retrievedWinner).toBe('string')
    })

    it('should store points as a string of 9 zeroes separated by commas', () => {
        expect(retrievedPoints).toBe('0,0,0,0,0,0,0,0,0')
    })

    it('should store turn as a string of 1', () => {
        expect(retrievedTurn).toBe('1')
    })

    it('should store tie as a string of false', () => {
        expect(retrievedTie).toBe('false')
    })

    it('should store winner as a string of false', () => {
        expect(retrievedWinner).toBe('false')
    })
})
