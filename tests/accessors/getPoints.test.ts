import getPoints from '../../src/accessors/getPoints'

describe('getPoints accessor', () => {
    const testKey: string = 'points'
    const testValue: string = '0,0,1,0,-1,0,1,0,-1'

    beforeEach(() => {
        localStorage.setItem(testKey, testValue)
    })

    it('should return an array of numbers', () => {
        const result: any = getPoints()
        expect(result instanceof Array).toBe(true)
        result.forEach((item: any) => {
            expect(typeof item).toBe('number')
        })
    })

    it('should return an array with an amount of elements equal to 1 more than the amount of commas in the initial string', () => {
        const commas: number = Number(testValue.match(/,/g)?.length)
        const result: any = getPoints()
        expect(result.length).toBe(commas + 1)
    })

    it('should return values matching numerical coercions of their corresponding string segments', () => {
        const subStrings: string[] = testValue.split(',')
        const result: any = getPoints()
        result.forEach((item: any, index: number) => {
            expect(item).toBe(Number(subStrings[index]))
        })
    })
})
