import * as setValueModule from '../../../src/storers/setValue'
import setTie from '../../../src/storers/setTie'

describe('setTie storer', () => {
    it('should call setValue once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setValueModule, 'default')
        setTie(false)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call setValue with parameters of tie and string version of main input', () => {
        const input: boolean = false
        const spy: jest.SpyInstance = jest.spyOn(setValueModule, 'default')
        setTie(input)
        expect(spy).toBeCalledWith('tie', String(input))
        spy.mockRestore()
    })
})
