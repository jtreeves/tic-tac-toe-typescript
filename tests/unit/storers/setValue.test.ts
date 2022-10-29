import setValue from '../../../src/storers/setValue'

describe('setValue storer', () => {
    it('should call setItem method on localStorage once', () => {
        const spy: jest.SpyInstance = jest.spyOn(Storage.prototype, 'setItem')
        setValue('some key', 'some value')
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call setItem method on localStorage with parameters matching main parameters', () => {
        const key: string = 'some key'
        const value: string = 'some value'
        const spy: jest.SpyInstance = jest.spyOn(Storage.prototype, 'setItem')
        setValue(key, value)
        expect(spy).toBeCalledWith(key, value)
        spy.mockRestore()
    })
})
