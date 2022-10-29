import * as setPlayerModule from '../../../src/storers/setPlayer'
import * as updateScreenWithGameModule from '../../../src/mutators/updateScreenWithGame'
import handleOptionX from '../../../src/handlers/handleOptionX'

describe('handleOptionX handler', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <p>Some message</p>
            <div>Some contents</div>
        `
    })
    
    it('should call setPlayer once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setPlayerModule, 'default')
        handleOptionX()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call updateScreenWithGame once', () => {
        const spy: jest.SpyInstance = jest.spyOn(updateScreenWithGameModule, 'default')
        handleOptionX()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call setPlayer with parameter of 1', () => {
        const spy: jest.SpyInstance = jest.spyOn(setPlayerModule, 'default')
        handleOptionX()
        expect(spy).toBeCalledWith(1)
        spy.mockRestore()
    })
})
