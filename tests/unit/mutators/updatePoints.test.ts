import * as getPointsModule from '../../../src/accessors/getPoints'
import * as setPointsModule from '../../../src/storers/setPoints'
import updatePoints from '../../../src/mutators/updatePoints'

describe('updatePoints mutator', () => {
    it('should call getPoints once', () => {
        const spy: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        updatePoints(2, 1)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call setPoints once', () => {
        const spy: jest.SpyInstance = jest.spyOn(setPointsModule, 'default')
        updatePoints(2, 1)
        expect(spy).toBeCalledTimes(1)
        spy.mockRestore()
    })
    
    it('should call setPoints with parameter equal to array returned from getPoints but with the value of the point at the index equal to the main function first parameter equal to the main function second parameter', () => {
        const index: number = 2
        const point: number = 1
        const initialArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        const modifiedArray: number[] = initialArray
        modifiedArray[index] = point
        const spyGet: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spyGet.mockReturnValue(initialArray)
        const spySet: jest.SpyInstance = jest.spyOn(setPointsModule, 'default')
        updatePoints(index, point)
        expect(spySet).toBeCalledWith(modifiedArray)
        spyGet.mockRestore()
        spySet.mockRestore()
    })
    
    it('should call setPoints with updated value even if original array returned by getPoints contained a non-zero value at that index', () => {
        const index: number = 2
        const point: number = -1
        const initialArray: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1]
        const modifiedArray: number[] = initialArray
        modifiedArray[index] = point
        const spyGet: jest.SpyInstance = jest.spyOn(getPointsModule, 'default')
        spyGet.mockReturnValue(initialArray)
        const spySet: jest.SpyInstance = jest.spyOn(setPointsModule, 'default')
        updatePoints(index, point)
        expect(spySet).toBeCalledWith(modifiedArray)
        spyGet.mockRestore()
        spySet.mockRestore()
    })
})
