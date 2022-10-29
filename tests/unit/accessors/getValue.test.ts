import getValue from '../../../src/accessors/getValue'

describe('getValue accessor', () => {
    it('should return a string', () => {
        const spy = jest.spyOn(Storage.prototype, 'getItem')
        spy.mockReturnValue('some value')
        const result: any = getValue('some key')
        expect(typeof result).toBe('string')
        spy.mockRestore()
    })
    
    it('should call getItem method on localStorage once', () => {
        const spy = jest.spyOn(Storage.prototype, 'getItem')
        getValue('some key')
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
})
