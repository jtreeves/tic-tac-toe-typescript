import * as getValueModule from '../../../src/accessors/getValue'
import getPoints from '../../../src/accessors/getPoints'

describe('getPoints accessor', () => {
    const returnedString: string = '0,0,1,0,-1,0,1,0,-1'

    it('should return an array of numbers', () => {
        const spy: jest.SpyInstance = jest.spyOn(getValueModule, 'default')
        spy.mockReturnValue(returnedString)
        const result: any = getPoints()
        expect(result instanceof Array).toBe(true)
        result.forEach((item: any) => {
            expect(typeof item).toBe('number')
        })
        spy.mockRestore()
    })

    it('should call getValue once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getValueModule, 'default')
        getPoints()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should return an array with a length equal to 1 more than the amount of commas in string returned by getValue', () => {
        const commas: number = Number(returnedString.match(/,/g)?.length)
        const spy: jest.SpyInstance = jest.spyOn(getValueModule, 'default')
        spy.mockReturnValue(returnedString)
        const result: number[] = getPoints()
        expect(result.length).toBe(commas + 1)
        spy.mockRestore()
    })

    it('should return values matching numerical coercions of their corresponding string segments from the value returned by getValue', () => {
        const subStrings: string[] = returnedString.split(',')
        const spy: jest.SpyInstance = jest.spyOn(getValueModule, 'default')
        spy.mockReturnValue(returnedString)
        const result: number[] = getPoints()
        result.forEach((item: number, index: number) => {
            expect(item).toBe(Number(subStrings[index]))
        })
        spy.mockRestore()
    })
})
