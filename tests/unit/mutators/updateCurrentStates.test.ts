import * as updatePointsModule from '../../../src/mutators/updatePoints'
import * as updateTurnModule from '../../../src/mutators/updateTurn'
import * as updateTieModule from '../../../src/mutators/updateTie'
import * as updateWinnerModule from '../../../src/mutators/updateWinner'
import * as updateMessageModule from '../../../src/mutators/updateMessage'
import updateCurrentStates from '../../../src/mutators/updateCurrentStates'

describe('updateCurrentStates mutator', () => {
    beforeEach(() => {
        document.body.innerHTML = `<p>some message</p>`
    })

    it('should call updatePoints once', () => {
        const spy: jest.SpyInstance = jest.spyOn(updatePointsModule, 'default')
        updateCurrentStates(2, 1)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call updateTurn once', () => {
        const spy: jest.SpyInstance = jest.spyOn(updateTurnModule, 'default')
        updateCurrentStates(2, 1)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call updateTie once', () => {
        const spy: jest.SpyInstance = jest.spyOn(updateTieModule, 'default')
        updateCurrentStates(2, 1)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call updateWinner once', () => {
        const spy: jest.SpyInstance = jest.spyOn(updateWinnerModule, 'default')
        updateCurrentStates(2, 1)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call updateMessage once', () => {
        const spy: jest.SpyInstance = jest.spyOn(updateMessageModule, 'default')
        updateCurrentStates(2, 1)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
})
