import * as getTurnModule from '../../../src/accessors/getTurn'
import * as getTieModule from '../../../src/accessors/getTie'
import * as getWinnerModule from '../../../src/accessors/getWinner'
import * as setTurnModule from '../../../src/storers/setTurn'
import updateTurn from '../../../src/mutators/updateTurn'

describe('updateTurn mutator', () => {
    it('should call getTurn once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getTurnModule, 'default')
        updateTurn()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call getTie once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        updateTurn()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call getWinner once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        updateTurn()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call setTurn once if values returned from getTie and getWinner are both false', () => {
        const spyTie: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        spyTie.mockReturnValue(false)
        const spyWinner: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        spyWinner.mockReturnValue(false)
        const spyTurn: jest.SpyInstance = jest.spyOn(setTurnModule, 'default')
        updateTurn()
        expect(spyTurn).toBeCalledTimes(1)
        spyTurn.mockRestore()
        spyWinner.mockRestore()
        spyTie.mockRestore()
    })
    
    it('should call setTurn with parameter equal to the opposite of the value returned from getTurn if both values returned from getTie and getWinner are false', () => {
        const spyTie: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        spyTie.mockReturnValue(false)
        const spyWinner: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        spyWinner.mockReturnValue(false)
        const spyGetTurn: jest.SpyInstance = jest.spyOn(getTurnModule, 'default')
        spyGetTurn.mockReturnValue(1)
        const spySetTurn: jest.SpyInstance = jest.spyOn(setTurnModule, 'default')
        updateTurn()
        expect(spySetTurn).toBeCalledWith(-1)
        spyGetTurn.mockRestore()
        spySetTurn.mockRestore()
        spyWinner.mockRestore()
        spyTie.mockRestore()
    })
    
    it('should not call setTurn if value returned from getTie is true', () => {
        const spyTie: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        spyTie.mockReturnValue(true)
        const spyWinner: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        spyWinner.mockReturnValue(false)
        const spyTurn: jest.SpyInstance = jest.spyOn(setTurnModule, 'default')
        updateTurn()
        expect(spyTurn).toBeCalledTimes(0)
        spyTurn.mockRestore()
        spyWinner.mockRestore()
        spyTie.mockRestore()
    })
    
    it('should not call setTurn if value returned from getWinner is true', () => {
        const spyTie: jest.SpyInstance = jest.spyOn(getTieModule, 'default')
        spyTie.mockReturnValue(false)
        const spyWinner: jest.SpyInstance = jest.spyOn(getWinnerModule, 'default')
        spyWinner.mockReturnValue(true)
        const spyTurn: jest.SpyInstance = jest.spyOn(setTurnModule, 'default')
        updateTurn()
        expect(spyTurn).toBeCalledTimes(0)
        spyTurn.mockRestore()
        spyWinner.mockRestore()
        spyTie.mockRestore()
    })
})
