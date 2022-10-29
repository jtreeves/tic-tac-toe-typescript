import * as setValueModule from '../../../src/storers/setValue'
import setPoints from '../../../src/storers/setPoints'

describe('setPoints storer', () => {
    it('should call setValue once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setValueModule, 'default')
        setPoints([1, 0])
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should call setValue with parameters of points and string version of main input', () => {
        const input: number[] = [1, 0]
        const stringedInput: string = input.join(',')
        const spy: jest.SpyInstance = jest.spyOn(setValueModule, 'default')
        setPoints(input)
        expect(spy).toBeCalledWith('points', stringedInput)
        spy.mockRestore()
    })
})
