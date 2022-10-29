import * as getPointsModule from '../../../src/accessors/getPoints'
import * as setWinnerModule from '../../../src/storers/setWinner'
import * as checkIfWinnerModule from '../../../src/utilities/checkIfWinner'
import updateWinner from '../../../src/mutators/updateWinner'

describe('updateWinner mutator', () => {
    it('should call getPoints once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        updateWinner()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call setWinner once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setWinnerModule, 'default')
        updateWinner()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call checkIfWinner once', () => {
        const spy: jest.SpyInstance = jest.spyOn(checkIfWinnerModule, 'default')
        updateWinner()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
})
