import * as setValueModule from '../../../src/storers/setValue'
import setTurn from '../../../src/storers/setTurn'

describe('setTurn storer', () => {
    it('should call setValue once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setValueModule, 'default')
        setTurn(1)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call setValue with parameters of turn and string version of main input', () => {
        const input: number = 1
        const spy: jest.SpyInstance = jest.spyOn(setValueModule, 'default')
        setTurn(input)
        expect(spy).toBeCalledWith('turn', String(input))
        spy.mockRestore()
    })
})
