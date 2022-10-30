import * as createInitialScreenModule from '../../src/generators/createInitialScreen'
import * as setInitialStatesModule from '../../src/storers/setInitialStates'
import app from '../../src/app'

describe('app module', () => {
    it('should call createInitialScreen once', () => {
        const spy: jest.SpyInstance = jest.spyOn(createInitialScreenModule, 'default')
        app()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call setInitialStates once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setInitialStatesModule, 'default')
        app()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
})
