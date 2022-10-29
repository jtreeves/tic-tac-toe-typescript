import * as getPointsModule from '../../../src/accessors/getPoints'
import * as setTieModule from '../../../src/storers/setTie'
import * as checkIfTieModule from '../../../src/utilities/checkIfTie'
import updateTie from '../../../src/mutators/updateTie'

describe('updateTie mutator', () => {
    it('should call getPoints once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        updateTie()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call setTie once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setTieModule, 'default')
        updateTie()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call checkIfTie once', () => {
        const spy: jest.SpyInstance = jest.spyOn(checkIfTieModule, 'default')
        updateTie()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
})
