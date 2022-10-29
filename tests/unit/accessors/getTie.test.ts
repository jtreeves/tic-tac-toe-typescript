import * as getValueModule from '../../../src/accessors/getValue'
import getTie from '../../../src/accessors/getTie'

describe('getTie accessor', () => {
    it('should return a boolean', () => {
        const spy = jest.spyOn(getValueModule, 'default')
        spy.mockReturnValue('true')
        const result: any = getTie()
        expect(typeof result).toBe('boolean')
        spy.mockRestore()
    })

    it('should call getValue once', () => {
        const spy = jest.spyOn(getValueModule, 'default')
        getTie()
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })

    it('should return false if value returned by getValue was a string equal to false', () => {
        const spy = jest.spyOn(getValueModule, 'default')
        spy.mockReturnValue('false')
        const result: boolean = getTie()
        expect(result).toBe(false)
        spy.mockRestore()
    })

    it('should return true if value returned by getValue was a string equal to true', () => {
        const spy = jest.spyOn(getValueModule, 'default')
        spy.mockReturnValue('true')
        const result: boolean = getTie()
        expect(result).toBe(true)
        spy.mockRestore()
    })
})
