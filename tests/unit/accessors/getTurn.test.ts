import * as getValueModule from '../../../src/accessors/getValue'
import getTurn from '../../../src/accessors/getTurn'

describe('getTurn accessor', () => {
    it('should return a number', () => {
        const spy: jest.SpyInstance = jest.spyOn(getValueModule, 'default')
        spy.mockReturnValue('1')
        const result: any = getTurn()
        expect(typeof result).toBe('number')
        spy.mockRestore()
    })
    
    it('should call getValue once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getValueModule, 'default')
        getTurn()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call getValue with parameter of string turn', () => {
        const spy: jest.SpyInstance = jest.spyOn(getValueModule, 'default')
        getTurn()
        expect(spy).toBeCalledWith('turn')
        spy.mockRestore()
    })
    
    it('should return numerical version of string returned by getValue', () => {
        const returnedString: string = '1'
        const spy: jest.SpyInstance = jest.spyOn(getValueModule, 'default')
        spy.mockReturnValue(returnedString)
        const result: number = getTurn()
        expect(result).toBe(Number(returnedString))
        spy.mockRestore()
    })
})
