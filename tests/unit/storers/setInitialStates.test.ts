import * as setPointsModule from '../../../src/storers/setPoints'
import * as setTurnModule from '../../../src/storers/setTurn'
import * as setTieModule from '../../../src/storers/setTie'
import * as setWinnerModule from '../../../src/storers/setWinner'
import setInitialStates from '../../../src/storers/setInitialStates'

describe('setInitialStates storer', () => {
    it('should call setPoints once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setPointsModule, 'default')
        setInitialStates()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call setPoints with paramter of array containing 9 elements, all of which are 0', () => {
        const spy: jest.SpyInstance = jest.spyOn(setPointsModule, 'default')
        setInitialStates()
        expect(spy).toBeCalledWith(Array(9).fill(0))
        spy.mockRestore()
    })

    it('should call setTurn once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setTurnModule, 'default')
        setInitialStates()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call setTurn with parameter of 1', () => {
        const spy: jest.SpyInstance = jest.spyOn(setTurnModule, 'default')
        setInitialStates()
        expect(spy).toBeCalledWith(1)
        spy.mockRestore()
    })

    it('should call setTie once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setTieModule, 'default')
        setInitialStates()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call setTie with parameter of false', () => {
        const spy: jest.SpyInstance = jest.spyOn(setTieModule, 'default')
        setInitialStates()
        expect(spy).toBeCalledWith(false)
        spy.mockRestore()
    })

    it('should call setWinner once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setWinnerModule, 'default')
        setInitialStates()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call setWinner with parameter of false', () => {
        const spy: jest.SpyInstance = jest.spyOn(setWinnerModule, 'default')
        setInitialStates()
        expect(spy).toBeCalledWith(false)
        spy.mockRestore()
    })
})
