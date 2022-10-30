import getTie from '../../src/accessors/getTie'
import getWinner from '../../src/accessors/getWinner'
import setInitialStates from '../../src/storers/setInitialStates'
import setPoints from '../../src/storers/setPoints'
import updateTie from '../../src/mutators/updateTie'
import updateWinner from '../../src/mutators/updateWinner'

describe('change points observe winner tie integration', () => {
    beforeEach(() => {
        setInitialStates()
    })

    it('should keep winner and tie as false if new points array only contains a single 1 amidst a sea of 0s', () => {
        const initialTie: boolean = getTie()
        const initialWinner: boolean = getWinner()
        setPoints([0, 0, 0, 0, 1, 0, 0, 0, 0])
        updateTie()
        updateWinner()
        const updatedTie: boolean = getTie()
        const updatedWinner: boolean = getWinner()
        expect(updatedTie).toBe(initialTie)
        expect(updatedWinner).toBe(initialWinner)
        expect(updatedTie).toBe(false)
        expect(updatedWinner).toBe(false)
    })
    
    it('should change winner to true if new points array contains a row of 1s', () => {
        const initialWinner: boolean = getWinner()
        setPoints([1, 1, 1, -1, -1, 0, 0, 0, 0])
        updateWinner()
        const updatedWinner: boolean = getWinner()
        expect(updatedWinner).not.toBe(initialWinner)
        expect(updatedWinner).toBe(true)
    })
    
    it('should change winner to true if new points array contains a row of -1s', () => {
        const initialWinner: boolean = getWinner()
        setPoints([-1, -1, -1, 1, 1, 0, 0, 0, 0])
        updateWinner()
        const updatedWinner: boolean = getWinner()
        expect(updatedWinner).not.toBe(initialWinner)
        expect(updatedWinner).toBe(true)
    })
    
    it('should change tie to true if new points array contains no 0s', () => {
        const initialTie: boolean = getTie()
        setPoints([1, 1, -1, -1, -1, 1, 1, 1, -1])
        updateTie()
        const updatedTie: boolean = getTie()
        expect(updatedTie).not.toBe(initialTie)
        expect(updatedTie).toBe(true)
    })
})
