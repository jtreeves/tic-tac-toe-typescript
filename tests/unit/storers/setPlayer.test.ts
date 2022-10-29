import * as setValueModule from '../../../src/storers/setValue'
import setPlayer from '../../../src/storers/setPlayer'

describe('setPlayer storer', () => {
    it('should call setValue once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setValueModule, 'default')
        setPlayer(1)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call setValue with parameters of player and string version of main input', () => {
        const input: number = 1
        const spy: jest.SpyInstance = jest.spyOn(setValueModule, 'default')
        setPlayer(input)
        expect(spy).toBeCalledWith('player', String(input))
        spy.mockRestore()
    })
})
