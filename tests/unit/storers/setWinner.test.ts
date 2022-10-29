import * as setValueModule from '../../../src/storers/setValue'
import setWinner from '../../../src/storers/setWinner'

describe('setWinner storer', () => {
    it('should call setValue once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setValueModule, 'default')
        setWinner(false)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call setValue with parameters of winner and string version of main input', () => {
        const input: boolean = false
        const spy: jest.SpyInstance = jest.spyOn(setValueModule, 'default')
        setWinner(input)
        expect(spy).toBeCalledWith('winner', String(input))
        spy.mockRestore()
    })
})
