import createCell from '../../src/generators/createCell'

describe('createCell generator', () => {
    const id: string = 'some-id'
    const result: any = createCell(id)

    it('should return an HTMLElement', () => {
        expect(result instanceof HTMLElement).toBe(true)
    })

    it('should return an element with an id equal to the id it receives as a parameter', () => {
        expect(result.id).toBe(id)
    })
})
