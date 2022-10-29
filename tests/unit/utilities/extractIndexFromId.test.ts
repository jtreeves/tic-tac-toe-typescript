import extractIndexFromId from '../../../src/utilities/extractIndexFromId'

describe('extractIndexFromId utility', () => {
    it('should return numerical version of last character in string passed in for parameter', () => {
        const id: string = 'square-7'
        const result: any = extractIndexFromId(id)
        expect(typeof result).toBe('number')
        expect(result).toBe(Number(id.slice(-1)))
    })
    
    it('should return index indicated by string', () => {
        const id: string = 'square-5'
        const result: number = extractIndexFromId(id)
        expect(result).toBe(5)
    })
    
    it('should not return correct index if index is more than one digit long', () => {
        const id: string = 'square-28'
        const result: number = extractIndexFromId(id)
        expect(result).not.toBe(28)
    })
    
    it('should return 0 if parameter is empty string', () => {
        const id: string = ''
        const result: number = extractIndexFromId(id)
        expect(result).toBe(0)
    })
})
