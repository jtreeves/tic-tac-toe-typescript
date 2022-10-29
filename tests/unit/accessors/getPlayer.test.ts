import * as getValueModule from '../../../src/accessors/getValue'
import getPlayer from '../../../src/accessors/getPlayer'

describe('getPlayer accessor', () => {
    it('should return a number', () => {
        const spy = jest.spyOn(getValueModule, 'default')
        spy.mockReturnValue('1')
        const result: any = getPlayer()
        expect(typeof result).toBe('number')
        spy.mockRestore()
    })
    
    it('should call getValue once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getValueModule, 'default')
        getPlayer()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should return numerical version of string returned by getValue', () => {
        const returnedString: string = '1'
        const spy = jest.spyOn(getValueModule, 'default')
        spy.mockReturnValue(returnedString)
        const result: number = getPlayer()
        expect(result).toBe(Number(returnedString))
        spy.mockRestore()
    })
})
